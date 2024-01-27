import clsx from 'clsx';
import { memo } from 'react';

import { BRAND_NAME } from '~/shared/constants/common';

export interface ISiteLabelProperties {
  className?: string;
}

export const SiteLabel = memo(({ className = '' }: ISiteLabelProperties) => {
  return (
    <h2
      className={clsx(
        'from-secondary-700 to-primary-700 bg-gradient-to-r bg-clip-text font-sans text-2xl font-black text-transparent',
        className,
      )}
    >
      {BRAND_NAME}
    </h2>
  );
});

SiteLabel.displayName = 'SiteLabel';
