import uuid from '@/utils/uuid';

export function keygen(...args: unknown[]): string {
  if (args.length === 0) return uuid();

  return (
    args
      .map((key) => {
        const type = typeof key;

        if (Array.isArray(key)) {
          return key.length;
        } else if (type === 'object') {
          return key === null ? 'null' : JSON.stringify(key);
        } else if (type === 'function') {
          return 'key';
        } else {
          return String(key);
        }
      })
      .join('-') || uuid()
  );
}
