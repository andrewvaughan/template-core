# New Project Template

<!-- !!! Follow the `_TEMPLATE_CHECKLIST.md` file as a guide to setup this repository prior to editing this file !!! -->

<!-- TODO Update the project H1 tag above.

An optional hero image can be added to the top of the README file to replace the H1 tag.

A good sized image is about 1456x500, although the height can vary based on need. Transparent background are not
recommended, unless the image works well in both a light and dark background.

The H1 tag above can then be replaced with something akin to this:

# ![Project Name](https://...url-to-hosted-image)
-->

<!-- TODO Update the URLs for these badges, below, to the appropriate state of the project -->
[![Version][badge-version-img]][badge-version]
[![License][badge-license-img]][badge-license]
[![Build Status][badge-build-img]][badge-build]
[![Coverage][badge-coverage-img]][badge-coverage]

<!-- TODO -->
_This text should be replaced with a short description of what this project is about._

## Contents

- [New Project Template](#new-project-template)
  - [Contents](#contents)
  - [Installation](#installation)
    - [Dependencies](#dependencies)
    - [Quick Start](#quick-start)
    - [Manual Installation](#manual-installation)
  - [Usage](#usage)
    - [Configuration](#configuration)
  - [Support](#support)
  - [Contributing](#contributing)
    - [Developer Installation](#developer-installation)
    - [Testing](#testing)
  - [Release Policy](#release-policy)
  - [License](#license)

---

## Installation

<!-- TODO -->
_Add a brief introduction as to how normal installation of the project can be accomplished for users (not developers) of
the project_

### Dependencies

<!-- TODO -->
_Add details in this section regarding any dependencies or installation requirements are needed to be performed before
this tool can be used. This should focus on **using** the tool, not developing it. Delete this section if there are no
production dependencies required for the project._

### Quick Start

<!-- TODO -->
_Add a brief set of instructions on how to get quickly up and running for the most-common use cases. Delete this section
if a quick-start concept does not apply._

### Manual Installation

<!-- TODO -->
_If manual installation steps differ from the quick-start above, add more verbose instructions here; otherwise, delete
this section._

---

## Usage

<!-- TODO -->
_Provide detailed instructions on how this project is used, if applicable. Otherwise, delete this section._

### Configuration

<!-- TODO -->
_If the project has configuration capabilities, provide them here in full detail; otherwise, delete this section._

---

## Support

Details for reaching out to support can be found in or [Support Documentation][support]. Please refer to these
instructions prior to opening an [Issue][issues] or [Discussion][discussions].

Parties interested in contributing to the project must read our [Contributing Guidelines][contributing] prior to doing
so.

All individuals must adhere to the project's [Code of Conduct][code-of-conduct], regardless of how they are engaging.

---

## Contributing

There are many ways to contribute to this project! If you have an idea, or have discovered a bug, please
[open an issue][new-issue] so it can be addressed. You can also start or join a [discussion][discussions] to get your
feet wet with the project, first.

If you are interested in contributing to the project through design or development, please read our
[Contributing Guidelines][contributing].

### Developer Installation

<!-- TODO -->
_Add details for developers on how to setup their environment, including installing additional, developer dependencies,
for individuals wishing to contribute to the project._

### Testing

An important part of our [Software Development Lifecycle][sdlc] is continuous testing. We make this easy for you. Ensure
that you have [Docker][docker] and [act][act] running and installed and run the following command:

```bash
make test
```

That will run a full test suite. Of course, we provide a number of utility functions to make your life easier during
development. You can find the full list by running:

```bash
make help
```

---

## Release Policy

Releases of this project follow [Semantic Versioning](http://semver.org/) standards in a `MAJOR.MINOR.PATCH` versioning
scheme of the following format:

* `MAJOR` - modified when major, incompatible changes are made to the application,
* `MINOR` - modified when functionality is added in a backwards-compatible manner, and
* `PATCH` - patches to existing functionality, such as documentation and bug fixes.

All releases are [tagged][release-tags] and available on [GitHub][releases].

---

## License

The full text of this project's license can be found in the [LICENSE][license] file.

<!-- TODO -->
_Add selected license short text in this area, if applicable._

<!-- Link Repository -->

<!-- editorconfig-checker-disable -->

[act]: https://github.com/nektos/act
[badge-version]: https://github.com/andrewvaughan/template-core/releases
[badge-version-img]: https://img.shields.io/badge/version-0.0.0-blue.svg?style=for-the-badge
[badge-license]: https://github.com/andrewvaughan/template-core/blob/main/LICENSE
[badge-license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white
[badge-build]: https://github.com/andrewvaughan/template-core/actions
[badge-build-img]: https://img.shields.io/badge/build-N/A-rgb(200%2C200%2C200).svg?style=for-the-badge&logo=dependabot&logoColor=white
[badge-coverage]: https://github.com/andrewvaughan/template-core/actions
[badge-coverage-img]: https://img.shields.io/badge/build-N/A-rgb(200%2C200%2C200).svg?style=for-the-badge&logo=githubactions&logoColor=white
[code-of-conduct]: https://github.com/andrewvaughan/template-core/blob/main/.github/CODE_OF_CONDUCT.md
[contributing]: https://github.com/andrewvaughan/template-core/blob/main/.github/CONTRIBUTING.md
[discussions]: https://github.com/andrewvaughan/template-core/discussions
[docker]: https://www.docker.com/
[issues]: https://github.com/andrewvaughan/template-core/issues
[license]: https://github.com/andrewvaughan/template-core/blob/main/LICENSE
[new-issue]: https://github.com/andrewvaughan/template-core/issues/new
[releases]: https://github.com/andrewvaughan/template-core/releases
[release-tags]: https://github.com/andrewvaughan/template-core/tags
[sdlc]: https://github.com/andrewvaughan/template-core/blob/main/.github/CONTRIBUTING.md#software-development-lifecycle
[support]: https://github.com/andrewvaughan/template-core/blob/main/.github/SUPPORT.md

<!-- editorconfig-checker-enable -->
