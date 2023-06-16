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
  from?: string;
  to?: string;
  size?: string;
  animate?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export default function GradientText({
  title = 'aikoicu',
  size: sizeProp,
  animate = true,
  as = 'h1',
}: ISiteNameProps) {
  const Component = useMemo(() => motion[as], [as]);

  const size = useMemo(() => sizeProp || sizeByAs[as], [as, sizeProp]);

  const motionProps = useMemo(
    () => (animate ? { animate: { opacity: 1, y: 0 }, initial: { opacity: 0, y: -16 } } : {}),
    [animate],
  );

  const className = `${size} from-primary to-accent w-max bg-gradient-to-r bg-clip-text font-extrabold text-transparent`;

  return (
    <Component className={className} {...motionProps}>
      {title}
    </Component>
  );
}
