import { Image } from '@nextui-org/react';
import clsx from 'clsx';
import { memo } from 'react';

import { DESCRIPTION } from '~/shared/constants/common';

export interface IDescriptionProperties {
  classNames?: {
    container?: string;
    image?: string;
    text?: string;
  };
}

export const Description = memo(({ classNames }: IDescriptionProperties) => {
  const { container = '', image = '', text = '' } = classNames ?? {};

  return (
    <div
      className={clsx(
        'mt-1 flex flex-row items-center justify-center gap-1 font-serif md:justify-start',
        container,
      )}
    >
      <Image
        alt="hot-face"
        className={image}
        height={18}
        src="/logo/hot-face.png"
        width={18}
      />
      <p
        className={clsx('text-center text-sm text-gray-400 md:text-left', text)}
      >
        {' '}
        {DESCRIPTION}
      </p>
    </div>
  );
});

Description.displayName = 'Description';
