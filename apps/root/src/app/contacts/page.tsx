'use client';

import { useMemo } from 'react';

import {
  communityLinks,
  contactLinks,
  // nftLinks,
  socialLinks,
  supportLinks,
} from '@/constants/links';
import CopyToClipboard from '@/features/common/CopyToClipboard';
import Href from '@/features/common/Href';
import Tooltip from '@/features/common/Tooltip';
import ContactIcon, { IContactIcon } from '@/features/contacts/ContactIcon';
import Structure from '@/features/layout/Structure';
import uuid from '@/utils/uuid';

interface ILinkGroup {
  title: string;
  links: IContactIcon[];
}

export default function Cookie() {
  const links = useMemo<ILinkGroup[]>(
    () => [
      // {
      //   title: 'NFT',
      //   links: nftLinks,
      // },
      {
        title: 'Social Media',
        links: socialLinks,
      },
      {
        title: 'Community',
        links: communityLinks,
      },
      {
        title: 'Support',
        links: supportLinks,
      },
      {
        title: 'Contact',
        links: contactLinks,
      },
    ],
    [socialLinks, communityLinks, contactLinks, supportLinks],
  );

  return (
    <Structure className="gap-4">
      <h1 className="my-8 text-center text-4xl font-bold">Links</h1>

      <div className="grid-cols-2 gap-4">
        {links?.length > 0 &&
          links.map(({ title = '', links = [] }) => (
            <div key={title} className="list-unstyled mb-8 flex w-2/4 flex-col gap-4">
              <h2 className="text-2xl font-bold">{title}</h2>

              {links?.length > 0 &&
                links.map(({ href = '#', svg = '', name = '', tooltip = '', copy = '' }) => (
                  <CopyToClipboard key={uuid()} data={copy}>
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
                          <Href href={href}>
                            <h3 className="text-md font-semibold">{name}</h3>
                          </Href>
                        )}
                      </div>
                    </Tooltip>
                  </CopyToClipboard>
                ))}
            </div>
          ))}
      </div>
    </Structure>
  );
}
