import type { Meta, StoryObj } from '@storybook/react';

import { SiteLabel } from './site-label';

const meta: Meta<typeof SiteLabel> = {
  component: () => <SiteLabel />,
};

export default meta;

type Story = StoryObj<typeof SiteLabel>;

export const Basic: Story = {};
