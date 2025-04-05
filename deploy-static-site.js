// Script to build and prepare the static site for GitHub Pages
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📦 Building static site for GitHub Pages...');

try {
  // Run Vite build only (without server)
  console.log('🔨 Running Vite build...');
  execSync('npx vite build', { stdio: 'inherit' });
  
  // Create .nojekyll file
  console.log('📄 Creating .nojekyll file...');
  fs.writeFileSync('./dist/public/.nojekyll', '');
  
  // Create a 404.html page for SPA routing
  const notFoundContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      // Get the current path excluding the /r-portfolio prefix
      const path = window.location.pathname.replace(/^\\/r-portfolio/, '') || '/';
      // Redirect to the main app with the path preserved
      window.location.href = '/r-portfolio/';
    </script>
  </head>
  <body>
    <p>Redirecting to home page...</p>
  </body>
  </html>
  `;
  
  console.log('📄 Creating 404.html redirect file...');
  fs.writeFileSync('./dist/public/404.html', notFoundContent);
  
  // Update index.html to include base href
  const indexPath = './dist/public/index.html';
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Add base href if it doesn't already exist
  if (!indexContent.includes('<base href=')) {
    indexContent = indexContent.replace(
      '<head>',
      '<head>\n  <base href="/r-portfolio/">'
    );
    fs.writeFileSync(indexPath, indexContent);
    console.log('📝 Added base href to index.html');
  }
  
  console.log('✅ GitHub Pages build complete!');
  console.log('📂 Files are ready in the dist/public directory');
  
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}