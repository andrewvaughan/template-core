# Development container

This [development container][devcontainer] provides a uniform development environment for rapid onboarding and
consistent code quality.

To use this Development Container, your IDE must support [`.devcontainer`][devcontainer] configurations.

The formally supported IDE for this Repository is [Visual Studio Code][vscode]. You may use any IDE you wish, so long
you meet the standards for this Repository. Support isn't provided for other IDEs.

The project includes a helper function to configure VSCode to support Development Containers, which you run with:

```sh
make vscode
```

You may then enter the Development Container by pressing the button on the popup when restarting VSCode to do so, or by
pressing `CTL+SHIFT+P` (`CMD+SHIFT+P` on macOS) and choosing `Dev Containers: Rebuild and Reopen in Container`.

## Configuration files

You _shouldn't_ store VSCode extensions and settings in the Workspace or `.vscode` folder configuration. Always add
them to the [`devcontainer.json`][config] file.

<!-- Link repository -->

[config]: ./devcontainer.json
[devcontainer]: https://containers.dev/
[vscode]: https://code.visualstudio.com/
