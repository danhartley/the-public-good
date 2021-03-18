const withPreact = require('next-plugin-preact');
const path = require('path');

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withPreact({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
});

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
});

// module.exports = withBundleAnalyzer({});