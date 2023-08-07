# New Project

## Checklist

When creating a new project from this template, ensure the following steps are taken immediately after provisioning:

- [ ] Add and/or remove any files or folders that do not apply to the project
- [ ] Remove all `.empty` files with `find . -type f -name '.empty' -delete`
- [ ] Remove the entire `Checklist` section from the `README.md` file, including sub-sections

### Folder Structure

This template comes with the following standard folder structure:

| Folder                         | Purpose                                                                                                                                                |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [.build](.build)               | All scripts and resources tied to deployment (e.g., Docker Compose)                                                                                    |
| [.config](.config)             | All configuration files for local development                                                                                                          |
| [.devcontainer](.devcontainer) | DevContainer configurations ([GitHub Docs][dc-gh], [VSCode Docs][dc-vsc], [Reference][dc-ref])                                                         |
| [.github](.github)             | All configuration files for GitHub                                                                                                                     |
| [.vscode](.vscode)             | All configuration files for Visual Studio Code (note, only certain files should be committed, such as recommended `extensions.json` and `launch.json`) |
| [docs](docs)                   | All project documentation                                                                                                                              |
| [src](src)                     | All project source code                                                                                                                                |
| [tests](tests)                 | All test source code                                                                                                                                   |

<!-- Hyperlink Repository -->

[dc-gh]: https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers
[dc-ref]: https://github.com/oxsecurity/megalinter/tree/main/.devcontainer
[dc-vsc]: https://code.visualstudio.com/docs/devcontainers/containers
