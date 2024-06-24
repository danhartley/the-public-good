/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPreact = require('next-plugin-preact');
const path = require('path');

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

const SizePlugin = require('size-plugin');

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

// https://developers.google.com/web/fundamentals/performance/webpack/monitor-and-analyze
// https://github.com/FormidableLabs/webpack-dashboard/
// const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = withPreact({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
});

module.exports = smp.wrap({
    plugins: [
        new SizePlugin()
        // , new DashboardPlugin()
    ]
});

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
});

// module.exports = {
//     distDir: 'out'
// }

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
//           destination: '/climate-crisis/carbon-element-of-life',
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
//           destination: '/climate-crisis/carbon-element-of-life'
//         },
//         {
//           source: '/carbonfootprint',
//           destination: '/climate-crisis/will-people-or-policies-save-the-planet'
//         },
//       ]
//     },
// }

module.exports = withBundleAnalyzer({});