const crypto = require("crypto");

const ActionContext = require("./Common/ActionContext");
const Commentable = require("./Abstract/Commentable");
const Label = require("./Label");
const ProjectItem = require("./ProjectItem");
const PullRequest = require("./PullRequest");
const User = require("./User");

/**
 * Issue.
 *
 * @classdesc
 * Manages various actions on GitHub Issues via GraphQL API.
 *
 * @see {@link https://docs.github.com/en/graphql/reference/objects#issue}
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class @extends GraphQLObject
 */
module.exports = class Issue extends Commentable {
  /**
   * Create an Issue.
   *
   * This doesn't load data from GitHub.
   *
   * @see Issue.load()
   *
   * @param {Number} number - the Issue number to load
   * @param {String} [repository=context.repo.repo] - the Repository the Issue is part of
   * @param {String} [owner=context.repo.owner] - the owner of the Repository
   * @param {Object<String, *>} [data={}] - any additional fields to map to this object
   *
   * @returns {Issue} this GraphQL object
   *
   * @override @public @constructor
   */
  constructor(number, repository = undefined, owner = undefined, data = {}) {
    super(data);

    this._debugCall("constructor", arguments);

    this.number = number;
    this.repository = repository ? repository : ActionContext.context.repo.repo;
    this.owner = owner ? owner : ActionContext.context.repo.owner;

    this._eCore.debug(`NEW Issue(number: ${this.number}, repository: ${this.repository}, owner: ${this.owner})`);
  }

  /**
   * Load the Issue from the GraphQL API server.
   *
   * @param {Boolean} [force=false] - whether to force a reload from GitHub, even with cached data
   *
   * @return {Promise} resolving when the data loads
   *
   * @public @async
   */
  async load(force = false) {
    this._debugCall("load", arguments);

    const query = `
      query GetIssueByNumber($owner: String!, $repository: String!, $issueNumber: Int!) {
        repository(owner: $owner, name: $repository) {
          issue(number: $issueNumber) {
            id
            title
            assignees (first: 10) {
              totalCount
              nodes {
                id
                login
                name
              }
            }
            labels (first: 20) {
              totalCount
              nodes {
                id
                name
              }
            }
            projectItems(first: 20) {
              totalCount
              nodes {
                id
                project {
                  id
                }
                status: fieldValueByName(name: "Status") {
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    name
                    field {
                      ... on ProjectV2SingleSelectField {
                        id
                        options {
                          id
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
            pullRequests: timelineItems(first: 250, itemTypes: REFERENCED_EVENT) {
              nodes {
                ... on ReferencedEvent {
                  commit {
                    associatedPullRequests(first: 20) {
                      totalCount
                      nodes {
                        id
                        number
                        closed
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`;

    const map = {
      owner: this.owner,
      repository: this.repository,
      issueNumber: this.number,
    };

    const self = this;

    return super.load(force, query, map).then(function handleGitHubAPIResponse(response) {
      // If the response came from cache, take no action
      if (response === false) {
        return;
      }

      self._eCore.verbose("Loading remote API data into Issue object...");

      const data = response["repository"]["issue"];

      self.id = data["id"];
      self._eCore.debug(`ID: ${self.id}`);

      self.title = data["title"];
      self._eCore.debug(`Title: ${self.title}`);

      self.assignees = [];
      data["assignees"]["nodes"].forEach(function buildAssignee(node) {
        self.assignees.push(
          new User(node["login"], {
            id: node["id"],
            name: node["name"],
          }),
        );
      });
      self._eCore.verbose("Assignees:");
      self._eCore.verbose(self.assignees);

      self.labels = [];
      data["labels"]["nodes"].forEach(function buildLabel(node) {
        self.labels.push(
          new Label(node["name"], {
            id: node["id"],
          }),
        );
      });
      self._eCore.verbose("Labels:");
      self._eCore.verbose(self.labels);

      self.projectItems = [];
      data["projectItems"]["nodes"].forEach(function buildProjectItem(node) {
        const commit = node["commit"]
        self.projectItems.push(
          new ProjectItem(node["id"], {
            projectID: node["project"]["id"],

            statusID: node["status"]["field"]["id"],
            statusOptions: node["status"]["field"]["options"],
            status: node["status"]["name"],
          }),
        );
      });
      self._eCore.verbose("Project Items:");
      self._eCore.verbose(self.projectItems);

      self.pullRequests = {
        open: [],
        closed: [],
      };
      data["pullRequests"]["nodes"].forEach(function processCommitReferences(commitNode) {

        // Parse each associated PR
        commitNode["commit"]["associatedPullRequests"]["nodes"].forEach(function processPullRequestReference(pr) {
          const key = pr["closed"] ? "closed" : "open";

          // If the PR already exists in the Issue, skip it
          for (let i = 0; i < self.pullRequests[key].length; i++) {
            if (self.pullRequests[key][i]["number"] == pr["number"]) {
              return;
            }
          }

          // Add the PR to the list
          self.pullRequests[key].push(
            new PullRequest(pr["number"], self.repository, self.owner, {
              id: pr["id"],
              closed: pr["closed"],
            })
          );
        });

      });
      self._eCore.verbose("Pull Requests:");
      self._eCore.verbose(self.pullRequests);
    });
  }

  // Labels ------------------------------------------------------------------------------------------------------------

  /**
   * Add a Label or Labels to the Issue.
   *
   * @param {String|String[]} labels - the name or names of the Labels to add
   *
   * @return {Promise} of the API call
   */
  async addLabels(labels) {
    this._debugCall("addLabels", arguments);

    if (!Array.isArray(labels)) {
      labels = [labels];
    }

    const self = this;

    this._eCore.debug("Looking up Label IDs from GitHub GraphQL API...");

    return ActionContext.github
      .graphql(
        `query GetRepositoryLabels($owner: String!, $repository: String!, $labelQuery: String!) {
        repository(owner: $owner, name: $repository) {
          labels(query: $labelQuery, first: 50) {
            totalCount
            nodes {
              id
              name
            }
          }
        }
      }`,
        {
          owner: self.owner,
          repository: self.repository,
          labelQuery: labels.join(" "),
        },
      )

      .then(function addLabelsToIssue(lookup) {
        self._eCore.verbose("Label lookup response:");
        self._eCore.verbose(lookup);

        let labelIDs = [];

        lookup["repository"]["labels"]["nodes"].forEach(function addLabelID(label) {
          if (labels.includes(label["name"])) {
            self._eCore.verbose(`Label '${label["name"]}' found in labels to add.`);
            labelIDs.push(label["id"]);
          } else {
            self._eCore.verbose(`Label '${label["name"]}' NOT found in labels to add.`);
          }
        });

        if (labelIDs.length != labels.length) {
          self._eCore.debug("Label ID array mismatch:");

          self._eCore.debug("Expected:");
          self._eCore.debug(labels);

          self._eCore.debug("Response:");
          self._eCore.debug(lookup["repository"]["labels"]["nodes"]);

          self._eCore.debug("Processed:");
          self._eCore.debug(labelIDs);

          throw new Error("Expected Label IDs not returned from GitHub API.");
        }

        self._eCore.debug(`Calling GitHub GraphQL API to add Labels to Issue #${self.number}...`);
        self._eCore.verbose(`Label IDs: ${labelIDs.join(", ")}`);

        return ActionContext.github.graphql(
          `mutation AddLabelsToIssue($clientID: String!, $labelIDs: [ID!]!, $issueID: ID!) {
          addLabelsToLabelable(input: {
            clientMutationId: $clientID,
            labelIds: $labelIDs,
            labelableId: $issueID
          }) {
            clientMutationId
          }
        }`,
          {
            clientID: crypto.randomUUID(),
            labelIDs: labelIDs,
            issueID: self.id,
          },
        );
      });
  }

  /**
   * Remove a Label or Labels from the Issue.
   *
   * @param {String|String[]} labels - the name or names of the Labels to remove
   *
   * @return {Promise} of the API call
   */
  async removeLabels(labels) {
    this._debugCall("removeLabels", arguments);

    if (!Array.isArray(labels)) {
      labels = [labels];
    }

    const self = this;
    let labelIDs = [];

    labels.forEach(function addLabelID(label) {
      labelIDs.push(self.labels[label]);
    });

    this._eCore.debug(`Calling GitHub GraphQL API to remove Labels from Issue #${this.number}...`);
    this._eCore.verbose(`Label IDs: ${labelIDs.join(", ")}`);

    return ActionContext.github.graphql(
      `mutation RemoveLabelsFromIssue($clientID: String!, $labelIDs: [ID!]!, $issueID: ID!) {
        removeLabelsFromLabelable(input: {
          clientMutationId: $clientID,
          labelIds: $labelIDs,
          labelableId: $issueID
        }) {
          clientMutationId
        }
      }`,
      {
        clientID: crypto.randomUUID(),
        labelIDs: labelIDs,
        issueID: this.id,
      },
    );
  }

};
