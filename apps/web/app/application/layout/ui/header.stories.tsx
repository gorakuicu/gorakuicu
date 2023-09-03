import type { Meta } from '@storybook/react';

import { Header } from './header';

export default {
  component: Header,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Header>;

export const Basic = {};
