##
# Utility Makefile targets.
#
# This file contains various utility targets that help developers get set up effeciently.
#

.PHONY: vscode

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

	#echo $$MAK_VSCODE_EXTS

	#code --install-extension 'aaron-bond.better-comments' --force
