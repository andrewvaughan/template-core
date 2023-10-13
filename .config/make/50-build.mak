##
# Building
#
# This file defines targets used for building the project.
#

.PHONY: all dev-dependencies


##
# Default target - shows the help message
#
all: help


## ---------------------------------------------------------------------------------------------------------------------
# Dependencies
#


##
# Install dependencies for development
#
# Some of these changes may impact the Repository. Commit these changes if they occur.
#
dev-dependencies:
	$(call _title, Updating development dependencies)

	$(call _header, Updating prose style guide)
	echo
	rm -rf .config/linters/vale/styles/Google
	$(NPX) vale sync
	echo
