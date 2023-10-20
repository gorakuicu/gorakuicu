import type { IPlatformLink } from '~/shared/types/platform-links';

import { COMING_SOON } from './common';

export const ArtStationLink = {
  icon: '/images/icons/artstation.svg',
  isExternal: true,
  label: 'ArtStation',
  url: 'https://www.artstation.com/gorakuicu',
};

export const DeviantArtLink = {
  icon: '/images/icons/deviantart.svg',
  isExternal: true,
  label: 'DeviantArt',
  url: 'https://www.deviantart.com/gorakuicu',
};

// export const OpenSeaLink = {
//   icon: '/images/icons/opensea.svg',
//   isExternal: true,
//   label: 'OpenSea',
//   url: 'https://opensea.io/gorakuicu',
// };

export const RaribleLink = {
  icon: '/images/icons/rarible.svg',
  isExternal: true,
  label: 'Rarible',
  url: 'https://rarible.com/user/0xe6bc81f20c66c6babe127e7e80b89832dddf5c02/owned',
};

export const DiscordLink = {
  icon: '/images/icons/discord.svg',
  isExternal: true,
  label: 'Discord',
  url: 'https://discord.gg/xyDGqrT7Cb',
};

export const RedditLink = {
  icon: '/images/icons/reddit.svg',
  isExternal: true,
  label: 'Reddit',
  url: 'https://new.reddit.com/r/gorakuicu/',
};

// export const OnlyFansLink = {
//   icon: '/images/icons/onlyfans.svg',
//   isExternal: true,
//   label: 'OnlyFans',
//   url: 'https://onlyfans.com/gorakuicu',
// };

export const InstagramLink = {
  icon: '/images/icons/instagram.svg',
  isExternal: true,
  label: 'Instagram',
  url: 'https://www.instagram.com/gorakuicu/',
};

export const XLink = {
  icon: '/images/icons/x.svg',
  isExternal: true,
  label: 'X/Twitter',
  url: 'https://twitter.com/gorakuicu',
};

export const TelegramLink = {
  icon: '/images/icons/telegram.svg',
  isExternal: true,
  label: 'Telegram',
  url: 'https://t.me/gorakuicu',
};

export const MastodonLink = {
  icon: '/images/icons/mastodon.svg',
  isExternal: true,
  label: 'Mastodon',
  url: 'https://mastodon.social/@gorakuicu',
};

export const NewgroundsLink = {
  icon: '/images/icons/newgrounds.svg',
  isExternal: true,
  label: 'Newgrounds',
  url: 'https://gorakuicu.newgrounds.com/',
};

export const PinterestLink = {
  icon: '/images/icons/pinterest.svg',
  isExternal: true,
  label: 'Pinterest',
  url: 'https://www.pinterest.com/gorakuicu/',
};

export const TumblrLink = {
  icon: '/images/icons/tumblr.svg',
  isExternal: true,
  label: 'Tumblr',
  url: 'https://gorakuicu.tumblr.com/',
};

export const PatreonLink = {
  icon: '/images/icons/patreon.svg',
  isExternal: true,
  label: 'Patreon',
  url: 'https://www.patreon.com/gorakuicu',
};

export const BoostyLink = {
  icon: '/images/icons/boosty.svg',
  isExternal: true,
  label: 'Boosty',
  url: 'https://boosty.to/gorakuicu',
};

export const BuyMeACoffeeLink = {
  icon: '/images/icons/buymeacoffee.svg',
  isExternal: true,
  label: 'Buy Me A Coffee',
  url: 'https://www.buymeacoffee.com/gorakuicu',
};

export const HelloEmailLink = {
  icon: '/images/icons/email.svg',
  isEmail: true,
  label: 'hello@goraku.icu',
  url: 'mailto:hello@goraku.icu',
};

export const MAIN_EXTERNAL_LINKS: IPlatformLink[] = [
  DeviantArtLink,
  ArtStationLink,
  InstagramLink,
  XLink,
  RaribleLink,
  RedditLink,
  TelegramLink,
  DiscordLink,
];

export const SOCIAL_MEDIA_LINKS: IPlatformLink[] = [
  DeviantArtLink,
  ArtStationLink,
  NewgroundsLink,
  TumblrLink,
  MastodonLink,
  InstagramLink,
  XLink,
];

export const COMMUNITY_LINKS: IPlatformLink[] = [
  RedditLink,
  TelegramLink,
  DiscordLink,
];

export const NFT_LINKS: IPlatformLink[] = [
  // OpenSeaLink,
  RaribleLink,
];

export const SUPPORT_US_LINKS: IPlatformLink[] = [
  PatreonLink,
  BoostyLink,
  BuyMeACoffeeLink,
];

export const CONTACT_LINKS: IPlatformLink[] = [HelloEmailLink];

export const PrivacyPolicyLink = {
  label: 'Privacy Notice',
  url: '/legal/privacy',
};

export const CookiePolicyLink = {
  label: 'Cookie Policy',
  url: '/legal/cookie',
};

export const TermsOfUseLink = {
  label: 'Terms of Use',
  url: '/legal/terms',
};

export const EULALink = {
  label: 'EULA',
  url: '/legal/eula',
};

export const DisclaimerLink = {
  label: 'Disclaimer',
  url: '/legal/disclaimer',
};

export const ShippingPolicyLink = {
  label: 'Shipping Policy',
  url: '/legal/shipping',
};

export const AcceptableUsePolicyLink = {
  label: 'Acceptable Use Policy',
  url: '/legal/acceptable',
};

export const GNULicenseLink = {
  label: 'GNU License',
  url: '/legal/gnu',
};

export const CCLicenseLink = {
  label: 'Creative Commons License',
  url: '/legal/cc',
};

export const LEGAL_LINKS: IPlatformLink[] = [
  PrivacyPolicyLink,
  CookiePolicyLink,
  TermsOfUseLink,
  CCLicenseLink,
  GNULicenseLink,
  EULALink,
  DisclaimerLink,
  AcceptableUsePolicyLink,
  ShippingPolicyLink,
];

export const PROJECT_LINKS: IPlatformLink[] = [
  {
    label: 'Arts',
    url: '/arts',
  },
  {
    label: 'Free',
    url: '/arts?free=true',
  },
  {
    disabled: true,
    label: 'Paid',
    tooltip: COMING_SOON,
    url: '/arts?paid=true',
  },
  {
    disabled: true,
    label: 'NFT',
    tooltip: COMING_SOON,
    url: '/arts?nft=true',
  },
  {
    disabled: true,
    label: 'Commissions',
    tooltip: COMING_SOON,
    url: '/commissions',
  },
];

export const LINKS: IPlatformLink[] = [
  {
    label: 'Social Media',
    url: '/links#social-media',
  },
  {
    label: 'Community',
    url: '/links#community',
  },
  {
    label: 'Support Us',
    url: '/links#support-us',
  },
  {
    label: 'Contacts',
    url: '/links#contact',
  },
  {
    disabled: true,
    label: 'Commission Artwork',
    tooltip: COMING_SOON,
    url: '/links#commission',
  },
];
