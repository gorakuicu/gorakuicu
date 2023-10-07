import { memo } from 'react';

export const FlashingDot = memo(() => {
  return (
    <span className="animate-pulse">
      <span className="text-transparent">.</span>
    </span>
  );
});

FlashingDot.displayName = 'FlashingDot';
