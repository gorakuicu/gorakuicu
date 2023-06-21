import { prefix } from 'inline-style-prefixer';

import { evnNotForGoogleTag } from '@/hooks/useGoogleTag';

export default function Metrics() {
  const setThemeScript = 'document.documentElement.setAttribute("data-fr-theme", "dark")';

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: setThemeScript,
        }}
      />
      <noscript>
        {!evnNotForGoogleTag && (
          <iframe
            height="0"
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
            style={prefix({ display: 'none', visibility: 'hidden' })}
            title="Google Tag Manager"
            width="0"
          />
        )}
      </noscript>
    </>
  );
}
