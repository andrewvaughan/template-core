const GraphQLObject = require("./Abstract/GraphQLObject");
const NotImplementedError = require("../Errors/NotImplementedError");

/**
 * Label.
 *
 * @classdesc
 * Manages various actions on GitHub Labels via GraphQL API.
 *
 * @see {@link https://docs.github.com/en/graphql/reference/objects#label}
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class @extends GraphQLObject
 */
module.exports = class Label extends GraphQLObject {
  /**
   * Create a Label.
   *
   * This doesn't load data from GitHub.
   *
   * @see Label.load()
   *
   * @param {String} name - the Label name to load
   * @param {Object<String, *>} [data={}] - any additional fields to map to this object
   *
   * @returns {Label} this GraphQL object
   *
   * @override @public @constructor
   */
  constructor(name, data = {}) {
    super(data);

    this._debugCall("constructor", arguments);

    this.name = name;

    this._eCore.debug(`NEW Label(name: ${this.name})`);
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
