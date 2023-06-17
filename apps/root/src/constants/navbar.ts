export const navbarData = {
  label: 'aikoicu',
  menu: [
    {
      active: true,
      href: '/',
      label: 'Home',
    },
    {
      active: false,
      href: '/arts',
      label: 'Arts',
      children: [
        {
          active: false,
          href: '/arts?free=true',
          label: 'Free',
        },
        {
          active: false,
          href: '/arts?nft=true',
          label: 'NFT',
        },
        {
          active: false,
          href: '/arts?paid=true',
          label: 'Paid',
        },
        {
          active: false,
          href: '/commissions',
          label: 'Commissions',
        },
      ],
    },
    {
      active: false,
      label: 'Links',
      children: [
        {
          active: false,
          href: '/links#social-media',
          label: 'Social Media',
        },
        {
          active: false,
          href: '/links#communities',
          label: 'Communities',
        },
        {
          active: false,
          href: '/links#contacts',
          label: 'Contacts',
        },
      ],
    },
  ],
};
