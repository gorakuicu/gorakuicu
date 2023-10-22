import { Button, Chip } from '@nextui-org/react';
import { memo } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';

export interface IHeaderControlsProperties {
  current: number;
  handleDownload: () => void;
  length: number;
  onClose: () => void;
  title: string;
}

export const HeaderControls = memo(
  ({
    current,
    handleDownload,
    length,
    onClose,
    title,
  }: IHeaderControlsProperties) => {
    return (
      <>
        <Button isIconOnly onPress={handleDownload} variant="flat">
          <FiDownload />
        </Button>
        <Chip className="font-serif" size="lg" variant="flat">
          {title} {current + 1}/{length}
        </Chip>
        <Button className="ml-auto" isIconOnly onClick={onClose} variant="flat">
          <AiOutlineClose />
        </Button>
      </>
    );
  },
);

HeaderControls.displayName = 'HeaderControls';
