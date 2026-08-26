// scripts/extract-xls.mjs
// Robust scanner for embedded images inside .xls (OLE2 compound files).
// Detects JPEG / PNG / GIF / BMP / EMF by magic, parses real end via
// PNG chunk walking or file-size header for BMP/EMF.
import fs from 'node:fs';
import path from 'node:path';
import XLSX from 'xlsx';

const SOURCE_DIR = 'lib/content/source';
const OUT_DIR = 'scripts/extracted';
const IMG_DIR = 'public/images/xls';
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(IMG_DIR, { recursive: true });

function jpegEnd(buf, start) {
  // Scan for next 0xFFD9 (real end of segment), but skip escaped 0xFF00 in compressed data.
  let i = start + 2;
  while (i < buf.length - 1) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    if (buf[i + 1] === 0xd9) return i + 2;
    if (buf[i + 1] === 0x00) {
      i += 2;
      continue;
    }
    // stand-alone marker followed by length: marker(2) + length(2) + payload
    const m = buf[i + 1];
    if (
      m === 0xc0 || m === 0xc2 || m === 0xc4 ||
      (m >= 0xd0 && m <= 0xd7) ||
      (m >= 0xe0 && m <= 0xef) ||
      m === 0xdb || m === 0xdd || m === 0xfe
    ) {
      const segLen = buf.readUInt16BE(i + 2);
      i += 2 + segLen;
      continue;
    }
    i += 2;
  }
  return -1;
}

function pngEnd(buf, start) {
  // Skip 8-byte signature, walk chunks until IEND.
  if (
    buf[start] !== 0x89 || buf[start + 1] !== 0x50 || buf[start + 2] !== 0x4e || buf[start + 3] !== 0x47
  ) return -1;
  let off = start + 8;
  while (off + 8 <= buf.length) {
    const len = buf.readUInt32BE(off);
    const type = buf.slice(off + 4, off + 8).toString('ascii');
    if (type === 'IEND') return off + 12;
    off += 12 + len;
  }
  return -1;
}

function gifEnd(buf, start) {
  // GIF trailer 0x3B after the last image block
  let i = start + 6;
  const w = buf.readUInt16LE(start + 6);
  const h = buf.readUInt16LE(start + 8);
  i = start + 13;
  // skip global color table if present
  if (buf[start + 10] & 0x80) {
    const gct = 3 * (1 << ((buf[start + 10] & 0x07) + 1));
    i += gct;
  }
  while (i < buf.length - 1) {
    if (buf[i] === 0x3b) return i + 1;
    if (buf[i] === 0x21) {
      // extension
      i += 2;
      while (i < buf.length && buf[i] !== 0) {
        i += buf[i] + 1;
      }
      i += 1;
      continue;
    }
    if (buf[i] === 0x2c) {
      // image descriptor
      i += 9;
      if (buf[i - 1] & 0x80) i += 3 * (1 << ((buf[i - 1] & 0x07) + 1));
      i += 1;
      while (i < buf.length && buf[i] !== 0) i += buf[i] + 1;
      i += 1;
      continue;
    }
    i++;
  }
  return -1;
}

function bmpEnd(buf, start) {
  // BMP: file size at 2-5 LE.
  if (start + 6 > buf.length) return -1;
  const size = buf.readUInt32LE(start + 2);
  if (size < 54 || size > 50_000_000) return -1;
  return start + size;
}

function emfEnd(buf, start) {
  if (start + 40 > buf.length) return -1;
  // EMF header type at 0..3 should be 0x00000001 for header record; record size at 0..3 (LE) is the header record size (usually 100), but overall file size is in second record. We instead walk records.
  const headerSize = buf.readUInt32LE(start);
  if (headerSize < 80 || headerSize > 4096) return -1;
  let off = start + headerSize;
  while (off + 8 <= buf.length) {
    const recSize = buf.readUInt32LE(off);
    const recType = buf.readUInt32LE(off + 4);
    if (recSize < 8 || recSize > 50_000_000) break;
    if (recType === 0x0000007e /* EOF */) return off + recSize;
    off += recSize;
  }
  return -1;
}

