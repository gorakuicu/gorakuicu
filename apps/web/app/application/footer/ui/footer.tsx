import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useNavigate } from '@remix-run/react';
import { memo } from 'react';

import { LinksList } from '~/features/links/links-list';
import { SocialButtons } from '~/features/links/social-buttons';
import { LEGAL_LINKS, LINKS, PROJECT_LINKS } from '~/shared/constants/links';
import { CopyRight } from '~/shared/ui/brand/copy-right';
import { Description } from '~/shared/ui/brand/description';
import { SiteLabel } from '~/shared/ui/brand/site-label';
import { SubscribeForm } from '~/shared/ui/brand/subscribe-form';

const BASE_LEGAL_LINKS = LEGAL_LINKS.slice(0, 4);
const MORE_LEGAL_LINKS = LEGAL_LINKS.slice(4);

export const Footer = memo(() => {
  const navigate = useNavigate();

  const MORE_LEGAL_DROPDOWN = MORE_LEGAL_LINKS.map((link) => ({
    label: link.label,
    onPress: () => navigate(link.url),
  }));

  return (
    <footer className="mt-auto flex flex-col bg-[#1A1A1A]/80 p-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-row flex-wrap justify-between gap-16">
        <div className="mx-auto flex max-w-max flex-grow flex-col xl:mx-0">
          <SiteLabel
            className="mx-auto w-min text-center !text-4xl !leading-[2.6rem] md:mx-0 xl:text-left"
            hideDot
          />
          <Description />
          <SocialButtons />
          <SubscribeForm />
        </div>
        <div className="mx-auto max-w-max flex-grow xl:mx-0">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <LinksList
              className="mt-4 md:mt-0"
              label="Project"
              list={PROJECT_LINKS}
            />
            <LinksList className="mt-4 md:mt-0" label="Links" list={LINKS} />
            <div>
              <LinksList
                className="mt-4 md:mt-0"
                label="Legal"
                list={BASE_LEGAL_LINKS}
              />
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="mt-2 w-full font-serif text-sm"
                    radius="full"
                    size="sm"
                    variant="flat"
                  >
                    Show more
                  </Button>
                </DropdownTrigger>
                <div>
                  <DropdownMenu aria-label="More legal links">
                    {MORE_LEGAL_DROPDOWN.map((link) => {
                      return (
                        <DropdownItem
                          className="font-serif"
                          key={link?.label}
                          onPress={link?.onPress}
                        >
                          {link?.label}
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </div>
              </Dropdown>
              {/* only for screen readers */}
              <LinksList
                className="sr-only mt-4 md:mt-0"
                label="Legal 2"
                list={MORE_LEGAL_LINKS}
              />
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
});

Footer.displayName = 'Footer';
