import { useEffect } from 'react';

export const useKeydown = (handleKeyDown: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};
