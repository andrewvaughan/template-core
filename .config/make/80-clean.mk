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

.PHONY: clean clean-dev clean-tests clean-build clean-deploy clean-images stop-lint-containers


##
# Clean the entire project.
#
clean:
	$(call _title, Cleaning all artifacts)

	$(call _warning, \
		Docker cached images are _not_ cleaned as part of normal cleaning processes$(,) use 'make clean-images' to \
		clean cached images from the system. \
	)

	$(MAKE) clean-dev
	$(MAKE) clean-tests
	$(MAKE) clean-build
	$(MAKE) clean-deploy

	echo


##
# Clean artifacts left over from development.
#
clean-dev:
	# TEMPLATE TODO
	$(call _debug, No cleaning steps have been defined.)


##
# Clean artifacts left over from testing.
#
clean-tests:
	$(call _header, Cleaning test artifacts)

	$(call _recursive_purge, *megalinter*.txt)
	$(call _recursive_purge, megalinter-reports, d)
	$(call _recursive_purge, .ruff_cache, d)

	$(MAKE) stop-lint-containers


##
# Clean artifacts left over from builds.
#
clean-build:
	# TEMPLATE TODO
	$(call _debug, No cleaning steps have been defined.)


##
# Clean artifacts leftover from deployments.
#
clean-deploy:
	# TEMPLATE TODO
	$(call _debug, No cleaning steps have been defined.)


##
# Stop and clean Docker images downloaded and used as part of this project.
#
clean-images:
	$(call _title, Cleaning cached Docker images)

	$(eval DIR_DOCKER := /var/lib/docker)
	$(eval DIR_DOCKER := $(shell \
		if [[ "$$( uname )" == "Darwin" ]]; then \
			echo "$${HOME}/Library/Containers/com.docker.docker/Data/vms"; \
		fi \
	))

	$(eval START_SIZE := $(shell \
		echo $$(( \
			$$( du -s -k "$(DIR_DOCKER)" | cut -f1 ) * 1024 \
		)) \
	))

	$(MAKE) stop-lint-containers

	$(call _header, Removing test images)

	-docker rmi -f $$( \
		docker images -q -f "label=org.opencontainers.image.vendor=catthehacker" \
	) 2>/dev/null || true

	-docker rmi -f $$( \
		docker images -q -f "label=com.github.actions.name=MegaLinter" \
	) 2>/dev/null || true

	echo

	sleep 5 \
		&& MAK_END_SIZE=$$(( \
			$$(du -s -k "$(DIR_DOCKER)" | cut -f1) * 1024 \
		)) \
		&& MAK_SAVED=$$(( \
			$(START_SIZE) - $${MAK_END_SIZE} \
		)) \
		&& printf "Disk space freed: %.2fG\n" "$$( echo "scale=2; $${MAK_SAVED} / (1024 ^ 3)" | bc )"

##
# Stop and remove any running linting containers for this project.
#
stop-lint-containers:
	$(call _header, Stopping running test containers)

	-docker stop $$( docker ps -aq -f "label=org.opencontainers.image.vendor=catthehacker" ) 2>/dev/null || true
	-docker stop $$( docker ps -aq -f "label=com.github.actions.name=MegaLinter" ) 2>/dev/null || true

	$(call _header, Removing stopped test containers)

	-docker rm -f $$( docker ps -aq -f "label=org.opencontainers.image.vendor=catthehacker" ) 2>/dev/null || true
	-docker rm -f $$( docker ps -aq -f "label=com.github.actions.name=MegaLinter" ) 2>/dev/null || true
