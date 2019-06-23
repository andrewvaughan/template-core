# Contributing

[This project][project-url] would not exist without its contributors, and we welcome you to join us in our endeavor.
This guide is intended for anyone who wants to contribute, in any way, directly or indirectly. Please read this
document carefully before contributing, as it answers many of the questions that new contributors have when first
working with our projects.

## Agreement

By submitting any work to this project, you agree to the [project license][license-url] as well as to these principal
guidelines:

1. Any work contributed is original work, or you otherwise have the right to submit the work;
1. You grant this project and its members a non-exclusive, irrevocable license to use your submitted work in any way; and,
1. You are capable of and interested in granting these rights for the contribution.

## Ways to Contribute

There are many ways to contribute to this project:

* **Report a Bug** - if you find a bug, please [file a detailed issue](#bug-reports)
* **Request a Feature** - if you want to request a feature, please [submit a request](#feature-requests)
* **Work on an Issue** - if you wish to contribute directly, please feel free to work on [any open issue](#working-on-issues)

### Bug Reports

Perfect code is rare, and this project is no exception. If you find a bug, or feel something is acting strangely,
please [file an issue][github-issues] so that it can be addressed. When filing an issue, please provide the following
information:

* What version of the project you were using
* What you did
* What you expected to happen
* What actually happened

Additional questions may be asked when opening a "Bug Report" type of issue. Please answer all questions to the best
of your ability, as that will allow us to prioritize a fix more effectively.

### Feature Requests

We love ideas of any form. Even if you cannot add a feature on your own, we welcome any and all suggestions. When
making a feature request, please [file an issue][github-issues] and provide the following information:

* The feature you want to add or problem you want to solve
* Your take on the correct approach to building the new functionality

Additional questions may be asked when opening a "Feature Request" issue. Please answer all questions to the best of
your ability, as that will allow us to review and prioritize the feature more effectively.

## Working on Issues

All bugs and features are stored in our [GitHub Issues][github-issues] section. It is here that we determine which
issues will be road-mapped for various releases and plan our milestones and versions accordingly. Releases can be
found on the [GitHub Releases][[github-releases] page. All issues that are received will be reviewed by the core
development staff and assigned a milestone and a version for release.

If you intend to work on a specific issue, please add a comment to the issue saying so, while also indicating when you
think you will be able to complete it. This will help us avoid duplication of effort. If you find that you cannot
finish the work, we very much appreciate comments letting people know so someone else knows to pick it up.

### Pull Requests

All contributions to this project must go through a [GitHub Pull Request][github-pulls]. In addition, all Pull
Requests must be directly related to an open issue. You should familiarize yourself with the [GitFlow][gitflow] model
and [rebase merges][rebase] before getting started. As GitHub now supports "Squash" merges directly, we use this
method universally when accepting pull requests to keep our changelog clean.

#### Example Lifecycle of an Issue's Development

**1. Open or choose an issue to work on**

Before working, please identify or create an issue for what you are looking to contribute.

> **Note** that only accepted issues will be merged, and if your issue is not slated for a version and a milestone, it
> may not be accepted. You may request that the issue be identified for release before you begin working.

**2. Announce that you will be working on that issue**

Let us know when you plan to start on the issue and how long you think it will take you. This will help us be ready
to support you when it comes time to review.

**3. Fork the project repository and initialize GitFlow**

Every contributor, including core staff, is required to work within a fork of their own repository. All branches on
the main repository are meant for distribution purposes only.  See [this page][github-forking] for details on forking
a repository on GitHub.

Assuming you have the [Git Flow Plugin][gitflow-plugin] properly installed, you can clone this freshly-forked
repository and set it up for Git Flow as follows:

```bash
git clone git@github.com:<your-username>/devops.git
cd devops
git flow init
```

When initializing, all projects should use the following configurations:

| Configuration                               | Setting    |
|--------------------------------------------:|:----------:|
| Branch name for production releases:        | `master`   |
| Branch name for "next release" development: | `develop`  |
| Feature branches?                           | `feature/` |
| Release branches?                           | `release/` |
| Hotfix branches?                            | `hotfix/`  |
| Support branches?                           | `bugfix/`  |
| Version tag prefix?                         | `v`        |

> *Note:* That all options above, except for **Support branches** and **Version tag prefix**, are the default for Git
> Flow.

**4. Add the project upstream remote**

In order to keep your code up to date with the project's `develop` branch, you need to add the project's main
repository as your upstream:

```bash
git remote add upstream https://github.com/<!-- account_slug -->/<!-- repo_slug -->/devops.git
git fetch upstream develop
```

**5. Ensure that your `develop` branch is up to date with the upstream**

When starting a new branch, it is important to ensure you are branching from the latest version of the project's
`develop` branch:

```bash
git checkout develop
git rebase upstream/develop
```

**6. Create a new branch**

Use the `git-flow` plugin to create an appropriate branch for your work. For instance, if you are creating a
`feature` branch, you might create the branch as follows:

```bash
git flow feature start my-new-feature
```

This will create the `feature/my-new-feature` branch on your local computer. To make sure you track this correctly
with your personal, forked repository, publish it:

```bash
git flow feature publish my-new-feature
```

This branch name is your discretion, but descriptive names will help users ensure correct context when working.

**7. Make your changes**

Make your changes, add tests, and commit! All features must be tested across all code branches before they will be
accepted. This project makes use of automated testing tools to provide thorough testing and code-style rules to ensure
consistency across the project.

Please refer to our [code standards](#code-style-requirements) to save yourself time when testing!

**8. Rebase onto upstream**

Before you send a pull request, be sure to rebase onto the upstream source. This ensures your code is running on
the latest available code and is compatible with the latest codebase. This also ensures your Pull Request will not be
rejected:

```bash
git fetch upstream develop
git rebase upstream/develop
```

**9. Ensure all tests pass**

After rebasing, be sure to run the test suite to make sure nothing is broken. You need to ensure that your coverage
and tests do not fail on the latest project `develop` branch.

**10. Squash your commits (Optional)**

> **Note!** This step is *entirely optional*, as the core contribution staff will squash any commits you have upon
> Pull Request.  The staff may choose to change your commit message, however, if this step is not followed.

Commits on the production environment are used as a change log for releases. As such, commits must be
[squashed][squash-support] to a single commit before being accepted.

On the last step of your rebase, all commit messages must follow a specific standard to be accepted:

```
Tag: Message (closes #issueno)
```

In this case, `Tag` is one of the following:

* `Fix` - for a bug fix
* `Update` - for any update to existing functionality
* `New` - for any new functionality
* `Docs` - for documentation updates
* `DevOps` - for changes to build or automation (or general operational changes)
* `Upgrade` - for dependency upgrades

The `Message` should be a one-sentence description of the change. Finally, the issue number the Pull Request
represents should be mentioned at the end. If the commit does not completely resolve the issue, please use
`(refs #1234)` instead of `(closes #1234)`. Alternatively, with bugs, you may choose to use `fixes` instead of
`closes`.

Here are some good examples:

```
DevOps: Added new Python version to Travis-CI config (closes #19)
Fix: Resolved bug due to extra semicolon (fixes #220)
Upgrade: Upgraded (some pip module) from 1.0.0 to 1.1.0 (closes #999)
Docs: Added license data to readme as part of new licensing project (refs #42)
```

**11. Submit a Pull Request**

You're ready to submit your pull request! Refer to the [GitHub documentation][pull-support] on how best to send a
pull request from your fork.

**12. Watch for status**

All Pull Requests must pass automated testing. Any new functionality must have additional tests created to test all
code branches in unit and integration tests.

If the build passes or fails, it will show up on the Pull Request automatically upon submission. We cannot accept any
Pull Requests that fail our criteria for a build, so, if that happens, please fix the error and then `git push` to
update the Pull Request, automatically triggering another integration build.

## Code Style Requirements

All code provided to this project must follow a strict set of code standards to prevent unnecessary commit logs from
being introduced due to formatting. The project codebase is checked against linting rules before running unit tests.

Before submitting a Pull Request, all tests must be run, provide full coverage of functionality, and successfully
pass before a request will be reviewed. Detailed linting errors are provided as part of the test suite, and specific
rules can be found in each of the linting configuration files in the root of the project.

### Standards Subject to Change

With every Pull Request, the core team has the opportunity to better refine our style and acceptance guidelines. As
such, you may be requested to pull an updated set of code style guidelines due to an unforeseen inconsistency in
submitted code, and to resubmit your request according to the new guidelines.

## Developer Support

Thank you for taking the time to read this documentation! If you still have any questions or concerns, please review
our [Support Documentation][support-url] on how you can get in contact with the core contribution staff and other
developers.


[project-url]:     https://github.com/<!-- account_slug -->/<!-- repo_slug -->/
[license-url]:     https://github.com/<!-- account_slug -->/<!-- repo_slug -->/blob/master/LICENSE
[support-url]:     https://github.com/<!-- account_slug -->/<!-- repo_slug -->/blob/master/SUPPORT.md

[github-releases]: https://github.com/<!-- account_slug -->/<!-- repo_slug -->/releases
[github-issues]:   https://github.com/<!-- account_slug -->/<!-- repo_slug -->/issues
[github-pulls]:    https://github.com/<!-- account_slug -->/<!-- repo_slug -->/pulls

[github-forking]:  https://help.github.com/en/articles/fork-a-repo

[squash-support]:  http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html
[pull-support]:    https://help.github.com/en/articles/creating-a-pull-request

[gitflow]:         https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
[gitflow-plugin]:  https://github.com/petervanderdoes/gitflow-avh/wiki/Installation
[rebase]:          https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history
