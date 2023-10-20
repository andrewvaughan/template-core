# Contributing Guidelines

> **Last Updated:** October 14, 2023

This [project][project] would not exist without its Contributors, and you are very welcome to join in this endeavor.
This guide is for anyone who wants to contribute in any way.

Please read this document carefully before contributing, as it answers many of the questions that new Contributors have
when first working with this community's projects.

> This guide serves to set clear expectations for everyone involved with the project so that the community can work
> together in creating a welcoming space for all interested individuals to participate. Following these guidelines
> ensures a positive experience for all Contributors and Project Maintainers.

<!-- prettier-ignore-start -->
<!-- omit from toc -->
## Contents

- [Contributing Guidelines](#contributing-guidelines)
  - [Agreement](#agreement)
  - [Ways to contribute](#ways-to-contribute)
    - [Report a bug](#report-a-bug)
      - [Reporting a security vulnerability](#reporting-a-security-vulnerability)
    - [Submit an idea](#submit-an-idea)
    - [Support, questions, and forums](#support-questions-and-forums)
  - [Working on issues](#working-on-issues)
    - [Software Development Lifecycle](#software-development-lifecycle)
      - [`Status: 01-Pending Initiation`](#status-01-pending-initiation)
      - [`Status: 02-In Progress`](#status-02-in-progress)
      - [`Status: 03-Code Review`](#status-03-code-review)
      - [`Status: 04-Pending Staging`](#status-04-pending-staging)
      - [`Status: 05-Staged`](#status-05-staged)
      - [`Status: 06-Released`](#status-06-released)
    - [Issue triage](#issue-triage)
    - [Submission requirements](#submission-requirements)
      - [Testing](#testing)
      - [Code style](#code-style)
      - [Branch naming conventions](#branch-naming-conventions)
      - [Commit message conventions](#commit-message-conventions)
      - [Signed commits](#signed-commits)
  - [Releases](#releases)
    - [Semantic Versioning](#semantic-versioning)
  - [Hot-Fixes and critical Releases](#hot-fixes-and-critical-releases)
  - [Standards subject to change](#standards-subject-to-change)

---
<!-- prettier-ignore-end -->

## Agreement

By submitting any work to this project, you agree to the [Project License][license] and you agree that you have read,
understand, and adhere to the project's [Code of Conduct][conduct].

You also certify that any and all contributions made by you meet the criteria of the
[Linux Foundation Developer Certificate of Origin v1.1][cert-origin]:

<!-- vale off -->

```text
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.


Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```

<!-- vale on -->

You also understand and agree that:

<!-- editorconfig-checker-disable -->

1. This project and all contributions are, or may become at any time, public;
2. That a record of any and all contributions, including all personal information submitted, as well as permissions granted, are indefinitely maintained and that redistribution may occur without notice or approval;
3. That you grant this project and the Project Maintainers a non-exclusive, irrevocable License to use your submitted work in any manner in compliance with the Project License; and,
4. You are capable of granting these rights for all contributions.

<!-- editorconfig-checker-enable -->

---

## Ways to contribute

There are many methods of contribution you can participate in to enhance this project and the community, including, but
certainly not limited to, helping develop the core product. You can help the project with any of the following:

- [Work on a new or existing project Issue](#working-on-issues)
- [Report any bugs you find](#report-a-bug)
- [Submit an idea or request a feature](#submit-an-idea)
- [Participate in a community Discussion][discussions]
- [Join the Discord][discord]

### Report a bug

Please read the project's [Support Documentation][support] prior to opening a bug report. This helps ensure that any
resolution that might occur for your bug happens as quickly and effectively as possible.

Perfect code is rare, and this project is no exception. Before submitting a bug report, please take the following steps:

<!-- editorconfig-checker-disable -->

1. Search for other [Issues][issues] in the project that might be a duplicate of your report that you can add context to
2. Perform a [Rubber Duck Debugging][rubber-duck] exercise
3. Rephrase your question after reading about the [X-Y Problem][xy]
4. Search for duplicate [Issues][issues] again :wink:
5. Gather as much data as you can - screenshots, configuration settings; error message, verbose logs - and include them up front

<!-- editorconfig-checker-enable -->

If you do find an existing Issue that matches your concern, please add any context that might help solve it, whether
that be your specific replication steps or information about your platform. It can be surprising what data helps crack
open the understanding of a complex, or even simple, problem. Let the Project Maintainers know that you are also having
a problem by commenting on that Issue. This helps them prioritize work effectively.

If you perform these steps and are still sure a bug exists, please [file a bug report][issue-bug] so the community can
address it. Expect to come prepared with the following information for your bug report to move out of
[triage](#issue-triage):

- What state your system and the project were in, including versions of software and dependencies
- What steps and actions you took
- What you expected to happen
- What actually did, or didn't, happen

The [bug report template][issue-bug] helps you organize each of these elements.

Additionally, aim to include any errors, configurations, logs, stack traces, screenshots, output, or other data that may
be useful for someone to debug the problem. This is critical to provide to ensure fast turnaround for bug reports. The
more information you provide up-front, the more quickly a resolution might occur. The quality of a response is, quite
often, entirely dictated by the effort put forward up front.

#### Reporting a security vulnerability

All security vulnerabilities are high-priority until determined otherwise. If you believe you have encountered something
that may pose a security risk to users or developers, even if you aren't certain, please
[file a security report][issue-security] as soon as possible. It's highly preferred that you create a potential report
that may prove to be nothing than not submit a report because you aren't sure.

**DON'T file security vulnerabilities using GitHub Issues, Discussions, or via Discord.** Only use the provided
[security vulnerability reporting mechanism][issue-security].

For more information, please refer to the project's [Security Policy][security].

### Submit an idea

This community values ideas of any form - even better if you can help make it a reality. If you can't add a feature on
your own, suggestions are still encouraged and welcomed. Prior to submitting an idea or feature request, please search
through the project's [open feature requests][issues-features]. If you find a similar feature request, please add a
comment there, instead of opening a new Issue.

When making a feature request or submitting an idea, please [create an Issue][issue-feature] and prepare the following
information:

- What problem you are trying to solve or the opportunity you wish to capture
- Who the feature benefits
- The value the feature brings to the community
- Your opinion on how to approach the solution

The [feature request template][issue-feature] helps organize these elements.

The better polished an idea is up front, the more likely that the community might realize and prioritize your vision.

Project Maintainers consider all requests, but don't guarantee acceptance. Maintainers always aim to ensure that the
project maintains a clear focus and avoids [feature creep][feature-creep].

Project Maintainers don't provide commitments or timelines regarding any implementation or Release of any accepted
Issue. The only mechanism available to drive an Issue with urgency is to [submit a Pull Request](#working-on-issues)
directly to help.

### Support, questions, and forums

For anything conversational, including asking for support, please make use of the [Discussions][discussions] feature
available on the project. Opening an Issue isn't appropriate for these types of communication.

Additionally, you are welcome to join the project's [Discord][discord] for less-formal communications.

Please make sure to review the project's [Support Documentation][support] and [Code of Conduct][conduct] prior to
participating in any Discussions.

---

## Working on issues

The [GitHub Issues][issues] section manages the project's bugs, features, and formal efforts. It's here that Project
Maintainers determine which Issues are road-mapped and plan [Project Milestones][milestones] accordingly.

### Software Development Lifecycle

All contributions to the project **must** follow this Software Development Lifecycle (SDLC). Six (6) distinct phases
make up the SDLC, with each state represented by a different `Status` label that matches one of the following:

#### `Status: 01-Pending Initiation`

When [triage](#issue-triage) is complete, Issues are either approved or rejected. If approved, the Issue enters the
`Status: 01-Pending Initiation` state. This means that the Issue is ready for development.

Any Issue that's in the `Status: 01-Pending Initiation` state is free for claiming by a Contributor and is one of the
best ways to find an Issue to work on, for those wishing to contribute.

When a volunteer chooses to take a `Status: 01-Pending Initiation` Issue, they **must** put a comment on the Issue
stating their interest, at which point a Project Maintainer can update the status label to `Status: 02-In Progress` and
assign the Issue to the Contributor. The Contributor should then create a [Fork][fork] of the Repository and begin
working on the effort.

> **Developer tip:** Adding an `upstream` remote and regularly [rebasing][rebasing] from the [`main`][branch-main]
> Branch is important to keep updated with changes and prevent significant effort at the end of the development. To add
> an `upstream` for this project, you can run this command:
>
> ```bash
> git remote add upstream https://github.com/andrewvaughan/template-core
> ```
>
> To create your new Branch, ensure you're updated from the main Branch, first:
>
> ```bash
> git checkout main
> git pull upstream main
> ```
>
> You can then add your changes, as normal, on a new Branch.

#### `Status: 02-In Progress`

While a Contributor is working on an Issue, the Issue **must** remain in the `Status: 02-In Progress` state. This marks
the Issue as claimed for other developers and is the project's primary mechanism for avoiding a duplication of efforts.

If you, as a Contributor, can no longer work on an effort, please add a comment to the Issue so that the Project
Maintainers can revert the Issue state back to `Status: 01-Pending Initiation` for another Contributor to claim.

Contributors **must** create a [Primary Commit Message](#commit-message-conventions) with their commits to ensure the
project's automation, changelog, and developer community stay in tact.

When a Contributor has completed their work and is ready for submission, they **must** open a
[Pull Request][pull-requests] to the [`main`][branch-main] Branch to undergo automated integration tests and to start
a Code Review process from the appropriate Code Owners.

After the Pull Request opens, a Project Maintainer changes the Issue label and status to `Status: 03-Code Review`.

> **Developer tip:** During development, it's a good idea to regularly rebase from the `upstream` [`main`][branch-main]
> Branch. This is also necessary at the end of the effort for a successful Pull Request:
>
> ```bash
> git fetch upstream
> git rebase upstream/main
> ```
>
> If you aren't familiar with the rebase strategy, it's important to [become comfortable with it][rebasing] for this
> project.

#### `Status: 03-Code Review`

The creation of a Pull Request into the `main` Branch automatically triggers workflows that test all changed files, as
opposed to the whole codebase, for linting. It also runs the entire unit test suite. It's up to the Contributor to
ensure that all integration tests pass, as a Code Reviewer **may not** start their work until all integration checks are
passing.

Developers **may** create additional commits directly to their forked Branch to see their updates appear in the Pull
Request. These commit messages don't need to follow the verbose standards of the Primary Commit Message, as they're
squashed into the commit body when a Project Maintainer accepts the Pull Request.

The Code Review process is relatively simple for this project. Each area of the code has a defined set of
[Code Owners][codeowners] that are responsible for the development and enforcement of standards, enforcement of which
occurs during the Code Review process. If you change more than one Code Owners' section of code, expect to have multiple
reviewers assigned to your Pull Request. The [`CODEOWNERS`][codeowners] file contains details on what project sections
different Code Owners maintain.

Code Owners may also enlist Project Maintainers for advanced review, areas that are complex, or contributions that
change significant portions of the project. Project Maintainers oversee the entire project and have final say on all
Code Reviews.

During Code Review, the following areas are, at minimum, reviewed:

- Code quality and style
- Architecture and patterns
- Test accuracy, completeness, and coverage
- Documentation and commenting
- Adherence to standards and requirements
- Review of new standards, if applicable
- Coordination of larger changes
- Prioritizing understanding over cleverness
- Areas of improvement or future development
- Adherence to Primary Commit Message standards

Comments on your Pull Request may occur on specific pieces of code, or on the Pull Request, itself. All conversations
within a Pull Request **must** achieve resolution, although not necessarily development, prior to acceptance. This
**may** require changes to the submission or **may** entail a conversation to come to a common understanding on why
the Contributor elected a particular methodology. Regardless, it's the responsibility of the Contributor to resolve all
threads.

When all reviewers accept the Pull Request, the following actions occur:

<!-- editorconfig-checker-disable -->

1. The Project Maintainer [squashes][squash] all commits to a single commit with the Primary Commit Message representing the title, and, by that action, the changelog message
2. The Project Maintainer deletes the merged Branch, if not a remote Fork
3. The Project Maintainer closes the Pull Request
4. Automatic integration testing occurs - on only changed files, for the [`main`][branch-main] Branch, or end-to-end, for [`staging`][branch-staging] or [`production`][branch-production] Branches
5. The Project Maintainer moves the Issue to the appropriate state, being one of `Status: 04-Pending Staging`, `Status: 05-Staged`, or `Status: 06-Released`, depending on the target Branch for the Pull Request

<!-- editorconfig-checker-enable -->

**Don't** squash your commits manually. The Project Maintainer does this for you when accepting the Pull Request.

> **Note:** While the Issue is technically "closed" at this point by GitHub, it's not "done." This project's
> **Definition of Done** is when the Issue is in the `Status: 06-Released` state per the Issue's status label.

#### `Status: 04-Pending Staging`

At this point in the Software Development Lifecycle, the work for the Contributor is effectively complete, apart from
the rare occurrence where end-to-end integration tests - which occur immediately after the acceptance of a Pull
Request - returns an unexpected failure.

In such a case, the associated environment Branch, generally [`production`][branch-production], undergoes a
[Hot-Fix](#hot-fixes-and-critical-releases) pattern to resolve the problem.

Issues **may** stay in the `Status: 04-Pending Staging` state for some time until a Project Maintainer performs a
Release to the `staging` server. This occurs when the Project Maintainer performs a successful Pull Request from the
[`main`][branch-main] Branch to the [`staging`][branch-staging] Branch.

This action creates a special integration that tests the entire project's codebase from end-to-end. If these tests pass,
accepting the Pull Request results in a successful `staging` environment deployment and, generally, a `beta` Release. At
this point, all Issues in-scope have the `Status: 05-Staged` status label applied.

> Not all projects have a `staging` environment and, therefore, don't use the `Status: 04-Pending Staging` or
> `Status: 05-Staged` status labels. In such a case, the [`main`][branch-main] Branch merges directly on to the
> [`production`][branch-production] Branch, and the Project Maintainers update Issue labels directly to
> `Status: 06-Released`.

#### `Status: 05-Staged`

Staged statuses reflect Issues that are on the [`staging`][branch-staging] Branch and environment. They're pending
end-to-end testing before a Project Maintainer promotes them to the [`production`][branch-production] Branch.

Generally, Project Maintainers use this for efforts such as performance testing, penetration testing, user acceptance
testing, and other areas of focus that require a pre-production `staging` environment to perform. This Branch may also
be available to end-users as a `beta` Release, but not always. The actions taken during this step vary from project to
project.

When all `staging` efforts are complete, the [`staging`][branch-staging] Branch has a Pull Request created, merging it
into the [`production`][branch-production] Branch for a `production` Release.

#### `Status: 06-Released`

When all integration checks pass and Project Maintainers have completed all `production` checklists, the Project Owner
creates a Pull Request from the [`staging`][branch-staging] Branch - or from the [`main`][branch-main] Branch if no
[`staging`][branch-staging] Branch is in use) - for review and approval. When this approval occurs, the
[`production`][branch-production] Branch becomes updated with all related Issue changes that were in the
`Status: 05-Staged` state, and Project Maintainers update such Issues to the final `Status: 06-Released` status label.

At this point the Software Development Lifecycle is complete for a given Issue, pending any unforeseen Hot-Fixes.

### Issue triage

Issues are regularly triaged by Project Maintainers to review and potentially accept. Issues stay in a `Requested` state
with the `Needs Triage` label until this occurs. All triage priority is under the sole discretion of the Project
Maintainers and Project Owner.

During triage, Project Maintainers either accept or reject all pending Issues. If accepted, the following changes occur:

1. Project Maintainers remove the `Needs Triage` label
2. Project Maintainers change the `Requested` label to the appropriate Issue `Type` label
3. Project Maintainers apply the `Status: 01-Pending` label
4. Project Maintainers elect an appropriate `Priority` and add that label

If Project Maintainers reject an Issue, generally, they add a comment explaining the rationale, but this isn't
necessarily required. In such a case, the Project Maintainers remove the `Needs Triage` label and add an appropriate
`Wontfix` label.

Project Maintainers understand that times and needs change, and therefore are open to reconsidering rejected requests.
If you have a rejected Issue, or you have interest in another parties' rejected Issue, you may resubmit it for
reconsideration no-fewer than 3-months past the rejection date for subsequent review. Please don't comment on existing,
closed Issues, as Project Maintainers don't monitor or respond to such comments. Always open another Issue when re-
requesting a topic.

Any individual that abuses the Issue submission mechanism may be subject to restrictions from the project as described
in the [Code of Conduct][conduct].

### Submission requirements

This project aims to keep code clean and consistent to ensure contribution is available and easy for as many individuals
as feasible. As such, the project maintains a number of requirements as part of integration testing. All contributions
undergo testing for these requirements.

#### Testing

All code must be fully tested with thorough unit testing. This project maintains a high **95% branching code coverage**
policy. This ensures that Contributors write all code from the start with a high level of testability preventing complex
integrations and tedious refactors in the future. Please don't submit any Pull Requests without developing a
comprehensive test suite, first.

The GitHub integration platform tests the project in a Docker containerized infrastructure, allowing testing locally in
as many local development environments as possible. All testing additions for operational changes must have automation
included as part of the central core of the project's Continuous Integration / Continuous Delivery (CI/CD) mandate.

Testing of this project also includes:

- Code linting and style
- Documentation linting and style
- File format standardization
- Commenting coverage
- Spelling and grammar
- Operational best practices

For more information on testing procedures, please refer to the project's [`README.md`][readme] file.

#### Code style

This project enforces significant code style standards through [linting][linting] tools during the Pull Request process.
The details of these requirements vary depending on the files edited.

Rules for code style vary by file type and project, and are best reviewed by accessing these resources:

- [`.editorconfig`][editorconfig] - enforces spacing and typesets; supported by most IDEs
- [`.mega-linter.yml`][megalinter-yml] - [MegaLinter][megalinter] runs the linting suite for this project

The `.mega-linter.yml` configuration file contains details on how linter configurations. Paired with the
[MegaLinter website][megalinter], Contributors may work to understand default behavior and requirements for this
project.

That said, the MegaLinter output, itself, aims to be extremely informative in a "learn as you go" approach. This occurs
by running `make test-lint` - or `make test`, to include unit tests - after installing any
[development dependencies][dev-dependencies] described in the [`README.md`][readme] file.

#### Branch naming conventions

Branch names on personal Forks may follow any convention a developer prefers. For Branches within this official project
Repository, the Project Maintainers enforce the following rules:

<!-- editorconfig-checker-disable -->

1. The [`main`][branch-main] Branch **must** be the primary Branch, and it **must** always reflect the `edge`` Release of the project
2. The [`staging`][branch-staging] Branch, if used, **must** be the first Branch Released to from [`main`][branch-main] and **must** reflect the `staging`, `pre-release`, or `beta` Release of the project
3. The [`production`][branch-production] Branch **must** be the final Branch and **must** reflect the latest `production` Release - this Branch **must** have a Release version Tag in the format `vX.X.X`, as defined at [Semantic Versioning](#semantic-versioning)

<!-- editorconfig-checker-enable -->

For all other Branches not forked, Project Maintainers enforce following format:

`type/####/descriptive-tag`

Where:

`type` equates to the type of Issue, being one of:

- `bug` for a bug-fix
- `doc` for documentation changes
- `feat` for a new or updated feature
- `ops` for operational changes
- `release` for a Release

`####` refers to a zero-padded Issue ID. For example, Issue #8 would be `0008`.

`descriptive-tag` is an easy-to-read shorthand describing what the purpose of the Issue and Branch are.

The only developers who should be creating this type of Branch are Code Owners, as they sometimes work directly from the
`upstream` Repository for specific purposes or to empower collaborations.

#### Commit message conventions

All Contributors **should** [write great commit messages][commit-msg]. Commit messages are both critical in developing
the changelog for the project and to act as a record of decisions made during the workflow for later reference.

Each Issue **must** have a **Primary Commit Message** - this is the final representation of the Issue, Branch, and
Pull Request in a format that allows for adequate insight into the solution generated. Any additional commits made
subsequent to the Primary Commit Message - for example, during Code Review - don't need to follow these standards as
they're [squashed][squash] into the Primary Commit Message during acceptance.

The Primary Commit Message is the commit message used to represent a submission for a Pull Request and in the project's
changelog. Developers **should** make this the first commit into the Branch for a given Issue, otherwise significant
effort may have to occur from the Contributor to clean the commit formatting during the Pull Request submission.

Finally, it's also important to create a [good commit][commit-msg] for the Primary Commit Message to ensure that
integrations work correctly and so that future developers have the appropriate reference for code changed beyond the
corresponding Issue, if it's ever required.

##### Commit message title

The commit message title of all Primary Commit Messages messages **must** follow this format to both trigger automation
workflows and to ensure proper changelog generation:

```text
Type: Short description (closes #42)
```

Where:

<!-- editorconfig-checker-disable -->

- `Type` matches the Issue label `Type`, being one of:
  - `Fix` for a bug-fix
  - `Docs` for documentation changes
  - `New` for a new feature
  - `Update` for an update to a feature
  - `Ops` for operational changes
  - `Release` for a Release (only available to Project Maintainers)
- `Short description` describing the change for the changelog. This **must** have proper capitalization in sentence form, lack ending punctuation, and read like a changelog message. For example, `Changed all titles to Spanish`.
- `(closes #42)` a reference to the Issue - this is critical for automation

<!-- editorconfig-checker-enable -->

The total size of the commit message title **should** be fewer than 50 characters and **must** be fewer than 72
characters.

Commits **must not** close multiple Issues, even though GitHub supports it. If duplicates Issues should close or other
Issues become obsolete, Contributors and Project Maintainers **must** manage this through the GitHub website interface
with appropriate comments for context. This ensures proper communication between parties that might differ between
different Issues, and occasionally, projects.

Additionally, Primary Commit Message titles **must not** use other control words besides `closes` for automation or
other purposes, even if GitHub supports them. This ensures future automation efforts and changelog parsing remain
consistent.

##### Commit message body

The Contributor **must** create a body for the Primary Commit Message as a reflection of the effort required to complete
the overall, squashed commit.

For example, if the overall effort was trivial with a single line change, and the title of the commit message clearly
states everything needed for future developers, the necessity of a body may be in question (although, this is rare and
commonly limited to operational changes). However, if the context includes the delivery of a feature or the fix of a
bug, it's critical that the body exist and contain enough information to be informative for future developers.

In such cases, the Primary Commit Message body **must** follow these requirements:

1. The body **must** separate itself from the title by a blank line
2. The body **must** wrap at 72 characters
3. The body **should** explain _what_ and _why_ about the change - not the _how_

Regarding item 3 in the preceding list, the goal is to prevent a fellow developer from having to try to determine what
changes to investigate and prevent thing from having to spend significant time deciphering the "why" of a change through
ineffective `diff` parsing. Conversely, determining "how" the accomplishment of a task happened is generally quite
trivial by reading code and proper comments.

As such, generally, details about _how_ a change occurred **should 't** take up space in the Primary Commit Message
body. Instead, write code in a way that's clear, self-explanatory, or otherwise documented _in the project,_ not the
commit.

The commit body **should** focus on making clear the reasons as to why changes ocurred in the first place, the way
things worked before the change, why that needed changing, the way they work now, and why the Contributor decided to
solve it the way they did.

Here is an example of an excellent, [real][commit-example] commit message, adjusted for this project's standards:

<!-- vale off -->
<!-- cSpell:disable -->

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

<!-- cSpell:enable -->
<!-- vale on -->

#### Signed commits

While [signed commits][sign-commits] aren't currently required, the deprecation of unsigned commits is already in effect
and future standards, in approximately mid-2024, should remove their support entirely.

It's possible that Project Maintainers _may_ have a requirement to squash unverified commits into verified commits
during this transition to meet new project standards, potentially losing your contribution tracking and reflection on
your GitHub profile when this occurs.

As such, the Project Maintainers **highly** recommend that you configure your development environment for commit signing
before contributing to secure your contributions across all of your projects and to prevent disruption to your workflow
when this new requirement comes into effect.

---

## Releases

The tracking and planning of Releases occurs via in the project's [Milestones][milestones] utility. Each Release has a
version number and a respective Milestone which groups Issues into for planning and distribution. When a Milestone is
complete, Project Maintainers create a new Release in the project's [Releases][releases] section.

A Pull Request from the [`main`][branch-main] Branch to the [`staging`][branch-staging] Branch is the primary mechanism
for executing a pre-release, whether that'ss considered a `staging` Release or a `beta` Release depends on the project.

A Pull Request from the [`staging`][branch-staging] Branch, or the [`main`][branch-main] Branch, if no `staging`
environment is in use, to the [`production`][branch-production] Branch is the primary mechanism for executing a
`production` Release for every project.

These Pull Requests **must** match an Issue created explicitly for tracking the Release and **must** have the label
`Type: Release`.

Unlike [`main`][branch-main] Branch commits, the entire codebase **must** be fully linted and tested any time a
[`staging`][branch-staging] or [`production`][branch-production] Branch Pull Request occurs. While rare,
occasionally Issues occur in these tests that only appear when end-to-end testing completes.

Code Review of the Pull Request **should** focus on user acceptance testing and ensuring that the project works as
expected. When Project Maintainers accept such a Pull Request, a rebase strategy **must** happen when merging the two
Branches. It's important that Project Maintainers use a rebase strategy retain the changelog from commit messages in
chronological order.

Once a Release completes, all Issues that were within scope of the Release **must** move to the `Released` state by
changing those Issues' labels.

Finally, the last commit message for the Release **must** have a Tag added in the format `v#.#.#` to follow the Semantic
Versioning standard, also called "SemVer", for short.

### Semantic Versioning

Releases of this project follow [Semantic Versioning](http://semver.org/) standards in a `MAJOR.MINOR.PATCH` versioning
scheme of the following format:

- `MAJOR` - used when the application undergoes major, incompatible changes with the last Release
- `MINOR` - used when the Release adds capability in a backwards-compatible manner
- `PATCH` - used when the Release patches existing capabilities, such as documentation, bug fixes, and minor features

---

## Hot-Fixes and critical Releases

Occasionally, a requirement for a Hot-Fix occurs that requires pushing additional capabilities or urgent fixes outside
of the full Software Development Lifecycle. Hot-Fixes **must** always happen in collaboration with a Project
Maintainer, as this is an exception to the community's agreed processes and requires a Project Maintainer to execute.

A Hot-Fix occurs by creating a Fork from, and submitting a Pull Request to, the appropriate environment Branch - most
commonly the [`production`][branch-production] Branch. This skips the [`main`][branch-main] Branch, entirely.

Hot-Fixes must pass full testing standards and integration tests for the project, no different than any other Production
Release. Project Maintainers may approve partial Releases to "stem bleeding" for serious incidents, but the a Hot-Fix
isn't considered "done" until the associated environments meet all test standards.

Once a Project Maintainer accepts and deploys a Hot-Fix Pull Request, the Project Maintainer is accountable for rebasing
the changes back to all prior Branches, including [`main`][branch-main] and potentially [`staging`][branch-staging],
to ensure all Contributor Forks can incorporate the Hot-Fix changes into their work. With normal procedures, this should
have minimal lifecycle impact for Contributors, requiring them only to rebase their working Branches prior to submitting
a Pull Request, which is normal procedure. Occasionally, Contributors **may** require merge work for such a rebase to
complete successfully.

Hot-Fixes have a significant opportunity for risk and often impact development teams negatively. As such, they're
limited in their use, often to only security and major performance concerns.

---

## Standards subject to change

With every Pull Request, the Project Maintainers have the opportunity to better refine the style and acceptance
guidelines listed here. As such, you may have an ask to include an updated set of code style guidelines due to
unforeseen inconsistencies in submitted code or the necessary creation of new standards due to scope changes. While this
requires Contributors to change and resubmit their work, it furthers the communities' ability to maintain consistency
and improving standards as the project grows.

With this in mind, these guidelines are subject to change at any time, without notification, at the sole discretion of
the Project Maintainers.

---

<!-- prettier-ignore-start -->
<!-- omit from toc -->
## [No brown M&Ms][m-n-ms]

First, you are an amazing human for reading this document and taking the time to make your efforts genuine. Bravo - you
are awesome.

Second, the Project Maintainers prioritize triage of any Issues that come from individuals who have read these
Contributing Guidelines in full. To show that you are one of these rare individuals, please put this candy icon at the
top of your Issues and Pull Requests with the code `:candy:`: :candy:

<!-- prettier-ignore-end -->

<!-- Link repository -->
<!-- editorconfig-checker-disable -->

[branch-main]: https://github.com/andrewvaughan/template-core/tree/main
[branch-production]: https://github.com/andrewvaughan/template-core/tree/production
[branch-staging]: https://github.com/andrewvaughan/template-core/tree/staging
[cert-origin]: https://developercertificate.org/
[codeowners]: CODEOWNERS
[commit-example]: https://github.com/bitcoin/bitcoin/commit/eb0b56b19017ab5c16c745e6da39c53126924ed6
[commit-msg]: https://chris.beams.io/posts/git-commit/
[conduct]: CODE_OF_CONDUCT.md
[dev-dependencies]: ../README.md#developer-dependencies
[discord]: https://discord.gg/6x6T3yMtvB
[discussions]: https://github.com/andrewvaughan/template-core/discussions
[editorconfig]: https://editorconfig.org/
[feature-creep]: https://en.wikipedia.org/wiki/Feature_creep
[fork]: https://docs.github.com/en/get-started/quickstart/fork-a-repo
[issue-bug]: https://github.com/andrewvaughan/template-core/issues/new?assignees=andrewvaughan&labels=Needs+Triage%2CRequest%3A+Bug+Fix&projects=&template=BUG_REPORT.yml
[issue-feature]: https://github.com/andrewvaughan/template-core/issues/new?assignees=andrewvaughan&labels=Needs+Triage%2CRequest%3A+Feature+Request&projects=&template=FEATURE_REQUEST.yml
[issue-security]: https://github.com/andrewvaughan/template-core/security/advisories/new
[issues]: https://github.com/andrewvaughan/template-core/issues
[issues-features]: https://github.com/andrewvaughan/template-core/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22Type%3A+Feature%22
[license]: ../LICENSE
[linting]: https://en.wikipedia.org/wiki/Lint_%28software%29
[m-n-ms]: https://en.wikipedia.org/wiki/Van_Halen#Contract_riders
[megalinter]: https://megalinter.io
[megalinter-yml]: ../.mega-linter.yml
[milestones]: https://github.com/andrewvaughan/template-core/milestones
[project]: https://github.com/andrewvaughan/template-core
[pull-requests]: https://github.com/andrewvaughan/template-core/pulls
[readme]: ../README.md
[rebasing]: https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase
[releases]: https://github.com/andrewvaughan/template-core/releases
[rubber-duck]: https://rubberduckdebugging.com
[security]: https://github.com/andrewvaughan/template-core/security/policy
[sign-commits]: https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification
[squash]: https://www.git-tower.com/learn/git/faq/git-squash
[support]: SUPPORT.md
[xy]: https://meta.stackexchange.com/questions/66377/what-is-the-xy-problem/66378#66378

<!-- editorconfig-checker-enable -->
