import additions from './catalog-additions.json'
import { catalogCategories, categoryBySlug } from './source-categories'
import { sourceDetail, cardSpec } from './source-details'
import { jawCrusherDetail } from './jaw-crusher'
import type { Lang, SiteContent, Product } from './types'

type ForeignLang = Exclude<Lang, 'zh'>
const copy = {
  en: ['Classification', 'Auxiliary equipment', 'Reagent dosing', 'Grinding equipment', 'Product enquiry', 'Contact our engineers for model selection, dimensions and project-specific specifications.'],
  es: ['Clasificación', 'Equipos auxiliares', 'Dosificación de reactivos', 'Equipos de molienda', 'Consulta sobre el producto', 'Consulte a nuestros ingenieros para seleccionar el modelo y confirmar sus dimensiones y especificaciones.'],
  ru: ['Классификация', 'Вспомогательное оборудование', 'Дозирование реагентов', 'Измельчительное оборудование', 'Запрос об оборудовании', 'Свяжитесь с нашими инженерами для выбора модели и уточнения габаритов и технических характеристик.'],
  fr: ['Classification', 'Équipements auxiliaires', 'Dosage des réactifs', 'Équipements de broyage', 'Demande de renseignements', 'Contactez nos ingénieurs pour choisir le modèle et confirmer ses dimensions et ses caractéristiques techniques.'],
}

export function extendCatalog(site: SiteContent, lang: ForeignLang): SiteContent {
  const page = site.productsPage
  const [classification, auxiliary, dosing, milling] = copy[lang]
  const categories = [...page.categories.map(c => c.id === 'milling' ? { ...c, label: milling } : c),
    { id: 'classification', label: classification }, { id: 'auxiliary', label: auxiliary }, { id: 'dosing', label: dosing }]
  const products: Product[] = additions.map(({ id, slug, category, names }) => {
    const name = names[lang]
    const image = `/images/source-catalog/${slug}.webp`
    const label = categories.find(c => c.id === category)!.label
    const syncedDetail = slug === 'jaw-crusher' ? jawCrusherDetail(lang) : undefined
    const sections = sourceDetail(slug, lang)
    const summarySection = sections?.find(s => s.kind === 'application') ?? sections?.find(s => s.kind === 'advantages')
    const description = syncedDetail?.applicationRange ?? summarySection?.blocks.filter(b => typeof b === 'string').join(' ') ?? ''
    return { slug, name, categoryId: category, image, spec: cardSpec(id, lang), description, detail: {
      catalogOnly: true, modelSeries: label, heroImage: image, heroAlt: name, applicationLabel: '',
      applicationRange: '', advantagesLabel: '', advantages: [], featuresLabel: '', features: [],
      workingPrincipleLabel: '', workingPrinciple: '', contactCta: site.header.contactSales, backToProducts: site.breadcrumb.allProducts,
      ...(sections ? { sourceSections: sections, applicationRange: description } : {}),
      ...syncedDetail,
    } }
  })
  return { ...site, productsPage: { ...page, categories: catalogCategories(lang), products: [...page.products, ...products].map(p => ({ ...p, categoryId: categoryBySlug[p.slug] ?? p.categoryId })) } }
}
