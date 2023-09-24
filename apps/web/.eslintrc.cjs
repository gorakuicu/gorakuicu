/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['@gorakuicu/eslint-config/remix'],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.eslintrc.js',
    '!./**/*.ts',
    '!./**/*.tsx',
    '!./**/*.js',
    '!./**/*.jsx',
    '!./**/*.json',
    '!./.storybook/**/*',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname, // eslint-disable-line unicorn/prefer-module
  },
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    tailwindcss: {
      callees: ['classnames', 'clsx'],
      config: './tailwind.config.js', // returned from `loadConfig()` utility if not provided
      cssFilesRefreshRate: 5000,
      removeDuplicates: true,
    },
  },
};
