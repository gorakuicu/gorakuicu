import { Partytown } from '@builder.io/partytown/react';

import { domain, url } from '~/constants/metadata';
import Metrics from '~/features/layout/Metrics';
import colors from '~/styles/theme/colors.json';

export default function Head() {
  const setThemeScript = 'document.documentElement.setAttribute("data-fr-theme", "dark")';

  return (
    // eslint-disable-next-line @next/next/no-head-element
    <head>
      <link href={`${url}`} rel="canonical" />
      <link
        href={`${url}/search/search.xml`}
        rel="search"
        title={domain}
        type="application/search+xml"
      />
      <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
      <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/android-chrome-192x192.png" rel="icon" sizes="192x192" type="image/png" />
      <link href="/favicon-196x196.png" rel="icon" sizes="196x196" type="image/png" />
      <link href="/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
      <link href="/favicon-128x128.png" rel="icon" sizes="128x128" type="image/png" />
      <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
      <link href="/manifest.json" rel="manifest" />
      <link color={colors.primary} href="/safari-pinned-tab.svg" rel="mask-icon" />
      <link href="/favicon.ico" rel="shortcut icon" type="image/svg+xml" />
      <meta content={colors.primary} name="msapplication-TileColor" />
      <meta content="/mstile-144x144.png" name="msapplication-TileImage" />
      <meta content="/mstile-310x310.png" name="msapplication-square310x310logo" />
      <meta content={colors['base-content']} name="theme-color" />
      <meta key="application-name" content={domain} name="application-name" />
      <meta content={`NSFW - ${domain}`} name="description" />
      <meta content={domain} property="og:title" />
      <meta content={`NSFW - ${domain}`} property="og:description" />
      <meta content={`${url}/social.jpg`} property="og:image" />
      <meta content="1000" property="og:image:width" />
      <meta content="1000" property="og:image:height" />
      <meta content={domain} property="og:image:alt" />
      <meta content={domain} property="og:site_name" />
      <meta content={`${url}`} property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="adult" name="rating" />
      <meta content="gorakuicu" name="author" />
      <meta content="gorakuicu" name="copyright" />
      <meta content={colors['base-content']} name="theme-color" />
      <meta key="apple-mobile-web-app-title" content={domain} name="apple-mobile-web-app-title" />
      <meta
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        name="viewport"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: setThemeScript,
        }}
      />
      <Partytown
        debug={process.env.NODE_ENV === 'development'}
        forward={[
          'dataLayer.push',
          'hj',
          '_hjSettings',
          'fbq',
          '_hsq.push',
          'Intercom',
          '_learnq.push',
          'ttq.track',
          'ttq.page',
          'ttq.load',
          'mixpanel.track',
        ]}
      />
      <Metrics />
    </head>
  );
}
