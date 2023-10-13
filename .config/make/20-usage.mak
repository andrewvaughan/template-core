##
# Usage
#
# This file contains help information on how to use this Makefile. Usage instructions for targets are auto-generated
# based on the first line of comments after the double-hash (`##`) in the comment block preceding the target.
#

.PHONY: help


##
# The wrapping width for the usage instructions.
#
HELP_WIDTH := 120


##
# How much right-padding to include when listing the table of targets in the usage instructions
#
HELP_TARGET_WIDTH := 25


##
# Print these usage instructions
#
# This automatically pulls the first line after the double-hash (`##`) comment for each target to print as the help. New
# targets usage instructions are auto-generated, so long as the comment formatting remains correct. Targets must use the
# following comment pattern for this to function correctly:
#
# ```make
# ##
# # Line to appear in the usage guide
# #
# # This comment and all following comments won't appear.
# #
# target:
# ```
#
# Private targets should start with an underscore (`_`) to prevent having their information listed here. Targets
# intended for a special purpose should start with a period (`.`) and also won't appear here.
#
help:
	$(call _title, Makefile help, $(HELP_WIDTH))

	echo
	printf "Usage: $(_FG_CYAN)make $(_FG_GREEN)$(_ITALIC)<target>$(_RESET)"

	echo
	echo

	$(call _info, \
		This Makefile provides various utility methods for this project in an effort to make development more \
		consistent and developer-friendly. Please refer to the latest project documentation for more details:, \
		$(HELP_WIDTH) \
	)

	echo
	printf "    $(_UNDERLINE)$(_FG_BLUE)https://github.com/andrewvaughan/template-core$(_RESET)\n\n"

	$(call _info, The following targets are available$(,) which can be called via:, $(HELP_WIDTH))

	echo

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
					printf "    $(_FG_GREEN)%-$(HELP_TARGET_WIDTH)s$(_RESET) %s\n", spl[1], c; \
				}' \
			$$file \
		; \
	done

	echo
