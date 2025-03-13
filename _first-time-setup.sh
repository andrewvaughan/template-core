#!/bin/bash

# Parsed environment information
REPO_URI=$(sed -E 's@.*:(.+)(\.git)?$@\1@g' <(git ls-remote --get-url origin))


# UI Functions
function _title {
  echo -e "\n\e[1m\e[102m\e[30m$(printf %-100s "${1}")\e[0m\n"
}

function _header {
  echo -e "\n\e[1m\e[106m\e[30m$(printf %-100s "${1}")\e[0m\n"
}

function _error {
  echo -e "\e[30m\e[31m\e[1mERROR: \e[0m\e[30m\e[31m${1}\e[0m" >&2
}


# MAIN

_title "Core Template First-Time Setup"

echo "This is the first-time setup script for this template. You are seeing this because you have"
echo "either started a Development Container for the first time or have run the script manually."
echo "This script assists in finalizing setup for the Core Template to suit the project you are"
echo "bootstrapping."
echo
echo "This will make file changes within your repository!"
echo

# Make sure there are no unstaged or non-committed changes
if [[ $(git status --porcelain=v1 2>/dev/null | wc -l) -ne 0 ]]; then
  _error "There are unstaged and/or uncommitted changes to the repository."

  echo >&2
  echo "This script makes permanent changes to your repository. Please ensure all files are committed prior" >&2
  echo "to running in case you wish to revert changes." >&2
  echo >&2

  echo "Pending file changes:" >&2
  echo >&2
  git status --porcelain=v1 >&2 2>/dev/null
  echo

  exit 1
fi

read -p "Continue? [Y/n] " -n 1 YN

if [[ "${YN,,:-y}" -ne "y" ]]; then
  echo
  echo "Exiting."

  exit 1
fi


_header "Checking SSH configuration in devcontainer"

ssh -T git@github.com

if [[ $? > 1 ]]; then
  _error "Unable to connect to github.com via SSH."
  exit 1
fi


# find . \( -type d -name .git -prune \) -o -type f -print0 | \
#   xargs -0 gsed -i "s@andrewvaughan/template-core@${REPO}@g"

_header "Updating repository link references to ${REPO}"