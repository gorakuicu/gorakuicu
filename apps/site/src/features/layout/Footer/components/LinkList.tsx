import clsx from 'clsx';

import Href from '~/features/common/Href';
import Tooltip from '~/features/common/Tooltip';
import { keygen } from '~/utils/keygen';

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
            const link = (
              <Href base className={clsx('block pb-2 text-sm')} disabled={disabled} href={href}>
                {title}
              </Href>
            );

            return (
              <li key={keygen(href, title, href, title, disabled, tooltip)}>
                {tooltip ? <Tooltip content={tooltip}>{link}</Tooltip> : link}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
