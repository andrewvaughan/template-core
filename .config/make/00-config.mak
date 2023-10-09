##
# Make Configurations
#
# This file is used to configure how this make configuration runs and should always be the first file written. No other
# configurations should share the `00` prefix or be loaded, alphabetically, prior to this file.
#


## ---------------------------------------------------------------------------------------------------------------------
# GNU Make Configurations
#
# @link https://www.gnu.org/software/make/manual/html_node/Special-Variables.html
# @link https://www.gnu.org/software/make/manual/html_node/Special-Targets.html
#


# The default target to load when no target is provided, regardless of load order.
.DEFAULT_GOAL := help

# Use Bash as the shell
SHELL := /bin/bash
.SHELLFLAGS = -eu -o pipefail -c

# Do not output the recipe prior to execution
.SILENT:

# Run all commands in the same shell
# @link https://www.gnu.org/software/make/manual/html_node/One-Shell.html
.ONESHELL:

# Export all variables to child processes
.EXPORT_ALL_VARIABLES:



## ---------------------------------------------------------------------------------------------------------------------
# Project Makefile Configurations
#


# By default, the `DEBUG` flag will follow whether the `make` command was called with the `-d` or `--debug` s:
#
# `make -d`
# `make --debug=basic`
#
# To enable this `DEBUG` flag without increasing `make` verbosity, set the flag manually:
#
# `make DEBUG=1`
#

# TODO - stackoverflow.com/questions/77254435/makefile-ifneq-returning-false-even-when-two-strings-are-clearly-different
ifneq (,$(findstring --debug=,-$(MAKEFLAGS)))
DEBUG ?= 1
endif

ifneq (,$(findstring d,-$(filter-out --%,-$(MAKEFLAGS))))
DEBUG ?= 1
endif

DEBUG ?= 0
