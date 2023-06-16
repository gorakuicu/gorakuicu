import Link from 'next/link';
import { useMemo } from 'react';

export interface IHrefProps {
  label: string;
  href: string;
  active: boolean;
}

export const getHrefClassName = (active: boolean) =>
  `transition-colors duration-300 ${active ? 'text-accent' : 'text-neutral hover:text-primary'}`;

export default function Href({ active = false, href = '#', label = '' }: IHrefProps) {
  const className = useMemo(() => getHrefClassName(active), [active]);

  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}
