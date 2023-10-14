import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '@nextui-org/react';

import { NavbarBrand } from './brand';

const meta: Meta<typeof NavbarBrand> = {
  component: () => (
    <Navbar>
      <NavbarBrand />
    </Navbar>
  ),
};

export default meta;

type Story = StoryObj<typeof NavbarBrand>;

export const Basic: Story = {};
