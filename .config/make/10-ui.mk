##
# User interface configurations.
#
# This file contains various constants and functions for interacting more clearly with the user. Developers can modify
# the constants and functions in this file as a "template" to manage how targets create titles, headers, error messages,
# debug statements, and more.
#
# It's important to note that output from called commands doesn't get filtered through any UI configurations in this
# file. Additionally, it's the responsibility of the developer to ensure adherence to these functions within targets to
# ensure formatting is consistent between commands.
#
# Generally, these functions aim to provide utility that allow for:
#
#	- Consistent, cross-platform color and text styling
#	- Support for titles and headers to create clear call-outs
#	- Enhanced debugging to enable better Makefile development without increasing terminal spam
#	- Smart word-wrap formatting with various terminal sizes to assist with ever-increasing display sizes
#
# If you wish to customize the output in this file, please first look at the `Template constants` section below, as
# the design of those variables provide the most flexibility without requiring significant changes to any core functions
# in this file.
#


##
# This special variable `$(,)` allows for comma usage when calling Make functions, such as the ones provided in this UI
# utility file. Unfortunately, within `make`, raw commas are always seen as argument separators, regardless of whether
# they're contained in quotes. As such, this variable is necessary whenever a comma is part of a sentence's grammar and
# not a separation of arguments within any `call` command.
#
# For example:
#
# ```
# $(call _title, My title$(,) and the comma$(,) as expected)
# ```
#
,=,


## ---------------------------------------------------------------------------------------------------------------------
# Terminal constants.
#
# These are constants to influence the display of text in the user's terminal.
#
# @link https://www.mankier.com/5/terminfo#Description-Predefined_Capabilities
# @link https://man7.org/linux/man-pages/man4/console_codes.4.html
#

# Escape code for ANSI varies based on platform
ifeq ($(UNAME_S),Darwin)
_ESC := \x1B
endif

_ESC ?= \e

# Text stylization
_BOLD         := $(shell tput bold || echo "$(_ESC)[1m")
_DIM          := $(shell tput dim || echo "$(_ESC)[2m")
_ITALIC       := $(shell tput sitm || echo "$(_ESC)[3m")
_UNDERLINE    := $(shell tput smul || echo "$(_ESC)[4m")
_INVERT       := $(shell tput rev || echo "$(_ESC)[7m")

