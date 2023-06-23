'use client';

import dynamic from 'next/dynamic';

const Structure = dynamic(() => import('~/features/layout/Structure'));

export default function Home() {
  return (
    <Structure>
      <h2 className="text-center text-9xl font-black">SOON</h2>
    </Structure>
  );
}
