const Stylelint = require('stylelint-webpack-plugin');

function webpack(config) {
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });

  config.plugins.push(new Stylelint());

  return config;
}

module.exports = webpack;
