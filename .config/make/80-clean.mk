##
# Cleaning Makefile targets.
#
# This file defines targets used for cleaning up artifacts created from the development, building, testing, and/or
# deployment of this project.
#


## ---------------------------------------------------------------------------------------------------------------------
# Functions.
#


##
# Recursively remove a glob file pattern in the project folder.
#
# @param {string} (1) - the file glob to remove
# @param {string} (2) - the type of file to remove (default: 'f'; choose 'd' for directory)
#
define _recursive_purge
	$(call _debug, Purging files recursively: $(1))

	$(eval F_TYPE := $(or $(strip $(2)), f))

	find . -type $(F_TYPE) -name "$(strip $(1))" -exec rm -rf {} +
endef


## ---------------------------------------------------------------------------------------------------------------------
# Targets.
#

.PHONY: clean clean-dev clean-tests clean-build clean-deploy


##
# Clean the entire project.
#
clean:
	$(call _title, Cleaning all artifacts)

	$(MAKE) clean-dev
	$(MAKE) clean-tests
	$(MAKE) clean-build
	$(MAKE) clean-deploy

	echo


##
# Clean artifacts left over from development.
#
# TODO - Add any development cleaning steps or remove this.
#
clean-dev:
	$(call _debug, No cleaning steps have been defined.)


##
# Clean artifacts left over from testing.
#
# TODO - Add any test cleaning steps or remove this.
#
clean-tests:
	$(call _header, Cleaning test artifacts)

	$(call _recursive_purge, *megalinter*.txt)
	$(call _recursive_purge, megalinter-reports, d)
	$(call _recursive_purge, .ruff_cache, d)


##
# Clean artifacts left over from builds.
#
# TODO - Add any build cleaning steps or remove this.
#
clean-build:
	$(call _debug, No cleaning steps have been defined.)


##
# Clean artifacts leftover from deployments.
#
# TODO - Add any deploy cleaning steps or remove this.
#
clean-deploy:
	$(call _debug, No cleaning steps have been defined.)
