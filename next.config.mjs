/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Handle GitHub Pages subdirectory if repo name isn't username.github.io
  basePath: process.env.NODE_ENV === 'production' ? '/memecoin-website-template' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/memecoin-website-template/' : '',
};

export default nextConfig;
