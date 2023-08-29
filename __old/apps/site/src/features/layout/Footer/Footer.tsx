'use client';

import React, { useMemo } from 'react';

import { externalLinks } from '~/constants/links';
import { IContactIcon } from '~/features/contacts/ContactIcon';
import LinkIconList from '~/features/contacts/LinkIconList';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import { glassStyle } from '~/styles';
import { keygen } from '~/utils/keygen';

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

export interface IFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  brand?: string;
  title?: string;
  currentYear?: number;
  social?: IContactIcon[];
  links?: ILinkGroup[];
}

export default function Footer({
  brand = 'gorakuicu',
  title = "Let's keep in touch!",
  currentYear = new Date().getFullYear(),
  social: socialProp = externalLinks,
  links = [],
}: IFooterProps) {
  const breakpoints = useMediaQuery();

  const social = useMemo(() => {
    if (breakpoints.sm) return socialProp.slice(0, 16);

    return socialProp;
  }, [socialProp, breakpoints.lg]);

  const years = currentYear === 2023 ? currentYear : `${currentYear} - 2023`;

  return (
    <footer className={glassStyle(['border-t-1 sticky bottom-0 pb-6 pt-8'], false)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between text-left">
          <div className="w-max px-4">
            <h6 className="text-blueGray-700 text-3xl font-semibold">{title}</h6>
            <div className="mb-6 mt-6">
              <LinkIconList animateWhenVisible className="w-4/4" contacts={social} />
            </div>
          </div>
          <div className="w-full px-4 md:w-2/4 lg:w-full xl:w-2/4">
            <div className="items-top md:md-0 mb-6 mt-6 flex flex-wrap">
              {links?.length > 0 &&
                links.map(({ title, children }) => {
                  const key = keygen(title, children?.length);

                  return <LinkList key={key} nested={children} title={title} />;
                })}
            </div>
          </div>
        </div>
        <hr className="border-blueGray-300 my-4" />
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          <div className="mx-auto w-full px-4 text-center lg:w-4/12">
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
