import { ILinkGroup } from '@/features/layout/Footer';

export const footerLinks: ILinkGroup[] = [
  {
    title: 'Useful Links',
    children: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'All Arts',
        href: '/arts',
      },
      {
        title: 'Free Arts',
        href: '/arts?free=true',
      },
      {
        title: 'NFT Arts',
        href: '/arts?nft=true',
      },
      {
        title: 'Paid Arts',
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
        href: '/links#social-media',
      },
      {
        title: 'Communities',
        href: '/links#communities',
      },
      {
        title: 'Contacts',
        href: '/links#contacts',
      },
    ],
  },
  {
    title: 'Other Links',
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
