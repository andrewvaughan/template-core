# VSCode extension recommendations

This configuration folder helps new developers get up and running as quickly as possible to dive right into coding.

<!-- editorconfig-checker-disable -->

- [`extensions.json`](extensions.json) - provide a number of recommendations of VSCode extensions to install - [Microsoft Documentation][docs-extensions]
- [`settings.json`](settings.json) - provide workspace configurations recommended for this project - [Microsoft Documentation][docs-settings]

<!-- editorconfig-checker-enable -->

These files configure enough of a Microsoft VSCode workspace to provide testing, linting, and code policy enforcement
and avoid surprises during integration.
By no means must you install or configure these extensions as-presented, but the CI/CD integration pipeline enforces the
policies they represent at time of integration, regardless of whether they're in use or not. Please feel free to
override or modify your user or local workspace settings, as works best for you, but don't commit your changes to the
Repository. Project Maintainers reject any commits that include changes to these files.

## Extensions

<!-- editorconfig-checker-disable -->
<!-- vale off -->

| Extension                                                      |                    ID                    | Publisher            | Description                                                                                                                                                                                                                                                        |
| :------------------------------------------------------------- | :--------------------------------------: | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Better Comments][ext-better-comments]                         |       `aaron-bond.better-comments`       | Aaron Bond           | Improve your code commenting by annotating with alert, informational, TODOs, and more!                                                                                                                                                                             |
| [Code Spell Checker][ext-code-spell-checker]                   | `streetsidesoftware.code-spell-checker`  | Street Side Software | Spelling checker for source code                                                                                                                                                                                                                                   |
| [Color Highlight][ext-color-highlight]                         |        `naumovs.color-highlight`         | Sergii N             | Highlight web colors in your editor                                                                                                                                                                                                                                |
| [Dev Containers][ext-dev-containers]                           |   `ms-vscode-remote.remote-containers`   | Microsoft            | Open any folder or repository inside a Docker container and take advantage of Visual Studio Code's full feature set.                                                                                                                                               |
| [DevSkim][ext-devskim]                                         |        `MS-CST-E.vscode-devskim`         | Microsoft DevLabs    | DevSkim Security Analyzer Plugin for IDEs. Find security mistakes as code is authored, and fix them with a mouse click.                                                                                                                                            |
| [Docker][ext-docker]                                           |      `ms-azuretools.vscode-docker`       | Microsoft            | Makes it easy to create, manage, and debug containerized applications.                                                                                                                                                                                             |
| [EditorConfig for VS Code][ext-editorconfig]                   |       `EditorConfig.EditorConfig`        | EditorConfig         | EditorConfig Support for Visual Studio Code                                                                                                                                                                                                                        |
| [GitHub Actions][ext-github-actions]                           |      `github.vscode-github-actions`      | GitHub               | GitHub Actions workflows and runs for github.com hosted repositories in VS Code                                                                                                                                                                                    |
| [GitLens — Git supercharged][ext-gitlens]                      |            `eamodio.gitlens`             | GitKraken            | Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more |
| [indent-rainbow][ext-indent-rainbow]                           |         `oderwat.indent-rainbow`         | oderwat              | Makes indentation easier to read                                                                                                                                                                                                                                   |
| [Makefile Tools][ext-makefile-tools]                           |        `ms-vscode.makefile-tools`        | Microsoft            | Provide makefile support in VS Code: C/C++ IntelliSense, build, debug/run.                                                                                                                                                                                         |
| [Markdown All in One][ext-markdown-all-in-one]                 |       `yzhang.markdown-all-in-one`       | Yu Zhang             | All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)                                                                                                                                                                      |
| [Markdown Preview Github Styling][ext-markdown-preview-github] | `bierner.markdown-preview-github-styles` | Matt Bierner         | Changes VS Code's built-in markdown preview to match Github's style                                                                                                                                                                                                |
| [markdownlint][ext-markdownlint]                               |     `DavidAnson.vscode-markdownlint`     | David Anson          | Markdown linting and style checking for Visual Studio Code                                                                                                                                                                                                         |
| [Prettier - Code formatter][ext-prettier]                      |         `esbenp.prettier-vscode`         | Prettier             | Code formatter using prettier                                                                                                                                                                                                                                      |
| [Todo Tree][ext-todo-tree]                                     |         `Gruntfuggly.todo-tree`          | Gruntfuggly          | Show TODO, FIXME, etc. comment tags in a tree view                                                                                                                                                                                                                 |
| [Vale VSCode][ext-vale-vscode]                                 |      `chrischinchilla.vale-vscode`       | Chris Chinchilla     | The Visual Studio Code extension for Vale.                                                                                                                                                                                                                         |
| [vscode-icons][ext-vscode-icons]                               |     `vscode-icons-team.vscode-icons`     | VSCode Icons Team    | Icons for Visual Studio Code                                                                                                                                                                                                                                       |
| [YAML][ext-yaml]                                               |           `redhat.vscode-yaml`           | Red Hat              | YAML Language Support by Red Hat, with built-in Kubernetes syntax support                                                                                                                                                                                          |

<!-- vale on -->
<!-- editorconfig-checker-enable -->

<!-- Link repository -->

<!-- editorconfig-checker-disable -->

[docs-extensions]: https://code.visualstudio.com/docs/editor/extension-marketplace
[docs-settings]: https://code.visualstudio.com/docs/getstarted/settings
[ext-better-comments]: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
[ext-code-spell-checker]: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
[ext-color-highlight]: https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight
[ext-dev-containers]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
[ext-devskim]: https://marketplace.visualstudio.com/items?itemName=MS-CST-E.vscode-devskim
[ext-docker]: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker
[ext-editorconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[ext-github-actions]: https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions
[ext-gitlens]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[ext-indent-rainbow]: https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow
[ext-makefile-tools]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.makefile-tools
[ext-markdown-all-in-one]: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
[ext-markdown-preview-github]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles
[ext-markdownlint]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[ext-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[ext-todo-tree]: https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree
[ext-vale-vscode]: https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode
[ext-vscode-icons]: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
[ext-yaml]: https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml

<!-- editorconfig-checker-enable -->
