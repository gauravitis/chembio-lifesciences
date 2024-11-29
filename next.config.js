/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/chembio-lifesciences' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/chembio-lifesciences/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
