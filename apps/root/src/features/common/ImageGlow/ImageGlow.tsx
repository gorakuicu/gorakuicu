import clsx from 'clsx';
import { prefix } from 'inline-style-prefixer';
import Image from 'next/image';
import React, { useMemo } from 'react';

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
  classNames = {},
  styles = {},
  src = '',
  glowSrc = '',
  height,
}: IImageGlow & React.ImgHTMLAttributes<HTMLImageElement>) {
  const { root: rootClassName = '', glow: glowClassName = '' } = classNames;

  const { root: rootStyle = {}, glow: glowStyle = {} } = styles;

  const cnsRoot = clsx(className, css.image_glow__root, 'rounded-3xl', rootClassName);

  const cnsGlow = clsx(css.image_glow__glow, glowClassName);

  const borderRadiusStyle = useMemo(
    () => (radius && Number.isNaN(Number(radius)) ? { borderRadius: radius } : {}),
    [radius],
  );

  const imageStyle: React.CSSProperties = useMemo(
    () => ({
      height: 'auto',
      objectFit: 'contain',
      position: 'relative',
      maxHeight: height,
      ...borderRadiusStyle,
    }),
    [height, borderRadiusStyle],
  );

  const rootImageStyle: React.CSSProperties = useMemo(
    () => prefix({ ...imageStyle, ...rootStyle }),
    [imageStyle, rootStyle],
  );

  const glowImageStyle: React.CSSProperties = useMemo(
    () => prefix({ ...imageStyle, transform: `scale(${scale})`, ...glowStyle }),
    [imageStyle, scale, glowStyle],
  );

  return (
    <>
      {src && (
        <Image
          alt={alt}
          className={cnsRoot}
          height={1000}
          src={src}
          style={rootImageStyle}
          width={1000}
        />
      )}
      {(glowSrc || src) && (
        <Image
          alt={alt}
          className={cnsGlow}
          height={1000}
          src={glowSrc || src}
          style={glowImageStyle}
          width={1000}
        />
      )}
    </>
  );
}
// import clsx from 'clsx';
// import { prefix } from 'inline-style-prefixer';
// import Image from 'next/image';
// import React from 'react';

// import css from './ImageGlow.module.css';

// export interface IImageGlow {
//   radius?: React.CSSProperties['borderRadius'];
//   scale?: number;
//   glowSrc?: string;
//   styles?: {
//     root?: React.CSSProperties;
//     glow?: React.CSSProperties;
//   };
//   classNames?: {
//     root?: string;
//     glow?: string;
//   };
// }

// export default function ImageGlow({
//   scale = 1.02,
//   radius,
//   alt = '',
//   className = '',
//   classNames,
//   styles,
//   src = '',
//   glowSrc = '',
//   height,
// }: IImageGlow & React.ImgHTMLAttributes<HTMLImageElement>) {
//   const { root: rootClassName = '', glow: glowClassName = '' } = classNames || {};

//   const { root: rootStyle = {}, glow: glowStyle = {} } = styles || {};

//   const cnsRoot = clsx(className, css.image_glow__root, 'rounded-3xl', rootClassName);

//   const cnsGlow = clsx(css.image_glow__glow, glowClassName);

//   return (
//     <>
//       <Image
//         alt={alt}
//         className={cnsRoot}
//         height={1000}
//         src={src}
//         style={prefix({
//           height: 'auto',
//           objectFit: 'contain',
//           position: 'relative',
//           maxHeight: height,
//           borderRadius: radius && Number.isNaN(Number(radius)) ? radius : undefined,
//           ...rootStyle,
//         })}
//         width={1000}
//       />
//       <Image
//         alt={alt}
//         className={cnsGlow}
//         height={1000}
//         src={glowSrc || src}
//         style={prefix({
//           transform: `scale(${scale})`,
//           height: 'auto',
//           objectFit: 'contain',
//           maxHeight: height,
//           ...glowStyle,
//         })}
//         width={1000}
//       />
//     </>
//   );
// }
