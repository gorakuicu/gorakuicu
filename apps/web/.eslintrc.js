/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: ['@gorakuicu/eslint-config/remix'],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '!./**/*.ts',
    '!./**/*.tsx',
    '!./.storybook/**/*',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname, // eslint-disable-line unicorn/prefer-module
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {},
};
