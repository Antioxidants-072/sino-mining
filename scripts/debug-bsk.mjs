#!/usr/bin/env node
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as XLSX from 'xlsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SOURCE_DIR = path.resolve(__dirname, '..', 'lib', 'content', 'source')

const files = process.argv.slice(2)
const targets = files.length
  ? files
  : (await fs.readdir(SOURCE_DIR)).filter(f => /\.(xls|xlsx)$/i.test(f)).sort()

for (const f of targets) {
  const buf = await fs.readFile(path.join(SOURCE_DIR, f))
  const wb = XLSX.read(buf, { type: 'buffer' })
  const ws = wb.Sheets[wb.SheetNames[0]]
  const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })

  // For each section label row, check if col 1 has body content
  const sections = ['Product Introduction', 'Performance Features', 'Working Principle']
  console.log(f)
  for (const s of sections) {
    const idx = aoa.findIndex(r => String(r[0] ?? '').trim() === s)
    const col1 = idx >= 0 ? String(aoa[idx]?.[1] ?? '').trim() : ''
    const nextCol1 = idx >= 0 ? String(aoa[idx+1]?.[1] ?? '').trim() : ''
    const nextCol0 = idx >= 0 ? String(aoa[idx+1]?.[0] ?? '').trim() : ''
    console.log('  ' + s + ' row=' + idx + ' col1=' + (col1 ? '"' + col1.slice(0, 30) + '"' : 'EMPTY') + ' nextCol0="' + nextCol0 + '" nextCol1=' + (nextCol1 ? '"' + nextCol1.slice(0, 30) + '"' : 'EMPTY'))
  }
}