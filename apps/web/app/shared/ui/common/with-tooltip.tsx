import type { TooltipProps } from '@nextui-org/react';

import { Tooltip } from '@nextui-org/react';
import { memo } from 'react';

export const WithTooltip = memo(
  ({
    children,
    tooltip,
  }: {
    children: React.ReactNode;
    tooltip: TooltipProps;
  }) => {
    if (!tooltip?.content) {
      return <>{children}</>;
    }

    return <Tooltip {...tooltip}>{children}</Tooltip>;
  },
);

WithTooltip.displayName = 'WithTooltip';
