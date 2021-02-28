// next.config.js
const withPreact = require('next-plugin-preact');
const path = require('path');

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const { createSecureHeaders } = require("next-secure-headers");

module.exports = withPreact({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
});

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});

module.exports = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: createSecureHeaders({
            contentSecurityPolicy: {
              directives: {
                defaultSrc: [
                  "'self'",
                  "https://netlify.app",
                ],
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'"],
                baseUri: "self",
                formAction: "self",
                frameAncestors: true,
              },
            },
           
          }),
        },
        
      ];
    },
  };