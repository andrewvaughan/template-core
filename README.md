<!-- markdownlint-disable MD041 -->

<!-- !!! Follow the `_TEMPLATE_CHECKLIST.md` file as a guide to setup this repository prior to editing this file !!! -->

<!-- TEMPLATE TODO - Update or remove the hero image -->
<div align="center">
  <a href="https://github.com/andrewvaughan/template-core" target="blank" title="New Project Template">
    <!-- markdown-link-check-disable-next-line -->
    <img src="https://example.com/path/to/banner-1896x498.png" alt="New Project Template" min-height="200px" />
  </a>
</div>

# New project template

<!-- TEMPLATE TODO - Update the URLs for these badges, below, to the appropriate state of the project -->

[![Version][badge-version-img]][badge-version]
[![License][badge-license-img]][badge-license]
[![Build Status][badge-build-img]][badge-build]
[![Linting][badge-linting-img]][badge-linting]
[![Coverage][badge-coverage-img]][badge-coverage]
&nbsp;
[![New Since v0.0.0][badge-since-last-ver-img]][badge-since-last-ver]
[![Issue Develop Avg][badge-issue-dev-avg-img]][badge-issue-dev-avg]
[![Last Edge Release][badge-last-edge-img]][badge-last-edge]
[![Last Stage Release][badge-last-stage-img]][badge-last-stage]
[![Last Prod Release][badge-last-prod-img]][badge-last-prod]
&nbsp;
[![Sponsor][badge-sponsor-img]][badge-sponsor]
[![Discord][badge-discord-img]][badge-discord]

<!-- TEMPLATE TODO -->

_Replace this with a short description of what this project is about._

<!-- prettier-ignore-start -->
<!-- omit from toc -->
## Contents

