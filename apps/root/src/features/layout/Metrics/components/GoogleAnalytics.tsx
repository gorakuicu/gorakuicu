'use client';

import Script from 'next/script';

export default function GoogleAnalytics({ run }: { run: boolean }) {
  const tag = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

  if (!run || !tag) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${tag}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${tag}');
        `}
      </Script>
    </>
  );
}
