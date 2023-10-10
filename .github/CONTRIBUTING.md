# Contributing Guidelines

> **Last Updated:** October 9, 2023

This [project][project] would not exist without its contributors, and we welcome you to join us in our endeavor. This
guide is intended for anyone who wants to contribute in any way.

Please read this document carefully before contributing, as it answers many of the questions that new contributors have
when first working with our community's projects.

> This guide serves to set clear expectations for everyone involved with the project so that we can improve it together
> while also creating a welcoming space for everyone to participate. Following these guidelines will help ensure a
> positive experience for contributors and maintainers.

## Contents

- [Contributing Guidelines](#contributing-guidelines)
  - [Contents](#contents)
  - [Agreement](#agreement)
  - [Ways to Contribute](#ways-to-contribute)
    - [Report a Bug](#report-a-bug)
      - [Reporting a Security Vulnerability](#reporting-a-security-vulnerability)
    - [Submit an Idea](#submit-an-idea)
    - [Support, Questions, and Discussions](#support-questions-and-discussions)
  - [Working on Issues](#working-on-issues)
    - [Software Development Lifecycle](#software-development-lifecycle)
      - [01-Pending Initiation](#01-pending-initiation)
      - [02-In Progress](#02-in-progress)
      - [03-Code Review](#03-code-review)
      - [04-Pending Staging](#04-pending-staging)
      - [05-Staged](#05-staged)
      - [06-Released](#06-released)
    - [Issue Triage](#issue-triage)
    - [Submission Requirements](#submission-requirements)
      - [Testing](#testing)
      - [Code Style](#code-style)
      - [Branch Naming Conventions](#branch-naming-conventions)
      - [Commit Message Conventions](#commit-message-conventions)
        - [Commit Message Title](#commit-message-title)
        - [Commit Message Body](#commit-message-body)
      - [Signed Commits](#signed-commits)
  - [Releases](#releases)
    - [Semantic Versioning](#semantic-versioning)
  - [Hot-Fixes and Critical Releases](#hot-fixes-and-critical-releases)
  - [Standards Subject to Change](#standards-subject-to-change)
  - [No Brown M\&Ms](#no-brown-mms)

---

## Agreement

By submitting any work to this project, you agree to the [Project License][license] and you agree that you have read,
understand, and will adhere to the project's [Code of Conduct][conduct].

<!-- editorconfig-checker-disable -->

You also certify that any and all contributions made by you to the project meet the following criteria:

1. The contribution was created in whole or in part by you and/or you have the right to submit it under all applicable agreements and licenses;
2. The contribution is based upon previous work that is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license, unless I am permitted to submit under a different license; or,
3. The contribution was provided directly to me by some other person who certified (1) or (2) and I have not modified it.

You also understand and agree that:

1. This project and all contributions are, or may become at any time, public;
2. That a record of any and all contributions, including all personal information submitted with, including any sign-offs, are maintained indefinitely and may be redistributed consistent with the Project License;
3. That you grant this project and its maintainers a non-exclusive, irrevocable license to use your submitted work in any way in compliance with the Project License; and,
4. You are capable of granting these rights for all contributions.
<!-- editorconfig-checker-enable -->

---

## Ways to Contribute

There are many methods of contribution you can participate in to enhance this project and the community, including, but
certainly not limited to, helping develop the core product. You can help the project with any of the following:

- [Report any Bugs You Find](#report-a-bug)
- [Submit an Idea or Request a Feature](#submit-an-idea)
- [Work on a New or Existing Project Issue](#working-on-issues)
- [Participate in a Community Discussion][discussions]

### Report a Bug

Please read the project's [Support Documentation][support] prior to opening a bug. This will help ensure that your issue
will be resolved quickly and effectively.

Perfect code is rare, and this project is no exception. Before submitting a bug report, we ask that you take the
following steps:

1. Search for other [issues][issues] in the project that might be a duplicate of your report that you can add context to
2. Perform a [Rubber Duck Debugging][rubber-duck] exercise
3. Rephrase your question after reading about the [X-Y Problem][xy]
4. Search for duplicate [issues][issues] again (:wink:)
5. Gather as much data as you can - screenshots, error message, verbose logs - and include them up front

If you do find an issue that matches your concern, please add any context that might help us solve it, whether that be
your specific replication steps or information about your platform. It can be surprising what data helps crack open the
understanding of a problem.

If these steps are performed and you still are sure a bug exists, please [file a bug report][issue-bug] so we can
address it. Expect to come prepared with the following information for your bug report to move out of
[triage](#issue-triage):

- What state your system and the project were in, including versions of software and dependencies
- What steps and actions you took
- What you expected to happen
- What actually did (or did not) happen

The [bug report template][issue-bug] will help you organize these elements.

Additionally, including any errors, configurations, logs, stack traces, screenshots, output, or other data that may be
useful for someone in order to debug will be critical to ensuring fast turnaround for bug reports. The more of this you
provide up-front, the more quickly you will get a resolution. The quality of response is entirely dictated by the effort
put forward in helping us resolve your issue.

#### Reporting a Security Vulnerability

All security vulnerabilities are considered high-priority until determined otherwise. If you believe you have
encountered something that may pose a security risk to users or developers, even if you are not certain, we ask that you
[file a security report][issue-security] as soon as possible. We very much prefer you create a report that may prove to
be nothing than not submit a report because you are not sure.

For more information, please refer to the project's [Security Policy][security].

### Submit an Idea

We love ideas of any form - even better if you can help make it a reality. Even if you cannot add a feature on your own,
we encourage and welcome all suggestions. Prior to submitting an idea or feature request, please search through all
[open feature requests][issues-features]; if you find a similar feature request, please add a comment there, instead.

When making a feature request or submitting an idea, please [create an issue][issue-feature] and be prepared with the
following information:

- What problem you are trying to solve or opportunity you wish to capture
- Who the feature will benefit
- The value the feature will bring to the community
- Your opinion on how to approach the solution

The [feature request template][issue-feature] will help you organize these elements.

The better polished an idea is up front, the more likely it is that your vision will be realized and prioritized.

While we will consider all requests, we cannot guarantee your request will be accepted. Project maintainers always aim
to ensure the project maintains a clear focus and avoids [feature creep][feature-creep], and ideas may be rejected on
that basis.

Project maintainers do not ever provide commitments or timelines regarding implementation and release of any accepted
issue. The only mechanism available to drive an issue with urgency is to [submit a pull request](#working-on-issues
directly to help.

### Support, Questions, and Discussions

For anything conversational, including asking for support, please make use of the [Discussions][discussions] feature
available on the project. Opening an issue is not appropriate for these types of communication.

Please make sure to review the project's [Support Documentation][support] and [Code of Conduct][conduct] prior to
participating in any discussions.

---

## Working on Issues

All bugs, features, and other efforts are managed in the project's [GitHub Issues][issues] section. It is here that
project maintainers will determine which issues will be road-mapped for development and plan the project's
[milestones][milestones] accordingly.

If you intend to work on a specific issue, please add a comment to the issue saying so and indicate when you think you
will complete it. This will help us to avoid duplication of effort. If you find that you cannot finish the work, please
add a comment letting people know that it is available for work, and aim to make your code available to work from.

### Software Development Lifecycle

All contributions to the project **must** follow this Software Development Lifecycle (SDLC). The SDLC is split into six
(6) distinct phases. Each issue created will have a `State` label that matches one of the following statuses:

> **Note:** Issue state automation is being worked on, but, currently, all statuses for issues must be updated manually
> as their states change.

#### 01-Pending Initiation

When an issue is approved from [triage](#issue-triage), it enters the `01-Pending Initiation` state. This simply means
that the issue has yet to be worked on and is waiting for a contributor.

Any issue that is `Pending Initiation` is free to be claimed and is one of the best ways to find an issue to work on if
one is looking to contribute to the project.

When a volunteer chooses to take a `Pending Initiation` issue, they **must** put a comment on the issue stating their
interest, and a project maintainer will update the issue to the `In Progress` state and assign the issue to the
contributor. The contributor should then create a [fork][fork] of the repository and begin working on the effort.

> **Developer Tip:** Adding an `upstream` remote and regularly [rebasing][rebasing] from the `[main][branch-main]`
> branch is important to keep updated with changes and prevent significant effort at the end of the development. To add
> an `upstream`, you can run:
>
> ```bash
> git remote add upstream https://github.com/andrewvaughan/template-core
> ```
>
> To create your new branch, ensure you're updated from the main branch, first:
>
> ```bash
> git checkout main
> git pull upstream main
> ```
>
> You can then add your changes, as normal, on a new branch.

#### 02-In Progress

While the contributor is working on the issue, the issue **must** remain in the `02-In Progress` state. This tells other
developers that the issue is being worked on and is this project's primary mechanism to avoid a duplication of efforts.

If the contributor can no longer work on the effort, we ask that a comment be added to the issue so that the project
maintainer can revert the issue state back to `Pending Initiation`.

Contributors **must** create a [primary commit message](#commit-message-conventions) with their commits to ensure the
project's automation, changelog, and developer community stay in tact.

When a contributor has completed their work and are ready for submission, they **must** open a
[pull request][pull-requests] to the `[main][branch-main]` branch to undergo automated integration tests and to start
a code review process from the appropriate project maintainer(s).

When the pull request is opened, a project maintainer will move the issue labels and status to `Code Review`.

> **Developer Tip:** During development, it's a good idea to regularly rebase from the `upstream` `[main][branch-main]`
> branch. This is also necessary at the end of the effort for a successful pull request:
>
> ```bash
> git fetch upstream
> git rebase upstream/main
> ```
>
> If you are not familiar with the rebase strategy, it is important to [become familiar with it][rebasing] for this
> project.

#### 03-Code Review

The creation of a pull request will automatically trigger workflows that test all changed files (as opposed to the whole
repository) for linting and code standards. It will also run the entire unit test suite. It is up to the contributor
to ensure that all integration tests pass, as a code reviewer **may not** start their work until all integration checks
are passing.

Developers **may** commit directly to their forked branch to see their updates appear in the pull request. These
commit messages do not need to follow the verbose standards of the primary commit message.

The code review process is simple for this project. Each area of the code has a set of [code owners][codeowners] that
are responsible for the standards and ensuring those standards are met during the code review process. If you change
more than one code owners' section of code, expect to have multiple reviewers assigned to your pull request.

Code owners may also enlist project maintainers for advanced review or areas that are complex or change significant
portions of the project. Project maintainers oversee the entire project and have final say on code reviews.

During code review, the following areas will be reviewed:

- Code quality and style
- Architecture and patterns
- Test accuracy, completeness, and coverage
- Documentation and commenting
- Adherence to standards and requirements
- Review of new standards (if implemented)
- Coordination of larger changes
- Prioritizing understanding over cleverness
- Areas of improvement or future development
- Adherence to git commit message standards

Comments may be added to the pull request, itself, or attached to a piece of code being submitted.

All conversations within in a pull request must be resolved prior to being accepted. This may require changes to the
submission, or may simply entail a discussion to come to a common understanding. Regardless, it is the responsibility
of the contributor to ensure all threads are closed for acceptance.

When a pull request is finally accepted by all reviewers, a project maintainer will take the following actions:

<!-- editorconfig-checker-disable -->

1. All commits will be [squashed][squash] to a single commit with the primary commit message data prevailing
2. The merged branch will be deleted (if part of the existing repository)
3. The pull request will be closed
4. Automatic integration tests across the entire project repository will be performed on the `[staging][branch-staging]` or `[production][branch-production]` branch, as appropriate
5. The associated issue will be moved to a `04-Pending Staging` (even if a staging branch is not in use)
<!-- editorconfig-checker-enable -->

**Do not** squash your commits manually. The project maintainer will do this for you.

> **Note:** While the issue is technically "closed" at this point by GitHub, it is not "done." This project's
> **Definition of Done** is when the issue is in the `06-Released` state.

#### 04-Pending Staging

At this point in the software development lifecycle, the work for the developer is effectively complete apart from the
rare occurrence where end-to-end integration tests (which are performed immediately after a pull request is accepted)
returns an unexpected failure.

In that case, a [hot-fix](#hot-fixes-and-critical-releases) pattern will be used on the appropriate branch
(`[staging][branch-staging]` or `[production][branch-production]`) to resolve the issue.

Issues will stay in the `Pending Staging` state for some time until a release is performed to the staging server.

A release is performed by create a pull request from a point in the `[main][branch-main]` branch to the
`[staging][branch-staging]` branch (or the `[production][branch-production]` branch, if `[staging][branch-staging]` is
not used). This will create a special integration test that will test the entire project from end-to-end. If these tests
pass, accepting the pull request will dictate a successful staging release. At this point, all issues that were part of
the release will be moved to the `Staged` status (or `Released` status if the release was directly to
`[production][branch-production]`).

#### 05-Staged

Staged statuses reflect issues that are on the `[staging][branch-staging]` but have not been promoted to the
`[production][branch-production]` branch.

Generally, this is used for things like performance testing, pen testing, user acceptance testing, and other areas of
effort that require a staging environment to perform. This branch may also be released as a `beta` release. The actions
taken during this step vary from project to project.

When all staging efforts are complete, the `[staging][branch-staging]` will have a pull request created into the
`[production][branch-production]` branch for a production release.

#### 06-Released

When all integration checks pass and production checklists are completed, the pull request created from the
`[staging][branch-staging]` branch (or from `[main][branch-main]`, if no `[staging][branch-staging]` branch is used) can
be approved. When this happens, the `[production][branch-production]` branch is updated and all issues that were in the
`Staged` state should be updated to `Released`.

At this point the SDLC is complete.

### Issue Triage

Issues are regularly triaged by project maintainers to review and potentially be accepted. Issues will be in a
`Requested` state with the `Needs Triage` label until this is performed. This triage is under the sole discretion of the
project maintainers.

During triage, the issue will either be accepted or rejected. If accepted, the following label changes are made:

1. The `Needs Triage` label is removed
2. The `Requested` label is changed to the appropriate issue `Type` label
3. The `Status: 01-Pending` label is applied
4. An appropriate `Priority` is determined and label added

If an issue is rejected, generally, a comment will be added by the maintainer explaining the rationale, but this is not
necessarily required. In this case, the `Needs Triage` label will be removed and an appropriate `Wontfix` label will
be applied.

We do understand that times and needs change, and therefore are open to reconsidering rejected requests. If an issue is
rejected, it may be resubmitted for reconsideration 3-months after it is rejected for further review. Please do not
comment on existing, closed issues, as project maintainers will not monitor nor respond to these.

Any individual that abuses the issue submission mechanism may be subject to restrictions from the project as described
in the [Code of Conduct][conduct].

### Submission Requirements

This project aims to keep code clean and consistent to ensure contribution is available and easy for as many individuals
as feasible. As such, the project maintains a number of requirements that are included as part of integration testing
and are required for all contributions.

#### Testing

All code must be fully tested through unit testing. This project maintains a 95% branch code coverage policy, which
ensures that all code is written in a way that can and will be covered by integration tests. Please do not submit any
Pull Requests without developing a test suite first.

All testing in the project is performed within a Docker container to ensure that as many development environments can
be supported as possible. All testing additions must have automation as part of the central core of our continuous
integration / continuous delivery (CI/CD) focus.

Testing of this project also includes:

- Code linting and style
- Documentation linting and style
- File format standardization
- Commenting coverage
- Spelling and grammar
- Operational best practices

For more information on testing procedures, please refer to the project's [README][readme] file.

#### Code Style

This project has significant code style standards that are enforced with [linting][linting] tools during the pull
request process. The details of these requirements vary depending on the file being edited.

Rules for code style can be found by reviewing these sources:

<!-- editorconfig-checker-disable -->

- `[.editorconfig][editorconfig]` - enforces spacing and typesets; supported by most IDEs
- `.megalinter-yml` - [Megalinter][megalinter] is the tool that runs the linting suite for this project; this configuration file contains details on how these linters are configured (and the [website][megalinter] has significant documentation on defaults)
<!-- editorconfig-checker-enable -->

The Megalinter output itself is designed to be extremely informative. This can be performed by running `make test-lint`
once the dependencies described in the [README][readme] are installed.

#### Branch Naming Conventions

Branch names on personal forks may follow any convention a developer prefers. For branches within this official project
repository, the following rules must be followed:

<!-- editorconfig-checker-disable -->

1. The `[main][branch-main]` branch **must** be the primary branch, and it **must** always reflect the "edge" release of the project
2. The `[staging][branch-staging]` branch, if used, **must** be the first branch released to from `[main][branch-main]` and **must** reflect the "pre-release" or "beta" release of the project
3. The `[production][branch-production]` branch **must** be the final branch and **must** reflect the latest release; this branch **must** also be tagged with each release in the format `vX.X.X` (see: [Semantic Versioning](#semantic-versioning))
<!-- editorconfig-checker-enable -->

For all other branches, the following format is used:

`type/####/descriptive-tag`

Where:

`type` equates to the type of issue, being one of:

- `bug` for a bug-fix
- `doc` for documentation changes
- `feat` for a new or updated feature
- `ops` for operational changes
- `rel` for a release

`####` refers to a zero-padded issue ID (e.g., #8 would be `0008`)

`descriptive-tag` is an easy-to-ready tag describing what the purpose of the issue and branch are.

The only person who should be creating this type of branch is the code owner, as they do not have the ability to fork
their own repository.

#### Commit Message Conventions

We ask that all contributors [write great commit messages][commit-msg]. Commit messages are used both as the changelog
for the project and as a record of decisions made during the workflow.

Each issue **must** have a "primary commit message" - this is the final representation of the issue, branch, and
pull request in a format that allows for adequate insight into the work. Any additional commits made that will
ultimately be squashed into the primary commit message (e.g., during code review) do not need to follow these standards.

The primary commit message is the commit message used to represent a submission for a pull request and in the project's
changelog. Developers **should** make this the first commit into the branch for a given issue, otherwise significant
effort may be required from the developer to clean the commit formatting during the pull request submission.

It also is important to create a [good commit][commit-msg] for the primary commit message to ensure that integrations
work correctly and so that future developers will have appropriate reference for the work changed beyond the
corresponding issue, if it is ever required.

##### Commit Message Title

The commit message title of all commit messages **must** follow this format to both trigger automation workflows and to
ensure proper changelog generation:

```text
Type: Short description (closes #42)
```

Where:

<!-- editorconfig-checker-disable -->

- `Type` matches the issue label `Type`, being one of:
  - `Fix` for a bug-fix
  - `Docs` for documentation changes
  - `New` for a new feature
  - `Update` for an update to a feature
  - `Ops` for operational changes
  - `Release` for a release
- `Short description` describing the change for the changelog; this must be capitalized in sentence form and read like a changelog message (e.g., do not end the description with a period)
- `(closes #42)` a reference to the issue being closed (this is critical for automation)
<!-- editorconfig-checker-enable -->

The total size of the commit message title **should** be fewer than 50 characters and **must** be fewer than 72
characters.

Commits **must not** close multiple issues, even though GitHub supports it. If duplicates are closed or other issues
become obsolete, this **must** be managed through the GitHub website with appropriate comments for context.
Additionally, other control words besides `closes` **must not** be used for automation purposes, even if GitHub supports
them. This ensures future automation efforts and changelog parsing will remain consistent.

##### Commit Message Body

The commit message body **must** be created as a reflection of how much effort was required to complete the overall,
squashed commit.

For example, if the overall effort was trivial with a single line change, and the title of the commit message clearly
states everything needed for future developers, a body may not even be required (although, this is rare and usually
limited to operational changes); however, if a significant feature is being released or a bug is being fixed, it is
critical that the body exist and contain enough information to be informative for future developers.

The primary commit message body must follow these requirements:

1. The body **must** be separated from the title by a blank line
2. The body **must** be wrapped at 72 characters
3. The body **should** explain _what_ and _why_ about the change, not the _how_

Regarding item (3) above, the goal is to prevent a fellow developer from having to try to determine what changes were
made and why through a `diff` call. How can easily be inferred with this set of information.

Generally, details about _how_ a change has been made **should not** be included - code is usually self-explanatory. If
the how truly is required to be explained, the best place for this to exist is in the code comments, not the commit
message.

The commit body **should** focus on making clear the reasons as to why the changes were made in the first place, the way
things worked before the change (and why that needed changing), the way they work now, and why you decided to solve it
the way you did.

Here is an example of an excellent, [real][commit-example] commit message that has been adjusted for this project's
standards:

```text
commit eb0b56b19017ab5c16c745e6da39c53126924ed6
Author: Pieter Wuille <pieter.wuille@gmail.com>
Date:   Fri Aug 1 22:57:55 2014 +0200

    Feat: Simplify serialize.h's exception handling (closes #20)        <-- Excellent short description

    Remove the 'state' and 'exceptmask' from serialize.h's stream       <-- The "what"
    implementations, as well as related methods.

    As exceptmask always included 'failbit', and setstate was always    <-- The "why"
    called with bits = failbit, all it did was immediately raise an
    exception. Get rid of those variables, and replace the setstate
    with direct exception throwing (which also removes some dead
    code).

    As a result, good() is never reached after a failure (there are     <-- The result
    only 2 calls, one of which is in tests), and can just be replaced
    by !eof().

    fail(), clear(n) and exceptions() are just never called. Delete
    them.
```

#### Signed Commits

While [signed commits][sign-commits] are not currently required, they will be in the near future. We highly suggest that
you configure your development environment for commit signing to secure your contributions across all of your projects
and to prevent disruption to your workflow when this standard comes into effect.

The current expected time-frame for requiring signed commits is mid-2024.

---

## Releases

Releases are tracked and planned via in the project's [Milestones][milestones] utility. Each release is given a version
number and issues are grouped into milestones for release. When a milestone has been completed, a new release is
created in the project's [Releases][releases] section.

Releases are performed by creating a pull request from `[main][branch-main]` to `[staging][branch-staging]` (for a
pre-release branch, assuming that the `[staging][branch-staging]` branch is being used) and `[staging][branch-staging]`
to `[production][branch-production]` (for a production release). Of course, if no staging branch is being used,
deployments will go directly from `[main][branch-main]` to `[production][branch-production]`.

These pull requests **must** match an issue created explicitly for tracking the release.

Unlike developer commits, the entire codebase **must** be fully linted and tested any time a release pull request is
created. While rare, occasionally issues will occur that only appear when end-to-end tests are performed.

Code review of the pull request **should** focus on user acceptance testing and ensuring that the project works as
expected. When the pull request is accepted, a rebase strategy **must** be used for merging the branches. It is
important that rebase is used to retain the changelog from commit messages in chronological order.

Once a release is completed all issues that were within scope of the release **must** be moved to the `06-Released`
state by changing those issues' labels.

Finally, the last commit message for the release **must** be tagged in the format `v#.#.#` to follow the Semantic
Versioning standard (also called "semver" for short).

### Semantic Versioning

Releases of this project follow [Semantic Versioning][semver] standards in a `vMAJOR.MINOR.PATCH` versioning scheme
using the following format:

- `MAJOR` - modified when major, incompatible changes are made to the application
- `MINOR` - modified when functionality is added in a backwards-compatible manner
- `PATCH` - patches to existing functionality, such as documentation and bug fixes

---

## Hot-Fixes and Critical Releases

Occasionally, a hotfix may be required that pushes additional functionality or urgent fixes outside of the Software
Development Lifecycle. Hot-fixes should always be performed in collaboration with a project maintainer, as this is an
exception to the community's agreed processes and requires a project maintainer to execute.

A hotfix is performed by submitting a pull request directly to the `[staging][branch-staging]` branch (or
`[production][branch-production]` branch, if no staging branch is used), skipping the `[main][branch-main]` branch.
Hot-fixes must pass full testing standards and integration tests for the project as any other production release.

Once the pull request is accepted and deployed, the project maintainer is accountable for rebasing the
`[main][branch-main]` branch from the `[production][branch-production]` branch to ensure all child branches can
incorporate the hotfix. With normal procedures, this should have minimal lifecycle impact for developers, requiring
them only to rebase their working branches prior to submitting a pull request, which is normal procedure.

Hot-fixes have a significant opportunity for risk and often impact development teams negatively. As such, they are
limited in their use, often to only security and major performance concerns.

---

## Standards Subject to Change

With every pull request, the project's maintainers have the opportunity to better refine our style and acceptance
guidelines. As such, you may be requested to pull an updated set of code style guidelines due to an unforeseen
inconsistency in submitted code and to resubmit your request according to new, unpublished guidelines.

These guidelines are subject to change at any time without notification at the sole discretion of the project
maintainers.

---

## [No Brown M&Ms][m-n-ms]

First, you are an amazing human for reading this document and taking the time to make your efforts genuine. Bravo - you
are awesome.

Second, We will prioritize triage of any issues that come from individuals who have read these contributing guidelines.
To show that you are one of these rare individuals, please put this candy icon (:candy:) at the top of your issues and
pull requests by with the code `:candy:`.

<!-- Link Repository -->

<!-- editorconfig-checker-disable -->

 <!-- TODO -->

[codeowners]: https://github.com/andrewvaughan/template-core/blob/main/.github/CODEOWNERS
[commit-example]: https://github.com/bitcoin/bitcoin/commit/eb0b56b19017ab5c16c745e6da39c53126924ed6
[commit-msg]: https://chris.beams.io/posts/git-commit/
[conduct]: https://github.com/andrewvaughan/template-core/blob/main/.github/CODE_OF_CONDUCT.md
[discussions]: https://github.com/andrewvaughan/template-core/discussions
[feature-creep]: https://en.wikipedia.org/wiki/Feature_creep
[fork]: https://docs.github.com/en/get-started/quickstart/fork-a-repo
[issue-bug]: TODO
[issue-feature]: TODO
[issue-security]: TODO
[issues]: https://github.com/andrewvaughan/template-core/issues
[issues-features]: https://github.com/andrewvaughan/template-core/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22Type%3A+Feature%22
[license]: TODO
[linting]: https://en.wikipedia.org/wiki/Lint_%28software%29
[m-n-ms]: https://en.wikipedia.org/wiki/Van_Halen#Contract_riders
[megalinter]: https://megalinter.io
[milestones]: https://github.com/andrewvaughan/template-core/milestones
[project]: https://github.com/andrewvaughan/template-core
[pull-requests]: https://github.com/andrewvaughan/template-core/pulls
[readme]: https://github.com/andrewvaughan/template-core/blob/main/README.md
[rebasing]: https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase
[releases]: https://github.com/andrewvaughan/template-core/releases
[rubber-duck]: https://rubberduckdebugging.com
[security]: TODO
[semver]: http://semver.org/
[sign-commits]: https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification
[squash]: https://www.git-tower.com/learn/git/faq/git-squash
[support]: TODO
[xy]: https://meta.stackexchange.com/questions/66377/what-is-the-xy-problem/66378#66378

<!-- editorconfig-checker-enable -->
