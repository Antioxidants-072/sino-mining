#!/usr/bin/env node
/**
 * Dumps the structure of one or more xls files so we can understand
 * the real layout before writing the importer.
 *
 *   node scripts/inspect-xls.mjs BSK浮选机单页设计-NXZ.xls
 *   node scripts/inspect-xls.mjs            # all files in lib/content/source
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as XLSX from 'xlsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SOURCE_DIR = path.resolve(__dirname, '..', 'lib', 'content', 'source')

const argFiles = process.argv.slice(2).map((f) => f.trim()).filter(Boolean)

async function dump(filePath) {
  const buf = await fs.readFile(filePath)
  const wb = XLSX.read(buf, { type: 'buffer' })
  console.log(`\n=== ${path.basename(filePath)} ===`)
  for (const sheetName of wb.SheetNames) {
    const ws = wb.Sheets[sheetName]
    const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })
    console.log(`  sheet: ${sheetName}  rows=${aoa.length}  cols=${Math.max(0, ...aoa.map((r) => r.length))}`)
    for (let i = 0; i < aoa.length; i++) {
      const row = aoa[i]
      const truncated = row.map((c) => {
        const s = String(c ?? '').replace(/\n/g, '\\n')
        return s.length > 80 ? s.slice(0, 77) + '...' : s
      })
      console.log(`    [${i}] ${JSON.stringify(truncated)}`)
    }
  }
}

async function main() {
  let targets
  if (argFiles.length > 0) {
    targets = argFiles.map((f) => path.join(SOURCE_DIR, f))
  } else {
    const all = await fs.readdir(SOURCE_DIR)
    targets = all
      .filter((f) => /\.(xls|xlsx)$/i.test(f))
      .sort()
      .map((f) => path.join(SOURCE_DIR, f))
  }
  for (const t of targets) {
    try {
      await dump(t)
    } catch (err) {
      console.error(`! ${path.basename(t)}: ${err.message}`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})