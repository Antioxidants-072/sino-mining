import structure from './synced/structure.json'
import images from './synced/images.json'
import en from './synced/en.json'
import es from './synced/es.json'
import ru from './synced/ru.json'
import fr from './synced/fr.json'
import type { Lang, ProductDetail } from './types'

type Foreign = Exclude<Lang, 'zh'>
const dictionaries: Record<Foreign, Record<string, string>> = { en, es, ru, fr }
const outlines: Record<string, { heading: number; kind: string; blocks: (number | string)[] }[]> = structure
const assets: Record<string, { src: string; width: number; height: number }> = images

export function sourceDetail(slug: string, lang: Foreign) {
  const text = dictionaries[lang]
  const sections: NonNullable<ProductDetail['sourceSections']> = (outlines[slug] ?? []).map(s => ({
    heading: text[s.heading], kind: s.kind,
    blocks: s.blocks.map(b => typeof b === 'number' ? text[b] : assets[b]),
  }))
  return sections.length ? sections : undefined
}
// Source model column only: exclude motor and gearbox models. Numerical specifications
// below are used where the original has a clear unit but no equipment series.
const specs: Record<number, string> = {
  9:'PE / PEX',10:'PC / PCH',11:'PF',12:'PYT-B / PYT-Z / PYT-D',13:'YA / 2YA / YAH / 2YAH',17:'ZD / 2ZD',18:'MBS',
  19:'4000 × 1400 – 8500 × 4800 mm',20:'0.96–120 t',21:'0.9–187 m³',22:'Φ2.2 × 7 – Φ3.8 × 13 m',23:'GZMG',24:'GZMY',25:'4000 × 1400 – 8500 × 4800 mm',
  26:'2FC',27:'2FG',28:'Φ125–500 mm',43:'Φ6000–100000 mm',44:'28–314 m²',45:'16–40 m',46:'GSZN',47:'SNZS',48:'XBNY',49:'GZN',52:'3–50 m²',54:'400 × 300 – 1400 × 2300 mm',55:'GZ',56:'600–2000 mm',91:'XS',93:'≤ 1 μm',
}
const captions: Record<number, string[]> = {
  19:['Drum size','Dimensiones del tambor','Размеры барабана','Dimensions du tambour'],
  20:['Maximum ball charge','Carga máxima de bolas','Максимальная загрузка шаров','Charge maximale de boulets'],
  21:['Effective volume','Volumen útil','Полезный объём','Volume utile'],
  25:['Drum size','Dimensiones del tambor','Размеры барабана','Dimensions du tambour'],
  43:['Inside diameter','Diámetro interior','Внутренний диаметр','Diamètre intérieur'],44:['Settling area','Superficie de sedimentación','Площадь осаждения','Surface de décantation'],45:['Tank diameter','Diámetro del tanque','Диаметр резервуара','Diamètre du bassin'],
  52:['Filter area','Superficie de filtración','Площадь фильтрации','Surface filtrante'],54:['Outlet size','Dimensiones de salida','Размеры выпускного отверстия','Dimensions de sortie'],56:['Disc diameter','Diámetro del disco','Диаметр диска','Diamètre du disque'],93:['Product fineness','Finura del producto','Тонкость помола','Finesse du produit'],
}
export function cardSpec(id: number, lang: Foreign) { const label = captions[id]?.[['en','es','ru','fr'].indexOf(lang)]; return label ? `${label}: ${specs[id]}` : specs[id] ?? '' }
