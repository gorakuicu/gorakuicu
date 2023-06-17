import React from 'react';

import Href from '@/features/common/Href';

const urlPattern = /(https?:\/\/[^\s]+)/g;

function Linkify({ children }: { children: React.ReactNode }) {
  if (React.Children.count(children) !== 1) {
    throw new Error('Linkify expects only one child.');
  }

  const child = children;

  if (typeof child !== 'string') {
    throw new Error('Linkify only supports string children.');
  }

  const parts = child.split(urlPattern);

  const elements = parts.map((part, index) => {
    if (urlPattern.test(part)) {
      return (
        <Href key={index} href={part}>
          {part}
        </Href>
      );
    }

    return part;
  });

  return <>{elements}</>;
}

export default Linkify;
