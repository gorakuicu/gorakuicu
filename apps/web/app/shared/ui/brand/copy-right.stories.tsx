import type { Meta, StoryObj } from '@storybook/react';

import { CopyRight } from './copy-right';

const meta: Meta<typeof CopyRight> = {
  component: () => <CopyRight />,
};

export default meta;

type Story = StoryObj<typeof CopyRight>;

export const Basic: Story = {};
