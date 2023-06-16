import Link from 'next/link';
import ChevronDown from 'public/assets/icons/common/chevron-down.svg';
import { Fragment, lazy, Suspense, useCallback, useMemo, useState } from 'react';

import { addGlassStyle } from '@/utils/styles';

const Menu = lazy(() => import('@headlessui/react').then((module) => ({ default: module.Menu })));
const MenuButton = lazy(() =>
  import('@headlessui/react').then((module) => ({ default: module.Menu.Button })),
);
const MenuItems = lazy(() =>
  import('@headlessui/react').then((module) => ({ default: module.Menu.Items })),
);
const MenuItem = lazy(() =>
  import('@headlessui/react').then((module) => ({ default: module.Menu.Item })),
);
const Transition = lazy(() =>
  import('@headlessui/react').then((module) => ({ default: module.Transition })),
);

export interface ILink {
  label: string;
  href: string;
  active?: boolean;
}

export interface IDropdownLinksProps {
  hover?: boolean;
  active?: boolean;
  label?: string;
  trigger?: React.FC<{ label: string }>;
  links?: ILink[];
}

const DefaultTrigger = ({ label = '' }: { label?: string }) => (
  <MenuButton className="inline-flex w-full items-center justify-center gap-x-1">
    {label}
    <ChevronDown color="rgba(255, 255, 255, 0.5)" height={16} width={16} />
  </MenuButton>
);

export default function DropdownLinks({
  hover = false,
  active = false,
  trigger: Trigger = DefaultTrigger,
  label = '',
  links = [],
}: IDropdownLinksProps) {
  const [opened, setOpened] = useState<boolean>(false);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  const handlers = useMemo(
    () => ({ onMouseEnter: open, onMouseLeave: close }),
    [hover, open, close],
  );

  return (
    <Menu as="div" className="relative inline-block text-left" {...handlers}>
      <div>
        <Trigger label={label} />
      </div>
      <Suspense fallback={<div />}>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          show={hover ? opened : undefined}
        >
          <MenuItems
            className={addGlassStyle(
              'z-100 z-100 absolute left-2/4 mt-1 w-56  -translate-x-1/2 transform rounded-3xl p-2 shadow-sm',
            )}
          >
            {links.map(({ href = '#', label = '', active = false }) => (
              <MenuItem key={href + label} as={Fragment} className="flex flex-col">
                {() => (
                  <Link
                    className={`w-full rounded-2xl p-2 bg-blend-difference hover:bg-gray-100 hover:bg-opacity-30`}
                    href={href}
                  >
                    {label}
                  </Link>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Suspense>
    </Menu>
  );
}
