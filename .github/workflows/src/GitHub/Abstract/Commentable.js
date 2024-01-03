const crypto = require("crypto");

const ActionContext = require("../Common/ActionContext");
const GraphQLObject = require("./GraphQLObject");

/**
 * Commentable.
 *
 * @classdesc
 * Adds Commenting capabilities to an object that supports comments.
 *
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @abstract @class @extends GraphQLObject
 */
module.exports = class Commentable extends GraphQLObject {

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
      `mutation AddComment($clientID: String!, $nodeID: ID!, $comment: String!) {
        addComment(input: {
          clientMutationId: $clientID,
          subjectId: $nodeID,
          body: $comment
        }) {
          clientMutationId
        }
      }`,
      {
        clientID: crypto.randomUUID(),
        nodeID: this.id,
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
