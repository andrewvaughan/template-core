/**
 * Provides utilities for accessing and modifying GitHub V2 Projects.
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

const AbstractManager = require("./AbstractManager");

/**
 * ProjectManager.
 *
 * @extends AbstractManager
 *
 * @classdesc
 * Provides various utilities to access and modify GitHub V2 Projects. This requires an API key to be used with the
 * `projects` scope enabled.
 *
 * @see {@link https://github.com/actions/github-script}
 * @see {@link https://github.com/actions/github-script?tab=readme-ov-file#using-a-separate-github-token}
 *
 * @class
 */
module.exports = class ProjectManager extends AbstractManager {

  /**
   * The GitHub ID for the Project.
   *
   * @type string
   * @protected
   */
  _id;

  _owner;

  _repo;

  _title;

  _number;

  _url;

  /**
   * @inheritdoc
   *
   * Loads the Project attached to the Repository provided. If the Repository has multiple Projects associated with it,
   * the `project` argument must be provided to avoid an error.
   *
   * @param {string} owner - the owner of the Repository with the attached Project (default: `github.repo.owner`)
   * @param {string} repo - the name of the Repository with the attached Project (default: `github.repo.repo`)
   * @param {string} project - the name of the Project to search for within the Repository (default: empty)
   *
   * @throws ReferenceError if a Project doesn't exist or more than one Project is returned
   */
  constructor(github, context, core, glob, io, exec, fetch, owner = null, repo = null, project = null) {

    super(github, context, core, glob, io, exec, fetch);

    if (owner === null) {
      owner = this._github.repo.owner;
    }

    if (repo === null) {
      repo = this._github.repo.repo;
    }

    this._owner = owner;
    this._repo = repo;

    console.debug("");

    // Load basic information on the Project to ensure it exists
    const lookup = this._github.graphql(
      `query ($owner:String!, $repo:String!, $query:String!) {
        repository(owner: $owner, name: $repo, followRenames: true) {
          projectsV2(first: 2, query: $query) {
            nodes {
              id
              title
              number
              url
            }
          }
        }
      }`,
      {
        owner: this._owner,
        repo: this._repo,
        query: (project === null ? "" : project),
      }
    )

    if (!lookup["data"]["repository"]) {
      throw new ReferenceError(`No GitHub Projects found under Repository '${this._owner}.${this._repo}'.`);
    }

    const projects = lookup["data"]["repository"]["projectsV2"]["nodes"];

    if (projects.length != 1) {
      throw new ReferenceError(
        `Expected one (1) GitHub Project for Repository '${this._owner}.${this._repo}'; discovered ${projects.length}`
      );
    }

    this._id = projects[0]["id"];
    this._number = projects[0]["number"];
    this._title = projects[0]["title"];
    this._url = projects[0]["url"];
  }

}
