import prettierPluginTailwind from 'prettier-plugin-tailwindcss';

export default {
  plugins: [prettierPluginTailwind],
  tailwindFunctions: ['clsx'],
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  bracketSpacing: true,
};
