import {
  Button,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { Link } from '@remix-run/react';
import { memo } from 'react';
import { TiThMenu } from 'react-icons/ti';

import { links } from '../model';

export const Navbar = memo(() => {
  return (
    <>
      {/* md lg xl 2xl */}
      <NavbarContent className="hidden gap-2 md:flex" justify="center">
        {links.map((link) => (
          <NavbarItem key={link.url}>
            <Link className="font-normal tracking-wider" to={link.url}>
              <Button variant="light">{link.label}</Button>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* xs sm */}
      <div className="flex md:hidden">
        <Popover
          containerPadding={100}
          offset={10}
          placement="bottom"
          showArrow
          size="sm"
        >
          <PopoverTrigger>
            <Button
              aria-label="menu-button"
              className="capitalize"
              isIconOnly
              variant="flat"
            >
              <TiThMenu />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px]">
            {() => (
              <div className="w-full px-1 py-2">
                <div className="mt-2 flex w-full flex-col gap-2">
                  {links.map((link) => (
                    <Link
                      className="font-normal tracking-wider"
                      key={link.url}
                      to={link.url}
                    >
                      <Button className="w-full" size="lg" variant="flat">
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
});

Navbar.displayName = 'Navbar';
