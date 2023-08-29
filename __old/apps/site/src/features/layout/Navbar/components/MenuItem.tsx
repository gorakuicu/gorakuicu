import clsx from 'clsx';
import { useMemo } from 'react';

import type { ILink } from '~/features/common/DropdownLinks';
import DropdownLinks from '~/features/common/DropdownLinks';
import Href from '~/features/common/Href';
import { useActivePath } from '~/hooks/useActivePath';

export interface IMenuItem extends ILink {
  children?: ILink[];
  hover?: boolean;
  className?: string;
}

export default function MenuItem({
  hover = true,
  href = '#',
  title,
  children,
  className = '',
}: IMenuItem) {
  const checkActivePath = useActivePath();

  const activeLink = useMemo(() => {
    if (children?.length) {
      return children.some(({ href }) => checkActivePath(href));
    }

    return checkActivePath(href);
  }, [children, checkActivePath, href]);

  return (
    <li
      className={clsx(
        'flex w-full rounded-2xl p-2 bg-blend-difference hover:bg-white hover:bg-opacity-20',
      )}
    >
      {children ? (
        <DropdownLinks
          active={activeLink}
          className="text-base-200"
          classNameChild={className}
          hover={hover}
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
