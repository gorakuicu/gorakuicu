import type { Meta, StoryObj } from '@storybook/react';

import { randLine } from '@ngneat/falso';

import { ScrollToTop } from './scroll-to-top';

const meta: Meta<typeof ScrollToTop> = {
  component: () => (
    <>
      <ScrollToTop />,{randLine({ length: 14 })}
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof ScrollToTop>;

export const Basic: Story = {};
