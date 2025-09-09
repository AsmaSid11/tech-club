#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const glob = require("glob");
const sharp = require("sharp");

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "client", "public");

// imgs inside public:
function convertImages() {
  const imageFiles = glob.sync(`${publicDir}/**/*.+(jpg|jpeg|png)`, { nocase: true });

  console.log(`🔍 Found ${imageFiles.length} images in public/`);

  imageFiles.forEach(file => {
    const ext = path.extname(file);
    const webpPath = file.replace(ext, ".webp");

    sharp(file)
      .webp({ quality: 80 })
      .toFile(webpPath)
      .then(() => console.log(`✅ Converted: ${file} → ${webpPath}`))
      .catch(err => console.error(`❌ Error converting ${file}`, err));
  });
}

// Update refs only inside public
function replaceReferences() {
  const files = glob.sync(`${publicDir}/**/*.{html,css,js}`);

  files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    let updated = content.replace(/\.(jpg|jpeg|png)/gi, ".webp");

    if (content !== updated) {
      fs.writeFileSync(file, updated, "utf8");
      console.log(`🔄 Updated references in: ${file}`);
    }
  });
}

console.log("⚡ Starting WebP conversion (public/ only)...");
convertImages();

setTimeout(() => {
  replaceReferences();
  console.log("🎉 Conversion done! Images in public/ are now WebP 🚀");
}, 3000);
