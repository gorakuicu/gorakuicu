import clsx from 'clsx';

export const glassClassName = clsx(
  'border-1 border-base-100 border-opacity-20 bg-white bg-opacity-5 backdrop-blur-md backdrop-saturate-100 backdrop-filter',
);

export function addGlassStyle(classes: string): string {
  return clsx(glassClassName, classes);
}
