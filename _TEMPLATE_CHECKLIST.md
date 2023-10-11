# Template Checklist

When creating a new project from this template, ensure these steps are taken immediately after provisioning.

## Contents

- [Template Checklist](#template-checklist)
  - [Contents](#contents)
  - [Pre-Steps](#pre-steps)
  - [1 - Configure GitHub Repository Settings](#1---configure-github-repository-settings)
    - [General Settings](#general-settings)
      - [Features](#features)
      - [Pull Requests](#pull-requests)
      - [Archives](#archives)
    - [Branch and Tag Protection](#branch-and-tag-protection)
    - [Labels](#labels)
  - [2 - Configure Files for New Project](#2---configure-files-for-new-project)
  - [3 - Select a License](#3---select-a-license)
    - [Permissions](#permissions)
    - [Conditions](#conditions)
    - [Limitations](#limitations)
  - [4 - Configure Linting](#4---configure-linting)
  - [5 - Cleanup](#5---cleanup)
  - [Next Steps](#next-steps)
  - [Appendix](#appendix)
    - [Folder Structure](#folder-structure)

---

## Pre-Steps

After checking out the new project, run the following command locally to update link targets to the new repository
instead of the original [`template-core`][template-core] repository.

> **Note:** If on FreeBSD/macOS, install [`gnu-sed`][homebrew-sed] or use this `sed` command, instead:
>
> ```sh
> # ...
>   sed -i "" "s@/andrewvaughan/template-core@/${REPO}@g" _TEMPLATE_CHECKLIST.md
> ```

```bash
REPO=$(sed -E 's@.*github\.com:(.+)\.git$@\1@g' <(git ls-remote --get-url origin)); \
  sed -i "s@/andrewvaughan/template-core@/${REPO}@g" _TEMPLATE_CHECKLIST.md
```

For the rest of setup, refer to this changed document to have accurate links to references in the steps. For cleanest
results, Hold off on committing and pushing these changes until all steps in this file have been completed.

## 1 - Configure GitHub Repository Settings

The GitHub template system has many limitations, only copying over files and, if selected, branches from the parent
repository. As such, it is important to configure the repository to the project standard prior to modifying any of the
repository files.

### General Settings

Visit the [General Settings][gh-settings] page for the repository.

- [ ] **CHECK** `Require contributors to sign off on web-based commits`

#### Features

- [ ] **CHECK** `Discussions`

#### Pull Requests

- [ ] **UNCHECK** `Allow merge commits`
- [ ] **CHECK** `Always suggest updating pull request branches`
- [ ] **CHECK** `Automatically delete head branches`

#### Archives

- [ ] **CHECK** `Include Git LFS objects in archives`

### Branch and Tag Protection

Visit the [Rulesets][gh-rulesets] page for the repository.

- [ ] From the dropdown, select `New tag ruleset` with the following configuration:

  - **Ruleset Name:** `Restrict Tag Creation`
  - **Enforcement Status:** `Active`
  - Click `+ Add bypass`
    - **CHECK** `Repository Admin`
    - **CHECK** `Maintain`
  - Click `+ Add target`
    - Select `Include all tags`
  - Under **Tag protections**:
    - **CHECK** `Restrict creations`

- [ ] From the dropdown, select `New tag ruleset` with the following configuration:

  - **Ruleset Name:** `Restrict Release Tags`
  - **Enforcement Status:** `Active`
  - Click `+ Add bypass`
    - **CHECK** `Repository Admin`
  - Click `+ Add target`
    - Select `Include by pattern`
      - **Naming Pattern:** `v*`
  - Under **Tag protections**:
    - **CHECK** `Restrict creations`
    - **CHECK** `Restrict updates`
    - **CHECK** `Require status checks to pass before merging`
      - **CHECK** `Require branches to be up to date before merging`

- [ ] Click `New branch ruleset` with the following configuration:

  - **Ruleset Name:** `Restrict Branch Creation`
  - **Enforcement Status:** `Active`
  - Click `+ Add bypass`
    - **CHECK** `Repository Admin`
    - **CHECK** `Maintain`
  - Click `+ Add target`
    - Select `Include all branches`
  - Under **Tag protections**:
    - **CHECK** `Restrict creations`

- [ ] Click `New branch ruleset` with the following configuration:
  - **Ruleset Name:** `Environment Branch Protections`
  - **Enforcement Status:** `Active`
  - Click `+ Add bypass`
    - **CHECK** `Repository Admin`
    - **CHECK** `Maintain`
  - Click `+ Add target`
    - Select `Include default branch`
  - Click `+ Add target`
    - Select `Include by pattern`
      - **Naming Pattern:** `staging`
  - Click `+ Add target`
    - Select `Include by pattern`
      - **Naming Pattern:** `production`
  - Under **Tag protections**:
    - **CHECK** `Restrict creations`
    - **CHECK** `Restrict updates`
    - **CHECK** `Require a pull request before merging`
      - Required approvals set to `1`
      - **CHECK** `Dismiss stale pull request approvals when new commits are pushed`
      - **CHECK** `Require review from Code Owners`
      - **CHECK** `Require approval of the most recent reviewable push`
      - **CHECK** `Require conversation resolution before merging`
    - **CHECK** `Require status checks to pass before merging`
      - **CHECK** `Require branches to be up to date before merging`

- [ ] From the dropdown, select `New tag ruleset` with the following configuration:

  - **Ruleset Name:** `Restrict Release Branches`
  - **Enforcement Status:** `Active`
  - Click `+ Add bypass`
    - **CHECK** `Repository Admin`
  - Click `+ Add target`
    - Select `Include by pattern`
      - **Naming Pattern:** `release/*`
    - - Select `Include by pattern`
      - **Naming Pattern:** `release/**/*`
  - Under **Tag protections**:
    - **CHECK** `Restrict creations`
    - **CHECK** `Restrict updates`
    - **CHECK** `Require status checks to pass before merging`
      - **CHECK** `Require branches to be up to date before merging`

### Labels

> A [workflow][issue-label-sync] is planned to automate label syncing with the core template; however, this has not been
> implemented, yet.
>
> In the meantime, copy all configurations manually from the [`template-core`][template-core] repository to the
> [Labels][labels] section.

---

## 2 - Configure Files for New Project

- [ ] Add and/or remove any files or [folders](#folder-structure) that do not apply to the project

- [ ] Remove all `.empty` files

```bash
find . -type f -name '.empty' -delete
```

- [ ] Perform a search and replace for `andrewvaughan/template-core` and update the repository name

> **Note:** If on FreeBSD/macOS, install [`gnu-sed`][homebrew-sed] or use this `sed` command, instead:
>
> ```bash
> # ...
>   sed -i "" "s@/andrewvaughan/template-core@/${REPO}@g" _TEMPLATE_CHECKLIST.md
> ```

```bash
REPO=$(sed -E 's@.*github\.com:(.+)\.git$@\1@g' <(git ls-remote --get-url origin)); \
  grep -rl --exclude-dir=.git "andrewvaughan/template-core" . | \
  xargs sed -i "s@andrewvaughan/template-core@${REPO}@g"
```

---

## 3 - Select a License

Several [licenses][choose-a-license] are available based on the Privileges, Conditions, and Limitations for licensees of
the project. Each is listed from least-restrictive to most-restrictive in the sections, below.

- [ ] Select the appropriate license using the tables below as a guide
- [ ] Delete all [`LICENSE.*`][license-dir] files that are not applicable
- [ ] Replace the existing [`LICENSE`][license] file with the chosen license
- [ ] Check that all dates and copyright owners are correct
- [ ] Update the `README.md` badge to show the correct license
- [ ] Add the appropriate [`LICENSE`][license] boilerplate to the [`README.md`][readme] file, if applicable
- [ ] Add the appropriate [`LICENSE`][license] boilerplate to any source files, if applicable

### Permissions

| License File                   | Commercial Use | Distribution | Modification | Patent Use | Private Use |
|:-------------------------------|:--------------:|:------------:|:------------:|:----------:|:-----------:|
| [LICENSE.unlicense][unlicense] |      Yes       |     Yes      |     Yes      |     -      |     Yes     |
| [LICENSE.mit][mit]             |      Yes       |     Yes      |     Yes      |     -      |     Yes     |
| [LICENSE.apache][apache2]      |      Yes       |     Yes      |     Yes      |    Yes     |     Yes     |
| [LICENSE.gpl3][gpl3]           |      Yes       |     Yes      |     Yes      |    Yes     |     Yes     |
| LICENSE.proprietary            |       -        |      -       |      -       |     -      |      -      |

As described by:

| Permission     | Description                                                               |
|:---------------|:--------------------------------------------------------------------------|
| Commercial Use | The licensed material and derivatives may be used for commercial purposes |
| Distribution   | The licensed material may be distributed                                  |
| Modification   | The licensed material may be modified                                     |
| Patent Use     | This license provides an express grant of patent rights from contributors |
| Private Use    | The licensed material may be used and modified in private                 |

### Conditions

| License File                   | Disclose Source | License/Copyright Notice | Same License | State Changes |
|:-------------------------------|:---------------:|:------------------------:|:------------:|:-------------:|
| [LICENSE.unlicense][unlicense] |        -        |            -             |      -       |       -       |
| [LICENSE.mit][mit]             |        -        |           Yes            |      -       |       -       |
| [LICENSE.apache][apache2]      |        -        |           Yes            |      -       |      Yes      |
| [LICENSE.gpl3][gpl3]           |       Yes       |           Yes            |     Yes      |      Yes      |
| LICENSE.proprietary            |        -        |            -             |      -       |       -       |

As described by:

<!-- editorconfig-checker-disable -->

| Permission               | Description                                                                                                                                           |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| Disclose Source          | Source code must be made available when the licensed material is distributed                                                                          |
| License/Copyright Notice | A copy of the license and copyright notice must be included with the licensed material                                                                |
| Same License             | Modifications must be released under the same license when distributing the licensed material; in some cases a similar or related license may be used |
| State Changes            | Changes made to the licensed material must be documented                                                                                              |

<!-- editorconfig-checker-enable -->

### Limitations

| License File                   | Limited Liability | No Trademark | No Warranty |
|:-------------------------------|:-----------------:|:------------:|:-----------:|
| [LICENSE.unlicense][unlicense] |        Yes        |      -       |     Yes     |
| [LICENSE.mit][mit]             |        Yes        |      -       |     Yes     |
| [LICENSE.apache][apache2]      |        Yes        |     Yes      |     Yes     |
| [LICENSE.gpl3][gpl3]           |        Yes        |      -       |     Yes     |
| LICENSE.proprietary            |         -         |      -       |      -      |

As described by:

<!-- editorconfig-checker-disable -->

| Permission        | Description                                                                                                                                                               |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Limited Liability | This license includes a limitation of liability                                                                                                                           |
| No Trademark      | This license explicitly states that it does NOT grant trademark rights, even though licenses without such a statement probably do not grant any implicit trademark rights |
| No Warranty       | This license explicitly states that it does NOT provide any warranty                                                                                                      |

<!-- editorconfig-checker-enable -->

---

## 4 - Configure Linting

This project comes pre-configured with [Megalinter][megalinter] as the test framework for all linting. By default, the
full Megalinter [flavor][megalinter-flavors] is used, which is an extremely large and slow setup, and can be better
configured with a flavor related to the intended project being created.

The [`Makefile`][makefile] uses the recommended [act][act] tool to replicate integration testing as closely as possible
on development environments. It is highly recommended to continue this pattern.

<!-- editorconfig-checker-disable -->

- [ ] Choose the appropriate Megalinter [flavor][megalinter-flavors] and update the [.mega-linter.yml][workflow-megalinter] workflow
- [ ] Update the [`mega-linter.yml`][megalinter-config] file appropriate to the new project
- [ ] Update any additional linting configurations in the [`.config/linters`][linters-config] directory

<!-- editorconfig-checker-enable -->

---

## 5 - Cleanup

With everything else complete, there is only one step left:

- [ ] Delete the [`_TEMPLATE_CHECKLIST.md`][checklist] file

---

## Next Steps

Once the template has been refined to the purpose, the following steps are usually helpful:

1. Update the [`README.md`][readme] file to best suit the project
2. Configure the [`.vscode`][vscode] folder ([documentation here][vscode-docs])
3. Configure the [`.devcontainer`][devcontainer] folder ([documentation here][devcontainer-docs])
4. Update the `all`, `build`, and `test-unit` targets in the [Makefile folder][makefile]
5. Add any specific dictionary words to the [`.config/dictionaries/project.txt`][dictionary] file
6. Update the [issue][tpl-issue] and [pull request][tpl-pr] templates

From there, it's a matter of getting started by creating new [source code][source], [tests][tests], and
[build scripts][build] to make the project a reality. Good luck!

---

## Appendix

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

<!-- Link Repository -->

<!-- editorconfig-checker-disable -->

<!-- TODO - example.com links -->

[act]: https://github.com/nektos/act
[apache2]: https://choosealicense.com/licenses/apache-2.0/
[build]: https://github.com/andrewvaughan/template-core/tree/main/.build
[checklist]: https://example.com
[choose-a-license]: https://choosealicense.com/
[devcontainer]: https://github.com/andrewvaughan/template-core/tree/main/.devcontainer
[devcontainer-docs]: https://code.visualstudio.com/docs/devcontainers/containers
[dictionary]: https://github.com/andrewvaughan/template-core/blob/main/.config/dictionaries/project.txt
[gpl3]: https://choosealicense.com/licenses/gpl-3.0/
[homebrew-sed]: https://formulae.brew.sh/formula/gnu-sed
[issue-label-sync]: https://github.com/andrewvaughan/template-core/issues/1
[labels]: https://github.com/andrewvaughan/template-core/labels
[license]: https://github.com/andrewvaughan/template-core/blob/main/LICENSE
[license-dir]: https://github.com/andrewvaughan/template-core/tree/main
[linters-config]: https://github.com/andrewvaughan/template-core/tree/main/.config/linters
[makefile]: https://github.com/andrewvaughan/template-core/tree/main/.config/make
[megalinter]: https://megalinter.io/
[megalinter-config]: https://github.com/andrewvaughan/template-core/blob/main/.mega-linter.yml
[megalinter-flavors]: https://megalinter.io/latest/flavors/
[mit]: https://choosealicense.com/licenses/mit/
[unlicense]: https://choosealicense.com/licenses/unlicense/
[dc-gh]: https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers
[dc-ref]: https://github.com/oxsecurity/megalinter/tree/main/.devcontainer
[dc-vsc]: https://code.visualstudio.com/docs/devcontainers/containers
[readme]: https://github.com/andrewvaughan/template-core/blob/main/README.md
[source]: https://github.com/andrewvaughan/template-core/tree/main/src
[template-core]: https://t.ly/s79Lm
[tests]: https://github.com/andrewvaughan/template-core/tree/main/tests
[tpl-issue]: https://example.com
[tpl-pr]: https://example.com
[vscode]: https://github.com/andrewvaughan/template-core/tree/main/.vscode
[vscode-docs]: https://stackoverflow.com/questions/32964920/should-i-commit-the-vscode-folder-to-source-control
[workflow-megalinter]: https://github.com/andrewvaughan/template-core/blob/main/.github/workflows/mega-linter.yml#L57

<!-- markdown-link-check-disable -->

[gh-rulesets]: https://github.com/andrewvaughan/template-core/settings/rules
[gh-settings]: https://github.com/andrewvaughan/template-core/settings

<!-- markdown-link-check-enable -->

<!-- editorconfig-checker-enable -->
