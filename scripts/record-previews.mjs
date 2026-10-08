// Records a short silent preview video (mp4) + poster (jpg) for each real template into public/previews.
// Usage:  node scripts/record-previews.mjs [slug ...]    (no args = every template)
// Needs: each template built first (`npm run build` inside its folder), Google Chrome, ffmpeg on PATH,
// and Playwright (borrowed from templates/borderlink-investment/node_modules).
// To add a template: add an entry to T below, add it to lib/templates.ts, then run this for its slug.
import { createRequire } from "node:module";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";

const ROOT = "C:/Users/Yaw/business website";
const TPL = `${ROOT}/templates`;
const OUT = `${ROOT}/public/previews`;
const WORK = path.join(os.tmpdir(), "forge-preview-frames");
const require = createRequire(`${TPL}/borderlink-investment/package.json`);
const { chromium } = require("playwright");

// slug -> folder, build output dir ("" = serve folder root), optional extra settle time, spa fallback
const T = {
  "agency-portfolio": { dir: "Agency Portolio Website", out: "dist", spa: true },
  "architecture-studio": { dir: "Architectural Design", out: "dist" },
  "developer-portfolio": { dir: "Developer Portfolio", out: "dist", spa: true },
  "law-practice": { dir: "Lawyer", out: "dist" },
  "software-dev-portfolio": { dir: "Software Dev Portfolio", out: "dist" },
  "joinery-furniture": { dir: "Wood works", out: "dist" },
  "residential-architect": { dir: "aera-architect", out: "dist" },
  "cybersecurity-company": { dir: "arkwright-secure", out: "dist" },
  "land-construction": { dir: "borderlink-investment", out: "dist", settle: 2500 },
  "electrical-contractor": { dir: "electrical-company", out: "dist" },
  "furniture-maker": { dir: "form-and-grain-astro", out: "dist" },
  "web-design-agency": { dir: "ghana-web-design-agency", out: "dist" },
  "independent-pharmacy": { dir: "linden-pharmacy", out: "dist" },
  "luxury-hotel": { dir: "luxury-hotel", out: "dist", settle: 2000 },
  "film-studio": { dir: "meridian-film-studio", out: "dist", settle: 5000 },
  "bakery-cafe": { dir: "sweet-crumb-bakery", out: "" },
  "home-energy": { dir: "voltara-home-energy", out: "dist", settle: 2500 },
  "japanese-restaurant": { dir: "japanese-restaurant-astro", out: "dist", settle: 3000 },
  "pizza-restaurant": { dir: "pizza-restaurant-astro", out: "dist", settle: 3000 },
  "fine-dining-restaurants": { dir: "fine-dining-restaurants-astro", out: "dist", settle: 3000 },
  "content-creative-studio": { dir: "content-creative-studio-astro", out: "dist", settle: 4000 },
  "property-developer": { dir: "property-developer-astro", out: "dist", settle: 3000 },
  "custom-home-builder": { dir: "custom-home-builder-astro", out: "dist", settle: 3000 },
  "artisan-bakery-cafe": { dir: "bakery-cafe-astro", out: "dist", settle: 2500 },
  "natural-skincare-shop": { dir: "natural-skincare-shop-astro", out: "dist", settle: 3000 },
  "boutique-hotel": { dir: "boutique-hotel-astro", out: "dist", settle: 3000 },
  "hotel-group": { dir: "hotel-group-astro", out: "dist", settle: 3000 },
  "architecture-practice": { dir: "architecture-studio-astro", out: "dist", settle: 3000 },
  "interior-design-studio": { dir: "interior-design-studio-astro", out: "dist", settle: 3000 },
  "creative-developer-portfolio": { dir: "creative-developer-portfolio-astro", out: "dist", settle: 4000, spa: true },
  "lidar-drone-inspection": { dir: "lidar-drone-inspection-astro", out: "dist", settle: 11000 },
  "software-studio": { dir: "onda-software-studio-astro", out: "dist", settle: 4000 },
  "headphone-product-launch": { dir: "onde-one-studio-astro", out: "dist", settle: 6000 },
  "architect-portfolio": { dir: "architecture-studio-site-astro", out: "dist", settle: 3500 },
  "photography-portfolio": { dir: "morph-astro", out: "dist", settle: 5000 },
  "golf-resort": { dir: "morrow-golf-park-astro", out: "dist", settle: 3500 },
  "glass-lens-studio": { dir: "loupe-astro", out: "dist", settle: 4000 },
  "brand-motion-designer": { dir: "anny-brand-motion-astro", out: "dist", settle: 3500 },
  "fintech-card-showcase": { dir: "revolver-astro", out: "dist", settle: 4500 },
  "aurora-ribbon-hero": { dir: "aurora-astro", out: "dist", settle: 7000 },
  "fashion-clothing-store": { dir: "milano-astro", out: "dist", settle: 4500 },
  "tech-consulting-studio": { dir: "galway-astro", out: "dist", settle: 4500 },
  "fashion-lookbook": { dir: "boutique-astro", out: "dist", settle: 8000 },
  "architecture-archive-studio": { dir: "tecton-arch-astro", out: "dist", settle: 3500 },
};

const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif", ".mp4": "video/mp4", ".webm": "video/webm", ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf", ".otf": "font/otf", ".ico": "image/x-icon", ".xml": "application/xml", ".txt": "text/plain", ".pdf": "application/pdf" };

