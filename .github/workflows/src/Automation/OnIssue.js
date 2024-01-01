const ActionContext = require("../ActionContext");
const Constants = require("../Constants");
const EnhancedCore = require("../EnhancedCore");
const Issue = require("../GitHub/Issue");
const WorkflowAbstract = require("../WorkflowAbstract");

/**
 * OnIssues.
 *
 * @classdesc
 * Action ran when GitHub triggers the `issues` event.
 *
 * @see {@link https://github.com/actions/github-script}
 *
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 * @license MIT
 *
 * @class @extends WorkflowAbstract
 */
module.exports = class OnIssue extends WorkflowAbstract {
  /**
   * Handles the user assigned event for Issues.
   *
   * This is a non-blocking, asynchronous call. Tasks within the handler may happen in-parallel, unless explicitly
   * requiring information from a prior step.
   *
   * @returns {Promise} that resolves when
   *
   * @public @static @async
   */
  static async handleUserAssigned() {
    const eCore = new EnhancedCore("OnIssue.handleUserAssigned");

    const owner = ActionContext.context.repo.owner;
    const repository = ActionContext.context.repo.repo;
    const issueNumber = ActionContext.context.issue.number;

    const issue = new Issue(issueNumber, repository, owner);

    return (
      issue
        .load()

        // Remove the "Help Wanted" Label from the Issue, if it exists
        .then(function removeHelpWantedLabel() {
          eCore.startGroup("Removing Help Wanted Label");

          for (var i = 0; i < issue.labels.length; i++) {
            if (issue.labels[i].name == "Help Wanted") {
              eCore.info("Removing existing 'Help Wanted' Label...");

              return issue.removeLabels("Help Wanted");
            }
          }

          eCore.info("Label 'Help Wanted' doesn't exist on Issue; continuing.");
        })

        .then(() => {
          eCore.endGroup();
        })

        // Add a warning to the Issue if the "Needs Triage" Label still exists
        .then(function checkNeedsTriageLabel() {
          eCore.startGroup("Checking for Needs Triage Label");

          for (var i = 0; i < issue.labels.length; i++) {
            if (issue.labels[i].name == "Needs Triage") {
              eCore.info("Issue has `Needs Triage` Label - adding warning.");

              eCore.warning(
                eCore.shrinkWhitespace(
                  `Assigning non-triaged issues can be indicative of not following the defined Software Development
                  Lifecycle. This runner is adding a warning to the Issue to explain the risk.`,
                ),

                `Label 'Needs Triage' found on ${owner}/${repository} Issue #${issueNumber} during user assignment`,
              );

              return issue.addWarning(
                eCore.shrinkWhitespace(
                  `A Contributor assignment was just made, however, this Issue is still marked as being in
                  [Triage](${Constants.URL.CONTRIBUTING}#issue-triage). Issues marked as needing triage can't undergo
                  approval. There is no responsibility for Project Maintainers to accept any work performed on
                  non-triaged issues.

                  A Project Maintainer needs to triage this issue or inform the Contributor on whether to halt progress.

                  - [ ] @andrewvaughan to resolve the triage for this Issue`,
                ),
              );
            }
          }

          eCore.info("Label 'Needs Triage' doesn't exist on Issue, as expected; continuing.");
        })

        .then(() => {
          eCore.endGroup();
        })

        // Add a warning to the Issue if the Issue has an invalid Project status
        .then(function checkIssueProjectStatus() {
          eCore.startGroup("Checking Issue's Project status");

          if (issue.projectItems.length <= 0) {
            eCore.info("No Project is associated with Issue - adding warning.");

            eCore.warning(
              eCore.shrinkWhitespace(
                `This Issue was not found to be referenced by any Project, which is against the Software Development
              Lifecycle for this Repository. This runner is adding a warning to the Issue to explain the risk.`,
              ),

              `No Project association found for Issue`,
            );

            return issue.addWarning(
              eCore.shrinkWhitespace(
                `This Issue isn't part of an ongoing Project, but a Project Maintainer has assigned it to a Contributor.
              This goes against the Software Development Lifecycle and Contributing Guidelines. A Project Maintainer
              needs to add this Issue to the appropriate Project and give it the appropriate status.

              - [ ] @andrewvaughan to resolve missing Project`,
              ),
            );
          }

          if (issue.projectItems.length > 1) {
            eCore.info("Multiple Project items associated with Issue - adding warning.");

            eCore.warning(
              eCore.shrinkWhitespace(
                `This Issue was not found to be referenced by multiple Project items, which is against the Software
              Development Lifecycle for this Repository. This runner is adding a warning to the Issue to explain the
              risk.`,
              ),

              `Multiple Project associations found for Issue`,
            );

            return issue.addWarning(
              eCore.shrinkWhitespace(
                `This Issue is associated with multiple Project items when it was assigned to a Contributor. This goes
              against the Software Development Lifecycle and Contributing Guidelines. A Project Maintainer needs to
              resolve this Issue with the appropriate Project and give it the appropriate status.

              - [ ] @andrewvaughan to resolve duplicate Project assignments`,
              ),
            );
          }

          const status = issue.projectItems[0].status;

          const invalidStates = ["Done", "Parking Lot"];

          if (!status || invalidStates.includes(status)) {
            eCore.info("Invalid Project status associated with Issue - adding warning.");

            eCore.warning(
              eCore.shrinkWhitespace(
                `This Issue is associated with a Project item in an invalid state for Contributor assignment.
              Specifically, the '${status}' state. This goes against the Software Development Lifecycle for this
              Repository. This runner is adding a warning to the Issue to explain the risk.`,
              ),

              `Invalid Project status associated with Issue`,
            );

            return issue.addWarning(
              eCore.shrinkWhitespace(
                `This Issue was associated with a Project item in the status '${status}' during Contributor assignment,
              which goes against the Software Development Lifecycle and Contributing Guidelines. A Project Maintainer
              needs to resolve this Issue with the appropriate Project and give it the appropriate status.

              - [ ] @andrewvaughan to resolve invalid Project status`,
              ),
            );
          }

          eCore.info("Project status for Issue is as-expected; continuing.");
        })

        .then(() => {
          eCore.endGroup();
        })

        // Advance the Issue to "In Progress" if in the "Approved for Development" state
        .then(function advanceIssueProjectStatus() {
          eCore.startGroup("Advancing Issue Project status");

          if (issue.projectItems.length == 1) {
            const status = issue.projectItems[0].status;

            if (status == "Approved for Development") {
              eCore.info(
                eCore.shrinkWhitespace(
                  `Advancing linked Project Item status advanced from 'Approved for Development' to 'In Progress' due to
                  user assignment...`,
                ),
              );

              return issue.projectItems[0].setStatus("In Progress");
            } else {
              eCore.info(`Didn't advance Project status as linked Project Item is in the '${status}' state.`);
            }
          } else {
            eCore.info("Couldn't advance Project status due to missing 1-to-1 Project Item - adding warning.");

            eCore.warning(
              eCore.shrinkWhitespace(
                `This Issue is not attached to a single Project Item, so no advancement in the Software Development
                Lifecycle was performed. A Project Maintainer needs to rectify the Project Status for this Issue.`,
              ),

              `Couldn't advance Software Development Lifecycle`,
            );
          }
        })

        .then(() => {
          eCore.endGroup();
        })
    );
  }
};
