import { Chip } from '@nextui-org/react';
import clsx from 'clsx';
import { memo } from 'react';

import { BRAND_NAME } from '~/shared/constants/common';

export const CopyRight = memo(({ className }: { className?: string }) => {
  const createdYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearsRange =
    createdYear === currentYear
      ? currentYear
      : `${createdYear} — ${currentYear}`;

  return (
    <Chip
      className={clsx('mx-auto mt-10', className)}
      isDisabled
      variant="faded"
    >
      <span className="text-[11px]">©</span>{' '}
      <span className="font-serif">
        {yearsRange} {BRAND_NAME}. All rights reserved.
      </span>
    </Chip>
  );
});

CopyRight.displayName = 'CopyRight';
