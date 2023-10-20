import type { Meta, StoryObj } from '@storybook/react';

import { SocialButtons } from './social-buttons';

const meta: Meta<typeof SocialButtons> = {
  component: () => <SocialButtons />,
};

export default meta;

type Story = StoryObj<typeof SocialButtons>;

export const Basic: Story = {};
