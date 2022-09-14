const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['zora-dev.mypinata.cloud', 'arweave.net']
  }
};

module.exports = withVanillaExtract(nextConfig);