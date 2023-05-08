'use client';

import { Suspense, useState } from 'react';

import Modal from '~/features/common/Modal/Modal';
import Spinner from '~/features/common/Spinner/Spinner';
import ProductCardList from '~/features/products/ProductCardList';
import { IProductCardListItemProps } from '~/features/products/ProductCardListItem';
import Welcome from '~/features/welcome/Welcome';
import { acceptNSFW, checkNSFW } from '~/utils/checkNSFW';

export default function Home() {
  const [acceptedNSFW, setAcceptedNSFW] = useState<boolean>(checkNSFW());
  const mock: IProductCardListItemProps[] = [
    {
      id: 'three',
      title: 'Three',
      description: 'NSFW - three',
      price: 123,
      src: '/content/images.jpg',
    },
    {
      id: 'SIX',
      title: 'SIX',
      description: 'NSFW - SIX',
      price: 123,
      src: '/content/images.jpg',
    },
    {
      id: 'four',
      title: 'Four',
      description: 'NSFW - four',
      price: 123,
      src: '/content/images.jpg',
    },
    {
      id: 'five',
      title: 'Five',
      description: 'NSFW - five',
      price: 123,
      src: '/content/images.jpg',
    },
  ];

  return (
    <main className="flex min-h-screen w-full flex-grow flex-col p-4 sm:p-6 md:p-8">
      <label className="btn hidden" htmlFor="check-nsfw">
        Check NSFW
      </label>
      <Modal
        blur
        description="Are you 18+?"
        id="check-nsfw"
        opened={!acceptedNSFW}
        submit={{
          label: 'Yes',
          action: () => {
            acceptNSFW();
            setAcceptedNSFW(true);
          },
        }}
        title="NSFW"
      />
      <Suspense fallback={<Spinner />}>
        <div className="flex min-h-screen flex-col items-center justify-between">
          <Welcome />
          <ProductCardList className="w-full md:w-2/3" products={mock} />
        </div>
      </Suspense>
    </main>
  );
}
