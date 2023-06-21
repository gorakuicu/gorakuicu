import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useCallback, useRef, useState } from 'react';

import ChevronIcon from '@/assets/ChevronIcon';
import Tooltip from '@/features/common/Tooltip';
import { addGlassStyle } from '@/utils/styles';

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
  links?: ILink[];
}

export default function DropdownLinks({
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
      className="z-101 relative inline-block text-left"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <div>
        <Menu.Button as="button" className="inline-flex w-full items-center justify-center gap-x-1">
          {title}
          <ChevronIcon color="rgba(255, 255, 255, 0.5)" direction="down" />
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
          {links.map(
            ({ href = '#', title = '', disabled = false, tooltip = '', active = false }) => (
              <Menu.Item key={href}>
                {() => {
                  const Tag: React.ElementType = disabled ? 'div' : Link;
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
              </Menu.Item>
            ),
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

DropdownLinks.displayName = 'DropdownLinks';
