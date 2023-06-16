import React from 'react';

import { contacts } from '@/constants/contacts';
import { IContactIcon } from '@/features/contacts/ContactIcon';
import LinkIconList from '@/features/contacts/LinkIconList';

export interface ILink {
  label: string;
  url: string;
}

export interface ILinkGroup {
  title: string;
  children: ILink[];
}

export interface IFooterProps {
  brand?: string;
  label?: string;
  currentYear?: number;
  social?: IContactIcon[];
  links?: ILinkGroup[];
}

export default function Footer({
  brand = 'aikoicu',
  label = "Let's keep in touch!",
  currentYear = new Date().getFullYear(),
  social = contacts,
  links = [],
}: IFooterProps) {
  return (
    <footer className="border-t-1 border-base-100 sticky bottom-0 border-opacity-20 bg-white bg-opacity-20 pb-6 pt-8 backdrop-blur-md backdrop-saturate-100 backdrop-filter">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-blueGray-700 text-3xl font-semibold">{label}</h4>
            <div className="mb-6 mt-6 lg:mb-0">
              <LinkIconList className="h-24 w-3/5" contacts={social} />
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              {links?.length > 0 &&
                links.map(({ title, children }) => (
                  <div key={title} className="ml-auto w-full px-4 lg:w-4/12">
                    <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                      {title}
                    </span>
                    <ul className="list-unstyled">
                      {children?.length > 0 &&
                        children.map(({ url, label }) => (
                          <li key={url + '_' + label}>
                            <a
                              className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold"
                              href={url}
                            >
                              {label}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <hr className="border-blueGray-300 my-6" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center md:w-4/12">
            <div className="text-blueGray-500 py-1 text-sm font-semibold">
              Copyright © <span id="get-current-year">{currentYear}</span>
              {' ' + brand}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
