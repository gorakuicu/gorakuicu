import type { IPlatformLink } from '~/shared/types/platform-links';

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

export const OpenSeaLink = {
  icon: '/icons/opensea.svg',
  isExternal: true,
  label: 'OpenSea',
  url: 'https://opensea.io/gorakuicu',
};

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
  url: 'https://discord.gg/sshkAaWWRr',
};

export const RedditLink = {
  icon: '/icons/reddit.svg',
  isExternal: true,
  label: 'Reddit',
  url: 'https://new.reddit.com/r/gorakuicu/',
};

export const OnlyFansLink = {
  icon: '/icons/onlyfans.svg',
  isExternal: true,
  label: 'OnlyFans',
  url: 'https://onlyfans.com/gorakuicu',
};

export const InstagramLink = {
  icon: '/icons/instagram.svg',
  isExternal: true,
  label: 'Instagram',
  url: 'https://www.instagram.com/gorakuicu/',
};

export const XLink = {
  icon: '/icons/x.svg',
  isExternal: true,
  label: 'X',
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
  OnlyFansLink,
  InstagramLink,
  RedditLink,
  XLink,
  TelegramLink,
  DiscordLink,
];

export const TermsOfServiceLink = {
  label: 'Terms of Service',
  url: '/terms-of-service',
};

export const PrivacyPolicyLink = {
  label: 'Privacy Policy',
  url: '/privacy-policy',
};

export const CookiePolicyLink = {
  label: 'Cookie Policy',
  url: '/cookie-policy',
};

export const GNULicenseLink = {
  label: 'GNU License',
  url: '/license/gnu',
};

export const CCLicenseLink = {
  label: 'Creative Commons License',
  url: '/license/creative-commons',
};

export const LEGAL_LINKS: IPlatformLink[] = [
  TermsOfServiceLink,
  PrivacyPolicyLink,
  CookiePolicyLink,
  GNULicenseLink,
  CCLicenseLink,
];

export const MARKETPLACE_LINKS: IPlatformLink[] = [
  {
    label: 'Arts',
    url: '/arts',
  },
  {
    label: 'Free',
    url: '/arts?free=true',
  },
  {
    label: 'Paid',
    url: '/arts?paid=true',
  },
  {
    disabled: true,
    label: 'NFT',
    tooltip: 'Coming soon',
    url: '/arts?nft=true',
  },
  {
    disabled: true,
    label: 'Commissions',
    tooltip: 'Coming soon',
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
    tooltip: 'Coming soon',
    url: '/contacts#commission',
  },
];
