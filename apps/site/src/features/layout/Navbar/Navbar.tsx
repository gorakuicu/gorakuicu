import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import Href from '~/features/common/Href';
import GradientText from '~/features/single/GradientText';
import { glassStyle } from '~/styles';
import { keygen } from '~/utils/keygen';

import MenuItem, { IMenuItem } from './components/MenuItem';

interface INavbarProps {
  title?: string;
  menu?: IMenuItem[];
}

const navbarAnimation = { animate: { opacity: 1, y: 0 }, initial: { opacity: 0, y: -16 } };
const navbarClass = glassStyle([
  'fixed left-0 right-0 top-4 z-10 mx-auto flex w-4/6 items-center justify-between rounded-3xl px-20 py-4 shadow-sm',
]);

export default function Navbar({ menu = [] }: INavbarProps) {
  const pathname = usePathname();
  const animate = useMemo(() => ['/'].includes(pathname), [pathname]);

  return (
    <AnimatePresence initial={animate} mode="wait">
      <motion.div key="navbar" layout {...navbarAnimation}>
        <nav className={navbarClass}>
          <Href href="/">
            <GradientText animate={false} as="h3" size="text-3xl" />
          </Href>

          <ul className="hidden items-center space-x-8 xl:flex">
            {menu.map(({ href = '#', title, children }) => (
              <MenuItem key={keygen(href, title, children?.length)} href={href} title={title}>
                {children}
              </MenuItem>
            ))}
          </ul>
        </nav>
      </motion.div>
      <div className="h-24" />
    </AnimatePresence>
  );
}

Navbar.displayName = 'Navbar';
