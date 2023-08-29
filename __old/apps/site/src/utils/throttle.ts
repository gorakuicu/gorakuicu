export function throttle(func: () => void, wait: number): () => void {
  let timeout: NodeJS.Timeout | null = null;
  let previous = 0;

  return function throttled(this: unknown, ...args: unknown[]): void {
    const now = Date.now();
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;

      return func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;

        return func.apply(this, args);
      }, remaining);
    }
  };
}
