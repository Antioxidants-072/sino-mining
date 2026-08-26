/**
 * Robust parser for "单页设计" Excel workbooks.
 *
 * Two major challenges:
 * 1. Section bodies (Performance Features / Working Principle) sit on the SAME
 *    row as the section label inside a wide merged cell (cols B-F).
 *    We scan ALL columns for non-empty values on the same row.
 *    For "Product Introduction" where the body spans the next row, we look
 *    ahead and consume that row too (unless it's a data row).
 * 2. Spec table headers span multiple rows due to merged cells.
 *    We read raw worksheet cell data to recover values buried in merged spans.
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import * as XLSX from 'xlsx'

export const SECTION_KEYS = [
  'Product Introduction',
  'Performance Features',
  'Working Principle',
  'Project Sites',
  'Component Configuration',
  'Technical Parameters',
]

export const CATEGORY_RULES = [
  { id: 'flotation-column', test: /\b(flotation\s*column|浮选柱)\b/i },
  { id: 'flotation', test: /\b(flotation|浮选)\b/i },
  { id: 'crushers', test: /\b(crusher|crushing|jaw|cone|impact|破碎|圆锥|颚式|反击)\b/i },
  { id: 'screens', test: /\b(screen|screening|vibrating|筛|振动筛)\b/i },
  { id: 'grinding', test: /\b(grinding|mill|ball\s*mill|rod\s*mill|磨|球磨|棒磨)\b/i },
  { id: 'magnetic', test: /\b(magnetic|separator|磁选)\b/i },
  { id: 'gravity', test: /\b(gravity|shaking|spiral|jig|chute|table|重选|摇床|螺旋|溜槽|跳汰)\b/i },
  { id: 'agitation', test: /\b(agit|impeller|tank|搅拌|搅拌槽|浸出)\b/i },
  { id: 'concentration', test: /\b(thickener|concentrator|concentration|浓缩)\b/i },
  { id: 'classification', test: /\b(classifier|hydrocyclone|screen\s*classifier|分级)\b/i },
  { id: 'filtration', test: /\b(filter|filtration|ceramic|压滤|过滤|陶瓷)\b/i },
  { id: 'feeding', test: /\b(feeder|feeding|给料|给矿)\b/i },
  { id: 'dosing', test: /\b(dosing|reagent|药剂|加药)\b/i },
  { id: 'production-line', test: /\b(production\s*line|生产线|成套|制砂|石料|选矿生产线)\b/i },
  { id: 'mining', test: /\b(mine|mining|kiln|car|cage|skip|sheave|pusher|stopper|天轮|矿车|罐笼|箕斗|回转|推车|阻车|烘干)\b/i },
]
export const DEFAULT_CATEGORY = 'auxiliary'

export function inferCategoryId(text) {
  for (const rule of CATEGORY_RULES) {
    if (rule.test.test(text)) return rule.id
  }
  return DEFAULT_CATEGORY
}

export function fileBaseSlug(fileName) {
  return fileName
    .replace(/\.(xls|xlsx)$/i, '')
    .replace(/\s*\([^)]*\)\s*/g, ' ')
    .replace(/-NXZ$/i, '')
    .replace(/-?单页设计$/i, '')
    .replace(/[【】]/g, '')
    .replace(/-+/g, '-')
    .trim()
}

