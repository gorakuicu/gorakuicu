const pwa = {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
};

module.exports = pwa;
