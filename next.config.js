module.exports = {
  webpack(config) {
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
  images: {
    domains: ['via.placeholder.com'], // Allow image domains
  },
};
