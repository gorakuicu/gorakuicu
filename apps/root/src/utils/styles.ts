import clsx from 'clsx';

export const glassClassName = clsx(
  'bg-white bg-opacity-10 backdrop-blur-xl backdrop-saturate-100 backdrop-filter',
);

export const borderClassName = clsx('border-1 border-base-100 border-opacity-20');

export function addGlassStyle(classes: string, haveBorder: boolean = true): string {
  return clsx(glassClassName, haveBorder ? borderClassName : '', classes);
}
