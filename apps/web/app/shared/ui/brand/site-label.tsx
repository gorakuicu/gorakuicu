import clsx from 'clsx';
import { memo } from 'react';

import { BRAND_NAME, BRAND_TAGS } from '~/shared/constants/common';
import { FlashingDot } from '~/shared/ui/flashing-dot';

export interface ISiteLabelProperties {
  className?: string;
  hideDot?: boolean;
}

const BrandNameWithDot = (
  <>
    {BRAND_TAGS[0]}
    <FlashingDot />
    {BRAND_TAGS[1]}
  </>
);

export const SiteLabel = memo(
  ({ className = '', hideDot = false }: ISiteLabelProperties) => {
    return (
      <h2
        className={clsx(
          'bg-gradient-to-r from-fuchsia-600 to-violet-600 bg-clip-text text-xl font-black text-transparent md:text-2xl',
          className,
        )}
      >
        {hideDot ? BRAND_NAME : BrandNameWithDot}
      </h2>
    );
  },
);

SiteLabel.displayName = 'SiteLabel';
