'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import {
  communityLinks,
  contactLinks,
  IExternalLink,
  // nftLinks,
  socialLinks,
  supportLinks,
} from '@/constants/links';
import CopyToClipboard from '@/features/common/CopyToClipboard';
import Href from '@/features/common/Href';
import Tooltip from '@/features/common/Tooltip';
import ContactIcon from '@/features/contacts/ContactIcon';
import uuid from '@/utils/uuid';

const Structure = dynamic(() => import('@/features/layout/Structure'));

interface ILinkGroup {
  title: string;
  links: IExternalLink[];
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
                links.map(({ href = '#', svg = '', name = '', tooltip, copy }) => {
                  const Tag = copy ? 'span' : Href;

                  return (
                    <CopyToClipboard key={uuid()} data={copy}>
                      <Tooltip content={tooltip}>
                        <div
                          className="flex items-center gap-4"
                          id={name ? name?.replace(' ', '-').toLowerCase() : ''}
                        >
                          <ContactIcon notList href={!copy && href} svg={svg} />
                          <Tag href={href}>
                            <h3 className="text-md font-semibold">{name}</h3>
                          </Tag>
                        </div>
                      </Tooltip>
                    </CopyToClipboard>
                  );
                })}
            </div>
          ))}
      </div>
    </Structure>
  );
}
