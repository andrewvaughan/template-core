##
# Testing
#
# This file defines targets used for testing the project. Create all tests in a platform-independent manner and ensure
# they best-mimic the integration tests implemented on GitHub, when possible.
#


## ---------------------------------------------------------------------------------------------------------------------
# Variables and configurations
#


##
# Contains the name of the architecture the target is being ran on
#
ARCHITECTURE := $(shell uname -m)


##
# The action `act` should use when simulating a GitHub action
#
# By default, the action is `pull_request` to imitate integration tests.
#
ACT_ACTION := pull_request


##
# The actor that `act` should use when simulating a GitHub Action
#
# This should be a GitHub user or organization.
#
ACT_ACTOR :=


##
# The container architecture that `act` should use via Docker to run with
#
# This is most commonly used with macOS M# processors. If you are using a macOS device with an M# chip, the architecture
# is automatically set.
#
ACT_ARCHITECTURE :=


##
# The workflow job that `act` should use when simulating a GitHub action
#
# This can be helpful when triggering more than one workflow for a given action.
#
ACT_JOB :=


##
# Additional parameters to add to every `act` call
#
# For example, debug verbosity can increase by setting this to `-v`. Verbosity is automatically increased if `DEBUG` is
# enabled or `make` is ran in any of its debug modes.
#
ACT_PARAMS :=


##
# Internal variable used to modify the `act` command when ran
#
_ACT_FULL_PARAMS := $(ACT_PARAMS)


## ---------------------------------------------------------------------------------------------------------------------
# Conditional logic
#


##
# Set the `act` container architecture to `amd64` explicitly if running on an ARM device, such as M# chips from Apple
#
ifeq ($(ARCHITECTURE), arm64)
ACT_ARCHITECTURE := linux/amd64
endif


##
# Enable debug mode on `act` if `make` is in debug mode
#
ifdef DEBUG
_ACT_FULL_PARAMS += -v
endif


## ---------------------------------------------------------------------------------------------------------------------
# Testing targets
#

.PHONY: test test-lint test-unit


##
# Run the full test suite on the project
#
test:
	$(call _title, Running test framework)

	$(MAKE) test-lint
	$(MAKE) test-unit


##
# Run linting tests on any modified files
#
test-lint:
	$(call _header, Running GitHub '$(ACT_ACTION)' simulation)

	$(call _debug, Architecture: $(ARCHITECTURE))
	$(call _debug, Container: $(ACT_ARCHITECTURE))
	$(call _debug, Actor: $(ACT_ACTOR))
	$(call _debug, Job: $(ACT_JOB))
	$(call _debug, Act params: $(_ACT_FULL_PARAMS))

	act \
		--rm \
		--container-architecture "$(ACT_ARCHITECTURE)" \
		-s GITHUB_TOKEN=$(gh auth token) \
		-a "$(ACT_ACTOR)" \
		-j "$(ACT_JOB)" \
		$(_ACT_FULL_PARAMS) \
		$(ACT_ACTION)


##
# Run the project's unit and integration tests
#
test-unit:
	$(call _debug, No unit tests have been defined.)


## ---------------------------------------------------------------------------------------------------------------------
# Utility targets
#

.PHONY: prettier

##
# Clean formatting of files using `prettier`
#
prettier:
	$(call _title, Cleaning file formatting to project standards)

	if [[ -n $$(git status --porcelain) ]]; then \
		$(call _warning, You have uncommitted changes on this branch.); \
		echo; \
		while true; do \
			printf "Are you sure you wish to run prettier which will modify your existing files? [yN] ";
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
