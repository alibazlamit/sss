// Adds loading="lazy" + decoding="async" to every <img> that lacks them,
// across .astro pages/layouts, so off-screen images don't block scrolling.
const fs = require("fs");
const path = require("path");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, acc);
    else if (entry.name.endsWith(".astro")) acc.push(p);
  }
  return acc;
}

const roots = [path.join("src", "pages"), path.join("src", "layouts")];
const files = roots.flatMap((r) => (fs.existsSync(r) ? walk(r) : []));
let total = 0;

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  let count = 0;
  src = src.replace(/<img\b([\s\S]*?)>/g, (full, attrs) => {
    let add = "";
    if (!/\bloading=/.test(attrs)) add += ' loading="lazy"';
    if (!/\bdecoding=/.test(attrs)) add += ' decoding="async"';
    if (!add) return full;
    count++;
    return "<img" + add + attrs + ">";
  });
  if (count) {
    fs.writeFileSync(file, src);
    total += count;
    console.log(`${file.replace(/\\/g, "/")}: +${count}`);
  }
}
console.log(`Updated ${total} <img> tags across ${files.length} files.`);
