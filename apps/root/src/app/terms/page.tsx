'use client';

import dynamic from 'next/dynamic';

import Structure from '@/features/layout/Structure';

// @ts-ignore
const TermsMDX = dynamic(() => import('./terms.mdx'));

export default function Terms() {
  return (
    <Structure className="gap-4">
      <h1 className="my-8 text-center text-4xl font-bold">TERMS AND CONDITIONS</h1>
      <TermsMDX />
    </Structure>
  );
}
