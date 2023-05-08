const pwa = require('./pwa');

function plugins(config) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });

  const withPWA = require('next-pwa')(pwa);

  withBundleAnalyzer(withPWA(config));
}

module.exports = plugins;
