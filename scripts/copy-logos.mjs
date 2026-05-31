import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const destDir = path.join(root, 'public/logos/copa2026');

const renameMap = {
  'cabo verde.png': 'cabo-verde.png',
  'coreia do sul.png': 'coreia-do-sul.png',
  'costa do marfim.png': 'costa-do-marfim.png',
};

function toKebabCase(filename) {
  return filename
    .replace(/\.png$/i, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .concat('.png');
}

fs.mkdirSync(destDir, { recursive: true });

const rootFiles = fs.readdirSync(root).filter((f) => f.toLowerCase().endsWith('.png'));

let copied = 0;
for (const file of rootFiles) {
  if (file === 'logo-nucleo.png') continue;

  const destName = renameMap[file] ?? toKebabCase(file);
  const src = path.join(root, file);
  const dest = path.join(destDir, destName);

  fs.copyFileSync(src, dest);
  console.log(`✓ ${file} → logos/copa2026/${destName}`);
  copied++;
}

const logoSrc = path.join(root, 'logo-nucleo.png');
const logoDest = path.join(root, 'public/logo-nucleo.png');
if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, logoDest);
  console.log('✓ logo-nucleo.png → public/logo-nucleo.png');
}

console.log(`\n${copied} logos copiadas para public/logos/copa2026/`);
