'use client';

import dynamic from 'next/dynamic';

const Structure = dynamic(() => import('~/features/layout/Structure'));

export default function Arts() {
  return (
    <Structure className="flex w-full flex-grow flex-col items-center">
      {process.env.NODE_ENV === 'production' ? (
        <h2 className="text-center text-6xl font-black md:text-8xl lg:text-9xl">SOON</h2>
      ) : (
        <>asd</>
      )}
    </Structure>
  );
}
