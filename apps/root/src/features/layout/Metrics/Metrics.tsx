import { evnNotForGoogleTag } from '@/hooks/useGoogleTag';

export default function Metrics() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: 'document.documentElement.setAttribute("data-fr-theme", "dark")',
        }}
      />
      <noscript>
        {!evnNotForGoogleTag && (
          <iframe
            height="0"
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
            width="0"
          />
        )}
      </noscript>
    </>
  );
}
