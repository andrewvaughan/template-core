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
the [`.cspell.json`][config] file when you add a dictionary, per the [CSpell instructions][add-dictionary].

<!-- Link repository -->

[add-dictionary]: https://cspell.org/docs/dictionaries/#dictionary-definition
[config]: ../linters/.cspell.json
[cspell]: https://cspell.org
[docs-dicts]: https://cspell.org/docs/dictionaries-custom/
[language]: https://cspell.org/configuration/language-settings/
