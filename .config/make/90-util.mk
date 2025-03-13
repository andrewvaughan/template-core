##
# Utility Makefile targets.
#
# This file contains various utility targets that help developers be more efficient.

.PHONY: prettier vscode


##
# Clean formatting of all files using `prettier`.
#
prettier:
	$(call _title, Cleaning file formatting to project standards)

	if [[ -n $$(git status --porcelain) ]]; then \
		$(call _warning, You have uncommitted changes on this branch.); \
		echo; \
		while true; do \
			printf "Are you sure you wish to run prettier which modifies your existing files? [yN] ";
			read -n1 yn; \
			echo; \
			case $$yn in \
				(y | Y) break ;; \
				(n | N) echo; $(call _error, "Gracefully exiting to preserve file state.") ;; \
				(*) ;; \
			esac; \
			echo; \
		done; \
	fi

	$(call _header, Running formatter...)
	$(NPX) prettier -w .


##
# Installs and/or updates recommended VSCode extensions.
#
vscode:
	$(call _title, Installing/Updating VSCode extensions)

	while read -r LINE; do \
		if [[ $${LINE} =~ \s*\".+\"\,?s*$$ ]]; then \
			EXT_MAK=$$(echo $${LINE} | tr -d " \","); \
			$(call _header, Installing $${EXT_MAK}); \
			code --install-extension $${EXT_MAK} --force; \
		fi; \
	done < .vscode/extensions.json
