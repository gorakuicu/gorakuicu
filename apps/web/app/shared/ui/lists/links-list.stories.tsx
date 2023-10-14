import type { Meta, StoryObj } from '@storybook/react';

import { PROJECT_LINKS } from '~/shared/constants/links';

import { LinksList } from './links-list';

const meta: Meta<typeof LinksList> = {
  component: () => (
    <LinksList className="mt-4 md:mt-0" label="Project" list={PROJECT_LINKS} />
  ),
};

export default meta;

type Story = StoryObj<typeof LinksList>;

export const Basic: Story = {};
