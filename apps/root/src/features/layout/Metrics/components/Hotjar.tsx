'use client';

import { hotjar } from 'react-hotjar';

export default function Hotjar({ run }: { run: boolean }) {
  const id = Number(process.env.NEXT_PUBLIC_HOTJAR_TAG_MANAGER_ID);

  if (!run || !id || typeof window === 'undefined') return null;

  hotjar.initialize(id, 6);

  return <></>;
}
