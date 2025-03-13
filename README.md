<!-- markdownlint-disable MD041 MD033 -->
<!-- editorconfig-checker-disable -->

<!-- TODO - Update or remove the hero image. -->
<div align="center">
  <a href="https://github.com/andrewvaughan/template-core" target="blank" title="New Project Template">
    <!-- markdown-link-check-disable-next-line -->
    <img
      src="https://media.githubusercontent.com/media/andrewvaughan/template-assets/main/png/readme/template-banner-1897x499.png"
      alt="New Project Template"
      min-height="200px"
    />
  </a>
</div>
<!-- editorconfig-checker-enable -->

<!-- vale off -->

# {{PROJECT NAME}}

<!-- vale on -->

<!-- TODO - Update the URLs for these badges, below, to the appropriate state of the project. -->

[![Release][badge-release-img]][badge-release]
[![License][badge-license-img]][badge-license]
[![Build Status][badge-build-img]][badge-build]
[![MegaLinter][badge-megalinter-img]][badge-megalinter]
[![Code Coverage][badge-coverage-img]][badge-coverage]
[![PRs Accepted][badge-pr-rate-img]][badge-pr-rate]
<br/>

[![Edge Release][badge-rel-edge-img]][badge-rel-edge]
[![Staging Release][badge-rel-stage-img]][badge-rel-stage]
[![Production Release][badge-rel-prod-img]][badge-rel-prod]
[![Changes in Next Release][badge-changes-img]][badge-changes]

<!-- markdownlint-enable MD033 -->

{{PROJECT DESC}}

<!-- prettier-ignore-start -->
<!-- omit from toc -->
## Contents

- [{{PROJECT NAME}}](#project-name)
  - [Quick start](#quick-start)
  - [Installation](#installation)
    - [Dependencies](#dependencies)
  - [Usage](#usage)
    - [Configuration](#configuration)
  - [Support](#support)
    - [Frequently asked questions](#frequently-asked-questions)
  - [Contributing](#contributing)
    - [Developer installation](#developer-installation)
      - [Recommended development environment](#recommended-development-environment)
    - [Testing](#testing)
  - [Release policy](#release-policy)
  - [License](#license)

---
<!-- prettier-ignore-end -->

## Quick start

<!-- TODO - Add instructions for how to use (not develop) this utility quickly. -->

_Add a brief set of instructions on how to get quickly up and running for the most-common use cases. Delete this section
if a quick-start concept doesn't apply._

## Installation

<!-- TODO - Add instructions for how to perform a Production installation with all options. -->

_Add a brief introduction as to how users, not developers, perform a normal installation of the project._

### Dependencies

<!-- TODO - Add production dependency information. -->

_Add detail in this section regarding any dependencies or installation requirements that users, not developers, need
before installing and using the project. This **must** focus on **using** the tool, not developing it. Delete this
section if there are no production dependencies required for the project._

---

## Usage

<!-- TODO - Add usage instructions. -->

_Provide detailed instructions on how to use this project, if applicable. Otherwise, delete this section._

### Configuration

<!-- TODO - Add any configuration options and how to set them for the project. -->

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

<!-- TODO - Add FAQ, if any. -->

_If you can answer common questions for your project, start this section. Delete the section, if not._

---

## Contributing

There are many ways to contribute to this project. If you have an idea, or have discovered a bug, please
[open an Issue][new-issue]. You can also start or join a [Discussion][discussions] to get your feet wet.

If you have interest in contributing to the project through design or development, please read the project's
[Contributing Guidelines][contributing].

### Developer installation

Development of this project functions within a [Development Container][devcontainer]. This ensures that all development
uses the same environment and has the same tools available within the project. This also reduces the development
dependencies required to simply a container engine (such as [Docker][docker]) and an IDE that supports Development
Containers (such as [Visual Studio Code][vs-code]).

For more information, see the [Development Container `README.md`][devcontainer-readme] file.

<!-- TODO - Add any additional information for developers, if necessary. -->

#### Recommended development environment

The Project Maintainers recommend that [Visual Studio Code][vs-code] and [Docker][docker] be used as the underlying
environment for the Development Container. Further, only *nix-based systems (for example, Linux, macOS) are formally
supported for development with this project. Issues with Windows development environments isn't supported by Project
Maintainers.

Use the following `make` command to configure Visual Studio Code to the minimum-required capabilities required to make
use of Development Containers:

```sh
make vscode
```

### Testing

An important part of the project's [Software Development Lifecycle][sdlc] is continuous testing. The configuration of
the project aims to make this as low effort as possible. The provided Development Container contains utilities to run
all testing and linting pipelines exactly how the GitHub servers perform them to save time and effort when submitting
Pull Requests.

> **Note**: all commands should run inside of a Development Container.

To run a full suite of tests, including linting, use the provided `test` command:

```sh
make test
```

The project provides a number of utility functions to make your life easier during development. You can find the full
list by running:

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

<!-- Link repository -->
<!-- editorconfig-checker-disable -->

[badge-build]: https://github.com/andrewvaughan/template-core/actions
[badge-build-img]: https://img.shields.io/badge/build-N/A-rgb(200%2C200%2C200).svg?style=flat&logo=dependabot&logoColor=white
[badge-changes]: https://github.com/andrewvaughan/template-core/commits/main/
[badge-changes-img]: https://img.shields.io/github/commits-since/andrewvaughan/template-core/latest?label=changes%20in%20next%20release
[badge-coverage]: https://github.com/andrewvaughan/template-core
[badge-coverage-img]: https://codecov.io/gh/andrewvaughan/template-core/branch/main/graph/badge.svg
[badge-license]: LICENSE
[badge-license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat&logo=opensourceinitiative&logoColor=white
[badge-megalinter]: https://github.com/andrewvaughan/template-core/actions/workflows/mega-linter.yml?query=branch%3Amain
[badge-megalinter-img]: https://github.com/andrewvaughan/template-core/actions/workflows/mega-linter.yml/badge.svg?branch=main
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
[code-of-conduct]: .github/CODE_OF_CONDUCT.md
[contributing]: .github/CONTRIBUTING.md
[devcontainer]: https://containers.dev
[devcontainer-readme]: .devcontainer/README.md
[discussions]: https://github.com/andrewvaughan/template-core/discussions
[docker]: https://www.docker.com
[issues]: https://github.com/andrewvaughan/template-core/issues
[license]: LICENSE
[new-issue]: https://github.com/andrewvaughan/template-core/issues/new
[releases]: https://github.com/andrewvaughan/template-core/releases
[release-tags]: https://github.com/andrewvaughan/template-core/tags
[sdlc]: .github/CONTRIBUTING.md#software-development-lifecycle
[support]: .github/SUPPORT.md
[vs-code]: https://code.visualstudio.com/

<!-- editorconfig-checker-enable -->
