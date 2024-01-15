# Template checklist

When creating a new project from this template, ensure to take these steps immediately after provisioning.

<!-- editorconfig-checker-disable -->
<!-- prettier-ignore-start -->
<!-- omit from toc -->
## Contents

- [Template checklist](#template-checklist)
  - [1. Update all references to `template-core` to this Repository](#1-update-all-references-to-template-core-to-this-repository)
  - [2. Configure GitHub Repository settings](#2-configure-github-repository-settings)
    - [General settings](#general-settings)
      - [Features](#features)
      - [Pull Requests](#pull-requests)
      - [Archives](#archives)
    - [Branch and Tag protection](#branch-and-tag-protection)
    - [Labels](#labels)
  - [3. Prepare the Repository files](#3-prepare-the-repository-files)
    - [Only for Windows-only development environments](#only-for-windows-only-development-environments)
  - [4. Select a license](#4-select-a-license)
    - [Permissions](#permissions)
    - [Conditions](#conditions)
    - [Limitations](#limitations)
  - [5. Complete all `TEMPLATE TODO` items](#5-complete-all-template-todo-items)
  - [6. Update files that can't include comments](#6-update-files-that-cant-include-comments)
  - [7. Finishing up](#7-finishing-up)
  - [Next steps](#next-steps)
  - [Appendix](#appendix)
    - [Folder structure](#folder-structure)

---
<!-- prettier-ignore-end -->
<!-- editorconfig-checker-enable -->

## 1. Update all references to `template-core` to this Repository

After checking out the new project and setting the `origin` remote for `git`, run the following command locally to
update link targets to the new Repository instead of the original [`template-core`][template-core] Repository:

> **Note** - this assumes that you are on macOS using GNU `sed` installed via [Homebrew][homebrew-sed] as `gsed`. If you
> are running this on Linux, or otherwise have GNU `sed` installed as a default, simply replace `gsed` with `sed` below
> prior to running this command:

```sh
REPO=$(sed -E 's@.*github\.com:(.+)\.git$@\1@g' <(git ls-remote --get-url origin)); \
  find . \( -type d -name .git -prune \) -o -type f -print0 | \
  xargs -0 gsed -i "s@andrewvaughan/template-core@${REPO}@g"
```

For the rest of setup, refer to this - now updated - document to have accurate links to references in future steps. For
the cleanest results, hold off on committing and pushing these changes until all steps in this file are complete.

---

## 2. Configure GitHub Repository settings

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

In the project, visit the [`.github/.config/rulesets`](.github/.config/rulesets) and import each of the GitHub Rulesets
in the directory into the project:

- [ ] Branch Common Rules
- [ ] Branch Environment Rules
- [ ] Branch Release Patterns
- [ ] Tag Common Rules
- [ ] Tag Release Patterns

### Labels

A manual workflow called `Sync Labels` must trigger from the GitHub Actions page for this Repository to create the
Labels necessary for automation to function and for the Software Development Lifecycle. You must trigger this workflow
manually.

- [ ] Run the [`Sync Labels`][workflow-labels] workflow for this project

---

## 3. Prepare the Repository files

- [ ] Enable `git lfs` for the project if it hasn't already been installed

```sh
git lfs install
```

- [ ] Add and/or remove any files or [folders](#folder-structure) that don't apply to this project

> **Optional**
>
> - [ ] Remove all `.empty` files
>
> ```bash
> find . -type f -name '.empty' -delete
> ```

### Only for Windows-only development environments

- [ ] Update `.gitattributes` and `.editorconfig` file endings to `CRLF`
- [ ] Update all files to the new file ending in Command Prompt

```bat
for /R %f in (.*) do UNIX2DOS %f ...
for /R %f in (*.*) do UNIX2DOS %f ...
```

---

## 4. Select a license

Several [Licenses][choose-a-license] are available based on the privileges, conditions, and limitations for Licensees of
the project. Each table lists Licenses in order from least-restrictive to most-restrictive in the sections, below.

- [ ] Remove the `template-core` Repository's default `LICENSE` file

```sh
rm LICENSE
```

- [ ] Select the appropriate License using the tables, below, as a guide, and rename it to `LICENSE`
- [ ] Delete all remaining [`LICENSE.*`][license-dir] files

```sh
rm LICENSE.*
```

- [ ] Check that all dates and copyright owners are correct
- [ ] Update the [`README.md`][readme] badge to show the correct License
- [ ] Add the appropriate [`LICENSE`][license] boilerplate to the [`README.md`][readme] file, if applicable
- [ ] Add the appropriate [`LICENSE`][license] boilerplate to any source files, if applicable

### Permissions

| License File                     | Commercial Use | Distribution | Modification | Patent Use | Private Use |
| :------------------------------- | :------------: | :----------: | :----------: | :--------: | :---------: |
| [`LICENSE.unlicense`][unlicense] |      Yes       |     Yes      |     Yes      |     -      |     Yes     |
| [`LICENSE.mit`][mit]             |      Yes       |     Yes      |     Yes      |     -      |     Yes     |
| [`LICENSE.apache`][apache2]      |      Yes       |     Yes      |     Yes      |    Yes     |     Yes     |
| [`LICENSE.gpl3`][gpl3]           |      Yes       |     Yes      |     Yes      |    Yes     |     Yes     |
| `LICENSE.proprietary`            |       -        |      -       |      -       |     -      |      -      |

As described by:

| Permission     | Description                                                               |
| :------------- | :------------------------------------------------------------------------ |
| Commercial Use | This License grants use for commercial purpose, including derivatives     |
| Distribution   | This License grants distribution of the licensed material                 |
| Modification   | This Licensed grants modification rights                                  |
| Patent Use     | This License provides an express grant of patent rights from Contributors |
| Private Use    | This License grants modification rights in private                        |

### Conditions

| License File                     | Disclose Source | License/Copyright Notice | Same License | State Changes |
| :------------------------------- | :-------------: | :----------------------: | :----------: | :-----------: |
| [`LICENSE.unlicense`][unlicense] |        -        |            -             |      -       |       -       |
| [`LICENSE.mit`][mit]             |        -        |           Yes            |      -       |       -       |
| [`LICENSE.apache`][apache2]      |        -        |           Yes            |      -       |      Yes      |
| [`LICENSE.gpl3`][gpl3]           |       Yes       |           Yes            |     Yes      |      Yes      |
| `LICENSE.proprietary`            |        -        |            -             |      -       |       -       |

As described by:

<!-- editorconfig-checker-disable -->

| Permission               | Description                                                                                                                                                          |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disclose Source          | Licensees must make source code available when distributing                                                                                                          |
| License/Copyright Notice | Licensees must include a copy of the License and copyright notice with the material                                                                                  |
| Same License             | Licensee must Release modifications under the same License when distributing the licensed material - in some cases the Licensee may use a similar or related License |
| State Changes            | Licensee must document changes made to the licensed material                                                                                                         |

<!-- editorconfig-checker-enable -->

### Limitations

| License File                     | Limited Liability | No Trademark | No Warranty |
| :------------------------------- | :---------------: | :----------: | :---------: |
| [`LICENSE.unlicense`][unlicense] |        Yes        |      -       |     Yes     |
| [`LICENSE.mit`][mit]             |        Yes        |      -       |     Yes     |
| [`LICENSE.apache`][apache2]      |        Yes        |     Yes      |     Yes     |
| [`LICENSE.gpl3`][gpl3]           |        Yes        |      -       |     Yes     |
| `LICENSE.proprietary`            |         -         |      -       |      -      |

As described by:

<!-- editorconfig-checker-disable -->

| Permission        | Description                                                                                                                                                             |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Limited Liability | This License includes a limitation of liability                                                                                                                         |
| No Trademark      | This License explicitly states that it doesn't grant trademark rights, even though Licenses without such a statement probably don't grant any implicit trademark rights |
| No Warranty       | This License explicitly states that it doesn't provide any warranty                                                                                                     |

<!-- editorconfig-checker-enable -->

---

## 5. Complete all `TEMPLATE TODO` items

Each file in the template that has particular needs after copying the template has those elements marked with a special
`TEMPLATE TODO` comment.

If using VSCode, the recommended extensions and the provided workspace settings provides a curated list of items that
require attention and add a counter to the bottom status bar representing how many items remain.

If not using VSCode, search for all instances of this phrase and take the actions they state:

```sh
grep -r "TEMPLATE TODO" .
```

Delete the `TEMPLATE TODO` comments in each file as you complete them.

---

## 6. Update files that can't include comments

- [ ] Add necessary dictionaries for the expected languages to `.config/linters/.cspell.json`

```sh
# To list all available dictionaries
npx cspell trace -c .config/linters/.cspell.json --all ''
```

- [ ] Install the recommended extensions via the prompt when first opening the workspace, or with the following command:

```sh
make vscode
```

---

## 7. Finishing up

With everything else complete, there is only one step left:

- [ ] Delete this [`_TEMPLATE_CHECKLIST.md`][checklist] file

---

## Next steps

Once you have refined the template project for its purpose, the following steps are usually helpful:

<!-- editorconfig-checker-disable -->

1. Update the [`README.md`][readme] file to best suit the project
2. Prepare the [`.vscode`][vscode] folder, as [described here][vscode-docs]
3. Prepare the [`.devcontainer`][devcontainer] folder, as [described here][devcontainer-docs]
4. Update the `all`, `build`, and `test-unit` targets in the [Makefile folder][makefile]
5. Add any specific dictionary configurations to [`.config/dictionaries/project.txt`][dictionary] and [`.config/linters/vale/styles/Vocab/`][vale-vocab]
6. Customize the [Issue][tpl-issue] and [Pull Request][tpl-pr] templates

<!-- editorconfig-checker-enable -->

From there, it's a matter of getting started by creating new [source code][source], [tests][tests], and
[build scripts][build] to make your project a reality.

---

## Appendix

### Folder structure

This template comes with the following standard folder structure:

<!-- editorconfig-checker-disable -->

| Folder                         | Purpose                                                                                        |
| :----------------------------- | :--------------------------------------------------------------------------------------------- |
| [.build](.build)               | All scripts and resources tied to deployment (for example, Docker Compose)                     |
| [.config](.config)             | All configuration files for local development                                                  |
| [.devcontainer](.devcontainer) | DevContainer configurations ([GitHub Docs][dc-gh], [VSCode Docs][dc-vsc], [Reference][dc-ref]) |
| [.github](.github)             | All configuration files for GitHub                                                             |
| [.vscode](.vscode)             | Applicable, shared configuration files for VSCode to boost initial productivity                |
| [docs](docs)                   | All project documentation                                                                      |
| [src](src)                     | All project source code                                                                        |
| [tests](tests)                 | All test source code                                                                           |

<!-- editorconfig-checker-enable -->

<!-- Link repository -->
<!-- editorconfig-checker-disable -->

[apache2]: https://choosealicense.com/licenses/apache-2.0/
[build]: .build
[checklist]: _TEMPLATE_CHECKLIST.md
[choose-a-license]: https://choosealicense.com/
[devcontainer]: .devcontainer
[devcontainer-docs]: https://code.visualstudio.com/docs/devcontainers/containers
[dictionary]: .config/dictionaries/project.txt
[gpl3]: https://choosealicense.com/licenses/gpl-3.0/
[homebrew-sed]: https://formulae.brew.sh/formula/gnu-sed
[license]: LICENSE
[license-dir]: https://github.com/andrewvaughan/template-core/tree/main
[makefile]: .config/make
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
[vale-vocab]: .config/linters/vale/styles/Vocab
[vscode]: .vscode
[vscode-docs]: https://stackoverflow.com/questions/32964920/should-i-commit-the-vscode-folder-to-source-control
[workflow-labels]: https://github.com/andrewvaughan/template-core/actions/workflows/sync-labels.yml

<!-- markdown-link-check-disable -->

[gh-rulesets]: https://github.com/andrewvaughan/template-core/settings/rules
[gh-settings]: https://github.com/andrewvaughan/template-core/settings

<!-- markdown-link-check-enable -->
<!-- editorconfig-checker-enable -->
