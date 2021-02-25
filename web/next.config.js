module.exports = {
  pageExtensions: ['js', 'jsx'],
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
};
