##
# Building Makefile targets.
#
# This file defines targets used for building the project.
#

.PHONY: all dev-dependencies


##
# Default target - shows the help message.
#
# TEMPLATE TODO - Update to project build.
#
all: help


## ---------------------------------------------------------------------------------------------------------------------
# Dependencies.
#
# TEMPLATE TODO - Add any additional dependencies and developer dependencies.
#

##
# Install dependencies for development.
#
# Some of these changes may impact the Repository. Commit these changes if they occur.
#
dev-dependencies:
	$(call _title, Updating development dependencies)

	$(call _header, Updating prose style guide)
	echo

	# Update Vale linter base styles
	$(NPX) vale sync

	echo
