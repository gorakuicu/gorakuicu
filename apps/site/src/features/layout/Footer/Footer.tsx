import React from 'react';

import { externalLinks } from '@/constants/links';
import { IContactIcon } from '@/features/contacts/ContactIcon';
import LinkIconList from '@/features/contacts/LinkIconList';
import { keygen } from '@/utils/keygen';
import { addGlassStyle } from '@/utils/styles';

import LinkList from './components/LinkList';

export interface ILink {
  title: string;
  href: string;
  disabled?: boolean;
  tooltip?: string;
}

export interface ILinkGroup {
  href?: string;
  title?: string;
  children?: ILink[];
}

export interface IFooterProps {
  brand?: string;
  title?: string;
  currentYear?: number;
  social?: IContactIcon[];
  links?: ILinkGroup[];
}

export default function Footer({
  brand = 'aikoicu',
  title = "Let's keep in touch!",
  currentYear = new Date().getFullYear(),
  social = externalLinks,
  links = [],
}: IFooterProps) {
  const years = currentYear === 2023 ? currentYear : `${currentYear} - 2023`;

  return (
    <footer className={addGlassStyle('border-t-1 sticky bottom-0  pb-6 pt-8', false)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h6 className="text-blueGray-700 text-3xl font-semibold">{title}</h6>
            <div className="mb-6 mt-6 lg:mb-0">
              <LinkIconList animateWhenVisible className="h-24 w-3/5" contacts={social} />
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              {links?.length > 0 &&
                links.map(({ title, children }) => {
                  const key = keygen(title, children?.length);

                  return <LinkList key={key} nested={children} title={title} />;
                })}
            </div>
          </div>
        </div>
        <hr className="border-blueGray-300 my-4" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center md:w-4/12">
            <div className="text-blueGray-500 py-1 text-sm font-semibold">
              Copyright © <span id="get-current-year">{years}</span>
              {' ' + brand}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
