import type { Meta, StoryObj } from '@storybook/react';

import { FullScreenCarousel } from './full-screen-carousel';

const meta: Meta<typeof FullScreenCarousel> = {
  component: () => <FullScreenCarousel />,
};

export default meta;

type Story = StoryObj<typeof FullScreenCarousel>;

export const Basic: Story = {};
