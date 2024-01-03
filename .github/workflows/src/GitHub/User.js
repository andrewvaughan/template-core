const GraphQLObject = require("./Abstract/GraphQLObject");
const NotImplementedError = require("../Errors/NotImplementedError");

/**
 * User.
 *
 * @classdesc
 * Manages various actions on GitHub Users via GraphQL API.
 *
 * @see {@link https://docs.github.com/en/graphql/reference/objects#user}
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class @extends GraphQLObject
 */
module.exports = class User extends GraphQLObject {
  /**
   * Create a User.
   *
   * This doesn't load data from GitHub.
   *
   * @see User.load()
   *
   * @param {String} login - the User login name
   * @param {Object<String, *>} [data={}] - any additional fields to map to this object
   *
   * @returns {User} this GraphQL object
   *
   * @override @public @constructor
   */
  constructor(login, data = {}) {
    super(data);

    this._debugCall("constructor", arguments);

    this.login = login;

    this._eCore.debug(`NEW User(login: ${this.login})`);
  }

  /**
   * Load the User from the GraphQL API server.
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
