import type { Meta } from '@storybook/react';

import { randLine } from '@ngneat/falso';

import { Header } from './header';

export default {
  component: ({ children }) => (
    <>
      <Header />
      {children}
    </>
  ),
} satisfies Meta<typeof Header>;

export const Basic = {};

export const Scroll = {
  render: () => (
    <>
      <Header />
      {randLine({ length: 14 })}
    </>
  ),
};
