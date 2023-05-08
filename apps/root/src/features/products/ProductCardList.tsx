import clsx from 'clsx';

import ProductCardListItem, { IProductCardListItemProps } from './ProductCardListItem';

export interface IProductCardListProps {
  products: IProductCardListItemProps[];
  className?: string;
}

export default function ProductCardList({ products = [], className = '' }: IProductCardListProps) {
  const classNames = clsx(
    className,
    'mx-0',
    'columns-1',
    'gap-6',
    'space-y-4',
    'sm:columns-2',
    'md:mx-auto',
    'lg:columns-3',
  );

  return (
    <div className={classNames}>
      {products?.length > 0 &&
        products.map((product: IProductCardListItemProps) => (
          <ProductCardListItem key={product?.id} {...product} className="mb-6 h-auto max-w-full" />
        ))}
    </div>
  );
}
