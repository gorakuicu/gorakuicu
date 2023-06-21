import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import type { ILink } from '@/features/common/DropdownLinks';
import DropdownLinks from '@/features/common/DropdownLinks';
import Href from '@/features/common/Href';
import GradientText from '@/features/single/GradientText';
import { useActivePath } from '@/hooks/useActivePath';
import { keygen } from '@/utils/keygen';
import { addGlassStyle } from '@/utils/styles';

export interface IMenuItem extends ILink {
  children?: ILink[];
}

interface INavbarProps {
  title?: string;
  menu?: IMenuItem[];
}

const navbarAnimation = { animate: { opacity: 1, y: 0 }, initial: { opacity: 0, y: -16 } };
const navbarClass = addGlassStyle(
  'fixed left-0 right-0 top-4 z-10 mx-auto flex w-4/6 items-center justify-between rounded-3xl bg-white px-20 py-4 shadow-sm',
);

export default function Navbar({ menu = [] }: INavbarProps) {
  const pathname = usePathname();
  const checkActivePath = useActivePath();
  const animate = useMemo(() => ['/'].includes(pathname), [pathname]);

  return (
    <AnimatePresence initial={animate} mode="wait">
      <motion.div key="navbar" layout {...navbarAnimation}>
        <nav className={navbarClass}>
          <Link className="cursor-pointer" href="/">
            <GradientText animate={false} as="h3" size="text-3xl" />
          </Link>

          <ul className="hidden items-center space-x-8 lg:flex">
            {menu.map(({ href = '#', title, children }) => {
              const key = keygen(href, title, children?.length);
              const activeLink = children?.length
                ? children.some(({ href }) => checkActivePath(href))
                : checkActivePath(href);

              return (
                <li key={key}>
                  {children ? (
                    <DropdownLinks
                      hover
                      active={activeLink}
                      className="text-base-200"
                      links={children}
                      title={title}
                    />
                  ) : (
                    <Href active={activeLink} href={href}>
                      {title}
                    </Href>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
      <div className="h-24" />
    </AnimatePresence>
  );
}

Navbar.displayName = 'Navbar';
