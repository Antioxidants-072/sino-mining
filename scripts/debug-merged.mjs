#!/usr/bin/env node
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as XLSX from 'xlsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SOURCE_DIR = path.resolve(__dirname, '..', 'lib', 'content', 'source')

// BSK: check the raw cell objects for row 6 (Product Introduction)
// to see if it's a merged cell.
const buf = await fs.readFile(path.join(SOURCE_DIR, 'BSK浮选机单页设计-NXZ.xls'))
const wb = XLSX.read(buf, { type: 'buffer' })
const ws = wb.Sheets[wb.SheetNames[0]]

// Print all cells in rows 6-8 with their addresses
console.log('Cell dump for rows 6-8:')
for (let r = 6; r <= 8; r++) {
  for (let c = 0; c <= 8; c++) {
    const addr = XLSX.utils.encode_cell({ r, c })
    if (ws[addr]) {
      console.log(`  ${addr}: v="${String(ws[addr].v ?? '').replace(/\n/g,' ').slice(0,60)}" t=${ws[addr].t} merge=${!!ws[addr].$||''}`)
    }
  }
}

// Check merged cells
console.log('\nMerged cells:')
if (ws['!merges']) {
  for (const m of ws['!merges']) {
    const r1 = m.s?.r, r2 = m.e?.r
    const c1 = m.s?.c, c2 = m.e?.c
    const label = `R${r1}..${r2} C${c1}..${c2}`
    const cells = []
    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        const addr = XLSX.utils.encode_cell({ r, c })
        if (ws[addr]?.v) cells.push(`${addr}="${String(ws[addr].v).replace(/\n/g,' ').slice(0,40)}"`)
      }
    }
    if (cells.length) console.log(`  ${label}: ${cells.join(' | ')}`)
  }
} else {
  console.log('  none')
}