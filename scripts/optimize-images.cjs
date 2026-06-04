// One-off image optimizer: resizes oversized images and re-encodes them in
// place so the existing paths/formats keep working. Originals remain in git
// history if anything needs to be recovered.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "public", "images");
const EXTS = new Set([".jpg", ".jpeg", ".png"]);

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, acc);
    else if (EXTS.has(path.extname(entry.name).toLowerCase())) acc.push(p);
  }
  return acc;
}

(async () => {
  const files = walk(ROOT);
  let before = 0;
  let after = 0;
  let changed = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const rel = file.replace(/\\/g, "/");
    const isLogo = /\/(logos|clients)\//.test(rel);
    const cap = isLogo ? 600 : 1600;
    const size = fs.statSync(file).size;
    before += size;

    try {
      const meta = await sharp(file, { failOn: "none" }).metadata();
      let pipe = sharp(file, { failOn: "none" }).rotate();
      if (meta.width && meta.width > cap) pipe = pipe.resize({ width: cap });

      if (ext === ".png") {
        pipe = pipe.png({ compressionLevel: 9, effort: 8, palette: isLogo, quality: 82 });
      } else {
        pipe = pipe.jpeg({ quality: 78, mozjpeg: true, progressive: true });
      }

      const tmp = file + ".tmp";
      await pipe.toFile(tmp);
      const newSize = fs.statSync(tmp).size;

      if (newSize < size) {
        fs.renameSync(tmp, file);
        after += newSize;
        changed++;
      } else {
        fs.unlinkSync(tmp);
        after += size;
      }
    } catch (e) {
      console.error("skip", rel, e.message);
      after += size;
    }
  }

  const mb = (n) => (n / 1048576).toFixed(1);
  console.log(`Processed ${files.length} images, optimized ${changed}.`);
  console.log(`Total: ${mb(before)} MB -> ${mb(after)} MB (saved ${mb(before - after)} MB)`);
})();
