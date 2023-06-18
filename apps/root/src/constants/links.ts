import { IContactIcon } from '@/features/contacts/ContactIcon';
import { ILinkGroup } from '@/features/layout/Footer';
import { IMenuItem } from '@/features/layout/Navbar';

export const socialLinks: IContactIcon[] = [
  {
    name: 'OnlyFans',
    svg: '/assets/icons/links/onlyfans.svg',
    href: 'https://onlyfans.com/aikoicu',
  },
  {
    name: 'Tumblr',
    svg: '/assets/icons/links/tumblr.svg',
    href: 'https://aikoicu.tumblr.com/',
  },
  {
    name: 'Twitter',
    svg: '/assets/icons/links/twitter.svg',
    href: 'https://twitter.com/aikoicu',
  },
  {
    name: 'Pinterest',
    svg: '/assets/icons/links/pinterest.svg',
    href: 'https://www.pinterest.com/aikoicu/',
  },
  {
    name: 'Facebook',
    svg: '/assets/icons/links/facebook.svg',
    href: 'https://www.facebook.com/aikoicu',
  },
  {
    name: 'Instagram',
    svg: '/assets/icons/links/instagram.svg',
    href: 'https://www.instagram.com/aikoicu/',
  },
  {
    name: 'DeviantArt',
    svg: '/assets/icons/links/deviantart.svg',
    href: 'https://www.deviantart.com/aikoicu',
  },
];

export const communityLinks: IContactIcon[] = [
  {
    name: 'Discord',
    svg: '/assets/icons/links/discord.svg',
    href: 'https://discord.gg/YNrfTMkd',
  },
  {
    name: 'Telegram',
    svg: '/assets/icons/links/telegram.svg',
    href: 'https://t.me/aikoicu',
  },
  {
    name: 'Reddit',
    svg: '/assets/icons/links/reddit.svg',
    href: 'https://www.reddit.com/user/aikoicu',
  },
  {
    name: 'Pillowfort',
    svg: '/assets/icons/links/pillowfort.svg',
    href: 'https://www.pillowfort.social/aikoicu',
  },
  {
    name: 'Newgrounds',
    svg: '/assets/icons/links/newgrounds.svg',
    href: 'https://aikoicu.newgrounds.com/',
  },
  {
    name: 'Mastodon',
    svg: '/assets/icons/links/mastodon.svg',
    href: 'https://mastodon.social/@aikoicu',
  },
];

export const contactLinks: IContactIcon[] = [
  {
    name: 'Email',
    svg: '/assets/icons/links/email.svg',
    href: 'mailto:aikoicu@yahoo.com',
  },
];

export const supportLinks: IContactIcon[] = [
  {
    name: 'PayPal',
    svg: '/assets/icons/links/paypal.svg',
    href: 'https://www.paypal.me/aikoicu',
  },
  {
    name: 'Buy Me a Coffee',
    svg: '/assets/icons/links/buymeacoffee.svg',
    href: 'https://bmc.link/aikoicul',
  },
  {
    name: 'Patreon',
    svg: '/assets/icons/links/patreon.svg',
    href: 'https://patreon.com/aikoicu',
  },
  {
    name: 'Boosty',
    svg: '/assets/icons/links/boosty.svg',
    href: 'https://boosty.to/aikoicu',
  },
];

export const nftLinks: IContactIcon[] = [];

export const externalLinks: IContactIcon[] = [
  ...socialLinks,
  ...nftLinks,
  ...communityLinks,
  ...contactLinks,
  ...supportLinks,
];

export const internalLinks: ILinkGroup[] = [
  {
    title: 'Products',
    children: [
      {
        title: 'All',
        href: '/arts',
      },
      {
        title: 'Free',
        href: '/arts?free=true',
      },
      {
        title: 'NFT',
        href: '/arts?nft=true',
      },
      {
        title: 'Paid',
        href: '/arts?paid=true',
      },
      {
        title: 'Commissions',
        href: '/commissions',
        disabled: true,
        tooltip: 'Coming soon',
      },
    ],
  },
  {
    title: 'Links',
    children: [
      {
        title: 'Social Media',
        href: '/contacts#social-media',
      },
      // {
      //   title: 'NFT',
      //   href: '/contacts#nft',
      // },
      {
        title: 'Community',
        href: '/contacts#community',
      },
      {
        title: 'Support Us',
        href: '/contacts#support',
      },
      {
        title: 'Contacts',
        href: '/contacts#contact',
      },
    ],
  },
  {
    title: 'Other',
    children: [
      {
        title: 'License CC',
        href: '/license/cc',
      },
      {
        title: 'License GNU',
        href: '/license/gnu',
      },
      {
        title: 'Terms and Conditions',
        href: '/terms',
      },
      {
        title: 'Privacy Policy',
        href: '/privacy',
      },
      {
        title: 'Cookie Policy',
        href: '/cookie',
      },
    ],
  },
];

export const menu: IMenuItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  ...internalLinks
    .map<IMenuItem | null>(({ title = '', ...link }) => {
      if (title === 'Products') {
        return {
          ...link,
          title: 'Arts',
        };
      }

      if (title === 'Other') return null;

      return {
        ...link,
        title,
      };
    })
    .filter((link): link is IMenuItem => link !== null)
    .filter(Boolean),
];

export const navbarLinks = {
  label: 'aikoicu',
  menu,
};
