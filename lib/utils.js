// Utility to get the correct asset path for GitHub Pages deployment
export const getAssetPath = (path) => {
  // In production, Next.js already handles the basePath prefix
  // so we don't need to add it manually
  return path;
};
