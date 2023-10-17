# Template checklist

When creating a new project from this template, ensure to take these steps immediately after provisioning.

<!-- prettier-ignore-start -->
<!-- omit from toc -->
## Contents

- [Template checklist](#template-checklist)
  - [Pre-steps](#pre-steps)
  - [1. Configure GitHub Repository settings](#1-configure-github-repository-settings)
    - [General settings](#general-settings)
      - [Features](#features)
      - [Pull Requests](#pull-requests)
      - [Archives](#archives)
    - [Branch and Tag protection](#branch-and-tag-protection)
    - [Labels](#labels)
  - [2. Configure files for new project](#2-configure-files-for-new-project)
  - [3. Select a License](#3-select-a-license)
    - [Permissions](#permissions)
    - [Conditions](#conditions)
    - [Limitations](#limitations)
  - [4. Configure linting](#4-configure-linting)
  - [5. Cleanup](#5-cleanup)
  - [Next steps](#next-steps)
  - [Appendix](#appendix)
    - [Folder structure](#folder-structure)

---
<!-- prettier-ignore-end -->

## Pre-steps

After checking out the new project, run the following command locally to update link targets to the new Repository
instead of the original [`template-core`][template-core] Repository.

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
results, hold off on committing and pushing these changes until all steps in this file are complete.

## 1. Configure GitHub Repository settings

The GitHub template system has many limitations, only copying over files and, if selected, Branches from the parent
Repository. As such, it's important to configure the Repository to the project standard prior to modifying any of the
Repository files.

### General settings

Visit the [General Settings][gh-settings] page for the Repository.

- [ ] **CHECK** `Require contributors to sign off on web-based commits`

#### Features

- [ ] **CHECK** `Discussions`
- [ ] **CHECK** `Sponsorships`

#### Pull Requests

- [ ] **UNCHECK** `Allow merge commits`
- [ ] **CHECK** `Always suggest updating pull request branches`
- [ ] **CHECK** `Automatically delete head branches`

#### Archives

- [ ] **CHECK** `Include Git LFS objects in archives`

### Branch and Tag protection

Visit the [Rulesets][gh-rulesets] page for the Repository.

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
    - Select `Include by pattern`
      - **Naming Pattern:** `release/**/*`
  - Under **Tag protections**:
    - **CHECK** `Restrict creations`
    - **CHECK** `Restrict updates`
    - **CHECK** `Require status checks to pass before merging`
      - **CHECK** `Require branches to be up to date before merging`

### Labels

> Work is in progress on a [workflow][issue-label-sync] to automate label syncing with the core template; however, this
> hasn't seem implementation, yet.
>
> In the meantime, copy all configurations manually from the [`template-core`][template-core] Repository to the
> [Labels][labels] section.

---

## 2. Configure files for new project

- [ ] Enable `git lfs` for the project with `git lfs install`
- [ ] Add and/or remove any files or [folders](#folder-structure) that don't apply to the project
- [ ] Recommit any binary files to be `lfs` supported - for example, in the `docs` folder

- [ ] Remove all `.empty` files

```bash
find . -type f -name '.empty' -delete
```

- [ ] Perform a search and replace for `andrewvaughan/template-core` and update the Repository name

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

## 3. Select a License

Several [Licenses][choose-a-license] are available based on the privileges, conditions, and limitations for Licensees of
the project. Each table includes Licenses in order from least-restrictive to most-restrictive in the sections, below.

- [ ] Select the appropriate License using the tables below as a guide
- [ ] Delete all [`LICENSE.*`][license-dir] files that aren't applicable
- [ ] Replace the existing [`LICENSE`][license] file with the chosen License
- [ ] Check that all dates and copyright owners are correct
- [ ] Update the `README.md` badge to show the correct License
- [ ] Add the appropriate [`LICENSE`][license] boilerplate to the [`README.md`][readme] file, if applicable
- [ ] Add the appropriate [`LICENSE`][license] boilerplate to any source files, if applicable

### Permissions

| License File                     | Commercial Use | Distribution | Modification | Patent Use | Private Use |
|:---------------------------------|:--------------:|:------------:|:------------:|:----------:|:-----------:|
| [`LICENSE.unlicense`][unlicense] |      Yes       |     Yes      |     Yes      |     -      |     Yes     |
| [`LICENSE.mit`][mit]             |      Yes       |     Yes      |     Yes      |     -      |     Yes     |
| [`LICENSE.apache`][apache2]      |      Yes       |     Yes      |     Yes      |    Yes     |     Yes     |
| [`LICENSE.gpl3`][gpl3]           |      Yes       |     Yes      |     Yes      |    Yes     |     Yes     |
| `LICENSE.proprietary`            |       -        |      -       |      -       |     -      |      -      |

As described by:

| Permission     | Description                                                               |
|:---------------|:--------------------------------------------------------------------------|
| Commercial Use | This License grants use for commercial purpose, including derivatives     |
| Distribution   | This License grants distribution of the licensed material                 |
| Modification   | This Licensed grants modification rights                                  |
| Patent Use     | This License provides an express grant of patent rights from Contributors |
| Private Use    | This License grants modification rights in private                        |

### Conditions

| License File                     | Disclose Source | License/Copyright Notice | Same License | State Changes |
|:---------------------------------|:---------------:|:------------------------:|:------------:|:-------------:|
| [`LICENSE.unlicense`][unlicense] |        -        |            -             |      -       |       -       |
| [`LICENSE.mit`][mit]             |        -        |           Yes            |      -       |       -       |
| [`LICENSE.apache`][apache2]      |        -        |           Yes            |      -       |      Yes      |
| [`LICENSE.gpl3`][gpl3]           |       Yes       |           Yes            |     Yes      |      Yes      |
| `LICENSE.proprietary`            |        -        |            -             |      -       |       -       |

As described by:

<!-- editorconfig-checker-disable -->

| Permission               | Description                                                                                                                                                          |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Disclose Source          | Licensees must make source code available when distributing                                                                                                          |
| License/Copyright Notice | Licensees must include a copy of the License and copyright notice with the material                                                                                  |
| Same License             | Licensee must Release modifications under the same License when distributing the licensed material - in some cases the Licensee may use a similar or related License |
| State Changes            | Licensee must document changes made to the licensed material                                                                                                         |

<!-- editorconfig-checker-enable -->

### Limitations

| License File                     | Limited Liability | No Trademark | No Warranty |
|:---------------------------------|:-----------------:|:------------:|:-----------:|
| [`LICENSE.unlicense`][unlicense] |        Yes        |      -       |     Yes     |
| [`LICENSE.mit`][mit]             |        Yes        |      -       |     Yes     |
| [`LICENSE.apache`][apache2]      |        Yes        |     Yes      |     Yes     |
| [`LICENSE.gpl3`][gpl3]           |        Yes        |      -       |     Yes     |
| `LICENSE.proprietary`            |         -         |      -       |      -      |

As described by:

<!-- editorconfig-checker-disable -->

| Permission        | Description                                                                                                                                                             |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Limited Liability | This License includes a limitation of liability                                                                                                                         |
| No Trademark      | This License explicitly states that it doesn't grant trademark rights, even though Licenses without such a statement probably don't grant any implicit trademark rights |
| No Warranty       | This License explicitly states that it doesn't provide any warranty                                                                                                     |

<!-- editorconfig-checker-enable -->

---

## 4. Configure linting

This project comes pre-configured with [MegaLinter][megalinter] as the test framework for all linting. By default, the
project uses the full MegaLinter [flavor][megalinter-flavors] which is an extremely large and slow setup. Refined
flavors are better configured for an intended and specific project.

The [`Makefile`][makefile] uses the recommended [act][act] tool to replicate integration testing as closely as possible
on development environments. It's highly recommended to continue this pattern.

<!-- editorconfig-checker-disable -->

- [ ] Choose the appropriate MegaLinter [flavor][megalinter-flavors] and update the [.mega-linter.yml][workflow-megalinter] workflow
- [ ] Update the [`mega-linter.yml`][megalinter-config] file appropriate to the new project
- [ ] Update any additional linting configurations in the [`.config/linters`][linters-config] directory

<!-- editorconfig-checker-enable -->

---

## 5. Cleanup

With everything else complete, there is only one step left:

- [ ] Delete the [`_TEMPLATE_CHECKLIST.md`][checklist] file

---

## Next steps

Once you have refined the template project for its purpose, the following steps are usually helpful:

1. Update the [`README.md`][readme] file to best suit the project
2. Configure the [`.vscode`][vscode] folder, as [described here][vscode-docs]
3. Configure the [`.devcontainer`][devcontainer] folder, as [described here][devcontainer-docs]
4. Update the `all`, `build`, and `test-unit` targets in the [Makefile folder][makefile]
5. Add any specific dictionary words to the [`.config/dictionaries/project.txt`][dictionary] file
6. Update the [Issue][tpl-issue] and [Pull Request][tpl-pr] templates

From there, it's a matter of getting started by creating new [source code][source], [tests][tests], and
[build scripts][build] to make the project a reality.

---

## Appendix

### Folder structure

This template comes with the following standard folder structure:

<!-- editorconfig-checker-disable -->

| Folder                         | Purpose                                                                                        |
|:-------------------------------|:-----------------------------------------------------------------------------------------------|
| [.build](.build)               | All scripts and resources tied to deployment (for example, Docker Compose)                     |
| [.config](.config)             | All configuration files for local development                                                  |
| [.devcontainer](.devcontainer) | DevContainer configurations ([GitHub Docs][dc-gh], [VSCode Docs][dc-vsc], [Reference][dc-ref]) |
| [.github](.github)             | All configuration files for GitHub                                                             |
| [.vscode](.vscode)             | Applicable, shared configuration files for VSCode to boost initial productivity                |
| [docs](docs)                   | All project documentation                                                                      |
| [src](src)                     | All project source code                                                                        |
| [tests](tests)                 | All test source code                                                                           |

<!-- editorconfig-checker-enable -->

<!-- Link Repository -->

<!-- editorconfig-checker-disable -->

[act]: https://github.com/nektos/act
[apache2]: https://choosealicense.com/licenses/apache-2.0/
[build]: .build
[checklist]: _TEMPLATE_CHECKLIST.md
[choose-a-license]: https://choosealicense.com/
[devcontainer]: .devcontainer
[devcontainer-docs]: https://code.visualstudio.com/docs/devcontainers/containers
[dictionary]: .config/dictionaries/project.txt
[gpl3]: https://choosealicense.com/licenses/gpl-3.0/
[homebrew-sed]: https://formulae.brew.sh/formula/gnu-sed
[issue-label-sync]: https://github.com/andrewvaughan/template-core/issues/1
[labels]: https://github.com/andrewvaughan/template-core/labels
[license]: LICENSE
[license-dir]: https://github.com/andrewvaughan/template-core/tree/main
[linters-config]: .config/linters
[makefile]: .config/make
[megalinter]: https://megalinter.io/
[megalinter-config]: .mega-linter.yml
[megalinter-flavors]: https://megalinter.io/latest/flavors/
[mit]: https://choosealicense.com/licenses/mit/
[unlicense]: https://choosealicense.com/licenses/unlicense/
[dc-gh]: https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers
[dc-ref]: https://github.com/oxsecurity/megalinter/tree/main/.devcontainer
[dc-vsc]: https://code.visualstudio.com/docs/devcontainers/containers
[readme]: README.md
[source]: src
[template-core]: https://github.com/andrewvaughan/template-core/
[tests]: tests
[tpl-issue]: .github/ISSUE_TEMPLATE
[tpl-pr]: .github/PULL_REQUEST_TEMPLATE
[vscode]: .vscode
[vscode-docs]: https://stackoverflow.com/questions/32964920/should-i-commit-the-vscode-folder-to-source-control
[workflow-megalinter]: https://github.com/andrewvaughan/template-core/blob/main/.github/workflows/mega-linter.yml#L57

<!-- markdown-link-check-disable -->

[gh-rulesets]: https://github.com/andrewvaughan/template-core/settings/rules
[gh-settings]: https://github.com/andrewvaughan/template-core/settings

<!-- markdown-link-check-enable -->

<!-- editorconfig-checker-enable -->
