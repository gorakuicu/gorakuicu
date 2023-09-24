/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['@gorakuicu/eslint-config/common'],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.eslintrc.js',
    '!./**/*.ts',
    '!./**/*.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname, // eslint-disable-line unicorn/prefer-module
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
