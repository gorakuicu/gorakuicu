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

import { DEFAULT_EMPTY_FUNCTION } from '~/shared/lib/common';

import { useKeydown } from '../lib/use-keydown';
import { useScreenAspectRatio } from '../lib/use-screen-aspect-ratio';
import { Controls } from './controls';
import { HeaderControls } from './header-controls';
import { Preview } from './preview';
import { Thumbnail } from './thumbnail';

interface IImageClassNames {
  blurredImg: string;
  img: string;
  wrapper: string;
}

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

export interface IFullScreenCarouselProperties {
  images?: string[];
  onClose?: () => void;
  title?: string;
}

export const FullScreenCarousel = memo(
  ({
    images = [],
    onClose = DEFAULT_EMPTY_FUNCTION,
    title = '',
  }: IFullScreenCarouselProperties) => {
    const imageReference = useRef<HTMLImageElement>(null);
    const imageWrapperReference = useRef<HTMLDivElement>(null);

    const [{ currentImage, direction }, setCurrentImage] = useState({
      currentImage: 0,
      direction: 0,
    });

    const swipeImage = useCallback(
      (swipeDirection: number) => {
        setCurrentImage((previous) => ({
          currentImage: calculateNewImageIndex(
            previous.currentImage,
            swipeDirection,
            images.length,
          ),
          direction: swipeDirection,
        }));
      },
      [images.length],
    );

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

            if (index < images.length)
              setCurrentImage({ currentImage: index, direction: 0 });
          }
          break;
        }
      }
    });

    const screenAspectRatio = useScreenAspectRatio();

    const getImageClassNames = useCallback(
      (additionalWrapper: string = ''): IImageClassNames => ({
        blurredImg: 'w-fit h-fit max-h-full object-contain pointer-events-none',
        img: 'pointer-events-none h-fit max-h-full w-fit object-contain',
        wrapper: clsx('m-auto h-full w-full object-contain', additionalWrapper),
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

    const handleDownload = useCallback(() => {
      const url = images[Number(currentImage)];
      const a = document.createElement('a');
      a.href = String(url);
      a.target = '_blank';
      document.body.append(a);
      a.click();
      a.remove();
    }, [currentImage, images]);

    return (
      <Modal hideCloseButton isOpen size="full">
        <ModalContent className="relative">
          <motion.div
            className="h-full w-full"
            {...wrapperMotionVariants}
            ref={imageWrapperReference}
          >
            <ModalHeader className="flex items-center gap-4">
              <HeaderControls
                current={currentImage}
                handleDownload={handleDownload}
                length={images.length}
                onClose={onClose}
                title={title}
              />
            </ModalHeader>

            <ModalBody className="relative h-full w-full">
              <Controls
                handleNext={handleNext}
                handlePrevious={handlePrevious}
              />

              <Preview
                currentImage={currentImage}
                direction={direction}
                dragEndHandler={dragEndHandler}
                imageClassNames={imageClassNames}
                key={currentImage}
                onLoad={updateAspectRatio}
                ref={imageReference}
                src={String(images[+currentImage])}
              />
              <div className="h-40" />
            </ModalBody>

            <ModalFooter className="fixed inset-x-0 bottom-0 z-10 mx-auto p-4">
              <ScrollShadow
                className="mx-auto flex items-center gap-1"
                orientation="horizontal"
              >
                {images.map((image, index) => (
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
  },
);

FullScreenCarousel.displayName = 'FullScreenCarousel';
