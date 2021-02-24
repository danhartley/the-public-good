// next.config.js
const withPreact = require('next-plugin-preact');

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPreact({
    /* regular next.js config options here */
});

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});