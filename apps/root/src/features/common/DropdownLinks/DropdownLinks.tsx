import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { useCallback, useRef, useState } from 'react';

import ChevronIcon from '@/assets/ChevronIcon';
import Href from '@/features/common/Href';
import Tooltip from '@/features/common/Tooltip';
import { useActivePath } from '@/hooks/useActivePath';
import { addGlassStyle } from '@/utils/styles';

export interface ILink {
  title?: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

export interface IDropdownLinksProps {
  className?: string;
  hover?: boolean;
  active?: boolean;
  title?: string;
  links?: ILink[];
}

export default function DropdownLinks({
  className = '',
  hover = false,
  active = false,
  title = '',
  links = [],
}: IDropdownLinksProps) {
  const ref = useRef<HTMLDivElement>(null);
  const checkActivePath = useActivePath();

  const [opened, setOpened] = useState<boolean>(false);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  return (
    <Menu
      ref={ref}
      as="div"
      className={clsx('z-101 relative inline-block text-left', className)}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <div>
        <Menu.Button
          as="button"
          className={clsx('inline-flex w-full items-center justify-center gap-x-1', {
            'text-primary': active,
          })}
        >
          {title}
          <ChevronIcon direction="down" />
        </Menu.Button>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        show={hover ? opened : undefined}
      >
        <Menu.Items
          className={addGlassStyle(
            'absolute left-2/4 w-56  -translate-x-1/2 transform rounded-3xl p-2 shadow-sm',
          )}
        >
          {links.map(({ href = '#', title = '', disabled = false, tooltip = '' }) => {
            const strong = href.includes('?');

            const activeLink = checkActivePath(href, strong);

            return (
              <Menu.Item key={href}>
                {() => {
                  const Component = () => (
                    <Href
                      active={activeLink}
                      className={clsx('flex w-full rounded-2xl p-2 bg-blend-difference', {
                        'hover:bg-white': !disabled,
                        'hover:bg-opacity-10': !disabled,
                      })}
                      disabled={disabled}
                      href={href}
                    >
                      {title}
                    </Href>
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
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

DropdownLinks.displayName = 'DropdownLinks';
