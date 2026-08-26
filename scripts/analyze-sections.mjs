#!/usr/bin/env node
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
]

const SECTION_COL_CONTENT = {}

async function main() {
  const files = (await fs.readdir(SOURCE_DIR)).filter((f) => /\.(xls|xlsx)$/i.test(f)).sort()
  const counts = {}
  for (const key of SECTION_KEYS) counts[key] = { hasContent: 0, empty: 0 }

  for (const file of files) {
    try {
      const buf = await fs.readFile(path.join(SOURCE_DIR, file))
      const wb = XLSX.read(buf, { type: 'buffer' })
      const ws = wb.Sheets[wb.SheetNames[0]]
      const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })

      for (const key of SECTION_KEYS) {
        const idx = aoa.findIndex((r) => String(r[0] ?? '').trim() === key)
        if (idx === -1) continue
        // Check col 1 for body content
        const body = String(aoa[idx]?.[1] ?? '').trim()
        if (body) counts[key].hasContent++
        else counts[key].empty++
      }
    } catch (e) { /* skip */ }
  }

  console.log('Section content analysis across', files.length, 'files:')
  for (const [key, c] of Object.entries(counts)) {
    console.log(`  ${key.padEnd(30)} hasContent=${c.hasContent}  empty=${c.empty}`)
  }
}

main().catch(console.error)