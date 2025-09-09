// replace-html-img.js
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const publicDir = path.join(process.cwd(), "client/public");

const htmlFiles = glob.sync(path.join(publicDir, "**/*.html"), { nodir: true });

htmlFiles.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");

  const updated = content.replace(
    /<img\b([^>]*?)src=(["'])([^"']+\.(png|jpg|jpeg))\2([^>]*)\/?>/gi,
    (match, before, quote, src, ext, after) => {
      const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");
      return `<picture>
  <source srcset="${webpSrc}" type="image/webp" />
  <img${before} src=${quote}${src}${quote}${after} />
</picture>`;
    }
  );

  if (updated !== content) {
    fs.writeFileSync(file, updated, "utf8");
    console.log(`✅ Updated: ${file}`);
  }
});

console.log("✨ All HTML <img> tags replaced with <picture>");
