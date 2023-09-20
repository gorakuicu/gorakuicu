// alias: nx run-many --output-style stream -t ${script} --all
// usage: bun scripts/run.js lint

const { execSync } = require('child_process');
const { join } = require('path');

const script = process.argv[2];
const nx = join('node_modules', '.bin', 'nx');

process.env.FORCE_COLOR = 1;

const command = `${nx} run-many --output-style stream -t ${script} --all`;

console.log('\x1b[33m%s\x1b[0m', `[Running] ${command}`);

execSync(command, { stdio: 'inherit' });

function onExit() {
  console.log('\x1b[31m%s\x1b[0m', 'Exiting');
  process.exit(0);
}

console.log('\x1b[32m%s\x1b[0m', `[Done] ${command}`);
