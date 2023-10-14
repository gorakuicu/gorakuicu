import { Button, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { memo } from 'react';

import { MAIN_EXTERNAL_LINKS } from '~/shared/constants/links';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const SocialButtons = memo(() => {
  return (
    <motion.ul
      animate="visible"
      className="container mx-auto mt-6 grid max-w-fit grid-flow-col grid-rows-2 gap-2 sm:mx-0 sm:grid-rows-1"
      initial="hidden"
      variants={container}
    >
      {MAIN_EXTERNAL_LINKS.map((link) => (
        <motion.li className="max-w-max" key={link.url} variants={item}>
          <a
            className="max-h-10 font-normal"
            href={link.url}
            rel="noreferrer"
            target="_blank"
          >
            <Button
              className="hover:bg-gradient-to-tr hover:from-fuchsia-600 hover:to-violet-600 hover:shadow-lg"
              color="primary"
              isIconOnly
              variant="faded"
            >
              <Image
                alt={link.label}
                className="p-2 invert"
                src={link.icon}
                width={300}
              />
            </Button>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
});

SocialButtons.displayName = 'SocialButtons';
