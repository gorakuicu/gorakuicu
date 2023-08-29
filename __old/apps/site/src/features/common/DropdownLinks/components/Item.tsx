import { Menu } from '@headlessui/react';
import clsx from 'clsx';

import Href from '~/features/common/Href';
import Tooltip from '~/features/common/Tooltip';

import { ILink } from '../DropdownLinks';

export default function Item({ href = '#', title = '', disabled = false, tooltip = '' }: ILink) {
  return (
    <Menu.Item key={href}>
      {() => {
        const Component = () => (
          <Href
            base
            className={clsx(
              'flex w-full rounded-2xl p-2 bg-blend-difference hover:bg-white hover:bg-opacity-20',
            )}
            disabled={disabled}
            href={href}
          >
            {title}
          </Href>
        );

        if (tooltip) {
          return (
            <Tooltip tooltip={tooltip}>
              <Component />
            </Tooltip>
          );
        }

        return <Component />;
      }}
    </Menu.Item>
  );
}
