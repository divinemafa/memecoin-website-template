/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Handle GitHub Pages - use subdirectory only if not using custom domain
  // Set GITHUB_PAGES_CUSTOM_DOMAIN=true in your build environment if using custom domain
  basePath: process.env.NODE_ENV === 'production' && !process.env.GITHUB_PAGES_CUSTOM_DOMAIN ? '/memecoin-website-template' : '',
  assetPrefix: process.env.NODE_ENV === 'production' && !process.env.GITHUB_PAGES_CUSTOM_DOMAIN ? '/memecoin-website-template/' : '',
};

export default nextConfig;
