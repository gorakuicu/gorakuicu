import { motion } from 'framer-motion';
import Link from 'next/link';

import useBreakpoints from '~/hooks/useBreakpoints';

import IridescentText from '../common/IridescentText';
import Slider from '../common/Slider/Slider';
import { IContactIcon } from '../contacts/ContactIcon';
import ContactIconList from '../contacts/ContactIconList';
import SiteName from './SiteName';

export default function Header() {
  const { isMD } = useBreakpoints();

  const contacts: IContactIcon[] = [
    {
      svg: '/icons/onlyfans.svg',
      href: 'https://onlyfans.com/aikoicu',
    },
    {
      svg: '/icons/tumblr.svg',
      href: 'https://aikoicu.tumblr.com/',
    },
    {
      svg: '/icons/twitter.svg',
      href: 'https://twitter.com/aikoicu',
    },
    {
      svg: '/icons/reddit.svg',
      href: 'https://www.reddit.com/user/aikoicu',
    },
    {
      svg: '/icons/pinterest.svg',
      href: 'https://www.pinterest.com/aikoicu/',
    },
    {
      svg: '/icons/facebook.svg',
      href: 'https://www.facebook.com/aikoicu',
    },
    {
      svg: '/icons/telegram.svg',
      href: 'https://t.me/aikoicu',
    },
    {
      svg: '/icons/instagram.svg',
      href: 'https://www.instagram.com/aikoicu/',
    },
    {
      svg: '/icons/deviantart.svg',
      href: 'https://www.deviantart.com/aikoicu',
    },
    {
      svg: '/icons/pillowfort.svg',
      href: 'https://www.pillowfort.social/aikoicu',
    },
    {
      svg: '/icons/newgrounds.svg',
      href: 'https://aikoicu.newgrounds.com/',
    },
    {
      svg: '/icons/mastodon.svg',
      href: 'https://mastodon.social/@aikoicu',
    },
  ];

  return (
    <div className="my-40 flex w-full flex-row gap-8 lg:w-8/12">
      <div className="flex w-full flex-col items-center space-y-2 lg:w-1/2 lg:items-start">
        <Link href="/">
          <SiteName />
        </Link>
        <IridescentText
          strings={['Boobs will save the world.', '***REMOVED***NSFW content.']}
        />
        <ContactIconList contacts={contacts} />
      </div>
      {!isMD && (
        <div className="w-full flex-col lg:w-1/2">
          <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }}>
            <div className="relative">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-30 blur-lg" />
              <Slider
                autoplay={false}
                className="w-2/3"
                images={['/content/images.jpg', '/content/images.jpg']}
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
