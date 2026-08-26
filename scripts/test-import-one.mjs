#!/usr/bin/env node
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseProductFile } from './lib/import-parser.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SOURCE_DIR = path.join(ROOT, 'lib', 'content', 'source')

const target = process.argv[2] || 'BSK浮选机单页设计-NXZ.xls'
const record = await parseProductFile(path.join(SOURCE_DIR, target), SOURCE_DIR)
console.log(JSON.stringify(record, null, 2))