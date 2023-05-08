import clsx from 'clsx';
import { prefix } from 'inline-style-prefixer';
import Image from 'next/image';

import css from './ImageGlow.module.css';

export interface IImageGlow {
  radius?: React.CSSProperties['borderRadius'];
  scale?: number;
  glowSrc?: string;
  styles?: {
    root?: React.CSSProperties;
    glow?: React.CSSProperties;
  };
  classNames?: {
    root?: string;
    glow?: string;
  };
}

export default function ImageGlow({
  scale = 1.02,
  radius,
  alt = '',
  className = '',
  classNames,
  styles,
  src = '',
  glowSrc = '',
  height,
}: IImageGlow & React.ImgHTMLAttributes<HTMLImageElement>) {
  const { root: rootClassName = '', glow: glowClassName = '' } = classNames || {};

  const { root: rootStyle = {}, glow: glowStyle = {} } = styles || {};

  const cnsRoot = clsx(className, css['image_glow__root'], 'rounded-3xl', rootClassName);

  const cnsGlow = clsx(css['image_glow__glow'], glowClassName);

  return (
    <>
      <Image
        alt={alt}
        className={cnsRoot}
        height={1000}
        src={src}
        style={prefix({
          height: 'auto',
          objectFit: 'contain',
          position: 'relative',
          maxHeight: height,
          borderRadius: radius && Number.isNaN(Number(radius)) ? radius : undefined,
          ...rootStyle,
        })}
        width={1000}
      />
      <Image
        alt={alt}
        className={cnsGlow}
        height={1000}
        src={glowSrc || src}
        style={prefix({
          transform: `scale(${scale})`,
          height: 'auto',
          objectFit: 'contain',
          maxHeight: height,
          ...glowStyle,
        })}
        width={1000}
      />
    </>
  );
}
