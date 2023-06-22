import CopyToClipboard from '@/features/common/CopyToClipboard';
import Href from '@/features/common/Href';
import Tooltip from '@/features/common/Tooltip';
import ContactIcon from '@/features/contacts/ContactIcon';
import { keygen } from '@/utils/keygen';

import { ILinkGroup } from '../page';

export default function LinkGroup({ title = '', links = [] }: ILinkGroup) {
  return (
    <div
      key={keygen(title, links)}
      className="list-unstyled mb-8 flex w-2/4 flex-col gap-4"
      id={title?.replace(' ', '-').toLowerCase()}
    >
      <h2 className="text-2xl font-bold">{title}</h2>

      {links?.length > 0 &&
        links.map(({ href = '#', svg = '', name = '', tooltip, copy }) => (
          <CopyToClipboard key={keygen(href, name, tooltip, copy)} data={copy}>
            <Tooltip content={tooltip}>
              <div
                className="flex items-center gap-4"
                id={name ? name?.replace(' ', '-').toLowerCase() : ''}
              >
                <ContactIcon notList href={!copy && href} svg={svg} />
                {copy ? (
                  <span>
                    <h3 className="text-md font-semibold">{name}</h3>
                  </span>
                ) : (
                  <Href base href={href}>
                    <h3 className="text-md font-semibold">{name}</h3>
                  </Href>
                )}
              </div>
            </Tooltip>
          </CopyToClipboard>
        ))}
    </div>
  );
}
