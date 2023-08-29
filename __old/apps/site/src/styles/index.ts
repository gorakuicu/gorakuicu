import clsx from 'clsx';

export const glassCn = clsx(
  'backdrop-saturate-300 border-base-100 border-opacity-20 bg-black bg-opacity-50 backdrop-blur-md backdrop-filter',
);

export const borderCn = clsx('border-1');

export function glassStyle(classes: string[], haveBorder = true): string {
  return clsx(
    glassCn,
    {
      [borderCn]: haveBorder,
    },
    classes,
  );
}
