import { motion } from 'framer-motion';
import Link from 'next/link';

import type { ILink } from '@/features/common/DropdownLinks';
import DropdownLinks from '@/features/common/DropdownLinks';
import Href from '@/features/common/Href';
import GradientText from '@/features/single/GradientText';
import { addGlassStyle } from '@/utils/styles';

interface IMenuItem extends ILink {
  children?: ILink[];
}

interface INavbarProps {
  label?: string;
  menu?: IMenuItem[];
}

export default function Navbar({ menu = [] }: INavbarProps) {
  return (
    <>
      <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -16 }}>
        <nav
          className={addGlassStyle(
            'fixed left-0 right-0 top-4 z-10 mx-auto flex w-3/5 items-center justify-between rounded-3xl bg-white px-20 py-4 shadow-sm',
          )}
        >
          <Link className="cursor-pointer" href="/">
            <GradientText animate={false} as="h3" size="text-3xl" />
          </Link>

          <ul className="hidden items-center space-x-8 lg:flex">
            {menu.map(({ href, label, active = false, children }) => (
              <li key={label}>
                {children ? (
                  <DropdownLinks hover active={active} label={label} links={children} />
                ) : (
                  <Href active={active} href={href} label={label} />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
      <div className="h-24" />
    </>
  );
}

Navbar.displayName = 'Navbar';
