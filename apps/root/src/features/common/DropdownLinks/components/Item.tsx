import { Menu } from '@headlessui/react';
import clsx from 'clsx';

import Href from '@/features/common/Href';
import Tooltip from '@/features/common/Tooltip';
import { useActivePath } from '@/hooks/useActivePath';

import { ILink } from '../DropdownLinks';

export default function Item(link: ILink) {
  const { href = '#', title = '', disabled = false, tooltip = '' } = link;
  const checkActivePath = useActivePath();

  const strong = href.includes('?');

  const activeLink = checkActivePath(href, strong);

  return (
    <Menu.Item key={href}>
      {() => {
        const Component = () => (
          <Href
            active={activeLink}
            className={clsx('flex w-full rounded-2xl p-2 bg-blend-difference', {
              'hover:bg-white': !disabled,
              'hover:bg-opacity-10': !disabled,
            })}
            disabled={disabled}
            href={href}
          >
            {title}
          </Href>
        );

        if (tooltip) {
          return (
            <Tooltip content={tooltip}>
              <Component />
            </Tooltip>
          );
        }

        return <Component />;
      }}
    </Menu.Item>
  );
}
