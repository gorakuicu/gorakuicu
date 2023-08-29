import GoogleAnalytics from './components/GoogleAnalytics';
import Hotjar from './components/Hotjar';

export default function Metrics() {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <>
      <GoogleAnalytics run={isProd} />
      <Hotjar run={isProd} />
    </>
  );
}
