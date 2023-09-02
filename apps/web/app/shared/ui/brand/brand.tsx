import {
  Link,
  NavbarBrand as NavbarBrandBase,
  Spacer,
} from '@nextui-org/react';

import Logo from '~/shared/ui/brand/logo';
import SiteLabel from '~/shared/ui/brand/site-label';

export function NavbarBrand() {
  return (
    <NavbarBrandBase className="flex items-start">
      <Link color="primary" href="/">
        <Logo />
        <Spacer x={2} />
        <SiteLabel />
      </Link>
    </NavbarBrandBase>
  );
}
