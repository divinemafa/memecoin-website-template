// Utility to get the correct asset path for GitHub Pages deployment
export const getAssetPath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/memecoin-website-template' : '';
  return `${basePath}${path}`;
};
