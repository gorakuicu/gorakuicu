// git push or git push --set-upstream current branch
const { execSync } = require('child_process');

const output = execSync('git branch').toString().trim();

const CURRENT_BRANCH = output.match(/^\* (.+)$/m)?.[1] || 'develop'

execSync(`git push --set-upstream origin ${CURRENT_BRANCH}`);
