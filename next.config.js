/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/chembio-lifesciences' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/chembio-lifesciences/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
