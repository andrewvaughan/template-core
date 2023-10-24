#!/bin/bash

## List all project IDs
# gh api graphql \
#   -f query="
#   query {
#     user(login: \"andrewvaughan\") {
#       projectsV2(first: 20) {
#         nodes {
#           id
#           title
#         }
#       }
#     }
#   }"



## Lookup by title: Kanban for template-core

# gh api graphql \
#   -F title="Kanban for template-core" \
#   -F owner="andrewvaughan" \
#   -f query="
#   query(\$title:String!, \$owner:String!) {
#     user(login: \$owner) {
#       projectsV2(query: \$title, first: 1) {
#         nodes {
#           id
#           title
#         }
#       }
#     }
#   }"




## Project lookup by ID: PVT_kwHOABEVZs4AXJlu

# gh api graphql \
#   -F id="PVT_kwHOABEVZs4AXJlu" \
#   -f query="
#     query(\$id: ID!) {
#       node(id: \$id) {
#         ... on ProjectV2 {
#           fields(first: 20) {
#             nodes {
#               ... on ProjectV2FieldCommon {
#                 id
#                 name
#               }
#             }
#           }
#         }
#       }
#     }
#   "


# Lookup Project by Repository: template-core

gh api graphql \
  -F owner="andrewvaughan" \
  -F repo="tempate-core" \
  -F project="" \
  -f query="
  query(\$owner:String!, \$repo:String!, \$project:String!) {
    repository(owner: \$owner, name: \$repo, followRenames: true) {
      projectsV2(first: 2, query: \$project) {
        nodes {
          id
          title
          number
          url
        }
      }
    }
  }"
