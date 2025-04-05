# GitHub Pages Deployment Guide

This document explains how to deploy your portfolio to GitHub Pages using the provided scripts.

## Prerequisites

- A GitHub account
- A repository named `r-portfolio` on GitHub (already set up at: https://github.com/mouli3029/r-portfolio)

## Deployment Steps

### 1. Run the GitHub Workflow Setup Script

First, run the workflow setup script to create the GitHub Actions configuration:

```bash
node create-github-workflow.js
```

This will create a `.github/workflows/deploy.yml` file that automates the build and deployment process.

### 2. Push to GitHub

Commit your changes and push to GitHub:

```bash
git add .
git commit -m "Updated portfolio with deployment configuration"
git push
```

### 3. Enable GitHub Pages

If you haven't already:

1. Go to your repository on GitHub: https://github.com/mouli3029/r-portfolio
2. Click on "Settings" tab
3. Scroll to "Pages" in the left sidebar
4. Under "Build and deployment" > "Source", select "GitHub Actions"

### 4. Monitor the Deployment

1. Go to the "Actions" tab in your repository
2. You'll see the workflow running automatically
3. Once completed, your site will be available at: https://mouli3029.github.io/r-portfolio/

## How It Works

1. The `create-github-workflow.js` script creates a GitHub Actions workflow configuration
2. The workflow uses `deploy-static-site.js` to:
   - Build the React application
   - Create necessary files for GitHub Pages
   - Configure the base URL for GitHub Pages
   - Set up proper routing for the SPA