function serve(root, spa) {
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let f = path.join(root, p);
    if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
    try { if (fs.statSync(f).isDirectory()) f = path.join(f, "index.html"); } catch {}
    if (!fs.existsSync(f)) {
      const alt = path.join(root, p, "index.html");
      if (fs.existsSync(alt)) f = alt;
      else if (spa && !path.extname(p)) f = path.join(root, "index.html");
      else { res.writeHead(404); return res.end("not found"); }
    }
    const stat = fs.statSync(f);
    const type = MIME[path.extname(f).toLowerCase()] || "application/octet-stream";
    const range = req.headers.range;
    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range);
      const start = m[1] ? parseInt(m[1]) : 0;
      const end = m[2] ? parseInt(m[2]) : stat.size - 1;
      res.writeHead(206, { "Content-Type": type, "Content-Range": `bytes ${start}-${end}/${stat.size}`, "Accept-Ranges": "bytes", "Content-Length": end - start + 1 });
      return fs.createReadStream(f, { start, end }).pipe(res);
    }
    res.writeHead(200, { "Content-Type": type, "Content-Length": stat.size, "Accept-Ranges": "bytes" });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise((r) => server.listen(0, "127.0.0.1", () => r(server)));
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function record(slug, cfg) {
  const root = path.join(TPL, cfg.dir, cfg.out);
  if (!fs.existsSync(path.join(root, "index.html"))) throw new Error(`no index.html in ${root}`);
  const server = await serve(root, cfg.spa);
  const url = `http://127.0.0.1:${server.address().port}/`;
  const vdir = path.join(WORK, slug);
  fs.rmSync(vdir, { recursive: true, force: true });
  fs.mkdirSync(vdir, { recursive: true });

  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "load" });
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.evaluate(() => document.fonts && document.fonts.ready);
  // decline optional cookie banners if the template has one
  for (const name of [/^decline$/i, /^reject/i, /^no thanks$/i]) {
    const bt = page.getByRole("button", { name }).first();
    if (await bt.isVisible().catch(() => false)) { await bt.click().catch(() => {}); break; }
  }
  await sleep(cfg.settle ?? 1200);

  // capture real-time frames with Chrome's screencast, then encode with ffmpeg
  const cdp = await ctx.newCDPSession(page);
  const frames = [];
  cdp.on("Page.screencastFrame", (f) => {
    frames.push({ t: f.metadata.timestamp, data: f.data });
    cdp.send("Page.screencastFrameAck", { sessionId: f.sessionId }).catch(() => {});
  });
  await cdp.send("Page.startScreencast", { format: "jpeg", quality: 85, maxWidth: 1280, maxHeight: 800, everyNthFrame: 1 });
  const first = await page.screenshot({ type: "jpeg", quality: 85 });
  const tFirst = Date.now() / 1000;
  await sleep(1200);
  await page.evaluate(() => new Promise((resolve) => {
    const h = document.documentElement.scrollHeight - innerHeight;
    const target = Math.min(h, innerHeight * 3.4);
    const dur = 7000, s0 = performance.now();
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    document.documentElement.style.scrollBehavior = "auto";
    (function step(now) {
      const t = Math.min(1, (now - s0) / dur);
      scrollTo(0, target * ease(t));
      t < 1 ? requestAnimationFrame(step) : resolve();
    })(s0);
  }));
  await sleep(900);
  const last = await page.screenshot({ type: "jpeg", quality: 85 });
  const tLast = Date.now() / 1000;
  await cdp.send("Page.stopScreencast").catch(() => {});
  const pageH = await page.evaluate(() => document.documentElement.scrollHeight);
  await ctx.close();
  await browser.close();
  server.close();

  // frame list with durations (variable frame rate -> constant 24fps)
  const list = [{ t: tFirst, data: first.toString("base64") }, ...frames.filter((f) => f.t > tFirst), { t: tLast, data: last.toString("base64") }];
  let concat = "";
  list.forEach((f, i) => {
    const name = `f${String(i).padStart(5, "0")}.jpg`;
    fs.writeFileSync(path.join(vdir, name), Buffer.from(f.data, "base64"));
    const dur = i < list.length - 1 ? Math.max(0.005, list[i + 1].t - f.t) : 0.6;
    concat += `file '${name}'
duration ${dur.toFixed(4)}
`;
  });
  concat += `file 'f${String(list.length - 1).padStart(5, "0")}.jpg'
`;
  fs.writeFileSync(path.join(vdir, "list.txt"), concat);

  fs.mkdirSync(OUT, { recursive: true });
  const mp4 = path.join(OUT, `${slug}.mp4`);
  const jpg = path.join(OUT, `${slug}.jpg`);
  execFileSync("ffmpeg", ["-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", path.join(vdir, "list.txt"), "-vf", "fps=24,scale=960:-2", "-c:v", "libx264", "-preset", "slow", "-crf", "30", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", mp4]);
  execFileSync("ffmpeg", ["-y", "-v", "error", "-ss", "0.3", "-i", mp4, "-frames:v", "1", "-q:v", "4", jpg]);
  const kb = Math.round(fs.statSync(mp4).size / 1024);
  console.log(`${slug}: ${kb} KB mp4, ${list.length} frames, page height ${pageH}px`);
}

const want = process.argv.slice(2);
const slugs = want.length ? want : Object.keys(T);
for (const slug of slugs) {
  try { await record(slug, T[slug]); } catch (e) { console.log(`${slug}: FAILED ${e.message.split("\n")[0]}`); }
}
