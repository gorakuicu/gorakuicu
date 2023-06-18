import clsx from 'clsx';
import React, { useMemo } from 'react';

import { externalLinks } from '@/constants/links';
import Href from '@/features/common/Href';
import Tooltip from '@/features/common/Tooltip';
import { IContactIcon } from '@/features/contacts/ContactIcon';
import LinkIconList from '@/features/contacts/LinkIconList';

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
  const years = useMemo(() => {
    if (currentYear === 2023) return currentYear;

    return `${currentYear} - 2023`;
  }, [currentYear]);

  return (
    <footer className="border-t-1 border-base-100 sticky bottom-0 border-opacity-20 bg-white bg-opacity-20 pb-6 pt-8 backdrop-blur-md backdrop-saturate-100 backdrop-filter">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-blueGray-700 text-3xl font-semibold">{title}</h4>
            <div className="mb-6 mt-6 lg:mb-0">
              <LinkIconList animateWhenVisible className="h-24 w-3/5" contacts={social} />
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              {links?.length > 0 &&
                links.map(({ href, title, children }) => {
                  if (href) {
                    return (
                      <Href
                        key={href + '_' + title}
                        className="text-blueGray-500 mb-2 block text-sm font-bold uppercase"
                      >
                        {title}
                      </Href>
                    );
                  }

                  return (
                    <div key={title} className="ml-auto w-full px-4 lg:w-4/12">
                      <span className="text-blueGray-500 mb-2 block text-sm font-bold uppercase">
                        {title}
                      </span>
                      <ul className="list-unstyled">
                        {children &&
                          children?.length > 0 &&
                          children.map(({ href, title, disabled, tooltip }) => {
                            const Tag = disabled ? 'span' : Href;
                            const Component = () => (
                              <Tag
                                className={clsx(
                                  'text-blueGray-600 hover:text-accent block pb-2 text-sm',
                                  {
                                    'cursor-not-allowed': disabled,
                                    'text-gray-500': disabled,
                                    'hover:text-gray-500': disabled,
                                  },
                                )}
                                {...(disabled ? {} : { href })}
                              >
                                {title}
                              </Tag>
                            );

                            return (
                              <li key={href + '_' + title}>
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
