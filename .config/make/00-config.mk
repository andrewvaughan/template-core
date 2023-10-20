##
# Global make configurations.
#
# The running of all Makefile targets in this project gather their configuration from this file. As such, it's
# paramount that this configuration file be the first loaded, alphabetically, in this folder. It's generally recommended
# that no other file share the `00` prefix, and that project configurations use the `10` prefix or higher.
#


## ---------------------------------------------------------------------------------------------------------------------
# GNU make variables and configurations.
#
# @link https://www.gnu.org/software/make/manual/html_node/Special-Variables.html
# @link https://www.gnu.org/software/make/manual/html_node/Special-Targets.html
#


##
# The default target to execute when provided no discrete target.
#
.DEFAULT_GOAL := all


##
# Ensures that, regardless of platform, the bash shell executes all commands.
#
SHELL := /bin/bash
.SHELLFLAGS = -eu -o pipefail -c


##
# Prevents the printing of the recipe from of each target for better commenting and readability.
#
.SILENT:


##
# Runs all commands in the same shell instead of creating a new shell instance per-command.
#
# @link https://www.gnu.org/software/make/manual/html_node/One-Shell.html
#
.ONESHELL:


##
# Export all variables to child processes.
#
.EXPORT_ALL_VARIABLES:


##
# The default `MAKE` executable prints details on entering and leaving directories, which isn't necessary for this
# project. This update ensures that this directory spam isn't printed when calling child processes.
#
MAKE := $(MAKE) --no-print-directory


## ---------------------------------------------------------------------------------------------------------------------
# Custom variables and configurations.
#


##
# Configure `npx` calls to avoid prompts.
#
NPX := npx -y


##
# By default, the `DEBUG` flag follows the `make` command's debug state by calling `make` with the `-d` or `--debug`
# flags.
#
# ```sh
# make -d`
# make --debug=basic
# ```
#
# The two preceding examples result in all targets having a `DEBUG` variable of `1` available for intelligent debugging
# of called commands. Otherwise, the `DEBUG` variable remains unset. This allows for the following type of conditional:
#
# ```Makefile
# $(if $(DEBUG), ...true option..., ...false option...)
# ```
#
# Additionally, enabling the `DEBUG` flag is possible without increasing `make` verbosity by setting the `DEBUG`
# variable manually:
#
# ```sh
# make DEBUG=1
# ```
#
# > Important: This capability may not work as-expected on versions prior to `make` `4.0`. Many macOS devices ship with
# > outdated versions of `make`, and updating with a tool like Homebrew is highly recommended.
#
ifneq (,$(findstring --debug=,-$(MAKEFLAGS)))
DEBUG ?= 1
endif

ifneq (,$(findstring d,-$(filter-out --%,-$(MAKEFLAGS))))
DEBUG ?= 1
endif
