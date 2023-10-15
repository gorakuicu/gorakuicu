import type { IPlatformLink } from '~/shared/types/platform-links';

import { COMING_SOON } from './common';

export const ArtStationLink = {
  icon: '/icons/artstation.svg',
  isExternal: true,
  label: 'ArtStation',
  url: 'https://www.artstation.com/gorakuicu',
};

export const DeviantArtLink = {
  icon: '/icons/deviantart.svg',
  isExternal: true,
  label: 'DeviantArt',
  url: 'https://www.deviantart.com/gorakuicu',
};

// export const OpenSeaLink = {
//   icon: '/icons/opensea.svg',
//   isExternal: true,
//   label: 'OpenSea',
//   url: 'https://opensea.io/gorakuicu',
// };

export const RaribleLink = {
  icon: '/icons/rarible.svg',
  isExternal: true,
  label: 'Rarible',
  url: 'https://rarible.com/user/0xe6bc81f20c66c6babe127e7e80b89832dddf5c02/owned',
};

export const DiscordLink = {
  icon: '/icons/discord.svg',
  isExternal: true,
  label: 'Discord',
  url: 'https://discord.gg/xyDGqrT7Cb',
};

export const RedditLink = {
  icon: '/icons/reddit.svg',
  isExternal: true,
  label: 'Reddit',
  url: 'https://new.reddit.com/r/gorakuicu/',
};

// export const OnlyFansLink = {
//   icon: '/icons/onlyfans.svg',
//   isExternal: true,
//   label: 'OnlyFans',
//   url: 'https://onlyfans.com/gorakuicu',
// };

export const InstagramLink = {
  icon: '/icons/instagram.svg',
  isExternal: true,
  label: 'Instagram',
  url: 'https://www.instagram.com/gorakuicu/',
};

export const XLink = {
  icon: '/icons/x.svg',
  isExternal: true,
  label: 'X/Twitter',
  url: 'https://twitter.com/gorakuicu',
};

export const TelegramLink = {
  icon: '/icons/telegram.svg',
  isExternal: true,
  label: 'Telegram',
  url: 'https://t.me/gorakuicu',
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
    url: '/contacts#social-media',
  },
  {
    label: 'Community',
    url: '/contacts#community',
  },
  {
    label: 'Support Us',
    url: '/contacts#support',
  },
  {
    label: 'Contacts',
    url: '/contacts#contact',
  },
  {
    disabled: true,
    label: 'Commission Artwork',
    tooltip: COMING_SOON,
    url: '/contacts#commission',
  },
];
