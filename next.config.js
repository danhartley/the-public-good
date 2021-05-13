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

module.exports = {
    async redirects() {
      return [
        {
          source: '/change',
          destination: '/climate-crisis/the-trickiest-of-transitions'
        },
        {
          source: '/hydrogen',
          destination: '/climate-crisis/hydrogen-a-singular-atom'
        },
        {
          source: '/carbon',
          destination: '/climate-crisis/carbon-component-of-life'
        },
        {
          source: '/carbonfootprint',
          destination: '/climate-crisis/the-value-of-individual-acts'
        },
      ]
    },
  }

// module.exports = withBundleAnalyzer({});