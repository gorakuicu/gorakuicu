import type { Meta, StoryObj } from '@storybook/react';

import { Navbar as NavbarBase } from '@nextui-org/react';

import { Navbar } from './navbar';

const meta: Meta<typeof Navbar> = {
  component: () => (
    <NavbarBase className="bg-zinc-900">
      <Navbar />
    </NavbarBase>
  ),
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {};
