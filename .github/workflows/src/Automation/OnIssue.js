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

        // // Remove the "Help Wanted" Label from the Issue, if it exists
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

        // // Add a warning to the Issue if the "Needs Triage" Label still exists
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
                  [Triage](${Constants.URL.CONTRIBUTING}#issue-triage). Issued marked as needing triage can't undergo
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

      // // Add a warning to the Issue if the Issue has an invalid Project status
      // .then(function checkIssueProjectStatus() {
      //   eCore.startGroup("Checking Issue's Project status");

      //   // TODO

      //   eCore.endGroup();
      // })
    );
  }
};
