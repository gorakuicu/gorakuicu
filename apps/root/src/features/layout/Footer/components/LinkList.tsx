import clsx from 'clsx';

import Href from '@/features/common/Href';
import Tooltip from '@/features/common/Tooltip';
import { keygen } from '@/utils/keygen';

import { ILinkGroup } from '../Footer';

interface ILinkWithNested extends Omit<ILinkGroup, 'children'> {
  nested?: ILinkGroup['children'];
}

export default function LinkList({ title, nested }: ILinkWithNested) {
  return (
    <div className="ml-auto w-full px-4 lg:w-4/12">
      <span className="text-blueGray-500 mb-2 block text-sm font-bold uppercase">{title}</span>
      <ul className="list-unstyled">
        {nested &&
          nested?.length > 0 &&
          nested.map(({ href, title, disabled, tooltip }) => {
            const Tag = disabled ? 'span' : Href;
            const Component = () => (
              <Tag
                className={clsx('text-blueGray-600 hover:text-accent block pb-2 text-sm', {
                  'cursor-not-allowed': disabled,
                  'text-gray-500': disabled,
                  'hover:text-gray-500': disabled,
                })}
                {...(disabled ? {} : { href })}
              >
                {title}
              </Tag>
            );

            return (
              <li key={keygen(href, title, href, title, disabled, tooltip)}>
                {tooltip ? (
                  <Tooltip content={tooltip}>
                    <Component />
                  </Tooltip>
                ) : (
                  <Component />
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
