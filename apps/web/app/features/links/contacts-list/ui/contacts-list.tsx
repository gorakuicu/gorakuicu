import { Button, Image } from '@nextui-org/react';
import clsx from 'clsx';
import { memo } from 'react';

import type { IPlatformLink } from '~/shared/types/platform-links';

export interface IContactsListProperties {
  anchor?: string;
  label?: string;
  links?: IPlatformLink[];
}

const colorsClass = 'group-hover:from-fuchsia-600 group-hover:to-violet-600';

const ContactItem = ({ link }: { link: IPlatformLink }) => (
  <li className="w-full">
    <a
      className="group flex max-h-10 w-full items-center gap-2"
      href={link.url}
      rel="noreferrer"
      target="_blank"
    >
      <Button
        className={clsx(
          'group-hover:bg-gradient-to-tr group-hover:shadow-lg',
          colorsClass,
        )}
        color="primary"
        isIconOnly
        variant="faded"
      >
        <Image
          alt={link.label}
          className="p-2 invert"
          height={64}
          src={link.icon}
          width={64}
        />
      </Button>
      <p
        className={clsx(
          'font-serif text-xl group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent',
          colorsClass,
        )}
      >
        {link.label}
      </p>
    </a>
  </li>
);

export const ContactsList = memo(
  ({ anchor = '#', label, links }: IContactsListProperties) => {
    const contactItems = links?.map((link) => (
      <ContactItem key={link.url} link={link} />
    ));

    return (
      <div>
        <h2
          className="text-center text-2xl font-bold md:text-start"
          id={anchor}
        >
          {label}
        </h2>
        <ul className="mx-auto mt-4 flex min-w-[240px] max-w-fit flex-col gap-4 md:mx-0">
          {contactItems}
        </ul>
      </div>
    );
  },
);

ContactsList.displayName = 'ContactsList';
