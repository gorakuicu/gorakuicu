'use client';

import { useMemo } from 'react';

import {
  communityLinks,
  contactLinks,
  // nftLinks,
  socialLinks,
  supportLinks,
} from '@/constants/links';
import Href from '@/features/common/Href/Href';
import ContactIcon, { IContactIcon } from '@/features/contacts/ContactIcon';
import Structure from '@/features/layout/Structure';

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

      <div className="flex flex-row gap-4">
        {links?.length > 0 &&
          links.map((link) => (
            <div key={link.title} className="list-unstyled mb-8 flex w-2/4 flex-col gap-4">
              <h2 className="text-2xl font-bold">{link.title}</h2>

              {link.links?.length > 0 &&
                link.links.map((link) => (
                  <div
                    key={link.href}
                    className="flex items-center gap-4"
                    id={link?.name ? link?.name?.replace(' ', '-').toLowerCase() : ''}
                  >
                    <ContactIcon notList href={link.href} svg={link.svg} />
                    <Href href={link.href}>
                      <h3 className="text-md font-semibold">{link.name}</h3>
                    </Href>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </Structure>
  );
}
