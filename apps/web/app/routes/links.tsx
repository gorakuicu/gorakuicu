import { Divider } from '@nextui-org/react';

import { CommonLayout } from '~/application/layout';
import { ContactsList } from '~/features/links/contacts-list';
import {
  COMMUNITY_LINKS,
  CONTACT_LINKS,
  NFT_LINKS,
  SOCIAL_MEDIA_LINKS,
  SUPPORT_US_LINKS,
} from '~/shared/constants/links';

export default function LinksPage() {
  return (
    <CommonLayout>
      <h1 className="mb-8 text-center text-4xl md:text-start" id="0">
        Links and Contacts
      </h1>

      <ContactsList
        anchor="community"
        label="Community"
        links={COMMUNITY_LINKS}
      />

      <Divider className="mx-auto my-8 max-w-[240px] md:mx-px md:max-w-full" />

      <ContactsList
        anchor="social-media"
        label="Social Media"
        links={SOCIAL_MEDIA_LINKS}
      />

      <Divider className="mx-auto my-8 max-w-[240px] md:mx-px md:max-w-full" />

      <ContactsList anchor="nft" label="NFT" links={NFT_LINKS} />

      <Divider className="mx-auto my-8 max-w-[240px] md:mx-px md:max-w-full" />

      <ContactsList
        anchor="support-us"
        label="Support Us"
        links={SUPPORT_US_LINKS}
      />

      <Divider className="mx-auto my-8 max-w-[240px] md:mx-px md:max-w-full" />

      <ContactsList anchor="contact" label="Emails" links={CONTACT_LINKS} />

      <div className="my-8" />
    </CommonLayout>
  );
}
