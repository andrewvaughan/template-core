const ActionContext = require("../GitHub/Common/ActionContext");
const Constants = require("../Constants");
const EnhancedCore = require("../GitHub/Common/EnhancedCore");
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
   * Handle when an Issue Milestone assignment occurs.
   *
   * @returns {Promise} that resolves when actions complete
   *
   * @public @static @async
   */
  static async handleMilestoneAssigned() {
    const eCore = new EnhancedCore("OnIssue.handleMilestoneAssigned");

    const owner = ActionContext.context.repo.owner;
    const repository = ActionContext.context.repo.repo;
    const issueNumber = ActionContext.context.issue.number;

    const issue = new Issue(issueNumber, repository, owner);

    return (
      issue
        .load()

        // Remove the `Needs Release Assignment` Label
        .then(function removeNeedsReleaseAssignmentLabel() {
          eCore.startGroup("Removing Needs Release Assignment Label");

          eCore.info("Removing 'Needs Release Assignment' Label (if it exists)...");

          return issue.removeLabels("Needs Release Assignment");
        })

        .then(() => {
          eCore.endGroup();
        })

        // Add a warning if in the `No Status`, `Parking Lot`, or empty Project status
        .then(function addWarningIfInvalidStatus() {
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
                `This Issue isn't part of an ongoing Project, but was assigned to a Milestone.

                This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                needs to resolve this Issue with the appropriate Project and give it the appropriate status.

                - [ ] @${Constants.MAINTAINER_USER} to resolve the missing Project`,
              ),
            );
          }

          if (issue.projectItems.length > 1) {
            eCore.info("Multiple Project items associated with Issue - adding warning.");

            eCore.warning(
              eCore.shrinkWhitespace(
                `This Issue was found to be referenced by multiple Project items, which is against the Software
              Development Lifecycle for this Repository. This runner is adding a warning to the Issue to explain the
              risk.`,
              ),

              `Multiple Project associations found for Issue`,
            );

            return issue.addWarning(
              eCore.shrinkWhitespace(
                `This Issue is associated with multiple Project items when it was assigned to a Milestone.

                This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                needs to resolve this Issue with the appropriate Project and give it the appropriate status.

                - [ ] @${Constants.MAINTAINER_USER} to resolve duplicate Project items for Issue`,
              ),
            );
          }

          const status = issue.projectItems[0].status;

          const invalidStates = ["Pending Deployment", "User Acceptance Testing", "Done"];

          if (!status || invalidStates.includes(status)) {
            eCore.info("Invalid Project status associated with Issue - adding warning.");

            eCore.warning(
              eCore.shrinkWhitespace(
                `This Issue is associated with a Project item in an invalid state for Milestone assignment.
              Specifically, the \`${status}\` state. This goes against the Software Development Lifecycle for this
              Repository. This runner is adding a warning to the Issue to explain the risk.`,
              ),

              `Invalid Project status associated with Issue`,
            );

            return issue.addWarning(
              eCore.shrinkWhitespace(
                `This Issue was associated with a Project item in the status \`${status}\` during Milestone assignment.

                This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                needs to resolve this Issue with the appropriate Project and give it the appropriate status.

                - [ ] @${Constants.MAINTAINER_USER} to resolve invalid Project status`,
              ),
            );
          }

          eCore.info("Project status for Issue is as-expected; continuing.");
        })

        .then(() => {
          eCore.endGroup();
        })
    );
  }

  /**
   * Handle when an Issue User assignment occurs.
   *
   * @returns {Promise} that resolves when actions complete
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

          eCore.info("Removing 'Help Wanted' Label (if it exists)...");

          return issue.removeLabels("Help Wanted");
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
                  `A Contributor assignment was just made; however, this Issue is still marked as being in
                  [Triage](${Constants.URL.TRIAGE}). Issues marked as needing **Triage** can't undergo approval.

                  This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                  [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                  needs to triage this Issue and/or inform the Contributor on whether to halt progress.

                  - [ ] @${Constants.MAINTAINER_USER} to resolve the triage for this Issue`,
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
                `This Issue isn't part of an ongoing Project, but was assigned to a Contributor.

                This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                needs to resolve this Issue with the appropriate Project and give it the appropriate status.

                - [ ] @${Constants.MAINTAINER_USER} to resolve the missing Project`,
              ),
            );
          }

          if (issue.projectItems.length > 1) {
            eCore.info("Multiple Project items associated with Issue - adding warning.");

            eCore.warning(
              eCore.shrinkWhitespace(
                `This Issue was found to be referenced by multiple Project items, which is against the Software
              Development Lifecycle for this Repository. This runner is adding a warning to the Issue to explain the
              risk.`,
              ),

              `Multiple Project associations found for Issue`,
            );

            return issue.addWarning(
              eCore.shrinkWhitespace(
                `This Issue is associated with multiple Project items when it was assigned to a Contributor.

                This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                needs to resolve this Issue with the appropriate Project and give it the appropriate status.

                - [ ] @${Constants.MAINTAINER_USER} to resolve duplicate Project items for Issue`,
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
              Specifically, the \`${status}\` state. This goes against the Software Development Lifecycle for this
              Repository. This runner is adding a warning to the Issue to explain the risk.`,
              ),

              `Invalid Project status associated with Issue`,
            );

            return issue.addWarning(
              eCore.shrinkWhitespace(
                `This Issue was associated with a Project item in the status \`${status}\` during Contributor
                assignment.

                This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                needs to resolve this Issue with the appropriate Project and give it the appropriate status.

                - [ ] @${Constants.MAINTAINER_USER} to resolve invalid Project status`,
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
              eCore.info(`Didn't advance Project status as linked Project Item is in the \`${status}\` state.`);
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

  /**
   * Handle when an Issue User unassignment occurs.
   *
   * @returns {Promise} that resolves when actions complete
   *
   * @public @static @async
   */
  static async handleUserUnassigned() {
    const eCore = new EnhancedCore("OnIssue.handleUserUnassigned");

    const owner = ActionContext.context.repo.owner;
    const repository = ActionContext.context.repo.repo;
    const issueNumber = ActionContext.context.issue.number;

    const issue = new Issue(issueNumber, repository, owner);

    return (
      issue
        .load()

        // If no more assignees exist, add the `Help Wanted` Label.
        .then(function addHelpWantedLabel() {
          eCore.startGroup("Adding Help Wanted Label");

          if (issue.assignees.length > 0) {
            eCore.info("Assignees still present on Issue; skipping.");
            return;
          }

          eCore.info("Adding 'Help Wanted' Label to Issue...");

          return issue.addLabels("Help Wanted");
        })

        .then(() => {
          eCore.endGroup();
        })

        // If no more assignees exist, and the project status isn't idle, add a warning
        .then(function checkProjectStatus() {
          eCore.startGroup("Checking Issue's Project status");

          if (issue.assignees.length > 0) {
            eCore.info("Assignees still present on Issue; skipping.");
            return;
          }

          // If no Project Items exist, skip this step
          if (issue.projectItems.length <= 0) {
            eCore.info("No project assigned to Issue; skipping.");
            return;
          }

          // If too many Project Items exist, add a warning
          if (issue.projectItems.length > 1) {
            eCore.info("Multiple Project items associated with Issue - adding warning.");

            eCore.warning(
              eCore.shrinkWhitespace(
                `This Issue was found to be referenced by multiple Project items, which is against the Software
              Development Lifecycle for this Repository. This runner is adding a warning to the Issue to explain the
              risk.`,
              ),

              `Multiple Project associations found for Issue`,
            );

            return issue.addWarning(
              eCore.shrinkWhitespace(
                `This Issue was associated with multiple Project Items when it was unassigned from a final Contributor.

                This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                needs to resolve this Issue with the appropriate Project and give it the appropriate status.

              - [ ] @${Constants.MAINTAINER_USER} to resolve duplicate Project assignments`,
              ),
            );
          }

          const projectStatus = issue.projectItems[0].status;

          // If Project Item is in status `In Progress`, revert it to `Approved for Development` and add a notice
          if (projectStatus == "In Progress") {
            eCore.info("Issue in 'In Progress' state; reverting to 'Approved for Development' and adding notice.");

            return issue.projectItems[0]
              .setStatus("Approved for Development")

              .then(() => {
                issue.addNotice(
                  eCore.shrinkWhitespace(
                    `This Issue has no remaining Users assigned; it has been automatically reverted to the
                    \`Approved for Development\` Project status.`,
                  ),
                );
              });
          }

          // If Project Item is in status `Code Review`, revert it to `Approved for Development` and add a warning to
          // the Pull Request
          if (projectStatus == "Code Review") {
            eCore.info(
              eCore.shrinkWhitespace(
                `Issue in 'Code Review' state; reverting to 'Approved for Development' and adding warning to Issue and
              Pull Request.`,
              ),
            );

            eCore.warning(
              eCore.shrinkWhitespace(
                `This Issue has been completely unassigned during the Code Review process. Adding a warning to the
                associated Issue and Pull Request.`,
              ),

              `Issue completely unassigned during Code Review`,
            );

            return issue.projectItems[0]
              .setStatus("Approved for Development")

              .then(() => {
                return issue.addWarning(
                  eCore.shrinkWhitespace(
                    `This Issue was completely unassigned from Users during the Code Review SDLC state. It has been
                    automatically reverted to the \`Approved for Development\` status and a warning has been added to
                    the associated Pull Request.

                    This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                    [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                    needs to determine appropriate next steps for this Issue and any associated Pull Requests.

                    - [ ] @${Constants.MAINTAINER_USER} to resolve user unassignments during Code Review`,
                  ),
                );
              })

              .then(function checkPullRequests() {
                eCore.debug("Checking for Issue Pull Requests...");
                eCore.verbose(issue.pullRequests);

                // If the Issue has no PR associated, add a warning
                if (!issue.pullRequests || !issue.pullRequests["open"].length) {
                  eCore.info(
                    eCore.shrinkWhitespace(
                      `No comments in the Git history refer to closing this Issue are associated with any open Pull
                    Requests; adding a warning to the Issue.`,
                    ),
                  );

                  eCore.warning(
                    eCore.shrinkWhitespace(
                      `This Issue was in the 'Code Review' Project status, but no open Pull Requests exist that contain
                      a commit message that closes this Issue.

                      It's possible that a Pull Request has been opened, but no commit message was pushed that contains
                      a \`closes\` reference (e.g., \`... (closes #${issue.number}))\`. A warning will be added to the
                      Issue.`,
                    ),

                    `No Pull Request cross-referenced during Code Review`,
                  );

                  return issue.addWarning(
                    eCore.shrinkWhitespace(
                      `This Issue was in the \`Code Review\` Project status, but no open Pull Requests exist that
                      contains a commit message that closes this Issue.

                      It's possible that a Pull Request has been opened, but no commit message was pushed that contains
                      a \`closes\` reference (e.g., \`... (closes #${issue.number})\`). Alternatively, a Pull Request
                      may never have been opened, and the Project status was updated manually.

                      This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                      [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                      needs to determine why this cross-reference is missing or why the Project status doesn't match the
                      Pull Request status.

                      - [ ] @${Constants.MAINTAINER_USER} to identify missing Pull Request and/or commit message`,
                    ),
                  );
                }

                // If there are multiple PRs associated, add a warning
                if (issue.pullRequests["open"].length > 1) {
                  eCore.info("Multiple open Pull Requests are associated with this Issue");

                  eCore.warning(
                    eCore.shrinkWhitespace(
                      `This Issue was in the 'Code Review' Project status while multiple, open Pull Requests referred to
                      this Issue. A warning will be added to the Issue and the corresponding Pull Requests.`,
                    ),

                    `Multiple Pull Requests cross-referenced during Code Review`,
                  );

                  return issue
                    .addWarning(
                      eCore.shrinkWhitespace(
                        `This Issue was in the \`Code Review\` Project status while multiple, open Pull Requests
                        referred to this Issue. This breaks automation capabilities, so no changes will be made to
                        statuses.

                      This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                      [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                      needs to identify and resolve the multiple Pull Requests for this issue.

                      - [ ] @${Constants.MAINTAINER_USER} to identify and resolve multiple Pull Requests`,
                      ),
                    )

                    .then(() => {
                      let promises = [];
                      issue.pullRequests["open"].forEach(function commentMultiplePRs(pr) {
                        eCore.info(`Adding warning to Pull Request #${pr.number}`);

                        promises.push(
                          pr.addWarning(
                            eCore.shrinkWhitespace(
                              `This Pull Request is linked to Issue #${issue.number}, which was just unassigned from all
                          Users; however, this Pull Request is one of ${issue.pullRequests["open"].length} Pull
                          Requests that are currently Open and connected to the given Issue, so no action can be
                          automatically taken.

                          This leaves the Pull Request in an unusual state without clear ownership or direction for the
                          relevant Issue. A task has been added to the Issue for a Project Maintainer to resolve this
                          problem.`,
                            ),
                          ),
                        );
                      });

                      return Promise.all(promises);
                    });
                }

                // Add a warning to the associated PR
                eCore.info("Adding warning to the associated Pull Request.");

                return issue.pullRequests["open"][0].addWarning(
                  eCore.shrinkWhitespace(
                    `This Pull Request is linked to Issue #${issue.number}, which was just unassigned from all Users.

                    This leaves the Pull Request in an unusual state without clear ownership for the relevant Issue. A
                    task has been added to the Issue for a Project Maintainer to resolve this problem.`,
                  ),
                );
              });
          }

          // If Project Item isn't in status `Parking Lot`, `Approved for Development`, or empty, add a warning
          if (projectStatus && !["Parking Lot", "Approved for Development"].includes(projectStatus)) {
            eCore.info("Issue completely unassigned late in SDLC - adding warning.");

            eCore.warning(
              eCore.shrinkWhitespace(
                `This Issue was completely unassigned late in the Software Development Lifecycle. A warning will be
                added to the Issue.`,
              ),

              `Issue completely unassigned late in SDLC`,
            );

            return issue.addWarning(
              eCore.shrinkWhitespace(
                `This Issue was completely unassigned from Users while in the '${projectStatus}' state.

                This goes against the [Software Development Lifecycle](${Constants.URL.SDLC}) and
                [Contributing Guidelines](${Constants.URL.CONTRIBUTING}). A Project Maintainer
                needs to determine appropriate next steps for this Issue and any associated Pull Requests.

              - [ ] @${Constants.MAINTAINER_USER} to resolve late User unassignments`,
              ),
            );
          }

          // Otherwise, this is a valid state to have unassignment occur
          eCore.info("Project status in valid state for unassignment.");
        })

        .then(() => {
          eCore.endGroup();
        })
    );
  }
};
