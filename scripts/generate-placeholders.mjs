import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let j = 0; j < 8; j++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
  }
  return ~c >>> 0;
}

function createChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crc]);
}

function createPNG(width, height, r, g, b) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const raw = Buffer.alloc((width * 3 + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (width * 3 + 1)] = 0;
    for (let x = 0; x < width; x++) {
      const i = y * (width * 3 + 1) + 1 + x * 3;
      raw[i] = r;
      raw[i + 1] = g;
      raw[i + 2] = b;
    }
  }

  const compressed = zlib.deflateSync(raw);
  return Buffer.concat([
    signature,
    createChunk('IHDR', ihdr),
    createChunk('IDAT', compressed),
    createChunk('IEND', Buffer.alloc(0)),
  ]);
}

function writePNG(filePath, r, g, b, size = 64) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, createPNG(size, size, r, g, b));
}

const logos = [
  'africa', 'alemanha', 'arabia', 'argelia', 'argentina', 'australia', 'austria',
  'belgica', 'bosnia', 'brasil', 'cabo-verde', 'canada', 'catar', 'colombia',
  'coreia-do-sul', 'croacia', 'curacao', 'egito', 'equador', 'escocia', 'espanha',
  'franca', 'gana', 'haiti', 'holanda', 'inglaterra', 'iran', 'iraque', 'italia',
  'japao', 'jordania', 'marrocos', 'mexico', 'nigeria', 'noruega', 'nz', 'panama',
  'paraguai', 'portugal', 'senegal', 'suecia', 'suica', 'tcheca', 'tunisia',
  'turquia', 'uruguai', 'usa', 'uzbequistao',
];

const logoColors = {
  brasil: [0, 155, 58],
  usa: [0, 40, 104],
  argentina: [117, 170, 219],
  espanha: [198, 11, 30],
  default: [30, 30, 30],
};

logos.forEach((name) => {
  const color = logoColors[name] || logoColors.default;
  writePNG(
    path.join(root, 'public/logos/copa2026', `${name}.png`),
    color[0],
    color[1],
    color[2]
  );
});

const covers = {
  'copa-2026-brasil.jpg': [0, 100, 50],
  'copa-feminina-2027.jpg': [201, 162, 39],
  'volei-ufsc.jpg': [0, 80, 160],
  'grupo-b-copa.jpg': [180, 20, 30],
  'radio-ufsc.jpg': [80, 40, 120],
  'atletismo-paralimpico.jpg': [200, 120, 0],
  'og-default.jpg': [10, 10, 10],
};

Object.entries(covers).forEach(([name, [r, g, b]]) => {
  writePNG(path.join(root, 'public/images', name.replace('.jpg', '.png')), r, g, b, 800);
});

console.log('Placeholder images generated.');
