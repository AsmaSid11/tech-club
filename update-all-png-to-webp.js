const fs = require('fs');
const path = require('path');

// Folder where all source JS/JSX/TS/TSX files are
const srcDir = path.join(__dirname, 'client/src');

// Recursively get all JS/JSX/TS/TSX files
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  list.forEach(file => {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else if (file.isFile() && /\.(js|jsx|ts|tsx)$/.test(file.name)) {
      results.push(filePath);
    }
  });
  return results;
}

// Replace .png/.jpg/.jpeg with .webp in file content
function replaceImages(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const newContent = content.replace(/\.(png|jpe?g)/gi, '.webp');

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

// Main
const files = getFiles(srcDir);
files.forEach(replaceImages);

console.log('All image references (.png/.jpg/.jpeg) replaced with .webp!');
