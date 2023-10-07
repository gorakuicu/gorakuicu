import { memo } from 'react';

import {
  LEGAL_LINKS,
  LINKS,
  MARKETPLACE_LINKS,
} from '~/shared/constants/links';
import { SiteLabel } from '~/shared/ui/brand/site-label';
import { CopyRight } from '~/shared/ui/copy-right';
import { LinksList } from '~/shared/ui/links-list';
import { SocialButtons } from '~/shared/ui/social-buttons';
import { SubscribeForm } from '~/shared/ui/subscribe-form';

export const Footer = memo(() => {
  return (
    <footer className="mt-auto flex flex-col bg-black p-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-row flex-wrap justify-between gap-16">
        <div className="mx-auto flex max-w-max flex-grow flex-col xl:mx-0">
          <SiteLabel
            className="mx-auto w-min text-center !text-4xl md:mx-0 xl:text-left"
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
});

Footer.displayName = 'Footer';
