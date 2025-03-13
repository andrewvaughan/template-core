# Development Container

This [development container][devcontainer] provides a uniform development envioronment for rapid onboarding and
consistent code quality.

To use this Development Container, your IDE must support [`.devcontainer`][devcontainer] configurations.

The formally supported IDE for this repository is [Visual Studio Code][vscode]. You may use any IDE you wish, so long
as the standards for this repository are met. Support will not be provided for other IDEs.

A helper function is provided to configure VSCode to support Development Containers, which can be run with:

```sh
make vscode
```

The Development Container can then be entered by pressing the button on the popup when restarting VSCode to do so, or
by pressing `CTL+SHIFT+P` (`CMD+SHIFT+P` on macOS) and choosing `Dev Containers: Rebuild and Reopen in Container`.

## Configuration files

VSCode extensions and settings should _not_ be stored in the Workspace (or `.vscode` folder) configuration. They should
always be added to the [`devcontainer.json`][config] file.

<!-- Link repository -->

[config]: ./devcontainer.json
[devcontainer]: https://containers.dev/
[vscode]: https://code.visualstudio.com/
