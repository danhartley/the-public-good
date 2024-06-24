/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');

const Sitemap = configureSitemap({
  domains: [{ domain: 'the-public-good', defaultLocale: 'en', http: true }],
  exclude: ['/notes/*', '/ifieldnotes/*', '/ltp/*'],
  excludeIndex: true,
  pagesConfig: {    
    '/web-development/*': {
      priority: '1.0',
    },
    '/climate-crisis/*': {
      priority: '0.8',
    },
    '/personal/*': {
      priority: '0.2',
    },
    '/notes/*': {
      priority: '0.1',
    },
    '/performance': {
      priority: '1.0',
    },
    '/accessibility': {
      priority: '1.0',
    },
    '/sustainability': {
      priority: '1.0',
    },
    '/ethics': {
      priority: '1.0',
    },
  },
  trailingSlash: true,
  targetDirectory: __dirname + '/public',
  pagesDirectory: __dirname + '/pages',
});

Sitemap.generateSitemap();