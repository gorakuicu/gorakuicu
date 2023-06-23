'use client';

import Script from 'next/script';

export default function GoogleAnalytics({ run }: { run: boolean }) {
  const tag = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

  if (!run || !tag) return null;

  return (
    <>
      <Script
        crossOrigin="anonymous"
        src={`https://www.googletagmanager.com/gtag/js?id=${tag}`}
        strategy="afterInteractive"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${tag}');
          `,
        }}
        crossOrigin="anonymous"
        type="text/partytown"
      />
    </>
  );
}
