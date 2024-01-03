/**
 * ActionContext.
 *
 * @classdesc
 * This provides `static` access to all GitHub Script objects exposed as part of the GitHub Action package.
 *
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class
 */
module.exports = class ActionContext {
  /**
   * An object containing the context of the workflow run.
   *
   * @see {@link https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts}
   *
   * @type {context}
   *
   * @public
   * @readonly
   * @static
   */
  static context;

  /**
   * A reference to the `@actions/core` package.
   *
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/core}
   *
   * @type {core}
   *
   * @public
   * @readonly
   * @static
   */
  static core;

  /**
   * A reference to the `@actions/exec` package.
   *
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/exec}
   *
   * @type {exec}
   *
   * @public
   * @readonly
   * @static
   */
  static exec;

  /**
   * A reference to the `node-fetch` package.
   *
   * @see {@link https://github.com/node-fetch/node-fetch}
   *
   * @type {fetch}
   *
   * @public
   * @readonly
   * @static
   */
  static fetch;

  /**
   * A pre-authenticated `octokit/rest.js` client with pagination plugins.
   *
   * @see {@link https://octokit.github.io/rest.js}
   *
   * @type {getOctokit}
   *
   * @public
   * @readonly
   * @static
   */
  static github;

  /**
   * A reference to the `@actions/glob` package.
   *
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/glob}
   *
   * @type {glob}
   *
   * @public
   * @readonly
   * @static
   */
  static glob;

  /**
   * A reference to the `@actions/io` package.
   *
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/io}
   *
   * @type {io}
   *
   * @public
   * @readonly
   * @static
   */
  static io;

  /**
   * Makes available all contexts provided by the `actions/github-script` action for use by other objects.
   *
   * @param {getOctokit} github - a pre-authenticated octokit/rest.js client with pagination plugins
   * @see {@link https://octokit.github.io/rest.js}
   *
   * @param {context} context - an object containing the context of the workflow run
   * @see {@link https://github.com/actions/toolkit/blob/main/packages/github/src/context.ts}
   *
   * @param {core} core - a reference to the @actions/core package
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/core}
   *
   * @param {glob} glob - a reference to the @actions/glob package
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/glob}
   *
   * @param {io} io - a reference to the @actions/io package
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/io}
   *
   * @param {exec} exec - a reference to the @actions/exec package
   * @see {@link https://github.com/actions/toolkit/tree/main/packages/exec}
   *
   * @param {fetch} fetch - a reference to the node-fetch package
   * @see {@link https://github.com/node-fetch/node-fetch}
   *
   * @public
   * @static
   */
  static init(github, context, core, glob, io, exec, fetch) {
    ActionContext.github = github;
    ActionContext.context = context;
    ActionContext.core = core;
    ActionContext.glob = glob;
    ActionContext.io = io;
    ActionContext.exec = exec;
    ActionContext.fetch = fetch;
  }
};
