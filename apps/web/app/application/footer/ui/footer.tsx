import type { TooltipProps } from '@nextui-org/react';

import { Button, Chip, Image, Input, Tooltip } from '@nextui-org/react';
import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import type { IPlatformLink } from '~/shared/types/platform-links';

import { BRAND_NAME } from '~/shared/constants/common';
import {
  LEGAL_LINKS,
  LINKS,
  MAIN_EXTERNAL_LINKS,
  MARKETPLACE_LINKS,
} from '~/shared/constants/links';
import SiteLabel from '~/shared/ui/brand/site-label';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const SocialButtons = () => {
  return (
    <motion.ul
      animate="visible"
      className="container mx-auto mt-6 grid max-w-fit grid-flow-col grid-rows-2 gap-2 sm:mx-0 sm:grid-rows-1"
      initial="hidden"
      variants={container}
    >
      {MAIN_EXTERNAL_LINKS.map((link) => (
        <motion.li className="max-w-max" key={link.url} variants={item}>
          <a
            className="max-h-10 font-normal"
            href={link.url}
            rel="noreferrer"
            target="_blank"
          >
            <Button color="primary" isIconOnly variant="faded">
              <Image
                alt={link.label}
                className="p-2 invert"
                src={link.icon}
                width={300}
              />
            </Button>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

const SubscribeForm = () => {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
      <Input
        label="Email"
        placeholder="Subscribe to updates"
        type="email"
        variant="faded"
      />
      <Button
        className="h-14 w-full sm:w-fit"
        color="primary"
        size="lg"
        variant="shadow"
      >
        Subscribe
      </Button>
    </div>
  );
};

const CopyRight = ({ className }: { className?: string }) => {
  const createdYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearsRange =
    createdYear === currentYear
      ? currentYear
      : `${createdYear} — ${currentYear}`;

  return (
    <Chip
      className={clsx('mx-auto mt-10', className)}
      isDisabled
      variant="faded"
    >
      © {yearsRange} {BRAND_NAME}. All rights reserved.
    </Chip>
  );
};

type LinksListProperties = {
  className?: string;
  label: string;
  list: IPlatformLink[];
};

const WithTooltip = ({
  children,
  tooltip,
}: {
  children: React.ReactNode;
  tooltip: TooltipProps;
}) => {
  if (!tooltip?.content) {
    return <>{children}</>;
  }

  return <Tooltip {...tooltip}>{children}</Tooltip>;
};

const getTooltipObject = (tooltip: TooltipProps): TooltipProps => {
  if (!tooltip?.content) {
    return {};
  }

  return tooltip;
};

const LinksList = ({ className = '', label, list }: LinksListProperties) => {
  return (
    <figure className={className}>
      <figcaption className="mb-2 text-center text-lg font-bold text-white">
        {label}
      </figcaption>
      <ul className="flex flex-col gap-2">
        {list.map((link) => {
          return (
            <li key={link.url}>
              <WithTooltip
                tooltip={getTooltipObject({
                  color: 'primary',
                  content: link.tooltip,
                  showArrow: true,
                })}
              >
                <Button
                  className="pointer-events-auto w-full"
                  isDisabled={link.disabled}
                  radius="full"
                  size="sm"
                  variant="light"
                >
                  {link.disabled ? (
                    link.label
                  ) : (
                    <Link to={link.url}>{link.label}</Link>
                  )}
                </Button>
              </WithTooltip>
            </li>
          );
        })}
      </ul>
    </figure>
  );
};

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col bg-black p-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-row flex-wrap justify-between gap-16">
        <div className="mx-auto flex max-w-max flex-grow flex-col xl:mx-0">
          <SiteLabel
            className="text-center text-4xl md:text-4xl xl:text-left"
            hideDot
          />
          <SocialButtons />
          <SubscribeForm />
        </div>
        <div className="mx-auto max-w-max flex-grow xl:mx-0">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <LinksList
              className="mt-4 md:mt-0"
              label="Marketplace"
              list={MARKETPLACE_LINKS}
            />
            <LinksList className="mt-4 md:mt-0" label="Links" list={LINKS} />
            <LinksList
              className="mt-4 md:mt-0"
              label="Legal"
              list={LEGAL_LINKS}
            />
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}
