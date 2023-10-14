import type { Meta, StoryObj } from '@storybook/react';

import { SubscribeForm } from './subscribe-form';

const meta: Meta<typeof SubscribeForm> = {
  component: () => <SubscribeForm />,
};

export default meta;

type Story = StoryObj<typeof SubscribeForm>;

export const Basic: Story = {};
