/**
 * Defines the AbstractManager abstract class.
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 */

/**
 * The GitHub Action Scripts workflow provides a modified `require` function that helps find files relatively when
 * running in a GitHub Runner. This isn't passed to included files, so it's important for any scripts calling this class
 * to add the following before requiring this file:
 *
 * ```js
 * global.ghScriptRequire = require;
 * ```
 *
 * Without this, the environment uses the normal `require` which is beneficial for use cases like testing.
 */
if (global.ghScriptRequire !== undefined) {
  require = global.ghScriptRequire;
}

/**
 * AbstractManager.
 *
 * @classdesc
 * This is an abstract class that provides common configurations and capabilities for managers within the GitHub
 * Actions Scripts action.
 *
 * @see {@link https://github.com/actions/github-script}
 *
 * @abstract
 * @class
 */
module.exports = class AbstractManager {
  /**
   * An object containing the context of the workflow run.
   *
   * @see {@link https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts}
   *
   * @type Context
   * @readonly
   * @protected
   */
  _context;

  /**
   * A reference to the @actions/core package.
   *
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/core}
   *
   * @type core
   * @readonly
   * @protected
   */
  _core;

  /**
   * A reference to the @actions/exec package.
   *
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/exec}
   *
   * @type exec
   * @readonly
   * @protected
   */
  _exec;

  /**
   * A reference to the node-fetch package.
   *
   * @see {@link https://github.com/node-fetch/node-fetch}
   *
   * @type fetch
   * @readonly
   * @protected
   */
  _fetch;

  /**
   * A pre-authenticated octokit/rest.js client with pagination plugins.
   *
   * @see {@link https://octokit.github.io/rest.js}
   *
   * @type Octokit
   * @readonly
   * @protected
   */
  _github;

  /**
   * A reference to the @actions/glob package.
   *
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/glob}
   *
   * @type glob
   * @readonly
   * @protected
   */
  _glob;

  /**
   * A reference to the @actions/io package.
   *
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/io}
   *
   * @type io
   * @readonly
   * @protected
   */
  _io;

  /**
   * The logger helper to help with GitHub workflow commands.
   *
   * @type Logger
   * @protected
   */
  _logger;

  /**
   * Makes available all contexts provided by the `actions/github-script` action for use by the class.
   *
   * @param {octokit/rest.js} github - a pre-authenticated octokit/rest.js client with pagination plugins
   * @see {@link https://octokit.github.io/rest.js}
   *
   * @param {context} context - an object containing the context of the workflow run
   * @see {@link https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts}
   *
   * @param {@actions/core} core - a reference to the @actions/core package
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/core}
   *
   * @param {@actions/glob} glob - a reference to the @actions/glob package
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/glob}
   *
   * @param {@actions/io} io - a reference to the @actions/io package
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/io}
   *
   * @param {@actions/exec} exec - a reference to the @actions/exec package
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/exec}
   *
   * @param {node-fetch} fetch - a reference to the node-fetch package
   * @see {@link https://github.com/node-fetch/node-fetch}
   *
   * @public
   * @constructor
   */
  constructor(github, context, core, glob, io, exec, fetch) {
    this._github = github;
    this._context = context;
    this._core = core;
    this._glob = glob;
    this._io = io;
    this._exec = exec;
    this._fetch = fetch;

    this._logger = require("../Logger");
  }
};
