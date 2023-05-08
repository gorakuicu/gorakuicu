#!/bin/bash
set -e

# GITLAB_PERSONAL_ACCESS_TOKEN
GITLAB_PROJECT_ID=45815837
GITLAB_INSTANCE="https://gitlab.com/api/v4/projects"
PER_PAGE=100

for PIPELINE in $(curl --header "PRIVATE-TOKEN: $GITLAB_PERSONAL_ACCESS_TOKEN" "$GITLAB_INSTANCE/$GITLAB_PROJECT_ID/pipelines?per_page=$PER_PAGE&sort=asc" | jq '.[].id') ; do
    echo "Deleting pipeline $PIPELINE"
    curl --header "PRIVATE-TOKEN: $GITLAB_PERSONAL_ACCESS_TOKEN" --request "DELETE" "$GITLAB_INSTANCE/$GITLAB_PROJECT_ID/pipelines/$PIPELINE"
done
