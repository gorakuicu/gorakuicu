'use client';

import dynamic from 'next/dynamic';

const Structure = dynamic(() => import('~/features/layout/Structure'));

export default function Arts() {
  return (
    <Structure className="flex w-full flex-grow flex-col items-center">
      {process.env.NODE_ENV === 'production' ? (
        <h2 className="text-center text-9xl font-black">SOON</h2>
      ) : (
        <>asd</>
      )}
    </Structure>
  );
}
