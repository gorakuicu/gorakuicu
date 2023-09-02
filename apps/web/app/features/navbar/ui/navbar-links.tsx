import { Link, NavbarContent, NavbarItem } from '@nextui-org/react';

import { links } from '../model';

export function NavbarLinks() {
  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {links.map((link) => (
        <NavbarItem key={link.href}>
          <Link
            isBlock
            color="primary"
            href={link.href}
            className="font-normal tracking-wider"
          >
            {link.label}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
}
