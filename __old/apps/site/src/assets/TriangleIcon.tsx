import React from 'react';

export default function TriangleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 255 255" x="0px" y="0px" {...props}>
      <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
    </svg>
  );
}
