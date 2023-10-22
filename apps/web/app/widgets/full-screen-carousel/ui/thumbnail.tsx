import { Skeleton } from '@nextui-org/react';
import clsx from 'clsx';
import { memo, useCallback, useMemo, useState } from 'react';

import { MotionButton } from '~/shared/ui/common/motion-button';

const thumbnailVariants = {
  active: { opacity: 1, width: '100px' },
  inactive: { opacity: 0.3, width: '48px' },
};

const getBgStyle = (image: string) => ({
  backgroundImage: `url(${image})`,
});

export const Thumbnail = memo(
  ({
    currentImage,
    image,
    index,
    onClick,
  }: {
    currentImage: number;
    image: string;
    index: number;
    onClick: () => void;
  }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = useCallback(
      () => setImageLoaded(true),
      [setImageLoaded],
    );

    const animate = useMemo(
      () => (index === currentImage ? 'active' : 'inactive'),
      [currentImage, index],
    );

    const skeletonClassName = useMemo(
      () => clsx('flex h-full w-full', imageLoaded && 'hidden'),
      [imageLoaded],
    );

    return (
      <MotionButton
        animate={animate}
        className="bg-cover bg-center p-0"
        initial="inactive"
        isIconOnly
        key={index}
        onClick={onClick}
        radius="sm"
        size="lg"
        style={getBgStyle(image)}
        variant="light"
        variants={thumbnailVariants}
      >
        <Skeleton className={skeletonClassName} />
        <img
          alt="loader"
          className="hidden"
          onLoad={handleImageLoad}
          src={image}
        />
      </MotionButton>
    );
  },
);

Thumbnail.displayName = 'Thumbnail';
