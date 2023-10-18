import clsx from 'clsx';
import { memo } from 'react';

export interface IFlashingTextProperties {
  className?: string;
  text?: string;
}

export const FlashingText = memo(
  ({ className = '', text = '•' }: IFlashingTextProperties) => {
    return (
      <span className={clsx('animate-pulse', className)}>
        <span>{text}</span>
      </span>
    );
  },
);

FlashingText.displayName = 'FlashingText';
