'use client';

import { hotjar } from 'react-hotjar';

export default function Hotjar({ run }: { run: boolean }) {
  const id = Number(process.env.NEXT_PUBLIC_HOTJAR_TAG_MANAGER_ID);

  if (!run || !id || typeof window === 'undefined') return null;

  hotjar.initialize(id, 6);

  return <>{hotjar.initialize(id, 6)}</>;

  // return (
  //   <script
  //     dangerouslySetInnerHTML={{
  //       __html: `
  //         (function(h,o,t,j,a,r){
  //           h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  //           h._hjSettings={hjid:${id},hjsv:6};
  //           a=o.getElementsByTagName('head')[0];
  //           r=o.createElement('script');r.async=1;
  //           r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  //           a.appendChild(r);
  //         })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  //         `,
  //     }}
  //     crossOrigin="anonymous"
  //     type="text/partytown"
  //   />
  // );
}
