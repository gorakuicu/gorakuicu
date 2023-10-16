import { memo } from 'react';

export const FlashingText = memo(({ text = '•' }: { text?: string }) => {
  return (
    <span className="animate-pulse">
      <span>{text}</span>
    </span>
  );
});

FlashingText.displayName = 'FlashingText';
