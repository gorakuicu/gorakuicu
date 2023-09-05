import {
  Button,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { Link } from '@remix-run/react';
import { TiThMenu } from 'react-icons/ti';

import { links } from '../model';

export function Navbar() {
  return (
    <>
      {/* md lg xl 2xl */}
      <NavbarContent className="hidden gap-2 md:flex" justify="center">
        {links.map((link) => (
          <NavbarItem key={link.href}>
            <Link
              className="font-normal tracking-wider"
              color="primary"
              to={link.href}
            >
              <Button color="primary" variant="light">
                {link.label}
              </Button>
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
              color="primary"
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
                      color="primary"
                      key={link.href}
                      to={link.href}
                    >
                      <Button
                        className="w-full"
                        color="primary"
                        size="lg"
                        variant="flat"
                      >
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
}
