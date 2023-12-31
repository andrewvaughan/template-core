const GraphQLObject = require("./GraphQLObject");

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
   * The GraphQL ID for this Label.
   *
   * @public @readonly @type {String}
   */
  id;

  /**
   * The name for the Label.
   *
   * @public @readonly @type {String}
   */
  name;

  /**
   * Create a Label.
   *
   * This doesn't load data from GitHub.
   *
   * @see Label.load()
   *
   * @param {Number} name - the Label name to load
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

    const query = `
      query GetIssueByNumber($owner: String!, $repository: String!, $issueNumber: Int!) {
        repository(owner: $owner, name: $repository) {
          issue(number: $issueNumber) {
            id
            title
            labels (first: 20) {
              totalCount
              nodes {
                id
                name
              }
            }
            projectItems(first: 20) {
              totalCount
              nodes {
                id
                status: fieldValueByName(name: "Status") {
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    name
                  }
                }
              }
            }
          }
        }
      }`;

    const map = {
      owner: this.owner,
      repository: this.repository,
      issueNumber: this.number,
    };

    const self = this;

    return super.load(force, query, map).then(function handleGitHubAPIResponse(response) {
      // If the response came from cache, take no action
      if (response === false) {
        return;
      }

      self._eCore.verbose("Loading remote API data into Issue object...");

      const data = response["repository"]["issue"];

      self.id = data["id"];
      self._eCore.debug(`ID: ${self.id}`);

      self.title = data["title"];
      self._eCore.debug(`Title: ${self.title}`);

      self.labels = [];
      data["labels"]["nodes"].forEach(function buildLabel(node) {
        self.labels.push(
          new Label(node["name"], {
            id: node["id"],
          }),
        );
      });
      self._eCore.debug(`Labels:`);
      self._eCore.debug(self.labels);

      // this.projectItems = [];
      // data["projectItems"]["nodes"].forEach(function buildProjectItem(node) {
      //   this.projectItems.push(new ProjectItem(node["id"], {

      //   }));
      // });
    });
  }
};
