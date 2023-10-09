##
# Usage
#
# This file contains help information on how to use this Makefile.
#

.PHONY: help


##
# Print the usage instructions for this Makefile.
#
# This will automatically pull the first line after the double-hash (##) comment for any target to print as the
# help. This means any new targets will have their usage instructions auto-generated here, so long as the comment
# formatting remains correct.
#
# Private targets should start with an underscore (`_`) to prevent having their information listed here.
#
help:
	$(call _title, Makefile Help, 80)

	printf "\nUsage: $(_FG_CYAN)make $(_FG_GREEN)$(_ITALIC)<target>$(_RESET)\n\n"

	$(call _info, \
		This Makefile provides various utility methods for this project in an effort to make development more \
		consistent and developer-friendly. Please refer to the living project doumentation for more details:, 80 \
	)

	printf "    $(_UNDERLINE)$(_FG_BLUE)https://github.com/andrewvaughan/template-core$(_RESET)\n\n"

	$(call _info, The following targets are available$(,) which can be called via:, 80)

	for file in $(MAKEFILE_LIST); do \
		cat $$file \
			| awk ' \
				BEGIN { c = "" }; \
				/^##/ { \
					c = ""; \
				}; \
				/^# .+/ { \
					if (length(c) == 0) { \
						for (i = 2; i <= NF; i++) \
							c = c $$i " "; \
					} \
				}; \
				/^[a-zA-Z0-9][a-zA-Z0-9_-]+:/ { \
					split($$0, spl, ":"); \
					printf "    $(_FG_GREEN)$(_ITALIC)%-15s$(_RESET) %s\n", spl[1], c; \
				}' \
			$$file \
		; \
	done

	echo
