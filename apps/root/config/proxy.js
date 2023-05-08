async function proxy() {
  return [
    {
      source: '/cms/:path*',
      destination:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:7777/api/:path*'
          : 'https://cms.aiko.icu/api/:path*',
    },
  ];
}

module.exports = proxy;
