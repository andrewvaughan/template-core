const GraphQLObject = require("./GraphQLObject");
const NotImplementedError = require("../Errors/NotImplementedError");

/**
 * ProjectItem (V2).
 *
 * @classdesc
 * Manages various actions on GitHub ProjectItems (V2) via GraphQL API.
 *
 * @see {@link https://docs.github.com/en/graphql/reference/objects#label}
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class @extends GraphQLObject
 */
module.exports = class ProjectItem extends GraphQLObject {
  /**
   * Create a ProjectItem.
   *
   * This doesn't load data from GitHub.
   *
   * @see Label.load()
   *
   * @param {String} id - the ProjectItem ID
   * @param {Object<String, *>} [data={}] - any additional fields to map to this object
   *
   * @returns {Label} this GraphQL object
   *
   * @override @public @constructor
   */
  constructor(id, data = {}) {
    super(data);

    this._debugCall("constructor", arguments);

    this.id = id;

    this._eCore.debug(`NEW ProjectItem(id: ${this.id})`);
  }

  /**
   * Load the Label from the GraphQL API server.
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
