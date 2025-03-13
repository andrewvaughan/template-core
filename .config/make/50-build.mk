##
# Building Makefile targets.
#
# This file defines targets used for building the project.
#

.PHONY: all build dev-dependencies


##
# Default target.
#
all: build


##
# Build the distributable application.
#
# TODO - Update to build script.
#
build: help


## ---------------------------------------------------------------------------------------------------------------------
# Dependencies.
#
# TODO - Add any additional dependencies and developer dependencies.
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
	rm -rf .config/linters/vale/styles/Google
	vale sync
	echo
