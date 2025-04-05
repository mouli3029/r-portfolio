// Script to generate the GitHub workflow file
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workflowsDir = path.join(__dirname, '.github', 'workflows');

// Create directories if they don't exist
if (!fs.existsSync(path.join(__dirname, '.github'))) {
  fs.mkdirSync(path.join(__dirname, '.github'));
}

if (!fs.existsSync(workflowsDir)) {
  fs.mkdirSync(workflowsDir);
}

// GitHub workflow file content
const workflowContent = `name: Deploy to GitHub Pages

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
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
          
      - name: Install dependencies
        run: npm ci
      
      - name: Build static site
        run: node deploy-static-site.js
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist/public"

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

// Write the workflow file
const deployFilePath = path.join(workflowsDir, 'deploy.yml');
fs.writeFileSync(deployFilePath, workflowContent);

console.log(`✅ GitHub workflow file created at: ${deployFilePath}`);