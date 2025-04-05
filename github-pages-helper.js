// This script helps ensure GitHub Pages deployment works correctly
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if dist directory exists
if (!fs.existsSync('./dist')) {
  console.error('Dist directory not found. Build the project first.');
  process.exit(1);
}

// Create .nojekyll file (prevents GitHub from ignoring files that begin with an underscore)
fs.writeFileSync('./dist/.nojekyll', '');
console.log('Created .nojekyll file');

// Create a simple GitHub Pages 404.html that redirects to index.html
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

fs.writeFileSync('./dist/404.html', notFoundContent);
console.log('Created 404.html redirect file');

console.log('GitHub Pages deployment preparation complete!');