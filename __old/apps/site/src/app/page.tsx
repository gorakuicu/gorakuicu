'use client';

import dynamic from 'next/dynamic';

const Structure = dynamic(() => import('~/features/layout/Structure'));

export default function Home() {
  return (
    <Structure>
      <h2 className="text-center text-6xl font-black md:text-8xl lg:text-9xl">SOON</h2>
    </Structure>
  );
}
