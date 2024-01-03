const Commentable = require("./Abstract/Commentable");
const NotImplementedError = require("../Errors/NotImplementedError");

/**
 * PullRequest.
 *
 * @classdesc
 * Manages various actions on GitHub PullRequests via GraphQL API.
 *
 * @see {@link https://docs.github.com/en/graphql/reference/objects#pullrequest}
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class @extends GraphQLObject
 */
module.exports = class PullRequest extends Commentable {
  /**
   * Create a PullRequest.
   *
   * This doesn't load data from GitHub.
   *
   * @see PullRequest.load()
   *
   * @param {String} number - the PullRequest number in the Repository
   * @param {String} [repository=context.repo.repo] - the Repository the Issue is part of
   * @param {String} [owner=context.repo.owner] - the owner of the Repository
   * @param {Object<String, *>} [data={}] - any additional fields to map to this object
   *
   * @returns {User} this GraphQL object
   *
   * @override @public @constructor
   */
  constructor(number, repository = undefined, owner = undefined, data = {}) {
    super(data);

    this._debugCall("constructor", arguments);

    this.number = number;
    this.repository = repository ? repository : ActionContext.context.repo.repo;
    this.owner = owner ? owner : ActionContext.context.repo.owner;

    this._eCore.debug(`NEW PullRequest(number: ${this.number}, repository: ${this.repository}, owner: ${this.owner})`);
  }

  /**
   * Load the PullRequest from the GraphQL API server.
   *
   * @param {Boolean} [force=false] - whether to force a reload from GitHub, even with cached data
   *
   * @return {Promise} resolving when the data loads
   *
   * @public @async
   */
  async load(force = false) {
    this._debugCall("load", arguments);

    throw new NotImplementedError();
  }
};
