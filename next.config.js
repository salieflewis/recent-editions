const {
  createVanillaExtractPlugin,
} = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    console.log('Running');
    return [
      {
        source: '/',
        destination: '/feed/latest',
        permanent: true,
      },
    ];
  },
};

module.exports = withVanillaExtract(nextConfig);
