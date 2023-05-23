require('dotenv').config();
const { execSync } = require('child_process');
const https = require('https');
const { URLSearchParams } = require('url');

const ENV_URL = process.env.CI_ENVIRONMENT_URL;
const URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
const LAST_COMMITS = execSync('git log --pretty=format:"%h - %s" -n 4')
  .toString()
  .replace(/([0-9a-f]{7})/g, '`$1`');

const TEXT = `*${process.argv[2]}* _${process.env.CI_PROJECT_NAME}/${process.env.CI_COMMIT_REF_SLUG}_
🫳 ${process.env.CI_PIPELINE_SOURCE} (${process.env.GITLAB_USER_EMAIL})
🏃‍♂️ ${process.env.CI_PROJECT_URL}/pipelines/${process.env.CI_PIPELINE_ID}/
🔗 ${ENV_URL}
📝 ${LAST_COMMITS}
`;

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  timeout: 4000,
};

const req = https.request(URL, options, (res) => {
  if ([200, 201, 202, 204, 304].includes(res.statusCode)) {
    console.info(`💬 [Telegram] ✅ success \n${TEXT}`);
  } else {
    console.error(`💬 [Telegram] ❌ error: ${res.statusCode} ${res.statusMessage}`);
  }
});

req.on('error', (error) => console.error(`💬 [Telegram] ❌ error: ${error}`));

const searchParams = new URLSearchParams();

searchParams.append('chat_id', process.env.TELEGRAM_USER_ID);
searchParams.append('disable_web_page_preview', '1');
searchParams.append('text', TEXT);
searchParams.append('message_thread_id', process.env.TELEGRAM_MESSAGE_THREAD_ID);
searchParams.append('parse_mode', 'Markdown');

req.write(searchParams.toString());
req.end();
