import type { Meta, StoryObj } from '@storybook/react';

import { FlashingDot } from './flashing-dot';

const meta: Meta<typeof FlashingDot> = {
  component: () => (
    <h2 className="color-red-500 text-5xl text-red-500">
      Hello..
      <FlashingDot />
    </h2>
  ),
};

export default meta;

type Story = StoryObj<typeof FlashingDot>;

export const Basic: Story = {};
