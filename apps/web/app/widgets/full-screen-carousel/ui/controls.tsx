import { Button } from '@nextui-org/react';
import { memo } from 'react';
import { BsChevronCompactLeft } from 'react-icons/bs';

const Controls = memo(
  ({
    handleNext,
    handlePrevious,
  }: {
    handleNext: () => void;
    handlePrevious: () => void;
  }) => {
    return (
      <>
        <Button
          className="fixed left-0 top-1/2 z-20 h-2/3 -translate-y-1/2 transform p-0"
          isIconOnly
          onClick={handlePrevious}
          variant="light"
        >
          <BsChevronCompactLeft className="h-12 w-12 opacity-50" />
        </Button>

        <Button
          className="fixed right-0 top-1/2 z-20 h-2/3 -translate-y-1/2 transform p-0"
          isIconOnly
          onClick={handleNext}
          variant="light"
        >
          <BsChevronCompactLeft className="h-12 w-12 rotate-180 transform opacity-50" />
        </Button>
      </>
    );
  },
);

Controls.displayName = 'Controls';

export { Controls };
