const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
  serverRuntimeConfig: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 49600
  }
};
module.exports = nextConfig;
