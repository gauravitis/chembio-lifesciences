/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/chembio-lifesciences',
  assetPrefix: '/chembio-lifesciences/',
  trailingSlash: true,
}

module.exports = nextConfig
