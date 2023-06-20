'use client';

import dynamic from 'next/dynamic';

// @ts-ignore
const PrivacyMDX = dynamic(() => import('./privacy.mdx'));
const Structure = dynamic(() => import('@/features/layout/Structure'));

export default function Privacy() {
  return (
    <Structure className="gap-4">
      <h1 className="my-8 text-center text-4xl font-bold">PRIVACY POLICY</h1>
      <PrivacyMDX />
    </Structure>
  );
}
