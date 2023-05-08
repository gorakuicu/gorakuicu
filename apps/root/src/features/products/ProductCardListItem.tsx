import clsx from 'clsx';
import { motion } from 'framer-motion';

import useBreakpoints from '~/hooks/useBreakpoints';

import ImageGlow from '../common/ImageGlow';

export interface IProductCardListItemProps {
  title?: string;
  description?: string;
  price?: number | null;
  src: string;
  alt?: string;
  id?: string;
  className?: string;
}

export default function ProductCardListItem({
  title = '',
  description = '',
  price = null,
  src = '',
  alt = '',
  className = '',
}: IProductCardListItemProps) {
  const { isLG } = useBreakpoints();

  const classNames = clsx(
    className,
    'bg-base-content',
    'relative',
    'flex',
    'w-full',
    'rounded-3xl',
  );

  return (
    <motion.div
      animate={{
        opacity: 1,
        x: 0,
      }}
      className={classNames}
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileHover={{
        scale: isLG ? 1.04 : 1.08,
        // @ts-ignore
        zIndex: 20,
        transition: { duration: 0.2 },
      }}
    >
      <ImageGlow alt={alt} className="h-auto max-w-full" src={src} />
      <div className="card-body z-1 border-t-1 border-base-100 absolute bottom-0 mt-auto w-full rounded-ee-3xl rounded-es-3xl border-opacity-20 bg-black bg-opacity-40 p-4 backdrop-blur-sm backdrop-saturate-100 backdrop-filter">
        {title ||
          description ||
          (price && (
            <div className="flex flex-row justify-between">
              {title && (
                <h2 className="card-title md:text-md sm:text-xs lg:text-lg xl:text-lg">{title}</h2>
              )}
              {description && <p>{description}</p>}
              {price && (
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" type="button">
                    {price}
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </motion.div>
  );
}