_NO_BOLD      := $(_ESC)[21m
_NO_DIM       := $(_ESC)[22m
_NO_ITALIC    := $(shell tput ritm || echo "$(_ESC)[23m")
_NO_UNDERLINE := $(shell tput rmul || echo "$(_ESC)[24m")
_NO_INVERT    := $(_ESC)[27m

# Foreground colors
_FG_BLACK     := $(shell tput setaf 0)
_FG_RED       := $(shell tput setaf 9 || tput setaf 1)
_FG_GREEN     := $(shell tput setaf 10 || tput setaf 2)
_FG_YELLOW    := $(shell tput setaf 11 || tput setaf 3)
_FG_BLUE      := $(shell tput setaf 12 || tput setaf 4)
_FG_MAGENTA   := $(shell tput setaf 13 || tput setaf 5)
_FG_CYAN      := $(shell tput setaf 14 || tput setaf 6)
_FG_WHITE     := $(shell tput setaf 15 || tput setaf 7)

# Background colors
_BG_BLACK     := $(shell tput setab 0)
_BG_RED       := $(shell tput setab 9 || tput setab 1)
_BG_GREEN     := $(shell tput setab 10 || tput setab 2)
_BG_YELLOW    := $(shell tput setab 11 || tput setab 3)
_BG_BLUE      := $(shell tput setab 12 || tput setab 4)
_BG_MAGENTA   := $(shell tput setab 13 || tput setab 5)
_BG_CYAN      := $(shell tput setab 14 || tput setab 6)
_BG_WHITE     := $(shell tput setab 15 || tput setab 7)

_RESET        := $(shell tput -Txterm sgr0 || echo "$(_ESC)[0m")

# Terminal dimensions
_TERM_ROWS = $(shell tput lines || echo "0")
_TERM_COLS = $(shell tput cols || echo "80")


## ---------------------------------------------------------------------------------------------------------------------
# Template constants.
#
# This section intends to provide utilities for customization. Updating these variables controls how different messages
# display. It's unlikely for other parts of this file to need modification with effective modification of these
# variables.
#


##
# The default width for titles, headers, and for word-wrapping.
#
# This defaults to the user's configured terminal width.
#
_TPL_WRAP_WIDTH := $(_TERM_COLS)


##
# Color and style for titles.
#
_TPL_TITLE := $(_BOLD)$(_FG_BLACK)$(_BG_CYAN)


##
# Color and style for headers.
#
_TPL_HEADER := $(_UNDERLINE)$(_FG_GREEN)


##
# Color and style for basic log messages.
#
# This doesn't include output from called programs.
#
_TPL_INFO :=


##
# The prefix added to all debug messages.
#
_TPL_DEBUG_PREFIX := $(_DIM)$(_ITALIC)$(_BOLD)$(_FG_BLUE)[MAKE DEBUG]


##
# Color and style for basic debug messages.
#
# This affects the message itself, not the prefix described in the preceding section.
#
_TPL_DEBUG := $(_DIM)$(_ITALIC)$(_FG_BLUE)


##
# The color and text used for the warning message bar.
#
_TPL_WARNING_BAR := $(_BOLD)$(_FG_BLACK)$(_BG_YELLOW)


##
# Color and style for warning messages.
#
_TPL_WARNING := $(_BOLD)$(_FG_YELLOW)


##
# The color, style, and text used for the error message bar.
#
_TPL_ERROR_BAR := $(_BOLD)$(_FG_BLACK)$(_BG_RED)


##
# Color and style for error messages.
#
_TPL_ERROR := $(_BOLD)$(_FG_RED)


## ---------------------------------------------------------------------------------------------------------------------
# User interface functions.
#
# The `call` command invokes all user interface functions, as they're standard `make` functions:
#
# ```Makefile
# $(call _title, My Title)
# $(call _header, My Header, 80)
# $(call, _debug, This message only appears if debug is on)
# ```
#
# Each message function takes up to two (2) parameters:
#
# 	1. The message to send and format (required)
#	2. The width, in number of characters, to perform word-wrapping (optional, defaults to the terminal width)
#


##
# Wrap given text with optional ANSI formatting.
#
# Text over the fixed width is word wrapped, as needed. Due to a limitation in `make`, any text with commas must use
# the `$(,)` variable, as described in that variables comment.
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
# @param {string} (3) - (optional) the ANSI declaration to apply to each line (default: none)
# @param {string} (4) - (optional) a prefix for the string (default: none)
#
define _wrap
	$(eval T_WIDTH := $(or $(strip $(2)), $(_TPL_WRAP_WIDTH)))
	$(eval ANSI := $(strip $(3)))
	$(eval PREFIX := $(if $(4), $(4)$(_RESET) ,))

	MAK_WRAPPED=$$(echo "$(strip $(1)") | fmt -w $(T_WIDTH)) \
		&& export IFS=$$'\n' \
		&& for line in $${MAK_WRAPPED}; do \
			printf "$(PREFIX)$(ANSI)$${line}$(_RESET)\n"; \
		done
endef


##
# Wrap given text to a fixed width with optional ANSI formatting.
#
# Importantly, ANSI color codes for text are _not_ supported with this function given how the `printf` function works.
#
# Text over the fixed width is word wrapped, as needed. Due to a limitation in `make`, any text with commas must use
# the `$(,)` variable, as described in that variables comment.
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
# @param {string} (3) - (optional) the ANSI declaration to apply to each line (default: none)
# @param {string} (4) - (optional) a prefix for the string (default: none)
#
define _wrap_fill
	$(eval T_WIDTH := $(or $(strip $(2)), $(_TPL_WRAP_WIDTH)))
	$(eval ANSI := $(strip $(3)))
	$(eval PREFIX := $(if $(4), $(4)$(_RESET) ,))

	MAK_WRAPPED=$$(echo "$(strip $(1)") | fmt -w $(T_WIDTH)) \
		&& export IFS=$$'\n' \
		&& for line in $${MAK_WRAPPED}; do \
			printf "$(PREFIX)$(ANSI)%-$(T_WIDTH)s$(_RESET)\n" "$${line}"; \
		done
endef


##
# Print a formatted title to the terminal.
#
# Text over the fixed width is word wrapped, as needed. Due to a limitation in `make`, any text with commas must use
# the `$(,)` variable, as described in that variables comment.
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _title
	echo
	$(call _wrap_fill, $(1), $(2), $(_TPL_TITLE))
endef


##
# Print a formatted header to the terminal.
#
# Text over the fixed width is word wrapped, as needed. Due to a limitation in `make`, any text with commas must use
# the `$(,)` variable, as described in that variables comment.
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _header
	echo
	$(call _wrap_fill, $(1), $(2), $(_TPL_HEADER))
endef


##
# Print a formatted debug statement to the terminal.
#
# Text over the fixed width is word wrapped, as needed. Due to a limitation in `make`, any text with commas must use
# the `$(,)` variable, as described in that variables comment.
#
# Unless the `DEBUG` variable equals `1`, debug statements won't appear. This happens automatically if `make` is in any
# of its debug modes or if the `DEBUG` variable is explicitly with:
#
# ```Makefile
# make DEBUG=1 ...
# ```
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _debug
	$(if $(DEBUG), $(call _wrap, $(1), $(2), $(_TPL_DEBUG), $(_TPL_DEBUG_PREFIX)))
endef


##
# Print an informational message to the terminal.
#
# Text over the fixed width is word wrapped, as needed. Due to a limitation in `make`, any text with commas must use
# the `$(,)` variable, as described in that variables comment.
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _info
	$(call _wrap, $(1), $(2), $(_TPL_INFO))
endef


##
# Print a warning message to the terminal.
#
# This command does _not_ call the `make` `warning` function, as this effectively duplicates, and improves, all
# capabilities that the built-in `warning` function would execute.
#
# Text over the fixed width is word wrapped, as needed. Due to a limitation in `make`, any text with commas must use
# the `$(,)` variable, as described in that variables comment.
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _warning
	echo
	$(call _wrap_fill, "WARNING", $(2), $(_TPL_WARNING_BAR))
	$(call _wrap, $(1), $(2), $(_TPL_WARNING))
endef


##
# Print an error message to the terminal and stop execution.
#
# This command _does_ call the `make` `error` function and halts further progress.
#
# Text over the fixed width is word wrapped, as needed. Due to a limitation in `make`, any text with commas must use
# the `$(,)` variable, as described in that variables comment.
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _error
	$(call _wrap_fill, "FATAL ERROR", $(2), $(_TPL_ERROR_BAR))
	$(call _wrap, $(1), $(2), $(_TPL_ERROR))
	echo

	$(MAKE) MSG="$(1)" .error
endef


##
# Private error target only called by the `_error` function.
#
# This is necessary, as calling `$(error)` within a target prevents any other output from appearing in the terminal.
#
.error:
	$(error $(MSG))
