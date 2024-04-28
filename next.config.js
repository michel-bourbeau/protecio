const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeDetection: true,
  },
  images: {
    domains: [
      'kairos-technologies.net',
      'www.kairos-technologies.net',
      'kairos-technologies.netlify.app',
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  webpack(config) {
    config.resolve.fallback = {
      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,

      fs: false, // the solution
    };

    return config;
  },
};
