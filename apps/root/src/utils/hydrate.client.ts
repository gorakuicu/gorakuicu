'use client';

import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query';
import { createElement } from 'react';

export default function Hydrate(props: HydrateProps) {
  return createElement(RQHydrate, props);
}
