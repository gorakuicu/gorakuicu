import '~/application/styles/index.css';
import './storybook.css';

import { createRemixStub } from '@remix-run/testing/dist/create-remix-stub';
import { StoryFn } from '@storybook/react';
import { Providers } from '~/application/providers';
import theme from './theme';
import { viewports } from './viewports';

const withAllTheThings = (Story: StoryFn) => {
  const RemixStub = createRemixStub([
    {
      path: '/*',
      element: <Story />,
      action: () => ({ redirect: '/' }),
      loader: () => ({ redirect: '/' }),
    },
  ]);

  return (
    <Providers>
      <RemixStub />
    </Providers>
  );
};

export const decorators = [withAllTheThings];

/** @type { import('@storybook/react').Preview } */
export const parameters = {
  docs: {
    theme: theme,
    canvas: {
      background: false,
      className: 'storybook-canvas',
    },
    story: {
      inline: true,
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
  backgrounds: {
    default: 'dark',
  },
  viewport: {
    viewports,
    // defaultViewport: '2xl',
  },
  layout: 'fullscreen',
};

export const globalTypes = {
  colorMode: {
    name: 'ColorMode',
    description: 'Color Mode',
    defaultValue: 'dark',
    toolbar: {
      items: [
        { value: 'dark', title: 'Dark', icon: 'moon' },
        { value: 'light', title: 'Light', icon: 'sun' },
      ],
      showName: false,
      dynamicTitle: true,
    },
  },
};
