require('dotenv').config({ path: '../../.env' });
require('module-alias/register');

const dns = require('dns');

if (process.env.NODE_ENV === 'development') {
  dns.setDefaultResultOrder('ipv4first');
}

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
  transpilePackages: ['react-hotjar'],
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
        source: '/admin/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:7777/api/:path*'
            : 'https://admin.goraku.icu/api/:path*',
      },
    ];
  },
  webpack: function webpack(config) {
    if (process.env.NODE_ENV === 'development') {
      if (process.env.ANALYZE) config.plugins.push(new StatoscopeWebpackPlugin());
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(withPWA(withMDX(next)));
