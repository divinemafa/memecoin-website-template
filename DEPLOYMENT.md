# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js memecoin website to GitHub Pages using GitHub Actions.

## Prerequisites

1. A GitHub repository
2. GitHub Pages enabled for your repository

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Build and deployment**, select **Source**: "GitHub Actions"
5. Save the settings

### 2. Repository Configuration

Ensure your repository branch is `master` (as configured in the workflow) or update the workflow file to match your default branch.

### 3. Automatic Deployment

Once you push code to the `master` branch, the GitHub Action will:

1. ✅ Build your Next.js site
2. ✅ Export it as static files
3. ✅ Deploy to GitHub Pages
4. ✅ Make it available at `https://[username].github.io/[repository-name]`

### 4. Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab in your repository
2. Click on **Deploy Next.js site to GitHub Pages**
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## Configuration Details

### Next.js Configuration (`next.config.mjs`)

- ✅ **Static Export**: Configured for GitHub Pages
- ✅ **Base Path**: Set for repository deployment
- ✅ **Image Optimization**: Disabled for static hosting
- ✅ **Trailing Slash**: Enabled for better compatibility

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

- ✅ **Node.js 20**: Latest LTS version
- ✅ **Package Manager Detection**: Auto-detects npm/yarn
- ✅ **Caching**: Optimized build caching
- ✅ **Error Handling**: Robust error handling
- ✅ **Security**: Proper permissions and tokens

## Troubleshooting

### Common Issues

1. **404 Error**: 
   - Check if GitHub Pages is enabled
   - Verify the correct branch is selected
   - Ensure `.nojekyll` file exists in `public/` folder

2. **Build Failures**:
   - Check the Actions tab for detailed error logs
   - Ensure all dependencies are listed in `package.json`
   - Verify Next.js configuration is correct

3. **CSS/JS Not Loading**:
   - Check if `basePath` and `assetPrefix` are correctly configured
   - Ensure all paths in your code are relative

### Viewing Build Logs

1. Go to **Actions** tab
2. Click on the failed workflow run
3. Click on the failed job to see detailed logs

## Local Testing

Before deploying, test the static export locally:

```bash
npm run build
npx serve out
```

This will serve your static site locally to verify everything works correctly.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` folder with your domain name
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Security Notes

- ✅ Minimal permissions granted to GitHub token
- ✅ No secrets required for basic deployment
- ✅ Uses official GitHub Actions only
- ✅ Secure artifact handling

## Performance Optimizations

- ✅ Aggressive caching of Node modules and Next.js cache
- ✅ Optimized build process
- ✅ Static asset optimization
- ✅ Minimal runtime dependencies

Your site will be automatically deployed whenever you push changes to the master branch!
