import React from 'react';

import Href from '@/features/common/Href';

const urlPattern = /(https?:\/\/[^\s]+)/g;

function Linkify({ children }: { children: React.ReactNode }) {
  if (React.Children.count(children) !== 1) {
    throw new Error('[Linkify] expects exactly one child node.');
  }

  const childText = children as string;

  if (typeof childText !== 'string') {
    throw new Error(`[Linkify] only supports string children. Received ${typeof childText}.`);
  }

  const textParts = childText.split(urlPattern);

  const linkedTextElements = textParts.map((part, index) => {
    const isUrl = urlPattern.test(part);

    return isUrl ? (
      <Href key={`${part}-${index}`} href={part}>
        {part}
      </Href>
    ) : (
      part
    );
  });

  return <>{linkedTextElements}</>;
}

export default Linkify;
