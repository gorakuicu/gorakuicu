'use client';

import dynamic from 'next/dynamic';

import Structure from '@/features/layout/Structure';

// @ts-ignore
const CookieMDX = dynamic(() => import('./cookie.mdx'));

export default function Cookie() {
  return (
    <Structure className="gap-4">
      <h1 className="my-8 text-center text-4xl font-bold">COOKIE POLICY</h1>
      <CookieMDX />
    </Structure>
  );
}
