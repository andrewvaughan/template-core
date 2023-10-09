##
# Cleaning
#
# This file defines targets used for cleaning up artifacts created from the development, building, testing, and/or
# deployment of this project.
#

.PHONY: clean clean-dev clean-build clean-tests clean-deploy


##
# Clean the entire project.
#
clean: clean-dev clean-build clean-tests clean-deploy


##
# Clean artifacts left over from development.
#
clean-dev:
	$(call debug, Nothing to clean from development.)


##
# Clean artifacts left over from builds.
#
clean-build:
	$(call debug, Nothing to clean from build.)


##
# Clean artifacts left over from testing.
#
clean-tests:
	$(call debug, Cleaning megalinter artifacts...)
	rm -rf megalinter-reports
	rm -rf .ruff_cache


##
# Clean artifacts leftover from deployments.
#
clean-deploy:
	$(call debug, Nothing to clean from deploy.)
