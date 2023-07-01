import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { useCallback, useRef, useState } from 'react';

import ChevronIcon from '~/assets/ChevronIcon';

export interface IDropdownProps {
  className?: string;
  hover?: boolean;
  active?: boolean;
  showIcon?: boolean;
  title?: React.ReactNode;
}

export default function Dropdown({
  className = '',
  hover = false,
  active = false,
  showIcon = true,
  title = '',
  children,
}: React.PropsWithChildren<IDropdownProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState<boolean>(false);
  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  return (
    <Menu
      ref={ref}
      as="div"
      className={clsx('relative inline-block text-left', className)}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <div>
        <Menu.Button
          as="button"
          className={clsx('flex w-full items-center justify-center gap-x-1', {
            'text-primary': active,
          })}
        >
          {title}
          {showIcon && <ChevronIcon direction="down" />}
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
        {children}
      </Transition>
    </Menu>
  );
}

Dropdown.displayName = 'Dropdown';
