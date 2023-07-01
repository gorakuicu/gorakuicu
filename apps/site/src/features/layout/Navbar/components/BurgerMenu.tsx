import { Menu } from '@headlessui/react';

import BurgerIcon from '~/assets/BurgerIcon';
import Dropdown from '~/features/common/Dropdown';
import { glassStyle } from '~/styles';

import MenuItem from './MenuItem';

export default function BurgerMenu({ menu = [] }) {
  return (
    <div className="flex items-center justify-center lg:hidden">
      <Dropdown
        active={false}
        className="flex items-center justify-center"
        hover={false}
        showIcon={false}
        title={<BurgerIcon />}
      >
        <Menu.Items
          className={glassStyle([
            'absolute w-28 -translate-x-full transform rounded-3xl !bg-opacity-100 p-3 shadow-sm backdrop-blur-none',
          ])}
        >
          <ul className="list-unstyled">
            {menu.map(({ href = '#', title, children }) => (
              <MenuItem
                key={href}
                className="translate-y-12"
                hover={false}
                href={href}
                title={title}
              >
                {children}
              </MenuItem>
            ))}
          </ul>
        </Menu.Items>
      </Dropdown>
    </div>
  );
}
