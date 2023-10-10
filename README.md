# New Project

## Checklist

When creating a new project from this template, ensure the following steps are taken immediately after provisioning:

### First Steps

- [ ] Add and/or remove any files or folders that do not apply to the project
- [ ] Remove all `.empty` files with `find . -type f -name '.empty' -delete`

### License Steps

Several license are available based on the Privileges, Conditions, and Limitations someone having a license of the
intellectual property will have. Each is listed from least-restrictive to most-restrictive in the sections, below.

- [ ] Select the appropriate license using the tables below
- [ ] Delete all `LICENSE.*` files that are not applicable
- [ ] Rename the appropriate `LICENSE.*` file to just `LICENSE`
- [ ] Check that all dates and copyright owners are correct
- [ ] Add the appropriate `LICENSE` boilerplate to the `README.md` file, if applicable
- [ ] Add any source headers the license requires, if applicable

<!-- editorconfig-checker-disable -->

#### Permissions

| License File                   | Commercial Use | Distribution | Modification | Patent Use | Private Use |
|:-------------------------------|:--------------:|:------------:|:------------:|:----------:|:-----------:|
| [LICENSE.apache][apache]       |      Yes       |     Yes      |     Yes      |    Yes     |     Yes     |
| [LICENSE.gpl3][gpl3]           |      Yes       |     Yes      |     Yes      |    Yes     |     Yes     |
| [LICENSE.mit][mit]             |      Yes       |     Yes      |     Yes      |     -      |     Yes     |
| LICENSE.proprietary            |       -        |      -       |      -       |     -      |      -      |
| [LICENSE.unlicense][unlicense] |      Yes       |     Yes      |     Yes      |     -      |     Yes     |

As described by:

| Permission     | Description                                                               |
|:---------------|:--------------------------------------------------------------------------|
| Commercial Use | The licensed material and derivatives may be used for commercial purposes |
| Distribution   | The licensed material may be distributed                                  |
| Modification   | The licensed material may be modified                                     |
| Patent Use     | This license provides an express grant of patent rights from contributors |
| Private Use    | The licensed material may be used and modified in private                 |

#### Conditions

| License File                   | Disclose Source | License/Copyright Notice | Same License | State Changes |
|:-------------------------------|:---------------:|:------------------------:|:------------:|:-------------:|
| [LICENSE.apache][apache]       |        -        |           Yes            |      -       |      Yes      |
| [LICENSE.gpl3][gpl3]           |       Yes       |           Yes            |     Yes      |      Yes      |
| [LICENSE.mit][mit]             |        -        |           Yes            |      -       |       -       |
| LICENSE.proprietary            |        -        |            -             |      -       |       -       |
| [LICENSE.unlicense][unlicense] |        -        |            -             |      -       |       -       |

As described by:

| Permission               | Description                                                                                                                                           |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| Disclose Source          | Source code must be made available when the licensed material is distributed                                                                          |
| License/Copyright Notice | A copy of the license and copyright notice must be included with the licensed material                                                                |
| Same License             | Modifications must be released under the same license when distributing the licensed material; in some cases a similar or related license may be used |
| State Changes            | Changes made to the licensed material must be documented                                                                                              |

#### Limitations

| License File                   | Limited Liability | No Trademark | No Warranty |
|:-------------------------------|:-----------------:|:------------:|:-----------:|
| [LICENSE.apache][apache]       |        Yes        |     Yes      |     Yes     |
| [LICENSE.gpl3][gpl3]           |        Yes        |      -       |     Yes     |
| [LICENSE.mit][mit]             |        Yes        |      -       |     Yes     |
| LICENSE.proprietary            |         -         |      -       |      -      |
| [LICENSE.unlicense][unlicense] |        Yes        |      -       |     Yes     |

As described by:

| Permission        | Description                                                                                                                                                               |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Limited Liability | This license includes a limitation of liability                                                                                                                           |
| No Trademark      | This license explicitly states that it does NOT grant trademark rights, even though licenses without such a statement probably do not grant any implicit trademark rights |
| No Warranty       | This license explicitly states that it does NOT provide any warranty                                                                                                      |

<!-- editorconfig-checker-enable -->

### Test Steps

