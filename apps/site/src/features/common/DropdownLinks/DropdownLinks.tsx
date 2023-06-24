import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { useCallback, useRef, useState } from 'react';

import ChevronIcon from '~/assets/ChevronIcon';
import { glassStyle } from '~/styles';

import Item from './components/Item';

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

  const [opened, setOpened] = useState<boolean>(false);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);

  return (
    <Menu
      ref={ref}
      as="div"
      className={clsx('relative z-40 inline-block text-left', className)}
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
          className={glassStyle([
            'absolute left-2/4 w-56 -translate-x-1/2 transform rounded-3xl bg-opacity-100 px-3 py-2 shadow-sm backdrop-blur-none',
          ])}
        >
          {links.map((link) => (
            <Item key={link.href} {...link} />
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

DropdownLinks.displayName = 'DropdownLinks';
