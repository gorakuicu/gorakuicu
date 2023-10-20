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
      <ContactsList
        anchor="community"
        label="Community"
        links={COMMUNITY_LINKS}
      />

      <Divider className="my-8" />

      <ContactsList
        anchor="social-media"
        label="Social Media"
        links={SOCIAL_MEDIA_LINKS}
      />

      <Divider className="my-8" />

      <ContactsList anchor="nft" label="NFT" links={NFT_LINKS} />

      <Divider className="my-8" />

      <ContactsList
        anchor="support-us"
        label="Support Us"
        links={SUPPORT_US_LINKS}
      />

      <Divider className="my-8" />

      <ContactsList anchor="contact" label="Emails" links={CONTACT_LINKS} />

      <div className="my-8" />
    </CommonLayout>
  );
}
