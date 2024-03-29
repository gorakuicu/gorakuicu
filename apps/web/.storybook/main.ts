import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../app/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  // docs: {
  //   autodocs: true,
  // },
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      savePropValueAsString: true,
      shouldRemoveUndefinedFromOptional: false,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  async viteFinal(cfg) {
    // Merge custom configuration into the default config
    return mergeConfig(cfg, {
      base: 'http://localhost:6006/',
      plugins: [tsconfigPaths()],
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          '@remix-run/testing',
          '@storybook/theming',
          'storybook-dark-mode',
          'react-icons',
          '@ngneat/falso',
        ],
      },
    });
  },
};

export default config;
