import { NavbarBrand as NavbarBrandBase, Spacer } from '@nextui-org/react';
import { Link } from '@remix-run/react';
import { memo } from 'react';

import { Logo } from '~/shared/ui/brand/logo';
import { SiteLabel } from '~/shared/ui/brand/site-label';

export const NavbarBrand = memo(() => {
  return (
    <NavbarBrandBase>
      <Link className="flex items-center" color="primary" to="/">
        <Logo />
        <Spacer x={2} />
        <SiteLabel className="mb-1" />
      </Link>
    </NavbarBrandBase>
  );
});

NavbarBrand.displayName = 'NavbarBrand';
