import type { Meta, StoryObj } from '@storybook/react';

import { Description } from './description';

const meta: Meta<typeof Description> = {
  component: () => <Description />,
};

export default meta;

type Story = StoryObj<typeof Description>;

export const Basic: Story = {};
