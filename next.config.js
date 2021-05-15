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

// full redirect to new url

// module.exports = {
//     async redirects() {
//       return [
//         {
//           source: '/change',
//           destination: '/climate-crisis/turning-the-lights-out-on-fossil-fuels',
//           permanent: true,
//         },
//         {
//           source: '/hydrogen',
//           destination: '/climate-crisis/hydrogen-a-singular-atom',
//           permanent: true,
//         },
//         {
//           source: '/carbon',
//           destination: '/climate-crisis/carbon-component-of-life',
//           permanent: true,
//         },
//         {
//           source: '/carbonfootprint',
//           destination: '/climate-crisis/will-people-or-policies-save-the-planet',
//           permanent: true,
//         },
//       ]
//     },
// }

// keep url but return new destination

// module.exports = {
//     async rewrites() {
//       return [
//         {
//           source: '/change',
//           destination: '/climate-crisis/turning-the-lights-out-on-fossil-fuels'
//         },
//         {
//           source: '/hydrogen',
//           destination: '/climate-crisis/hydrogen-a-singular-atom'
//         },
//         {
//           source: '/carbon',
//           destination: '/climate-crisis/carbon-component-of-life'
//         },
//         {
//           source: '/carbonfootprint',
//           destination: '/climate-crisis/will-people-or-policies-save-the-planet'
//         },
//       ]
//     },
// }

// module.exports = withBundleAnalyzer({});