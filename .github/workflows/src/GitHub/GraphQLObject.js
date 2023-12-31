const ActionContext = require("../ActionContext");
const WorkflowAbstract = require("../WorkflowAbstract");

/**
 * GraphQLObject.
 *
 * @classdesc
 * Provides common utility methods for interacting with the GitHub GraphQL API.
 *
 * @see {@link https://docs.github.com/en/graphql/reference}
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class @extends WorkflowAbstract
 */
module.exports = class GraphQLObject extends WorkflowAbstract {
  /**
   * Whether the data in this GraphQL object has been loaded from the GitHub API.
   *
   * @protected @readonly @type {Boolean}
   */
  _isCached = false;

  /**
   * Create a GraphQL object.
   *
   * @param {Object<String, *>} [data={}] - data to map on to this GraphQL object
   *
   * @override @public @constructor
   */
  constructor(data = {}) {
    super();

    this._eCore.verbose("Mapping initialization data onto GraphQL object:");
    this._eCore.verbose(data);

    const self = this;

    Object.keys(data).forEach(function mapInitializationData(key) {
      self[key] = data[key];
    });
  }

  /**
   * Load the Object from the GraphQL API server.
   *
   * @param {Boolean} [force=false] - whether to force a reload from GitHub, even with cached data
   *
   * @return {Boolean|Object<String, *>} `false` if cached data found or else the response from the GitHub API server
   *
   * @public @async
   */
  async load(force = false, query = "", map = {}) {
    if (this._isCached && !force) {
      this._eCore.debug("Object data is cached; skipping GraphQL API load.");
      return false;
    }

    this._eCore.debug(`Loading from GitHub GraphQL API...`);

    const self = this;

    return ActionContext.github.graphql(query, map).then(function debugGitHubAPIResponse(response) {
      self._eCore.verbose("Raw GitHub API Response:");
      self._eCore.verbose(response);

      if (response !== false) {
        self._isCached = true;
      }

      return response;
    });
  }
};
