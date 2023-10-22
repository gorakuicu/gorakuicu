import type { Meta, StoryObj } from '@storybook/react';

import { FullScreenCarousel } from './full-screen-carousel';

const mockImages = [
  'https://picsum.photos/3000/3000',
  'https://picsum.photos/3000/2000',
  'https://picsum.photos/2000/3000',
  'https://picsum.photos/3000/1000',
  'https://picsum.photos/1000/3000',
  'https://picsum.photos/3000/500',
  'https://picsum.photos/500/3000',
  'https://picsum.photos/3000/200',
  'https://picsum.photos/200/3000',
  'https://picsum.photos/3000/100',
  'https://picsum.photos/100/3000',
  'https://picsum.photos/100/100',
  'https://picsum.photos/100/10',
  'https://picsum.photos/10/100',
];

const meta: Meta<typeof FullScreenCarousel> = {
  component: () => <FullScreenCarousel images={mockImages} />,
};

export default meta;

type Story = StoryObj<typeof FullScreenCarousel>;

export const Basic: Story = {};
