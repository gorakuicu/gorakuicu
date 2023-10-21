import clsx from 'clsx';
import { memo } from 'react';

import { BRAND_NAME, BRAND_TAGS } from '~/shared/constants/common';
import { FlashingText } from '~/shared/ui/common/flashing-text';

export interface ISiteLabelProperties {
  className?: string;
  hideDot?: boolean;
}

const BrandNameWithDot = (
  <>
    {BRAND_TAGS[0]}
    <FlashingText className="text-[#9B2FBD]" />
    {BRAND_TAGS[1]}
  </>
);

export const SiteLabel = memo(
  ({ className = '', hideDot = false }: ISiteLabelProperties) => {
    return (
      <h2
        className={clsx(
          'from-bggr-from to-bggr-to bg-gradient-to-r bg-clip-text font-sans text-2xl font-black text-transparent',
          className,
        )}
      >
        {hideDot ? BRAND_NAME : BrandNameWithDot}
      </h2>
    );
  },
);

SiteLabel.displayName = 'SiteLabel';
