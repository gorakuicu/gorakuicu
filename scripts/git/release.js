/**
 * This script is used to create a merge request from develop to testing or testing to production
 * Usage: node scripts/release.js [testing|production]
 * Example: node scripts/release.js testing
 * Example: node scripts/release.js production
 * Note: This script is only for windows, mac and linux
 */

const { execSync } = require('child_process');
const open = require('open');

const GITLAB_URL = 'https://gitlab.com';
const PROJECT_PATH = 'aiko.icu/aikoicu';
let SOURCE_BRANCH = 'develop';
let TARGET_BRANCH = 'main';

const errorArgs = () => {
  console.error('\x1b[31m%s\x1b[0m', 'Error: invalid arguments');
  process.exit(1);
};

const args = process.argv.slice(2);

const createMergeRequestUrl = (isRelease) => {
  const title = isRelease ? `UPDATE: ${SOURCE_BRANCH} -> ${TARGET_BRANCH}` : execSync('git log -1 --pretty=%B').toString().trim();

  const params = new URLSearchParams({
    'merge_request[source_branch]': SOURCE_BRANCH,
    'merge_request[target_branch]': TARGET_BRANCH,
    'merge_request[title]': title,
    'merge_request[remove_source_branch]': isRelease ? 'false' : 'true',
    'merge_request[allow_collaboration]': isRelease ? 'false' : 'true',
    'merge_request[label_ids][]': isRelease ? '19' : '0',
  });

  return `${GITLAB_URL}/${PROJECT_PATH}/merge_requests/new?${params.toString()}`;
};

if (![0, 1].includes(args.length)) {
  errorArgs();
} else {
  const target = args[0];

  if (![undefined, 'production'].includes(target)) {
    errorArgs();
  }

  if (args.length === 0) {
    const output = execSync('git branch').toString().trim();
    const CURRENT_BRANCH = output.match(/^\* (.+)$/m)?.[1] || 'develop';

    SOURCE_BRANCH = CURRENT_BRANCH;
    TARGET_BRANCH = 'develop';
  }

  if (target === 'production') {
    SOURCE_BRANCH = 'develop';
    TARGET_BRANCH = 'main';
  }

  const url = createMergeRequestUrl(['production'].includes(target));

  console.info('\x1b[36m%s\x1b[0m', 'Opening merge request url in your default browser:');
  console.info('\x1b[32m%s\x1b[0m', url);

  open(url);

  process.exit(0);
}
