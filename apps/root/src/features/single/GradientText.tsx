import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

const sizeByAs = {
  h1: 'text-8xl',
  h2: 'text-7xl',
  h3: 'text-6xl',
  h4: 'text-5xl',
  h5: 'text-4xl',
  h6: 'text-3xl',
  p: 'text-2xl',
  span: 'text-xl',
};

interface ISiteNameProps {
  title?: string;
  size?: string;
  animate?: boolean;
  as?: keyof typeof sizeByAs;
}

const animate = { animate: { opacity: 1, y: 0 }, initial: { opacity: 0, y: -16 } };

export default function GradientText({
  title = 'aikoicu',
  size: sizeProp,
  animate: needAnimate = true,
  as = 'h1',
}: ISiteNameProps) {
  const Component = motion[as];
  const size = useMemo(() => sizeProp || sizeByAs[as], [sizeProp, as]);
  const motionProps = useMemo(() => {
    return needAnimate ? animate : false;
  }, [needAnimate]);

  const className = clsx(
    `${size} from-primary to-accent w-max bg-gradient-to-r bg-clip-text font-extrabold text-transparent`,
  );

  return (
    <Component className={className} {...motionProps}>
      {title}
    </Component>
  );
}
