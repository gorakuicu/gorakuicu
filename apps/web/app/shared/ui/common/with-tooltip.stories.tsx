import type { TooltipProps } from '@nextui-org/react';
import type { Meta, StoryObj } from '@storybook/react';

import { WithTooltip } from './with-tooltip';

const tooltip: TooltipProps = {
  color: 'primary',
  content: 'Tooltip content',
  showArrow: true,
};

const meta: Meta<typeof WithTooltip> = {
  component: () => {
    return (
      <WithTooltip tooltip={tooltip}>
        <span>WithTooltip</span>
      </WithTooltip>
    );
  },
};

export default meta;

type Story = StoryObj<typeof WithTooltip>;

export const Basic: Story = {};
