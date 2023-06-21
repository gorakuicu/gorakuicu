type Procedure = (...args: any[]) => void;

export function debounce<F extends Procedure>(func: F, delay: number): F {
  let timeoutId: NodeJS.Timeout | null = null;

  const debounced = (...args: any[]): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => func(...args), delay);
  };

  return debounced as F;
}
