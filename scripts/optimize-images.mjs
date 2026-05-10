// One-shot image optimization for build assets:
// - fotos/ton-hero-image.png (4.7 MB) -> fotos/ton-hero-image.webp (1600w, ~80% quality)
// - public/og-image.jpg (1200x630, derived from hero)
// - public/apple-touch-icon.png (180x180, derived from hero crop, opaque bg)
import sharp from 'sharp';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync, mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const heroPng = resolve(root, 'fotos', 'ton-hero-image.png');
const heroWebp = resolve(root, 'fotos', 'ton-hero-image.webp');
const ogJpg = resolve(root, 'public', 'og-image.jpg');
const appleIcon = resolve(root, 'public', 'apple-touch-icon.png');

if (!existsSync(heroPng)) {
  console.error('[optimize-images] missing source:', heroPng);
  process.exit(1);
}
mkdirSync(dirname(ogJpg), { recursive: true });

const meta = await sharp(heroPng).metadata();
console.log(`[optimize-images] source: ${meta.width}x${meta.height}, ${meta.format}`);

await sharp(heroPng)
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toFile(heroWebp);
console.log('[optimize-images] wrote', heroWebp);

await sharp(heroPng)
  .resize({ width: 1200, height: 630, fit: 'cover', position: 'top' })
  .flatten({ background: '#0a0a0a' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(ogJpg);
console.log('[optimize-images] wrote', ogJpg);

await sharp(heroPng)
  .resize({ width: 180, height: 180, fit: 'cover', position: 'top' })
  .flatten({ background: '#0a0a0a' })
  .png({ compressionLevel: 9 })
  .toFile(appleIcon);
console.log('[optimize-images] wrote', appleIcon);
