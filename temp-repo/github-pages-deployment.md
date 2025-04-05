# GitHub Pages Deployment Guide

Follow these steps to set up GitHub Pages deployment for your portfolio:

1. Go to your GitHub repository: https://github.com/mouli3029/r-portfolio
2. Click on "Add file" > "Create new file"
3. Enter the path: `.github/workflows/deploy.yml`
4. Copy and paste the workflow configuration (see repository)
5. Update the workflow to use the correct build output path: "./dist/public"
6. Click "Commit new file" at the bottom of the page
7. The workflow will run automatically, or you can trigger it manually from the Actions tab

## Important Notes
- Make sure to set the correct upload artifact path to "./dist/public"
- Check your GitHub Actions workflow status in the Actions tab of your repository
