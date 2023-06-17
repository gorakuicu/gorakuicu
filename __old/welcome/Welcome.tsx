import { motion } from 'framer-motion';
import Link from 'next/link';

import { contacts } from '@/constants/contacts';
import useBreakpoints from '@/hooks/useBreakpoints';

import IridescentText from '../common/IridescentText';
import Slider from '../common/Slider/Slider';
import LinkIconList from '../contacts/LinkIconList';
import SiteName from './SiteName';

export default function Header() {
  const { isMD } = useBreakpoints();

  return (
    <div className="my-40 flex w-full flex-row gap-8 lg:w-8/12">
      <div className="flex w-full flex-col items-center space-y-2 lg:w-1/2 lg:items-start">
        <Link href="/">
          <SiteName />
        </Link>
        <IridescentText strings={['Boobs will save the world.', '🫦 NSFW content.']} />
        <LinkIconList contacts={contacts} />
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
