const plugins = require('./plugins');
const proxy = require('./proxy');
const webpack = require('./webpack');

module.exports = plugins({
  rewrites: proxy,
  webpack,
});
