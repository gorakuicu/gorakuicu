import {
  Button,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { Link } from '@remix-run/react';

import { links } from '../model';

export function NavbarLinks() {
  return (
    <>
      {/* md lg xl 2xl */}
      <NavbarContent justify="center" className="gap-4 hidden md:flex">
        {links.map((link) => (
          <NavbarItem key={link.href}>
            <Link
              color="primary"
              to={link.href}
              className="font-normal tracking-wider"
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* xs sm */}
      <div className="flex md:hidden">
        <Popover
          placement="bottom"
          showArrow
          offset={10}
          containerPadding={100}
          size="sm"
        >
          <PopoverTrigger>
            <Button color="primary" variant="flat" className="capitalize">
              <i className="ri-menu-line"></i>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px]">
            {() => (
              <div className="px-1 py-2 w-full">
                <div className="mt-2 flex flex-col gap-2 w-full">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      color="primary"
                      to={link.href}
                      className="font-normal tracking-wider"
                    >
                      <Button
                        variant="flat"
                        color="primary"
                        size="lg"
                        className="w-full"
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
