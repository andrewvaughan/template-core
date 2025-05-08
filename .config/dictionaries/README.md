# CSpell dictionaries

The spellcheck linter ([CSpell][cspell]) uses the `.txt` files within this folder as custom dictionaries when processing
files for spelling mistakes. The spellcheck utility checks all files, not just documentation. Configurations are
occasionally required to inform CSpell the difference between code and comments through [language settings][language].
The [`.jscpd.json`][config] file stores these configurations.

Multiple languages are easily supported by adding a dictionary file for each.

By default, this project includes two dictionaries:

- [`ops.txt`](ops.txt) contains acceptable words for operations and from automation provided by the base template
- [`project.txt`](project.txt) contains acceptable words for the specific project

Developers should add additional [custom dictionaries][docs-dicts], as needed, in this directory. Don't forget to update
the [`.cspell.json`][config] file when you add a dictionary, per the CSpell instructions.

## Operations dependency directories

The `ops-deps` folder contains dictionaries for technologies used in the project that aren't currently supported by the
CSpell community. Eventually, contributing a full dictionary to the CSpell project for each of these tools would be
ideal to both ensure projects have fully supported linting in these tools, but also to give back to the community.

For now, dictionaries only contain tokens and words used by the project to keep dependency operations separate from
project operations, allowing for easy removal as CSpell community capabilities improve.

These dependencies include:

- [`makefile.txt`](ops-deps/makefile.txt) - for `Makefile` commands and variables
- [`terminfo.txt`](ops-deps/terminfo.txt) - for some common `terminfo` configurations, especially terminal colors

<!-- Link repository -->

[config]: ../../.cspell.json
[cspell]: https://cspell.org
[docs-dicts]: https://cspell.org/docs/dictionaries/custom-dictionaries
[language]: https://cspell.org/docs/Configuration/language-settings
