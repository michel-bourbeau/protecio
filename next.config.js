// filepath: /Users/michelbourbeau/Documents/GitHub/Protecio/protecio/next.config.js
const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
    localeDetection: true,
  },
  images: {
    domains: [
      'protecio.com',
      'www.protecio.com',
      'protecio.netlify.app',
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Désactive 'fs' pour éviter les erreurs
      path: false, // Ajoutez ceci si 'path' pose problème
    };

    return config;
  },
};
