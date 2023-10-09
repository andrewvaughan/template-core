##
# Make UI Configurations
#
# Shared variables for terminal colors and styling are managed in this configuration file. "Templates" for other files
# can be implemented by changing the settings, here.
#


# This is a special variable $(,) to allow for commas to be used when calling helper methods. Raw commas are always seen
# as argument separators, regardless of whether they are in quotes or not, so this variable should be used whenever a
# comma is intended to be sent to a function within the argument as opposed to being used as an argument separator.
#
# @see _title
,=,



## ---------------------------------------------------------------------------------------------------------------------
# Terminal Constants
#
# @link https://www.mankier.com/5/terminfo#Description-Predefined_Capabilities
# @link https://man7.org/linux/man-pages/man4/console_codes.4.html
#

ifeq ($(UNAME_S),Darwin)
_ESC := \x1B
endif

_ESC ?= \e

_BOLD         := $(shell tput bold)
_DIM          := $(shell tput dim)
_ITALIC       := $(shell tput sitm)
_UNDERLINE    := $(shell tput smul)
_INVERT       := $(shell tput rev)

_NO_BOLD      := $(_ESC)[21
_NO_DIM       := $(_ESC)[22
_NO_ITALIC    := $(shell tput ritm)
_NO_UNDERLINE := $(shell tput rmul)
_NO_INVERT    := $(_ESC)[27

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

# Terminal size
TERM_ROWS = $(shell tput lines || echo 0)
TERM_COLS = $(shell tput cols || echo 80)



## ---------------------------------------------------------------------------------------------------------------------
# Usage Template Targets
#
# To use these in a Makefile, simply call the target, such as:
#
# ```
# $(call title, My Title)
# ```
#


##
# Print a fixed-width title. Titles over the fixed-width will be word wrapped.
#
# Please note, due to a limitation in Make, commas can not be passed to this function. A helper variable of $(,) is
# provided to insert a comma, if necessary:
#
# ```
# $(call _title, My title$(,) and the comma$(,) as expected)
# ```
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _title
	MAK_FIX_WIDTH=$(strip $(2)) \
		&& MAK_FIX_WIDTH=$${MAK_FIX_WIDTH:-$(TERM_COLS)} \
		&& MAK_WRAPPED=$$(echo "$(strip $(1)") | fmt -w $${MAK_FIX_WIDTH}) \
		&& export IFS=$$'\n' \
		&& echo \
		&& for line in $${MAK_WRAPPED}; do \
			printf "$(_BOLD)$(_FG_BLACK)$(_BG_CYAN)%-$${MAK_FIX_WIDTH}s$(_RESET)\n" "$${line}"; \
		done
endef


##
# Print a fixed-width header. Headers over the fixed-width will be word wrapped.
#
# Please note, due to a limitation in Make, commas can not be passed to this function. A helper variable of $(,) is
# provided to insert a comma, if necessary:
#
# ```
# $(call _header, My header$(,) and the comma$(,) as expected)
# ```
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _header
	MAK_FIX_WIDTH=$(strip $(2)) \
		&& MAK_FIX_WIDTH=$${MAK_FIX_WIDTH:-$(TERM_COLS)} \
		&& MAK_WRAPPED=$$(echo "$(strip $(1)") | fmt -w $${MAK_FIX_WIDTH}) \
		&& export IFS=$$'\n' \
		&& echo \
		&& for line in $${MAK_WRAPPED}; do \
			printf "$(_UNDERLINE)$(_FG_BLUE)%-$${MAK_FIX_WIDTH}s$(_RESET)\n" "$${line}"; \
		done
endef


##
# Print a debug statement. Statements over the fixed-width will be word wrapped. Messages will only appear if `DEBUG` is
# set to `1` or greater. This is done automatically with any of the Make debug flags, unless modified, or debug mode can
# be enabled with:
#
# ```
# make DEBUG=1 ...
# ```
#
# Please note, due to a limitation in Make, commas can not be passed to this function. A helper variable of $(,) is
# provided to insert a comma, if necessary:
#
# ```
# $(call _debug, My debug$(,) and the comma$(,) as expected)
# ```
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _debug
	[[ $(DEBUG) -gt 0 ]] && ( \
		MAK_FIX_WIDTH=$(strip $(2)) \
			&& MAK_FIX_WIDTH=$${MAK_FIX_WIDTH:-$(TERM_COLS)} \
			&& MAK_WRAPPED=$$(echo "$(strip $(1)") | fmt -w $${MAK_FIX_WIDTH}) \
			&& export IFS=$$'\n' \
			&& for line in $${MAK_WRAPPED}; do \
				printf "$(_DIM)$(_FG_YELLOW)%-$${MAK_FIX_WIDTH}s$(_RESET)\n" "[MAKE DEBUG] $${line}"; \
			done \
	) || true