function findImages(buf) {
  const sigs = [
    { ext: 'jpg', magic: [0xff, 0xd8, 0xff] },
    { ext: 'png', magic: [0x89, 0x50, 0x4e, 0x47] },
    { ext: 'gif', magic: [0x47, 0x49, 0x46, 0x38] },
    { ext: 'bmp', magic: [0x42, 0x4d] },
    { ext: 'emf', magic: null }, // detected separately
  ];
  const out = [];
  const seen = new Set();
  for (let i = 0; i < buf.length - 12; i++) {
    for (const s of sigs) {
      if (!s.magic) continue;
      let ok = true;
      for (let j = 0; j < s.magic.length; j++) {
        if (buf[i + j] !== s.magic[j]) { ok = false; break; }
      }
      if (!ok) continue;
      let end = -1;
      if (s.ext === 'jpg') end = jpegEnd(buf, i);
      else if (s.ext === 'png') end = pngEnd(buf, i);
      else if (s.ext === 'gif') end = gifEnd(buf, i);
      else if (s.ext === 'bmp') end = bmpEnd(buf, i);
      if (end > i + 100 && end <= buf.length && end - i < 5_000_000) {
        if (!seen.has(i)) {
          seen.add(i);
          out.push({ ext: s.ext, offset: i, end, data: buf.slice(i, end) });
        }
        i = end - 1;
        break;
      }
    }
  }
  // EMF: find header record (type=1, size typically 100)
  for (let i = 0; i < buf.length - 100; i++) {
    if (
      buf[i] === 0x01 && buf[i + 1] === 0x00 && buf[i + 2] === 0x00 && buf[i + 3] === 0x00
    ) {
      const recSize = buf.readUInt32LE(i);
      if (recSize >= 80 && recSize <= 4096 && (recSize & 3) === 0) {
        // bounds + bounds + frame + signature (4 bytes) + version + bytes + records
        if (i + recSize + 8 <= buf.length) {
          const recSize2 = buf.readUInt32LE(i + recSize);
          if (recSize2 >= 8 && recSize2 <= 50_000_000) {
            const end = emfEnd(buf, i);
            if (end > i + 100 && end <= buf.length) {
              if (!seen.has(i)) {
                seen.add(i);
                out.push({ ext: 'emf', offset: i, end, data: buf.slice(i, end) });
                i = end - 1;
              }
            }
          }
        }
      }
    }
  }
  // sort by offset
  out.sort((a, b) => a.offset - b.offset);
  return out;
}

function readSheetText(filePath) {
  const wb = XLSX.readFile(filePath, { cellText: true, cellNF: false });
  const out = {};
  for (const name of wb.SheetNames) {
    const ws = wb.Sheets[name];
    const grid = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '', blankrows: true });
    while (grid.length && grid[grid.length - 1].every((c) => c === '' || c == null)) grid.pop();
    let maxCol = -1;
    for (const row of grid) {
      for (let c = row.length - 1; c >= 0; c--) {
        if (row[c] !== '' && row[c] != null) {
          if (c > maxCol) maxCol = c;
          break;
        }
      }
    }
    const trimmed = maxCol >= 0 ? grid.map((r) => r.slice(0, maxCol + 1)) : grid;
    out[name] = trimmed;
  }
  return out;
}

const files = fs
  .readdirSync(SOURCE_DIR)
  .filter((f) => f.toLowerCase().endsWith('.xls'))
  .map((f) => path.join(SOURCE_DIR, f));

const report = [];

for (const file of files) {
  const baseName = path.basename(file, '.xls');
  let text = {};
  let images = [];
  try { text = readSheetText(file); } catch (err) { console.log(`TEXT ERR ${baseName}: ${err.message}`); }
  try { images = findImages(fs.readFileSync(file)); } catch (err) { console.log(`IMG ERR ${baseName}: ${err.message}`); }

  console.log(`\n=== ${baseName} ===`);
  console.log(`  sheets: ${Object.keys(text).join(', ')}`);
  for (const [name, grid] of Object.entries(text)) {
    console.log(`    ${name}: ${grid.length} rows × ${grid[0]?.length || 0} cols`);
  }
  console.log(`  images: ${images.length}`);
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const fname = `${baseName}-${i + 1}.${img.ext}`;
    const outPath = path.join(IMG_DIR, fname);
    fs.writeFileSync(outPath, img.data);
    console.log(`    [${i + 1}] ${img.ext} ${img.data.length}B off=${img.offset}`);
  }

  fs.writeFileSync(
    path.join(OUT_DIR, `${baseName}.json`),
    JSON.stringify({ file: path.basename(file), text, imageCount: images.length }, null, 2)
  );
  report.push({
    file: path.basename(file),
    sheets: Object.keys(text),
    imageCount: images.length,
    rows: Object.fromEntries(Object.entries(text).map(([k, v]) => [k, v.length])),
  });
}

fs.writeFileSync(path.join(OUT_DIR, '_report.json'), JSON.stringify(report, null, 2));
console.log(`\nDone. Report: ${path.join(OUT_DIR, '_report.json')}`);