# CSpell dictionaries

The spellcheck linter ([CSpell][cspell]) uses the `.txt` files within this folder as custom dictionaries when processing
files for spelling mistakes. The spellcheck utility checks all files, not just documentation, so occasions may occur
where developers may need to enter code into the dictionaries. Separate dictionary files are a good way to manage this,
such as the provided [`ops.txt`](ops.txt) dictionary.

Multiple languages are also easily supported by adding a dictionary file for each.

By default, this project includes two dictionaries:

- [`ops.txt`](ops.txt) contains acceptable words for operations and from automation provided by the base template
- [`project.txt`](project.txt) contains acceptable words for the specific project

Developers should add additional dictionaries, as needed, in this directory. Don't forget to update the
[`.cspell.json`][config] file you add a dictionary, per the [instructions][add-dictionary].

## References

- [CSpell custom dictionaries][docs-dicts]
- [CSpell configuration][config]

<!-- Link repository -->

[add-dictionary]: https://cspell.org/docs/dictionaries/#dictionary-definition
[config]: ../linters/.cspell.json
[cspell]: https://cspell.org
[docs-dicts]: https://cspell.org/docs/dictionaries-custom/
