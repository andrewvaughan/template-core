#!/bin/bash

# Parsed environment information
GIT_REMOTE=$(git ls-remote --get-url origin)
GIT_LOGIN=$(sed -E 's@^(.+):.*@\1@g' <<<"${GIT_REMOTE}")
GIT_REPO=$(sed -E 's@.*:(.+)(.git)?$@\1@g' <<<"${GIT_REMOTE}")

# Sed sometimes leaves .git... unsure why
GIT_REPO=${GIT_REPO%.git}

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

Make sure there are no unstaged or non-committed changes
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

# Sanity check
read -r -p "Continue? [Y/n] " -n 1 YN
YN="${YN:-y}"

if [[ "${YN,,}" != "y" ]]; then
  echo
  echo "Exiting."
  exit 1
fi

# Ensure SSH to github.com is possible before starting to check devcontainer configuration.
_header "Checking SSH configuration to ${GIT_LOGIN}"

ssh -T "${GIT_LOGIN}"

if [[ $? -gt 1 ]]; then
  _error "Unable to connect to github.com via SSH."
  exit 1
fi

# Change documentation and configurations to this repository.
_header "Updating repository link references to ${GIT_REPO}"

find . \( -type d -name .git -prune -name _first-time-setup.sh -prune \) -o -type f -print0 |
  xargs -0 sed -i "s@andrewvaughan/template-core@${GIT_REPO}@g"

echo "Done."

# Install git-lfs.
_header "Installing git-lfs in the repository"

git lfs install

# Select a license.
_header "Selecting a license"

CHOICE=$(
  dialog \
    --backtitle "${GIT_REPO} First Time Setup" \
    --title "Select a Project License" \
    --menu "Choose one of the following licenses for this project:" 15 40 4 \
    1 "Proprietary (Unlicensed)" \
    2 "MIT" \
    3 "Apache 2.0" \
    4 "GPLv3" \
    5 "Unlicense" \
    2>&1 >/dev/tty
)

echo
echo
case $CHOICE in
1)
  rm LICENSE
  mv LICENSE.proprietary LICENSE
  ;;
2)
  rm LICENSE
  mv LICENSE.mit LICENSE
  ;;
3)
  rm LICENSE
  mv LICENSE.apache2 LICENSE
  ;;
4)
  rm LICENSE
  mv LICENSE.gpl3 LICENSE
  ;;
5)
  rm LICENSE
  mv LICENSE.unlicense LICENSE
  ;;
*)
  _error "Unknown license selection."
  exit 1
  ;;
esac

rm LICENSE.*

# Project template updates
echo
_header "Gathering project details"

read -r -p "  Project Name (Sentence Case): " PROJECT_NAME
read -r -p "Project Description (One Line): " PROJECT_DESC
read -r -p "      Author/Organization Name: " AUTHOR_NAME
YEAR=$(date +%Y)

_header "Updating project details in files"

find . \( -type d -name .git -prune -name _first-time-setup.sh -prune \) -o -type f -print0 |
  xargs -0 sed -i "s@{{PROJECT NAME}}@${PROJECT_NAME}@g"

find . \( -type d -name .git -prune -name _first-time-setup.sh -prune \) -o -type f -print0 |
  xargs -0 sed -i "s@{{PROJECT DESC}}@${PROJECT_DESC}@g"

find . \( -type d -name .git -prune -name _first-time-setup.sh -prune \) -o -type f -print0 |
  xargs -0 sed -i "s@{{AUTHOR NAME}}@${AUTHOR_NAME}@g"

find . \( -type d -name .git -prune -name _first-time-setup.sh -prune \) -o -type f -print0 |
  xargs -0 sed -i "s@{{YEAR}}@${YEAR}@g"

echo "Done."

# Configure Act to use the Medium size image.
_header "Updating development utility configurations"

mkdir -p ~/.config/act

cat >~/.config/act/actrc <<EOF
-P ubuntu-latest=catthehacker/ubuntu:act-latest
-P ubuntu-22.04=catthehacker/ubuntu:act-22.04
-P ubuntu-20.04=catthehacker/ubuntu:act-20.04
-P ubuntu-18.04=catthehacker/ubuntu:act-18.04
EOF

# Extra steps to take
_title "Remaining manual steps"

echo "The following, manual steps should be taken to prepare the Github repository for production:"
echo
echo "    1. Update the following settings under the 'General' section:"
echo "        a. CHECK 'Require contributors to sign off on web-based commits'"
echo "    2. Update the following settings under the 'Pull Requests' section:"
echo "        a. UNCHECK 'Allow merge commits'"
echo "        b. CHECK 'Always suggest updating pull request branches'"
echo "        c. CHECK 'Automatically delete head branches'"
echo "    3. Update the following settings under the 'Archives' section:"
echo "        a. CHECK 'Include Git LFS objects in archives'"
echo "    4. In the 'Rulesets' section, upload the rulesets in .github/config/rulesets"
echo "    5. Manually run the 'Sync Labels' workflow to update the repository labels"
echo "    6. (Optional) Update the following settings under the 'Features' section:"
echo "        a. CHECK 'Discussions'"
echo "        b. CHECK 'Sponsorships'"
echo "    7. (Optional) Add and/or remove any files or folders that don't apply to this project"
echo "    8. Search for all 'TODO' entries for remaining steps to setup your project"
echo

_header "Removing first-time setup script"

rm _first-time-setup.sh

echo
echo "Done!"
