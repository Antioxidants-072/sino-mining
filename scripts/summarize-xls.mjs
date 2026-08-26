#!/usr/bin/env node
/**
 * Summarize every xls file: extracts the Product Name / Application Area
 * and the section labels so we can see which files follow the standard layout.
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as XLSX from 'xlsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SOURCE_DIR = path.resolve(__dirname, '..', 'lib', 'content', 'source')

const SECTION_KEYS = [
  'Product Introduction',
  'Performance Features',
  'Working Principle',
  'Project Sites',
  'Component Configuration',
  'Technical Parameters',
]

async function summarize(filePath) {
  const buf = await fs.readFile(filePath)
  const wb = XLSX.read(buf, { type: 'buffer' })
  const ws = wb.Sheets[wb.SheetNames[0]]
  const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })

  let productName = ''
  let applicationArea = ''
  let productAdvantages = ''
  const sections = {}

  for (let r = 0; r < aoa.length; r++) {
    const row = aoa[r]
    // Header: column D (index 3) holds the label, column E (4) holds value
    if (r <= 6 && row[3] && row[4]) {
      const label = String(row[3]).trim()
      const value = String(row[4]).trim()
      if (label.startsWith('Product Name')) productName = value.replace(/\s+/g, ' ').slice(0, 60)
      if (label.startsWith('Application Area')) applicationArea = value.slice(0, 80)
      if (label.startsWith('Product Advantages')) productAdvantages = value.split('\n').length
    }
    // Section labels live in column A (index 0) starting from row 6 or so
    const label = String(row[0] ?? '').trim()
    if (SECTION_KEYS.includes(label)) {
      sections[label] = String(row[1] ?? '').length
    }
  }

  return { productName, applicationArea, productAdvantages, sections }
}

async function main() {
  const all = (await fs.readdir(SOURCE_DIR)).filter((f) => /\.(xls|xlsx)$/i.test(f)).sort()
  for (const f of all) {
    try {
      const s = await summarize(path.join(SOURCE_DIR, f))
      const present = Object.keys(s.sections).join(', ')
      console.log(`${f.padEnd(50)} | ${s.productName.padEnd(40)} | adv:${s.productAdvantages} | sec: ${present}`)
    } catch (err) {
      console.error(`! ${f}: ${err.message}`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})