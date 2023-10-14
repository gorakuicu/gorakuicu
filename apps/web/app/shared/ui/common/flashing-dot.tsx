import { memo } from 'react';

export const FlashingDot = memo(() => {
  return (
    <span className="animate-pulse">
      <span>.</span>
    </span>
  );
});

FlashingDot.displayName = 'FlashingDot';
