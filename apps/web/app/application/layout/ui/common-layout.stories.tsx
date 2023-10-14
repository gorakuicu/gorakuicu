import type { Meta, StoryObj } from '@storybook/react';

import { CommonLayout } from './common-layout';

const meta: Meta<typeof CommonLayout> = {
  component: () => <CommonLayout />,
};

export default meta;

type Story = StoryObj<typeof CommonLayout>;

export const Basic: Story = {};
