import { Image } from '@nextui-org/react';
import { memo } from 'react';

import { BRAND_NAME } from '~/shared/constants/common';

export const Logo = memo(() => {
  return (
    <Image
      alt={`Logo ${BRAND_NAME}`}
      radius="lg"
      src="/images/logo/512.webp"
      width={42}
    />
  );
});

Logo.displayName = 'Logo';
