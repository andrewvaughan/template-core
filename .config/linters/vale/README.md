# Vale

Vale is a prose linter that ensures that these projects have easy-to-read, well executed documentation. While the
Project Maintainers recommend linting all files, currently, linting only occurs on documentation files such as Markdown.

## Installing Vale locally

Vale has detailed [installation instructions][vale-install] for any platform. The Project Maintainers also recommend
installing the [Vale extension][vale-extension] for VSCode, this project's preferred IDE, which helps to improve more
documentation areas, such as code comments.

## Updating configuration

Developers can add or modify Vale styles via the [`.vale.ini`](../../../.vale.ini) configuration file. It's critical
to update the local Vale style structure after doing so by updating the project's development dependencies:

```bash
make dev-dependencies
```

<!-- Link repository -->

[vale-extension]: https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode
[vale-install]: https://vale.sh/docs/vale-cli/installation/
