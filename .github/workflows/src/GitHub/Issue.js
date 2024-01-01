const crypto = require("crypto");

const ActionContext = require("../ActionContext");
const GraphQLObject = require("./GraphQLObject");
const Label = require("./Label");
const ProjectItem = require("./ProjectItem");

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
module.exports = class Issue extends GraphQLObject {
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

      self.labels = [];
      data["labels"]["nodes"].forEach(function buildLabel(node) {
        self.labels.push(
          new Label(node["name"], {
            id: node["id"],
          }),
        );
      });
      self._eCore.verbose(`Labels:`);
      self._eCore.verbose(self.labels);

      self.projectItems = [];
      data["projectItems"]["nodes"].forEach(function buildProjectItem(node) {
        self.projectItems.push(
          new ProjectItem(node["id"], {
            projectID: node["project"]["id"],

            statusID: node["status"]["field"]["id"],
            statusOptions: node["status"]["field"]["options"],
            status: node["status"]["name"],
          }),
        );
      });
    });
  }

  // Labels ------------------------------------------------------------------------------------------------------------

  /**
   * Remove a Label from the Issue.
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

  // Comments ----------------------------------------------------------------------------------------------------------

  /**
   * Adds a comment to the Issue.
   *
   * @param {String} comment - the message to include in the comment
   *
   * @returns {Object<String, *>} - the full response from the GitHub REST API
   *
   * @public @async
   */
  async addComment(comment) {
    this._debugCall("addComment", { comment: "..." });

    this._eCore.verbose(comment);

    return ActionContext.github.graphql(
      `mutation AddCommentToIssue($clientID: String!, $issueID: ID!, $comment: String!) {
        addComment(input: {
          clientMutationId: $clientID,
          subjectId: $issueID,
          body: $comment
        }) {
          clientMutationId
        }
      }`,
      {
        clientID: crypto.randomUUID(),
        issueID: this.id,
        comment: comment,
      },
    );
  }

  /**
   * Adds a notice-formatted comment to the Issue.
   *
   * @param {String} message - the message to include in the comment
   *
   * @returns {Object<String, *>} - the full response from the GitHub REST API
   *
   * @public @async
   */
  async addNotice(message) {
    this._debugCall("addNotice", { message: "..." });

    this._eCore.verbose(message);

    return this.addComment(`## :thought_balloon: Notice\n\n${message}`);
  }

  /**
   * Adds a warning-formatted comment to the Issue.
   *
   * @param {string} message - the message to include in the comment
   *
   * @returns {Object<string, *>} - the full response from the GitHub REST API
   *
   * @public @async
   */
  async addWarning(message) {
    this._debugCall("addWarning", { message: "..." });

    this._eCore.verbose(message);

    return this.addComment(`## :warning: Warning\n\n${message}`);
  }

  /**
   * Adds an error-formatted comment to the Issue.
   *
   * @param {string} message - the message to include in the comment
   *
   * @returns {Object<string, *>} - the full response from the GitHub REST API
   *
   * @public @async
   */
  async addError(message) {
    this._debugCall("addError", { message: "..." });

    this._eCore.verbose(message);

    return this.addComment(`## :rotating_light: Error\n\n${message}`);
  }
};
