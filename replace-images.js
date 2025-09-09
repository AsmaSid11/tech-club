const fs = require("fs");
const path = require("path");
const glob = require("glob");

const rootDir = process.cwd();

const srcDirs = [
  path.join(rootDir, "client", "src"),  // React source
  path.join(rootDir, "client", "public") // HTML files
];

const filePatterns = ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.html"];

// Updated regex: matches JSX <img ... /> with any attributes
function replaceImgTags(content) {
  return content.replace(
    /<img\b([^>]*?)\bsrc=(["'])([^"']+\.(png|jpg|jpeg))\2([^>]*)\/?>/gi,
    (match, before, quote, src, ext, after) => {
      const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");

      return `<picture>
  <source srcSet="${webpSrc}" type="image/webp" />
  <img${before} src=${quote}${src}${quote}${after} />
</picture>`;
    }
  );
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let updated = replaceImgTags(content);

  if (updated !== content) {
    fs.writeFileSync(filePath, "utf8", updated);
    console.log(`✅ Updated: ${filePath}`);
  }
}

function run() {
  console.log("🔍 Scanning files for <img> tags...");

  srcDirs.forEach((dir) => {
    filePatterns.forEach((pattern) => {
      const files = glob.sync(path.join(dir, pattern), { nodir: true });
      files.forEach(processFile);
    });
  });

  console.log("✨ Replacement done! All <img> tags now have WebP + fallback.");
}

run();
