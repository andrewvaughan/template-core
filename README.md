<!-- !!! Follow the `_TEMPLATE_CHECKLIST.md` file as a guide to setup this repository prior to editing this file !!! -->

<!-- markdownlint-disable MD041 MD033 -->
<!-- editorconfig-checker-disable -->

<!-- TEMPLATE TODO - Update or remove the hero image. -->
<div align="center">
  <a href="https://github.com/andrewvaughan/template-core" target="blank" title="New Project Template">
    <!-- markdown-link-check-disable-next-line -->
    <img src="docs/img/readme-banner-1896x498.svg" alt="New Project Template" min-height="200px" />
  </a>
</div>
<!-- editorconfig-checker-enable -->

<!-- omit from toc -->

# New project template

<!-- TEMPLATE TODO - Update the URLs for these badges, below, to the appropriate state of the project. -->

[![Release][badge-release-img]][badge-release]
[![License][badge-license-img]][badge-license]
[![Build Status][badge-build-img]][badge-build]
[![Code Coverage][badge-coverage-img]][badge-coverage]
[![PRs Accepted][badge-pr-rate-img]][badge-pr-rate]
<br/>

[![Edge Release][badge-rel-edge-img]][badge-rel-edge]
[![Staging Release][badge-rel-stage-img]][badge-rel-stage]
[![Production Release][badge-rel-prod-img]][badge-rel-prod]
[![Changes in Next Release][badge-changes-img]][badge-changes]
<br/>

[![Sponsor This Project][badge-sponsor-img]][badge-sponsor]
[![Join the Discord][badge-discord-img]][badge-discord]

<!-- markdownlint-enable MD033 -->

<!-- TEMPLATE TODO -->

_Replace this with a short description of what this project is about._

<!-- prettier-ignore-start -->
<!-- omit from toc -->
## Contents

- [New project template](#new-project-template)
  - [Quick start](#quick-start)
  - [Installation](#installation)
    - [Dependencies](#dependencies)
    - [Manual installation](#manual-installation)
  - [Usage](#usage)
    - [Configuration](#configuration)
  - [Support](#support)
    - [Frequently asked questions](#frequently-asked-questions)
  - [Contributing](#contributing)
    - [Developer installation](#developer-installation)
      - [Developer dependencies](#developer-dependencies)
      - [Recommended development environment](#recommended-development-environment)
    - [Testing](#testing)
  - [Release policy](#release-policy)
  - [License](#license)

---
<!-- prettier-ignore-end -->

## Quick start

<!-- TEMPLATE TODO -->

_Add a brief set of instructions on how to get quickly up and running for the most-common use cases. Delete this section
if a quick-start concept doesn't apply._

## Installation

<!-- TEMPLATE TODO -->

_Add a brief introduction as to how users, not developers, perform a normal installation of the project._

### Dependencies

<!-- TEMPLATE TODO -->

_Add detail in this section regarding any dependencies or installation requirements that users, not developers, need
before installing and using the project. This **must** focus on **using** the tool, not developing it. Delete this
section if there are no production dependencies required for the project._

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

This project's [Support Policy][support] includes all details for users to get support for this project. As an open
source project, support is generally limited to the surrounding community and isn't guaranteed. Please read this policy
prior to opening an [Issue][issues] or [Discussion][discussions].

Parties interested in contributing to the project must read the [Contributing Guidelines][contributing] prior to doing
so.

Finally, all individuals must adhere to the project's [Code of Conduct][code-of-conduct], regardless of how they choose
to engage with the community.

### Frequently asked questions

<!-- TEMPLATE TODO -->

_If you can answer common questions for your project, start this section. Delete the section, if not._

---

## Contributing

There are many ways to contribute to this project. If you have an idea, or have discovered a bug, please
[open an Issue][new-issue]. You can also start or join a [Discussion][discussions] to get your feet wet.

If you have interest in contributing to the project through design or development, please read the project's
[Contributing Guidelines][contributing].

### Developer installation

<!-- TEMPLATE TODO -->

_Add details for developers on how to setup their environment for individuals wishing to contribute to the project._

#### Developer dependencies

<!-- TEMPLATE TODO -->

_Add or modify this section to describe the dependencies used in development required prior to development._

This project aims to be as agnostic as possible across all development environments. As such, development dependencies
are purposely limited to a few critical elements:

| Dependency             | Purpose                                                                     |
| :--------------------- | :-------------------------------------------------------------------------- |
| [act][inst-act]        | Allows for running the project's GitHub [actions][actions] locally.         |
| [Docker][inst-docker]  | Virtualization platform used for testing, running, and building code.       |
| [GNU Make][inst-make]  | Primary tool for executing test, build, clean, and other commands.          |
| [Node.js][inst-nodejs] | Used to download certain command-line packages for `npx`.                   |
| [npx][inst-npx]        | Node.js package execution helper to run certain non-containerized commands. |

#### Recommended development environment

It's recommended to use [Visual Studio Code][vs-code] for development and the project provides several extensions and
configurations to improve development efficiency. Any IDE is acceptable, but it's up to developers working against the
standard to manage their own environments if not using the project default.

You can install the project's recommended extensions and use the provided workspace configurations to reduce mistakes
and duplicate effort. To install all recommended extensions, either accept the prompt when loading this project in
Visual Studio Code, or use the `make` utility provided:

```sh
make vscode
```

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

<!-- Link repository -->
<!-- editorconfig-checker-disable -->

[actions]: https://github.com/andrewvaughan/template-core/actions
[badge-build]: https://github.com/andrewvaughan/template-core/actions
[badge-build-img]: https://img.shields.io/badge/build-N/A-rgb(200%2C200%2C200).svg?style=flat&logo=dependabot&logoColor=white
[badge-changes]: https://github.com/andrewvaughan/template-core/commits/main/
[badge-changes-img]: https://img.shields.io/github/commits-since/andrewvaughan/template-core/latest?label=changes%20in%20next%20release
[badge-coverage]: https://github.com/andrewvaughan/template-core
[badge-coverage-img]: https://codecov.io/gh/andrewvaughan/template-core/branch/main/graph/badge.svg
[badge-discord]: https://discord.gg/6x6T3yMtvB
[badge-discord-img]: https://img.shields.io/badge/join%20the%20Discord-5865F2.svg?style=flat&logo=Discord&logoColor=white
[badge-license]: LICENSE
[badge-license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat&logo=opensourceinitiative&logoColor=white
[badge-pr-rate]: https://github.com/andrewvaughan/template-core/graphs/commit-activity/
[badge-pr-rate-img]: https://img.shields.io/github/commit-activity/m/andrewvaughan/template-core/main?logo=github&label=PR%20accepted
[badge-rel-edge]: https://github.com/andrewvaughan/template-core/commits/main/
[badge-rel-edge-img]: https://img.shields.io/github/last-commit/andrewvaughan/template-core/main?label=edge%20release
[badge-rel-prod]: https://github.com/andrewvaughan/template-core/commits/production/
[badge-rel-prod-img]: https://img.shields.io/github/last-commit/andrewvaughan/template-core/production?label=prod%20release
[badge-rel-stage]: https://github.com/andrewvaughan/template-core/commits/staging/
[badge-rel-stage-img]: https://img.shields.io/github/last-commit/andrewvaughan/template-core/staging?label=stage%20release
[badge-release]: https://github.com/andrewvaughan/template-core/releases
[badge-release-img]: https://img.shields.io/github/v/release/andrewvaughan/template-core?sort=semver
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
[vs-code]: https://code.visualstudio.com/

<!-- editorconfig-checker-enable -->