- [New project template](#new-project-template)
  - [Installation](#installation)
    - [Dependencies](#dependencies)
    - [Quick start](#quick-start)
    - [Manual installation](#manual-installation)
  - [Usage](#usage)
    - [Configuration](#configuration)
  - [Support](#support)
    - [Frequently asked questions](#frequently-asked-questions)
  - [Contributing](#contributing)
    - [Developer installation](#developer-installation)
      - [Developer dependencies](#developer-dependencies)
    - [Testing](#testing)
  - [Release policy](#release-policy)
  - [License](#license)

---
<!-- prettier-ignore-end -->

## Installation

<!-- TEMPLATE TODO -->

_Add a brief introduction as to how users, not developers, perform a normal installation of the project._

### Dependencies

<!-- TEMPLATE TODO -->

_Add detail in this section regarding any dependencies or installation requirements that users, not developers, need
before installing and using the tool. This **must** focus on **using** the tool, not developing it. Delete this section
if there are no production dependencies required for the project._

### Quick start

<!-- TEMPLATE TODO -->

_Add a brief set of instructions on how to get quickly up and running for the most-common use cases. Delete this section
if a quick-start concept doesn't apply._

### Manual installation

<!-- TEMPLATE TODO -->

_If manual installation steps differ from the quick-start in the preceding section, add more verbose instructions here.
Otherwise, delete this section._

---

## Usage

<!-- TEMPLATE TODO -->

_Provide detailed instructions on how to use this project, if applicable. Otherwise, delete this section._

### Configuration

<!-- TEMPLATE TODO -->

_If the project has configuration capabilities, provide them here in full detail. Otherwise, delete this section._

---

## Support

The [Support Documentation][support] contains details for getting support for this project. As an open source project,
support is generally limited to the surrounding community and isn't guaranteed. Please refer to these instructions prior
to opening an [Issue][issues] or [Discussion][discussions].

Parties interested in contributing to the project must read the [Contributing Guidelines][contributing] prior to doing
so.

All individuals must adhere to the project's [Code of Conduct][code-of-conduct], regardless of how they choose to
engage.

### Frequently asked questions

<!-- TEMPLATE TODO -->

_If you can answer common questions for your project, start this section. Delete the section, if not._

---

## Contributing

There are many ways to contribute to this project. If you have an idea, or have discovered a bug, please
[open an Issue][new-issue]. You can also start or join a [Discussion][discussions] to get your feet wet with the
project, first.

If you have interest in contributing to the project through design or development, please read the project's
[Contributing Guidelines][contributing].

### Developer installation

<!-- TEMPLATE TODO -->

_Add details for developers on how to setup their environment, including installing additional, developer dependencies,
for individuals wishing to contribute to the project._

#### Developer dependencies

<!-- TEMPLATE TODO -->

_Add or modify this section to describe the dependencies used in development._

This project aims to be as agnostic as possible across all development environments. As such, development dependencies
are purposely limited to a few critical elements:

| Dependency             | Purpose                                                                    |
| :--------------------- | :------------------------------------------------------------------------- |
| [act][inst-act]        | Allows for running the project's GitHub [actions][actions] locally         |
| [Docker][inst-docker]  | Virtualization platform used for testing, running, and building code       |
| [GNU Make][inst-make]  | Primary tool for executing test, build, clean, and other commands          |
| [Node.js][inst-nodejs] | Used to download certain command-line packages for `npx`                   |
| [npx][inst-npx]        | Node.js package execution helper to run certain non-containerized commands |

### Testing

An important part of the project's [Software Development Lifecycle][sdlc] is continuous testing. The configuration of
the project aims to make this as low effort as possible. Ensure that you have the
[developer dependencies](#developer-dependencies) installed and run the following command:

```bash
make test
```

This runs a full test suite. The project provides a number of utility functions to make your life easier during
development. You can find the full list by running:

```bash
make help
```

---

## Release policy

Releases of this project follow [Semantic Versioning](http://semver.org/) standards in a `MAJOR.MINOR.PATCH` versioning
scheme of the following format:

- `MAJOR` - used when the application undergoes major, incompatible changes with the last Release
- `MINOR` - used when the Release adds capability in a backwards-compatible manner
- `PATCH` - used when the Release patches existing capabilities, such as documentation, bug fixes, and minor features

[GitHub][releases] hosts all Releases and manages all [Release tags][release-tags].

---

## License

The [LICENSE][license] file contains the full text of this project's License.

<!-- TEMPLATE TODO -->

_Add selected License short text in this area, if applicable._

<!-- Link Repository -->

<!-- editorconfig-checker-disable -->
<!-- vale off -->

[actions]: https://github.com/andrewvaughan/template-core/actions
[badge-version]: https://github.com/andrewvaughan/template-core/releases
[badge-version-img]: https://img.shields.io/github/v/release/andrewvaughan/template-core?sort=semver
[badge-discord-img]: https://img.shields.io/badge/Join_the_Discord-5865F2.svg?style=flat&logo=Discord&logoColor=white
[badge-discord]: https://discord.gg/6x6T3yMtvB
[badge-issue-dev-avg]: https://github.com/andrewvaughan/template-core/graphs/commit-activity/
[badge-issue-dev-avg-img]: https://img.shields.io/github/commit-activity/m/andrewvaughan/template-core/main?logo=github&label=issue%20solve%20avg
[badge-last-edge]: https://github.com/andrewvaughan/template-core/commits/main/
[badge-last-edge-img]: https://img.shields.io/github/last-commit/andrewvaughan/template-core/main?logo=github&label=last%20edge%20push
[badge-last-prod]: https://github.com/andrewvaughan/template-core/commits/production/
[badge-last-prod-img]: https://img.shields.io/github/last-commit/andrewvaughan/template-core/production?logo=github&label=last%20prod%20push
[badge-last-stage]: https://github.com/andrewvaughan/template-core/commits/staging/
[badge-last-stage-img]: https://img.shields.io/github/last-commit/andrewvaughan/template-core/staging?logo=github&label=last%20stage%20push
[badge-license]: LICENSE
[badge-license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat&logo=opensourceinitiative&logoColor=white
[badge-build]: https://github.com/andrewvaughan/template-core/actions
[badge-build-img]: https://img.shields.io/badge/build-N/A-rgb(200%2C200%2C200).svg?style=flat&logo=dependabot&logoColor=white
[badge-coverage]: https://github.com/andrewvaughan/template-core
[badge-coverage-img]: https://codecov.io/gh/andrewvaughan/template-core/branch/main/graph/badge.svg
[badge-linting]: https://github.com/andrewvaughan/template-core/actions/workflows/mega-linter.yml
[badge-linting-img]: https://github.com/andrewvaughan/template-core/actions/workflows/mega-linter.yml/badge.svg
[badge-since-last-ver]: https://img.shields.io/github/commits-since/andrewvaughan/template-core/0.0.0?logo=github&label=new%20since%20v0.0.0
[badge-since-last-ver-img]: https://github.com/andrewvaughan/template-core/commits/main/
[badge-sponsor]: https://andrewvaughan.github.io/sponsorships
[badge-sponsor-img]: https://img.shields.io/badge/sponsor%20me!-4AAAEA.svg?style=flat&logo=githubsponsors&logoColor=EA4AAA
[code-of-conduct]: .github/CODE_OF_CONDUCT.md
[contributing]: .github/CONTRIBUTING.md
[discussions]: https://github.com/andrewvaughan/template-core/discussions
[inst-act]: https://github.com/nektos/act
[inst-docker]: https://www.docker.com/get-started/
[inst-make]: https://www.gnu.org/software/make/
[inst-nodejs]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[inst-npx]: https://www.npmjs.com/package/npx#install
[issues]: https://github.com/andrewvaughan/template-core/issues
[license]: LICENSE
[new-issue]: https://github.com/andrewvaughan/template-core/issues/new
[releases]: https://github.com/andrewvaughan/template-core/releases
[release-tags]: https://github.com/andrewvaughan/template-core/tags
[sdlc]: .github/CONTRIBUTING.md#software-development-lifecycle
[support]: .github/SUPPORT.md

<!-- vale on -->
<!-- editorconfig-checker-enable -->