- [ ] Update `.github/workflows/mega-linter.yml` with a flavor more-appropriate for your project
- [ ] Update `.mega-linter.yml` and the files in `.config/linters` to suit your project needs
- [ ] Update `.config/dictionaries/project.txt` with any dictionary words custom to this project

### Final Steps

- [ ] Delete everything in the [Checklist](#checklist) section of the `README.md` file

---

### Folder Structure

This template comes with the following standard folder structure:

<!-- editorconfig-checker-disable -->

| Folder                         | Purpose                                                                                                                                                |
|:-------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| [.build](.build)               | All scripts and resources tied to deployment (e.g., Docker Compose)                                                                                    |
| [.config](.config)             | All configuration files for local development                                                                                                          |
| [.devcontainer](.devcontainer) | DevContainer configurations ([GitHub Docs][dc-gh], [VSCode Docs][dc-vsc], [Reference][dc-ref])                                                         |
| [.github](.github)             | All configuration files for GitHub                                                                                                                     |
| [.vscode](.vscode)             | All configuration files for Visual Studio Code (note, only certain files should be committed, such as recommended `extensions.json` and `launch.json`) |
| [docs](docs)                   | All project documentation                                                                                                                              |
| [src](src)                     | All project source code                                                                                                                                |
| [tests](tests)                 | All test source code                                                                                                                                   |

<!-- editorconfig-checker-enable -->

<!-- Hyperlink Repository -->

<!-- editorconfig-checker-disable -->

[apache]: https://choosealicense.com/licenses/apache-2.0/
[gpl3]: https://choosealicense.com/licenses/gpl-3.0/
[mit]: https://choosealicense.com/licenses/mit/
[unlicense]: https://choosealicense.com/licenses/unlicense/
[dc-gh]: https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers
[dc-ref]: https://github.com/oxsecurity/megalinter/tree/main/.devcontainer
[dc-vsc]: https://code.visualstudio.com/docs/devcontainers/containers

<!-- editorconfig-checker-enable -->

---

<!-- !!! For new projects, delete this line and above when done following the Checklist above !!! -->

TODO <!-- Badges (release, license, build status, coverage) and hero image -->

<!-- see: https://github.com/andrewvaughan/better-jira-reporting -->
<!-- see: https://github.com/nimbus-pi/nimbus-pi -->

<!-- Enter the description of your project here -->

## Contents

- [New Project](#new-project)
  - [Checklist](#checklist)
    - [First Steps](#first-steps)
    - [License Steps](#license-steps)
      - [Permissions](#permissions)
      - [Conditions](#conditions)
      - [Limitations](#limitations)
    - [Test Steps](#test-steps)
    - [Final Steps](#final-steps)
    - [Folder Structure](#folder-structure)
  - [Contents](#contents)
  - [Installation](#installation)
    - [Quick Start](#quick-start)
    - [Manual Installation](#manual-installation)
    - [Developer Installation](#developer-installation)
    - [Dependencies](#dependencies)
  - [Usage](#usage)
    - [Configuration](#configuration)
  - [Support](#support)
  - [Contributing](#contributing)
    - [Testing](#testing)
  - [License](#license)

## Installation

<!-- Add installation instructions here -->

### Quick Start

<!-- Add quick-start instructions, here, if appropriate (or delete) -->

### Manual Installation

<!-- Add manual installation instructions here, if appropriate (or delete) -->

### Developer Installation

<!-- Add developer dependency installation instructions here -->

### Dependencies

<!-- Add development dependency installation instructions here -->

## Usage

<!-- Add usage instructions here -->

### Configuration

<!-- Add configuration details here -->

## Support

TODO

## Contributing

There are many ways to contribute to this project! If you have an idea, or have discovered a bug, please
[open an issue][new-issue] so it can be addressed. You can also start or join a [discussion][discussions] to get your
feet wet with the project, first.

If you are interested in contributing to the project through design or development, please read our
[Contributing Guidelines][contributing].

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

## License

<!-- Add selected license short text in this area -->

<!-- Link Repository -->

<!-- TODO - fix example.com -->

[act]: https://github.com/nektos/act
[contributing]: https://example.com
[discussions]: https://github.com/andrewvaughan/template-core/discussions
[docker]: https://www.docker.com/
[new-issue]: https://github.com/andrewvaughan/template-core/issues/new
[sdlc]: https://example.com
