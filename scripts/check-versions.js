// run 'pnpm outdated' in the root directory to check for outdated packages and in /apps/{app-name} to check for outdated packages in the app
// have error:
// Error message: Command failed: pnpm outdated
// Error stack: Error: Command failed: pnpm outdated
//     at checkExecSyncError (node:child_process:885:11)
//     at execSync (node:child_process:957:15)
//     at check (/gorakuicu/scripts/check-versions.js:17:32)
//     at checkVersions (/gorakuicu/scripts/check-versions.js:24:5)
//     at Object.<anonymous> (/gorakuicu/scripts/check-versions.js:38:1)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//  ELIFECYCLE  Command failed with exit code 1.

const { execSync } = require('child_process');
const { resolve } = require('path');
const { readdirSync } = require('fs');

const checkVersions = async () => {
  try {
    const rootDir = resolve(__dirname, '..');
    const appsDir = resolve(rootDir, 'apps');

    const apps = readdirSync(appsDir).filter(
      (dir) => ['.', '..', '.DS_Store', 'node_modules'].indexOf(dir) === -1,
    );

    const check = (dir) => {
      const outdatedPackages = execSync('pnpm outdated', { cwd: dir, stdio: 'inherit' }).toString();

      if (outdatedPackages) console.info(dir, ':\n', outdatedPackages);
    };

    const resolveAppDir = async (app) => await resolve(appsDir, app);

    check(rootDir);
    apps.forEach(async (app) => await check(resolveAppDir(app)));

    process.exit(0);
  } catch (error) {
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    if (error.code) {
      console.error('Error code:', error.code);
    }
    process.exit(1);
  }
};

checkVersions();
