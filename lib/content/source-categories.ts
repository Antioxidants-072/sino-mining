import map from './source-category-map.json'
import type { Lang } from './types'

// Same order as the manufacturer's product navigation. Only the labels are translated.
const groups = [
  ['flotation','Flotation machines','Máquinas de flotación','Флотационные машины','Machines de flottation'],
  ['agitation','Agitation tanks','Tanques de agitación','Контактные чаны','Cuves d’agitation'],
  ['thickening','Thickening equipment','Equipos de espesamiento','Сгустительное оборудование','Équipements d’épaississement'],
  ['crushers','Crushing equipment','Equipos de trituración','Дробильное оборудование','Équipements de concassage'],
  ['screening','Screening equipment','Equipos de cribado','Грохотильное оборудование','Équipements de criblage'],
  ['milling','Grinding equipment','Equipos de molienda','Измельчительное оборудование','Équipements de broyage'],
  ['classification','Classification equipment','Equipos de clasificación','Классифицирующее оборудование','Équipements de classification'],
  ['filtration','Filtration equipment','Equipos de filtración','Фильтровальное оборудование','Équipements de filtration'],
  ['conveying','Ore feeding equipment','Equipos de alimentación de mineral','Питатели руды','Équipements d’alimentation en minerai'],
  ['magnetic','Magnetic separation equipment','Equipos de separación magnética','Оборудование для магнитной сепарации','Équipements de séparation magnétique'],
  ['gravity','Gravity separation equipment','Equipos de separación gravimétrica','Оборудование для гравитационного обогащения','Équipements de séparation gravimétrique'],
  ['production','Complete production lines','Líneas de producción completas','Комплектные производственные линии','Lignes de production complètes'],
  ['auxiliary','Auxiliary equipment','Equipos auxiliares','Вспомогательное оборудование','Équipements auxiliaires'],
  ['mining','Mining equipment','Equipos de minería','Горное оборудование','Équipements miniers'],
  ['dosing','Reagent dosing equipment','Equipos de dosificación de reactivos','Оборудование для дозирования реагентов','Équipements de dosage des réactifs'],
  ['flotation-column','Flotation columns','Columnas de flotación','Флотационные колонны','Colonnes de flottation'],
]
export function catalogCategories(lang: Exclude<Lang,'zh'>) {
  const column = { en:1, es:2, ru:3, fr:4 }[lang]
  return groups.map(g => ({ id:g[0], label:g[column] }))
}
export const categoryBySlug: Readonly<Record<string,string>> = map
