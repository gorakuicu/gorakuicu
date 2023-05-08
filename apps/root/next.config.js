const config = require('./config');

const next = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compiler: { removeConsole: process.env.NODE_ENV !== 'development' },
  ...config,
};

module.exports = next;
