'use client';

import * as crypto from 'crypto';

export default function uuid() {
  const haveCryptoRandom = !!crypto && 'getRandomValues' in (crypto || {});

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const execution = () =>
      haveCryptoRandom ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.random() * 16;

    const r = execution() | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}
