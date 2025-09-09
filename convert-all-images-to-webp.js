const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const clientDir = path.join(__dirname, 'client'); // root of client folder
const srcDir = path.join(clientDir, 'src');       // for updating code references

// Recursively get all image files (png, jpg, jpeg)
function getImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  list.forEach(file => {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getImageFiles(filePath));
    } else if (file.isFile() && /\.(png|jpe?g)$/i.test(file.name)) {
      results.push(filePath);
    }
  });
  return results;
}

// Convert image to WebP
async function convertToWebp(file) {
  const webpFile = file.replace(/\.(png|jpe?g)$/i, '.webp');
  if (!fs.existsSync(webpFile)) { // skip if already exists
    await sharp(file)
      .webp({ quality: 80 })
      .toFile(webpFile);
    console.log(`Converted: ${file} → ${webpFile}`);
  }
}

//Recursively get all JS/JSX/TS/TSX files
function getCodeFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  list.forEach(file => {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getCodeFiles(filePath));
    } else if (file.isFile() && /\.(js|jsx|ts|tsx)$/.test(file.name)) {
      results.push(filePath);
    }
  });
  return results;
}

//Replace image references in code
function replaceImageReferences(file) {
  let content = fs.readFileSync(file, 'utf8');
  const newContent = content.replace(/\.(png|jpe?g)/gi, '.webp');
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated references: ${file}`);
  }
}

// Main
(async () => {
  console.log('Finding all images (PNG, JPG, JPEG)...');
  const imageFiles = getImageFiles(clientDir);

  console.log(`Converting ${imageFiles.length} images to WebP...`);
  for (const file of imageFiles) {
    await convertToWebp(file);
  }

  console.log('Updating code references in JS/JSX/TS/TSX files...');
  const codeFiles = getCodeFiles(srcDir);
  codeFiles.forEach(replaceImageReferences);

  console.log('All images converted to WebP and references updated!');
})();
