import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useNavigate } from '@remix-run/react';
import { memo } from 'react';

import { LEGAL_LINKS, LINKS, PROJECT_LINKS } from '~/shared/constants/links';
import { CopyRight } from '~/shared/ui/brand/copy-right';
import { Description } from '~/shared/ui/brand/description';
import { SiteLabel } from '~/shared/ui/brand/site-label';
import { SubscribeForm } from '~/shared/ui/brand/subscribe-form';
import { LinksList } from '~/shared/ui/lists/links-list';
import { SocialButtons } from '~/shared/ui/lists/social-buttons';

const BASE_LEGAL_LINKS = LEGAL_LINKS.slice(0, 4);
const MORE_LEGAL_LINKS = LEGAL_LINKS.slice(4);

export const Footer = memo(() => {
  const navigate = useNavigate();

  const MORE_LEGAL_DROPDOWN = MORE_LEGAL_LINKS.map((link) => ({
    label: link.label,
    onPress: () => navigate(link.url),
  }));

  return (
    <footer className="mt-auto flex flex-col bg-black p-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-row flex-wrap justify-between gap-16">
        <div className="mx-auto flex max-w-max flex-grow flex-col xl:mx-0">
          <SiteLabel
            className="mx-auto w-min text-center !text-4xl md:mx-0 xl:text-left"
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
                    className="mt-2 w-full text-sm"
                    radius="full"
                    size="sm"
                    variant="bordered"
                  >
                    Show more
                  </Button>
                </DropdownTrigger>
                <div>
                  <DropdownMenu aria-label="More legal links">
                    {MORE_LEGAL_DROPDOWN.map((link) => {
                      return (
                        <DropdownItem key={link?.label} onPress={link?.onPress}>
                          {link?.label}
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
});

Footer.displayName = 'Footer';
