const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'client/src/assets');

function getPngFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  list.forEach((file) => {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getPngFiles(filePath));
    } else if (file.isFile() && file.name.endsWith('.png')) {
      results.push(filePath);
    }
  });
  return results;
}

const pngFiles = getPngFiles(assetsDir);

pngFiles.forEach(file => {
  const webpFile = file.replace(/\.png$/, '.webp');
  sharp(file)
    .webp({ quality: 80 })
    .toFile(webpFile)
    .then(() => console.log(`Converted: ${file} → ${webpFile}`))
    .catch(err => console.error(err));
});
