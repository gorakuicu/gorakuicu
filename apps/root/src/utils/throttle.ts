export function throttle(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout | null = null;
  let previous = 0;

  const throttled = function (this: any, ...args: any[]) {
    const now = Date.now();
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };

  return throttled;
}
