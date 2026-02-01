/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/real-time-fund' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/real-time-fund/' : '',
};

module.exports = nextConfig;
