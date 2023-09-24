import { Image } from '@nextui-org/react';

import { BRAND_NAME } from '~/shared/constants/common';

export default function Logo() {
  return (
    <Image
      alt={`Logo ${BRAND_NAME}`}
      radius="lg"
      src="/logo/512.webp"
      width={42}
    />
  );
}
