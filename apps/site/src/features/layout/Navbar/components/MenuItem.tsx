import { useMemo } from 'react';

import type { ILink } from '~/features/common/DropdownLinks';
import DropdownLinks from '~/features/common/DropdownLinks';
import Href from '~/features/common/Href';
import { useActivePath } from '~/hooks/useActivePath';

export interface IMenuItem extends ILink {
  children?: ILink[];
}

export default function Menu({ href = '#', title, children }: IMenuItem) {
  const checkActivePath = useActivePath();

  const activeLink = useMemo(() => {
    if (children?.length) {
      return children.some(({ href }) => checkActivePath(href));
    }

    return checkActivePath(href);
  }, [children, checkActivePath, href]);

  return (
    <li>
      {children ? (
        <DropdownLinks
          hover
          active={activeLink}
          className="text-base-200"
          links={children}
          title={title}
        />
      ) : (
        <Href base active={activeLink} href={href}>
          {title}
        </Href>
      )}
    </li>
  );
}
