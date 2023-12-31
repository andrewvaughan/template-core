const crypto = require("crypto");

const ActionContext = require("../ActionContext");
const WorkflowAbstract = require("../WorkflowAbstract");

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
 * @class @extends WorkflowAbstract
 */
module.exports = class Issue extends WorkflowAbstract {

  /**
   * The GraphQL ID for this Issue.
   *
   * @public @readonly @type {String}
   */

  /**
   * The Labels on the Issue.
   *
   * The key of this Object is the Label name, with the value being the Label ID.
   *
   * @public @readonly @type {Object<String, String>}
   */
  labels;

  /**
   * The Issue number.
   *
   * @public @readonly @type {Number}
   */
  number;

  /**
   * The Owner name for the Repository.
   *
   * @public @readonly @type {String}
   */
  owner;

  /**
   * The Repository name containing the Issue.
   *
   * @public @readonly @type {String}
   */
  repository;

  /**
   * The Issue title.
   *
   * @public @readonly @type {String}
   */
  title;


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
   *
   * @returns {Proxy} of this object to allow for enhanced getters and setters
   *
   * @override @public @constructor
   */
  constructor(number, repository = undefined, owner = undefined) {

    super();

    this._debugCall("constructor", arguments);

    this.number = number;
    this.repository = repository ? repository : ActionContext.context.repo.repo;
    this.owner = owner ? owner : ActionContext.context.repo.owner;

    this._eCore.debug(`NEW Issue(number: ${this.number}, repository: ${this.repository}, owner: ${this.owner})`);

  }


  /**
   * Load the Issue from the GraphQL server.
   */
  async load() {

    const query = `
      query GetIssueByNumber($owner: String!, $repository: String!, $issueNumber: Int!) {
        repository(owner: $owner, name: $repository) {
          issue(number: $issueNumber) {
            id
            title
            labels (first: 20) {
              totalCount,
              nodes {
                id
                name
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

    this._eCore.debug(`Loading ${this.owner}/${this.repository} Issue #${this.number} from GitHub API...`);

    const self = this;

    return ActionContext.github.graphql(query, map).then(function handleGitHubAPIResponse(response) {

      self.id = response["repository"]["issue"]["id"];
      self._eCore.debug(`ID: ${self.id}`);

      self.title = response["repository"]["issue"]["title"];
      self._eCore.debug(`Title: ${self.title}`)

      self.labels = [];
      response["repository"]["issue"]["labels"]["nodes"].forEach(function addLabel(label) {
        self.labels[label["name"]] = label["id"];
      });

      self._eCore.debug("Labels:");
      self._eCore.debug(self.labels);

    });
  }


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
   * @returns {Object<string, *>>} - the full response from the GitHub REST API
   *
   * @public @async
   */
  async addError(message) {
    this._debugCall("addError", { message: "..." });

    this._eCore.verbose(message);

    return this.addComment(`## :rotating_light: Error\n\n${message}`);
  }

};
