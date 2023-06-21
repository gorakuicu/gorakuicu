'use client';

import dynamic from 'next/dynamic';

const Structure = dynamic(() => import('@/features/layout/Structure'));

export default function Home() {
  return (
    <Structure>
      <h2 className="text-center text-9xl font-black">SOON</h2>
      {/* <div
        className="flex min-h-screen flex-col items-center justify-between"
        style={prefix({
          height: 2000,
        })}
      /> */}
    </Structure>
  );
}
