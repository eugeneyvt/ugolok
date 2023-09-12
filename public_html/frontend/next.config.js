require('dotenv').config();

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
};
module.exports = nextConfig;
