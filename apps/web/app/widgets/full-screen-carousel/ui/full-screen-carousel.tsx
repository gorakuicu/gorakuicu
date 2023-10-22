import type { PanInfo } from 'framer-motion';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
} from '@nextui-org/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { useKeydown } from '../lib/use-keydown';
import { useScreenAspectRatio } from '../lib/use-screen-aspect-ratio';
import { Controls } from './controls';
import { Preview } from './preview';
import { Thumbnail } from './thumbnail';

interface IImageClassNames {
  blurredImg: string;
  img: string;
  wrapper: string;
}

const mockImages = [
  'https://picsum.photos/3000/3000',
  'https://picsum.photos/3000/2000',
  'https://picsum.photos/3000/1000',
  'https://picsum.photos/3000/500',
  'https://picsum.photos/3000/100',
  'https://picsum.photos/100/3000',
  'https://picsum.photos/500/3000',
  'https://picsum.photos/1000/3000',
  'https://picsum.photos/2000/3000',
];

const wrapperMotionVariants = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
};

const HEIGHT_AUTO = 'h-auto';
const SWIPE_THRESHOLD = 50;

// TODO: remove mock, add API
const calculateNewImageIndex = (
  currentImage: number,
  direction: number,
  length: number,
) => {
  return (currentImage + direction + length) % length;
};

export const FullScreenCarousel = memo(() => {
  const imageReference = useRef<HTMLImageElement>(null);
  const imageWrapperReference = useRef<HTMLDivElement>(null);

  const [{ currentImage, direction }, setCurrentImage] = useState({
    currentImage: 0,
    direction: 0,
  });

  const swipeImage = useCallback((swipeDirection: number) => {
    setCurrentImage((previous) => ({
      currentImage: calculateNewImageIndex(
        previous.currentImage,
        swipeDirection,
        mockImages.length,
      ),
      direction: swipeDirection,
    }));
  }, []);

  const handlePrevious = useCallback(() => swipeImage(-1), [swipeImage]);

  const handleNext = useCallback(() => swipeImage(1), [swipeImage]);

  const dragEndHandler = useCallback(
    (_: TouchEvent, dragInfo: PanInfo) => {
      const draggedDistance = dragInfo.offset.x;

      if (draggedDistance > SWIPE_THRESHOLD) {
        handlePrevious();
      } else if (draggedDistance < -SWIPE_THRESHOLD) {
        handleNext();
      }
    },
    [handleNext, handlePrevious],
  );

  const handleCreatorThumbnailClick = useCallback(
    (index: number) => () =>
      setCurrentImage({ currentImage: index, direction: 0 }),
    [],
  );

  useKeydown((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft': {
        return handlePrevious();
      }
      case 'ArrowRight': {
        return handleNext();
      }
      case ' ': {
        return handleNext();
      }
      default: {
        if (event.key >= '1' && event.key <= '9') {
          const index = Number.parseInt(event.key, 10) - 1;

          if (index < mockImages.length)
            setCurrentImage({ currentImage: index, direction: 0 });
        }
        break;
      }
    }
  });

  const screenAspectRatio = useScreenAspectRatio();

  const getImageClassNames = useCallback(
    (additionalImg: string = ''): IImageClassNames => ({
      blurredImg: 'w-fit h-fit max-h-full object-contain pointer-events-none',
      img: 'h-fit max-h-full w-fit object-contain pointer-events-none',
      wrapper: clsx('m-auto h-full w-full object-contain', additionalImg),
    }),
    [],
  );

  const [[aspectRatio, imageClassNames], setAspectRatio] = useState<
    [number, IImageClassNames]
  >([1, getImageClassNames()]);

  const updateAspectRatio = useCallback(() => {
    if (imageReference.current) {
      const aspectRatio =
        imageReference.current.naturalWidth /
        imageReference.current.naturalHeight;

      const additionalWrapperClassNames = (() => {
        if (screenAspectRatio > 0) {
          return aspectRatio > screenAspectRatio ? HEIGHT_AUTO : ' ';
        } else {
          return aspectRatio > 2 ? HEIGHT_AUTO : ' ';
        }
      })();

      setAspectRatio([
        aspectRatio,
        getImageClassNames(additionalWrapperClassNames),
      ]);
    }
  }, [getImageClassNames, screenAspectRatio]);

  useEffect(() => {
    updateAspectRatio();
  }, [
    currentImage,
    aspectRatio,
    screenAspectRatio,
    getImageClassNames,
    updateAspectRatio,
  ]);

  return (
    <Modal isOpen size="full">
      <ModalContent className="relative">
        <motion.div
          className="h-full w-full"
          {...wrapperMotionVariants}
          ref={imageWrapperReference}
        >
          <ModalHeader className="flex items-center justify-between">
            <div>
              Image {currentImage + 1} of {mockImages.length}
            </div>
          </ModalHeader>

          <ModalBody className="relative h-full w-full">
            <Controls handleNext={handleNext} handlePrevious={handlePrevious} />

            <Preview
              currentImage={currentImage}
              direction={direction}
              dragEndHandler={dragEndHandler}
              imageClassNames={imageClassNames}
              key={currentImage}
              onLoad={updateAspectRatio}
              ref={imageReference}
              src={String(mockImages[+currentImage])}
            />
            <div className="h-40" />
          </ModalBody>

          <ModalFooter className="fixed inset-x-0 bottom-0 z-10 mx-auto p-4">
            <ScrollShadow
              className="mx-auto flex items-center gap-1"
              orientation="horizontal"
            >
              {mockImages.map((image, index) => (
                <Thumbnail
                  currentImage={currentImage}
                  image={image}
                  index={index}
                  key={index}
                  onClick={handleCreatorThumbnailClick(index)}
                />
              ))}
            </ScrollShadow>
          </ModalFooter>
        </motion.div>
      </ModalContent>
    </Modal>
  );
});

FullScreenCarousel.displayName = 'FullScreenCarousel';
