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
  static REPO_BASE_URL =
    ActionContext.context.serverUrl + "/" +
    ActionContext.context.repo.owner + "/" +
    ActionContext.context.repo.repo;

  static URL = {
    CONTRIBUTING: `${Constants.REPO_BASE_URL}/blob/main/.github/CONTRIBUTING.md`,
  };
};
