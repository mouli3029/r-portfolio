# GitHub Pages Deployment Instructions

To set up automatic deployment of your portfolio site to GitHub Pages using GitHub Actions, follow these steps:

## 1. Enable GitHub Pages in your repository

1. Go to your repository on GitHub: https://github.com/mouli3029/r-portfolio
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Build and deployment" > "Source", select "GitHub Actions"

## 2. Create a GitHub Actions workflow file

Create a new file at `.github/workflows/deploy.yml` in your repository with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: 'client/dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

You can add this file in one of two ways:

### Option 1: Create directly on GitHub
1. Go to your repository on GitHub
2. Click "Add file" > "Create new file" 
3. Enter `.github/workflows/deploy.yml` as the filename
4. Paste the YAML content above
5. Commit the changes

### Option 2: Create locally and push
1. Create the directory structure: `mkdir -p .github/workflows`
2. Create the file: `.github/workflows/deploy.yml`
3. Add the content above
4. Commit and push: 
   ```
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   ```

## 3. Monitor the deployment

After adding the workflow file:
1. Go to the "Actions" tab in your repository
2. You should see the workflow running
3. Once completed, your site will be available at: https://mouli3029.github.io/r-portfolio/

## Notes

- The first deployment might take a few minutes to complete
- Your site will automatically redeploy whenever you push changes to the main branch
- You can also manually trigger a deployment from the "Actions" tab by selecting the workflow and clicking "Run workflow"