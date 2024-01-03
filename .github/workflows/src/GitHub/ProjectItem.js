const crypto = require("crypto");

const GraphQLObject = require("./Abstract/GraphQLObject");
const NotImplementedError = require("../Errors/NotImplementedError");
const ActionContext = require("./Common/ActionContext");

/**
 * ProjectItem V2.
 *
 * @classdesc
 * Manages various actions on GitHub ProjectItems V2 via GraphQL API.
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

    this._debugCall("constructor", { id, data: "..." });

    this.id = id;

    this._eCore.debug(`NEW ProjectItem(id: ${this.id})`);
  }

  /**
   * Load the ProjectItem from the GraphQL API server.
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

  // Fields ------------------------------------------------------------------------------------------------------------

  /**
   * Set the status field of a Project Item.
   *
   * @param {String} status - the name of the status to set
   *
   * @return {Promise} resolving when the status call completes
   */
  async setStatus(status) {
    this._debugCall("setStatus", arguments);

    this._eCore.debug(`Calling GitHub GraphQL API to set Project Item status to '${status}'...`);

    // Lookup the new status in the options
    let optionID = null;

    for (let i = 0; i < this.statusOptions.length; i++) {
      if (this.statusOptions[i].name == status) {
        optionID = this.statusOptions[i].id;
        break;
      }
    }

    if (!optionID) {
      throw new Error(`Invalid Project Item status: ${status}`);
    }

    return ActionContext.github.graphql(
      `mutation SetProjectItemStatus(
        $clientID: String!,
        $fieldID: ID!,
        $itemID: ID!,
        $projectID: ID!,
        $optionID: String!
      ) {
        updateProjectV2ItemFieldValue(input: {
            clientMutationId: $clientID,
            fieldId: $fieldID,
            itemId: $itemID,
            projectId: $projectID,
            value: {
              singleSelectOptionId: $optionID
            }
          }) {
            clientMutationId
          }
        }`,
      {
        clientID: crypto.randomUUID(),
        projectID: this.projectID,
        itemID: this.id,
        fieldID: this.statusID,
        optionID: optionID,
      },
    );
  }
};
