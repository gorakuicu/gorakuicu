import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Link, useNavigate } from '@remix-run/react';
import clsx from 'clsx';
import { memo } from 'react';
import { TiThMenu } from 'react-icons/ti';

import { links } from '../model';

export const Navbar = memo(() => {
  const navigate = useNavigate();

  const LINKS_FOR_DROPDOWN = links.map((link) => ({
    ...link,
    onPress: () => navigate(link.url),
  }));

  return (
    <>
      {/* md lg xl 2xl */}
      <NavbarContent className="hidden gap-2 md:flex" justify="center">
        {links.map((link) => (
          <NavbarItem key={link.url}>
            <Link className="font-normal tracking-wider" to={link.url}>
              <Button
                className={clsx('font-serif', {
                  'text-primary': link?.standOut,
                })}
                variant="light"
              >
                {link.label}
              </Button>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* xs sm */}
      <div className="flex md:hidden">
        <Dropdown>
          <DropdownTrigger>
            <Button
              aria-label="menu-button"
              className="font-serif capitalize"
              isIconOnly
              variant="flat"
            >
              <TiThMenu />
            </Button>
          </DropdownTrigger>
          <div>
            <DropdownMenu aria-label="Mobile menu">
              {LINKS_FOR_DROPDOWN.map((link) => {
                return (
                  <DropdownItem
                    className={clsx('font-serif', {
                      'text-primary': link?.standOut,
                    })}
                    key={link?.label}
                    onPress={link?.onPress}
                  >
                    {link.label}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </div>
        </Dropdown>
      </div>
    </>
  );
});

Navbar.displayName = 'Navbar';
