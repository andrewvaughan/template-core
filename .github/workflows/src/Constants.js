const ActionContext = require("./ActionContext");

/**
 * Constants.
 *
 * @classdesc
 * Provides constant data used in various parts of the automation pipeline.
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class
 */
module.exports = class Constants {
  /**
   * The Base URL for this Repository when adding links.
   *
   * @public @static @readonly @type {String}
   */
  static REPO_BASE_URL =
    ActionContext.context.serverUrl + "/" + ActionContext.context.repo.owner + "/" + ActionContext.context.repo.repo;

  /**
   * The team or User to add when Project Maintainers have steps to complete.
   *
   * @public @static @readonly @type {String}
   */
  static MAINTAINER_USER = "andrewvaughan";

  /**
   * Various URLs used as references.
   *
   * @public @static @readonly @type {Object<String, String>}
   */
  static URL = {
    CONTRIBUTING: `${Constants.REPO_BASE_URL}/blob/main/.github/CONTRIBUTING.md`,
    SDLC: `${Constants.REPO_BASE_URL}/blob/main/.github/CONTRIBUTING.md#software-development-lifecycle`,
    TRIAGE: `${Constants.REPO_BASE_URL}/blob/main/.github/CONTRIBUTING.md#issue-triage`,
  };
};
