#!/usr/bin/env node
/**
 * Dump the Technical Parameters block of each file in detail,
 * since header rows vary a lot between products.
 */
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as XLSX from 'xlsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SOURCE_DIR = path.resolve(__dirname, '..', 'lib', 'content', 'source')

async function dumpSpec(filePath) {
  const buf = await fs.readFile(filePath)
  const wb = XLSX.read(buf, { type: 'buffer' })
  const ws = wb.Sheets[wb.SheetNames[0]]
  const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })

  const start = aoa.findIndex((r) => String(r[0] ?? '').trim() === 'Technical Parameters')
  if (start === -1) return

  console.log(`\n--- ${path.basename(filePath)} (spec from row ${start}) ---`)
  for (let i = start; i < Math.min(aoa.length, start + 12); i++) {
    const row = aoa[i]
    const truncated = row.map((c) => {
      const s = String(c ?? '').replace(/\n/g, '\\n')
      return s.length > 30 ? s.slice(0, 27) + '...' : s
    })
    console.log(`  [${i}] ${JSON.stringify(truncated)}`)
  }
}

async function main() {
  const all = (await fs.readdir(SOURCE_DIR)).filter((f) => /\.(xls|xlsx)$/i.test(f)).sort()
  for (const f of all) {
    try { await dumpSpec(path.join(SOURCE_DIR, f)) } catch (e) { console.error(f, e.message) }
  }
}

main().catch((e) => { console.error(e); process.exit(1) })