export async function readSheet(filePath) {
  const buf = await fs.readFile(filePath)
  const wb = XLSX.read(buf, { type: 'buffer' })
  const ws = wb.Sheets[wb.SheetNames[0]]
  return { aoa: XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' }), ws }
}

function findHeaderValue(aoa, labelPrefix) {
  for (let r = 0; r < Math.min(aoa.length, 8); r++) {
    const row = aoa[r]
    const label = String(row[3] ?? '').trim()
    if (label.startsWith(labelPrefix)) {
      return String(row[4] ?? '').trim()
    }
  }
  return ''
}

function findSectionRow(aoa, label) {
  return aoa.findIndex((r) => String(r[0] ?? '').trim() === label)
}

/**
 * Section body: the label row has a wide merged cell in cols 1+ holding the body.
 * In these workbooks the body is always on the SAME row as the label (the row
 * itself is merged cols B..F to span across).
 */
function sectionParagraph(aoa, sectionRow) {
  if (sectionRow < 0) return ''
  const maxCol = Math.min(aoa[sectionRow]?.length ?? 0, 20)
  for (let c = 1; c < maxCol; c++) {
    const v = String(aoa[sectionRow][c] ?? '').trim()
    if (v) return v
  }
  return ''
}

function parseAdvantages(text) {
  if (!text) return []
  return text.split(/\r?\n/).map((l) => l.replace(/^\s*\d+\.\s*/, '').trim()).filter(Boolean)
}

/**
 * Technical Parameters block.
 *
 * Header rows are heavily merged; sheet_to_json only returns the top-left value
 * of each merged range. We read raw worksheet cell data to recover the actual
 * values buried at the bottom of merged spans.
 */
function parseSpecTable(ws, aoa, specStartRow) {
  if (specStartRow < 0) return null

  // --- Caption: first non-blank row after "Technical Parameters" label ---
  let captionRow = specStartRow + 1
  while (captionRow < aoa.length && aoa[captionRow].every((c) => !String(c).trim())) captionRow++
  const caption = captionRow < aoa.length ? String(aoa[captionRow][0] ?? '').trim() : ''

  // --- Header rows: all non-blank rows between caption and first data row ---
  const headerRows = []
  let dataStart = -1
  for (let r = captionRow + 1; r < aoa.length; r++) {
    const row = aoa[r]
    if (!row.some((c) => String(c).trim() !== '')) continue
    const col0 = String(row[0] ?? '').trim()
    // Data rows: first cell looks like a model number (e.g. "BS-K4", "CTN406")
    if (/^[A-Z][A-Z0-9\-\/\.\u4e00-\u9fff]{1,20}$/.test(col0)) {
      dataStart = r
      break
    }
    headerRows.push({ raw: row, r })
  }

  if (headerRows.length === 0 && dataStart < 0) return null

  // --- Build merged-cell value map from raw worksheet ---
  // Map "row,col" -> resolved value (forward-fill from bottom via merges)
  const colValue = {}
  if (ws['!merges']) {
    // Process merges bottom-up so child cells override parent values
    const merges = ws['!merges'].slice().reverse()
    for (const m of merges) {
      const sr = m.s?.r ?? 0, sc = m.s?.c ?? 0
      const er = m.e?.r ?? sr, ec = m.e?.c ?? sc
      // Read the anchor cell value (top-left of merged range)
      const anchorAddr = XLSX.utils.encode_cell({ r: sr, c: sc })
      const anchorVal = String(ws[anchorAddr]?.v ?? '').trim()
      // Propagate to all cells in this merged range
      for (let r2 = sr; r2 <= er; r2++) {
        for (let c2 = sc; c2 <= ec; c2++) {
          colValue[`${r2},${c2}`] = anchorVal
        }
      }
    }
  }

  function getCell(rowIdx, colIdx) {
    // Prefer: raw aoa value > merged-cell resolved value
    const raw = String(aoa[rowIdx]?.[colIdx] ?? '').trim()
    if (raw) return raw
    return colValue[`${rowIdx},${colIdx}`] ?? ''
  }

  // --- Determine max width across header rows ---
  const maxWidth = headerRows.reduce(
    (m, { raw }) => Math.max(m, raw.length),
    0
  )
  const colLimit = Math.min(maxWidth, 20)

  // --- Build merged header ---
  // Start with the FIRST header row (the topmost row of the table). The merged
  // cells in row 0 contain parent group labels (e.g. "Impeller", "Cell Dimension"),
  // and child labels in later rows fill in the empty slots.
  // Then forward-fill empty cells from subsequent rows.
  const firstIdx = 0
  const merged = Array.from({ length: colLimit }, (_, colIdx) =>
    getCell(headerRows[firstIdx]?.r ?? specStartRow, colIdx)
  )
  // Forward-fill from the row below
  for (let r = firstIdx + 1; r < headerRows.length; r++) {
    for (let c = 0; c < colLimit; c++) {
      if (!merged[c]) merged[c] = getCell(headerRows[r]?.r ?? specStartRow, c)
    }
  }

  // --- Detect units row: a row where ALL non-empty values are short (<=6 chars) ---
  let units = Array(colLimit).fill('')
  let unitsRowIdx = -1
  for (let r = 0; r < headerRows.length; r++) {
    const vals = Array.from({ length: colLimit }, (_, c) => getCell(headerRows[r]?.r ?? specStartRow, c))
    const nonEmpty = vals.filter((v) => v !== '')
    if (nonEmpty.length === 0) continue
    const allShort = nonEmpty.every((v) => v.length <= 6)
    if (allShort) {
      units = vals
      unitsRowIdx = r
      break
    }
  }

  // --- Build final header labels (append unit to header name) ---
  const finalHeaders = merged.slice(0, colLimit).map((h, i) => {
    const u = units[i] ?? ''
    // If header already contains unit info in parens, don't duplicate
    if (u && !h.includes('(') && h) return `${h} (${u})`
    return h
  })

  // --- Collect data rows ---
  const startIdx = dataStart >= 0 ? dataStart : captionRow + headerRows.length + 1
  const dataRows = aoa.slice(startIdx)
    .filter((r) => {
      const first = String(r[0] ?? '').trim()
      return first !== '' && /^[A-Z]/.test(first)
    })
    .map((r) => r.slice(0, colLimit).map((c) => String(c ?? '').trim()))

  return { caption, headers: finalHeaders, units, dataRows }
}

export function deriveImagePath(productName, baseSlug) {
  const safe = baseSlug.replace(/[^a-z0-9\u4e00-\u9fff]+/gi, '-').replace(/^-|-$/g, '')
  return safe ? `/images/products/${safe}.png` : `/images/products/default.png`
}

export async function parseProductFile(filePath, sourceDir) {
  const fileName = path.basename(filePath)
  const baseSlug = fileBaseSlug(fileName)
  const { aoa, ws } = await readSheet(filePath)

  const productName = findHeaderValue(aoa, 'Product Name')
  const applicationArea = findHeaderValue(aoa, 'Application Area')
  const advantagesText = findHeaderValue(aoa, 'Product Advantages')

  const introRow = findSectionRow(aoa, 'Product Introduction')
  const featuresRow = findSectionRow(aoa, 'Performance Features')
  const principleRow = findSectionRow(aoa, 'Working Principle')
  const specRow = findSectionRow(aoa, 'Technical Parameters')

  const introduction = sectionParagraph(aoa, introRow)
  const performanceFeatures = sectionParagraph(aoa, featuresRow)
  const workingPrinciple = sectionParagraph(aoa, principleRow)
  const advantages = parseAdvantages(advantagesText)

  const spec = specRow >= 0 ? parseSpecTable(ws, aoa, specRow) : null

  // Meta override via sidecar .meta.json
  let meta = null
  if (sourceDir) {
    try {
      const txt = await fs.readFile(path.join(sourceDir, `${baseSlug}.meta.json`), 'utf8')
      meta = JSON.parse(txt)
    } catch {}
  }

  const slug = meta?.slug ?? baseSlug
  const categoryId = meta?.categoryId ?? inferCategoryId(`${productName} ${baseSlug}`)
  const heroImage = meta?.image ?? deriveImagePath(productName, baseSlug)

  let specTable
  if (spec && (spec.headers.length > 0 || spec.dataRows.length > 0)) {
    specTable = { caption: spec.caption, headers: spec.headers, rows: spec.dataRows }
  }

  return {
    sourceFile: fileName,
    slug,
    name: productName,
    applicationArea,
    advantages,
    categoryId,
    introduction,
    performanceFeatures,
    workingPrinciple,
    spec,
    specTable,
    image: heroImage,
  }
}
