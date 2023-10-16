import type { Meta, StoryObj } from '@storybook/react';

import { FlashingText } from './flashing-text';

const meta: Meta<typeof FlashingText> = {
  component: () => (
    <h2 className="color-red-500 text-5xl text-red-500">
      Hello
      <FlashingText />
    </h2>
  ),
};

export default meta;

type Story = StoryObj<typeof FlashingText>;

export const Basic: Story = {};
