import type { Meta, StoryObj } from '@storybook/react';

import { SOCIAL_MEDIA_LINKS } from '~/shared/constants/links';

import { ContactsList } from './contacts-list';

const meta: Meta<typeof ContactsList> = {
  component: () => <ContactsList label="Test" links={SOCIAL_MEDIA_LINKS} />,
};

export default meta;

type Story = StoryObj<typeof ContactsList>;

export const Basic: Story = {};
