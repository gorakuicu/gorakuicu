#!/bin/bash
set -euo pipefail

. .env

ENV_URL="${CI_ENVIRONMENT_URL:-}"
URL="https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN:-}/sendMessage"

TEXT="*$1* ${CI_PROJECT_NAME:-}/${CI_COMMIT_REF_SLUG:-}
📦 ${CI_COMMIT_SHORT_SHA:-}
📝 ${CI_COMMIT_MESSAGE:-}
🫳 ${CI_PIPELINE_SOURCE:-} (${GITLAB_USER_EMAIL:-})
🏃‍♂️ ${CI_PROJECT_URL:-}/pipelines/${CI_PIPELINE_ID:-}/
🔗 ${ENV_URL:-}
"

TEXT=$(echo "$TEXT" | sed 's/_/\\_/g')

echo "${TEXT:-}"

curl --write-out '%{http_code}' --silent --output /dev/null -X POST -H 'Content-Type: application/x-www-form-urlencoded' -m 4 "${URL:-}" -d chat_id="${TELEGRAM_USER_ID:-}" -d disable_web_page_preview=1 -d text="${TEXT:-}" -d message_thread_id="${TELEGRAM_MESSAGE_THREAD_ID:-}" -d parse_mode="Markdown" || echo "💬 [Telegram] ❌ error: $?"
