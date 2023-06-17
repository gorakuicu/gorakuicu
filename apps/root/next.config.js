require('dotenv').config({ path: '../../.env' });
require('module-alias/register');

// const Stylelint =
//   process.env.NODE_ENV === 'development' ? require('stylelint-webpack-plugin') : () => {};
const StatoscopeWebpackPlugin =
  process.env.NODE_ENV === 'development' && process.env.ANALYZE
    ? require('@statoscope/webpack-plugin').default
    : () => {};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

const next = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    swcTraceProfiling: true,
  },
  compiler: {
    ...(process.env.NODE_ENV === 'development'
      ? {}
      : {
          removeDebugger: true,
          removeConsole: {
            exclude: ['error', 'info'],
          },
        }),
    reactRemoveProperties: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  headers:
    process.env.NODE_ENV === 'development'
      ? () => [
          {
            source: '/_next/static/css/_app-client_src_app_globals_css.css',
            headers: [{ key: 'Vary', value: '*' }],
          },
        ]
      : undefined,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['creativecommons.org', 'licensebuttons.net', 'img.shields.io'],
  },
  rewrites: async function proxy() {
    return [
      {
        source: '/cms/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:7777/api/:path*'
            : 'https://cms.aiko.icu/api/:path*',
      },
    ];
  },
  webpack: function webpack(config) {
    if (process.env.NODE_ENV === 'development') {
      // config.plugins.push(new Stylelint());
      if (process.env.ANALYZE) config.plugins.push(new StatoscopeWebpackPlugin());
    }

    return config;
  },
  env: {
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID:
      process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
        : 'GTM-XXXXXXX',
  },
};

module.exports = withBundleAnalyzer(withPWA(withMDX(next)));
