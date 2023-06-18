import clsx from 'clsx';
import Link from 'next/link';
import {
  FC,
  forwardRef,
  Fragment,
  lazy,
  Suspense,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import ChevronDown from '@/assets/ChevronDown';
import { addGlassStyle } from '@/utils/styles';

import Tooltip from '../Tooltip/Tooltip';

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
  title?: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

export interface IDropdownLinksProps {
  hover?: boolean;
  active?: boolean;
  title?: string;
  trigger?: FC<{ title: string }> | React.ElementType;
  links?: ILink[];
}

const DefaultTrigger = forwardRef(({ title = '' }: { title?: string }, ref) => (
  <MenuButton
    ref={ref as React.RefObject<HTMLButtonElement>}
    className="inline-flex w-full items-center justify-center gap-x-1"
  >
    {title}
    <ChevronDown color="rgba(255, 255, 255, 0.5)" />
  </MenuButton>
));

DefaultTrigger.displayName = 'DefaultTrigger';

export default function DropdownLinks({
  hover = false,
  active = false,
  trigger: Trigger = DefaultTrigger,
  title = '',
  links = [],
}: IDropdownLinksProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState<boolean>(false);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  const handlers = useMemo(
    () => ({ onMouseEnter: open, onMouseLeave: close }),
    [hover, open, close],
  );

  return (
    <Menu ref={ref} as="div" className="relative inline-block text-left" {...handlers}>
      <div>
        <Trigger title={title} />
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
            {links.map(
              ({ href = '#', title = '', disabled = false, tooltip = '', active = false }) => (
                <MenuItem key={href + title} as={Fragment} className="flex flex-col">
                  {() => {
                    const Tag = (disabled ? 'div' : Link) as React.ElementType;
                    const Component = () => (
                      <Tag
                        className={clsx('flex w-full rounded-2xl p-2 bg-blend-difference', {
                          'hover:bg-gray-100': !disabled,
                          'hover:bg-opacity-30': !disabled,
                          'cursor-not-allowed': disabled,
                          'text-gray-500': disabled,
                          'hover:text-gray-500': disabled,
                        })}
                        {...(disabled ? {} : { href })}
                      >
                        {title}
                      </Tag>
                    );

                    if (tooltip) {
                      return (
                        <Tooltip content={tooltip}>
                          <Component />
                        </Tooltip>
                      );
                    }

                    return <Component />;
                  }}
                </MenuItem>
              ),
            )}
          </MenuItems>
        </Transition>
      </Suspense>
    </Menu>
  );
}

DropdownLinks.displayName = 'DropdownLinks';