endef


##
# Writes an informational message to the screen with no formatting, other than word-wrapping. Statements over the fixed-
# width will be word wrapped.
#
# Please note, due to a limitation in Make, commas can not be passed to this function. A helper variable of $(,) is
# provided to insert a comma, if necessary:
#
# ```
# $(call _info, My info$(,) and the comma$(,) as expected)
# ```
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _info
	MAK_FIX_WIDTH=$(strip $(2)) \
		&& MAK_FIX_WIDTH=$${MAK_FIX_WIDTH:-$(TERM_COLS)} \
		&& MAK_WRAPPED=$$(echo "$(strip $(1)") | fmt -w $${MAK_FIX_WIDTH}) \
		&& export IFS=$$'\n' \
		&& for line in $${MAK_WRAPPED}; do \
			printf "%s\n" "$${line}"; \
		done \
		&& echo
endef


##
# Writes a warning message to the screen. Statements over the fixed-width will be word wrapped.
#
# This command does _not_ call the Make `warning` function, as this effectively duplicates (and improves) all
# functionality that function would execute.
#
# Please note, due to a limitation in Make, commas can not be passed to this function. A helper variable of $(,) is
# provided to insert a comma, if necessary:
#
# ```
# $(call _warning, My warning$(,) and the comma$(,) as expected)
# ```
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _warning
	MAK_FIX_WIDTH=$(strip $(2)) \
		&& MAK_FIX_WIDTH=$${MAK_FIX_WIDTH:-$(TERM_COLS)} \
		&& MAK_WRAPPED=$$(echo "$(strip $(1)") | fmt -w $${MAK_FIX_WIDTH}) \
		&& export IFS=$$'\n' \
		&& echo \
		&& printf "$(BOLD)$(_FG_BLACK)$(_BG_YELLOW)%-$${MAK_FIX_WIDTH}s$(_RESET)\n" "WARNING:" \
		&& for line in $${MAK_WRAPPED}; do \
			printf "$(BOLD)$(_FG_YELLOW)%-$${MAK_FIX_WIDTH}s$(_RESET)\n" "$${line}"; \
		done \
		&& echo
endef


##
# Writes an error message to the screen. Statements over the fixed-width will be word wrapped.
#
# This command _does_ call the Make `error` function and halt any further progress.
#
# Please note, due to a limitation in Make, commas can not be passed to this function. A helper variable of $(,) is
# provided to insert a comma, if necessary:
#
# ```
# $(call _error, My error$(,) and the comma$(,) as expected)
# ```
#
# @param {string} (1) - the message to print
# @param {string} (2) - (optional) the fixed width of the text (default: terminal width)
#
define _error
	MAK_FIX_WIDTH=$(strip $(2)) \
		&& MAK_FIX_WIDTH=$${MAK_FIX_WIDTH:-$(TERM_COLS)} \
		&& MAK_WRAPPED=$$(echo "$(strip $(1)") | fmt -w $${MAK_FIX_WIDTH}) \
		&& export IFS=$$'\n' \
		&& echo \
		&& printf "$(BOLD)$(_FG_BLACK)$(_BG_RED)%-$${MAK_FIX_WIDTH}s$(_RESET)\n" "FATAL ERROR:" \
		&& for line in $${MAK_WRAPPED}; do \
			printf "$(BOLD)$(_FG_RED)%-$${MAK_FIX_WIDTH}s$(_RESET)\n" "$${line}"; \
		done \
		&& echo

	$(error, $(1))
endef
