import { Menu } from '@headlessui/react';
import React from 'react';

import Dropdown, { IDropdownProps } from '~/features/common/Dropdown';
import { glassStyle } from '~/styles';

import Item from './components/Item';
export interface ILink {
  title?: React.ReactNode;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

export interface IDropdownLinksProps extends IDropdownProps {
  links?: ILink[];
  classNameChild?: string;
}

export default function DropdownLinks({
  links = [],
  hover,
  active,
  className,
  title,
  classNameChild,
}: IDropdownLinksProps) {
  return (
    <Dropdown active={active} className={className} hover={hover} title={title}>
      <Menu.Items
        className={glassStyle([
          'absolute left-2/4 w-56 -translate-x-1/2 transform rounded-3xl !bg-opacity-100 p-3 shadow-sm backdrop-blur-none',
          classNameChild,
        ])}
      >
        {links.map((link) => (
          <Item key={link.href} {...link} />
        ))}
      </Menu.Items>
    </Dropdown>
  );
}

DropdownLinks.displayName = 'DropdownLinks';
