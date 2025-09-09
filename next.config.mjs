/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Handle GitHub Pages subdirectory - will be automatically configured by actions/configure-pages
  basePath: process.env.GITHUB_ACTIONS ? '' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '' : '',
};

export default nextConfig;
