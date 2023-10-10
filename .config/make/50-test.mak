##
# Testing
#
# This file defines targets used for testing the application. All tests should be created in a platform-independent
# manner and best-mimic the integration tests used on the remote server, when possible.
#


## ---------------------------------------------------------------------------------------------------------------------
# Variables and Configurations
#

ARCHITECTURE := $(shell uname -m)

# The action `act` should use to test; by default, `pull_request` is used to imitate integration tests
ACT_ACTION := pull_request

# The actor that `act` should use for all actions on GitHub; should be a GitHub account or organization
ACT_ACTOR :=

# The container architecture for `act` to used; this is mostly used for macOS M-Chips and is handled automatically
ACT_ARCHITECTURE :=

# The specific job to run with `act`, if any
ACT_JOB :=

# Additional parameters to add to any `act` call (e.g., -v for verbosity)
ACT_PARAMS :=
ACT_FULL_PARAMS := $(ACT_PARAMS)


## ---------------------------------------------------------------------------------------------------------------------
# Conditional Logic
#

# macOS devices with M-chips need require a specific architecture to run act
ifeq ($(ARCHITECTURE), arm64)
ACT_ARCHITECTURE := linux/amd64
endif


# If we're in debug mode, put `act` in debug mode, too
ifeq ($(shell test $(DEBUG) -gt 0; echo $$?),0)
ACT_FULL_PARAMS += -v
endif



## ---------------------------------------------------------------------------------------------------------------------
# Functions
#


##
# Dumps the test state for debugging.
#
define _dumpTestParams
	$(call _debug, Architecture: $(ARCHITECTURE))
	$(call _debug, Container: $(ACT_ARCHITECTURE))
	$(call _debug, Actor: $(ACT_ACTOR))
	$(call _debug, Job: $(ACT_JOB))
	$(call _debug, Act Params: $(ACT_FULL_PARAMS))
	echo
endef



## ---------------------------------------------------------------------------------------------------------------------
# Testing Targets
#

.PHONY: test test-lint test-unit


##
# Run the entire test suite on the project.
#
test: test-lint test-unit


##
# Run linting tests on any files that have been modified.
#
test-lint:
	$(call _title, Running Test Framework)

	$(call _header, Running GitHub '$(ACT_ACTION)' simulation)

	$(call _dumpTestParams)

	act \
		--rm \
		--container-architecture "$(ACT_ARCHITECTURE)" \
		-a "$(ACT_ACTOR)" \
		-j "$(ACT_JOB)" \
		$(ACT_FULL_PARAMS) \
		$(ACT_ACTION)


##
# Run the project's unit and integration tests.
#
test-unit:
	$(call _debug, No unit tests have been configured.)
