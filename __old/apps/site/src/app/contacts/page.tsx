'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import {
  communityLinks,
  contactLinks,
  IExternalLink,
  socialLinks,
  supportLinks,
} from '~/constants/links';

import LinkGroup from './components/LinkGroup';

const Structure = dynamic(() => import('~/features/layout/Structure'));

export interface ILinkGroup {
  title: string;
  links: IExternalLink[];
}

export default function Contacts() {
  const linkGroups = useMemo<ILinkGroup[]>(
    () => [
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

      <div className="grid-cols-2 gap-4">{linkGroups?.length > 0 && linkGroups.map(LinkGroup)}</div>
    </Structure>
  );
}
