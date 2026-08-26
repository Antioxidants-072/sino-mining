import type { Lang, SiteContent } from './types'
import { zh } from './zh'
import { en } from './en'

export type {
  Lang,
  SiteContent,
  PressRelease,
  NavLink,
  Product,
  ProductCategory,
  ProductDetail,
  ProductSpecTable,
  ArticleFact,
  ArticleSection,
  ArticlePageContent,
  ContactOffice,
  ContactPageContent,
} from './types'

const content: Record<Lang, SiteContent> = { zh, en }

export function getContent(lang: Lang): SiteContent {
  return content[lang]
}

/**
 * Builds a link for the given language. Chinese is served with no prefix,
 * English is served entirely under the /en prefix.
 */
export function localizedHref(lang: Lang, path: string): string {
  if (path === '#') return path
  if (lang === 'zh') return path
  if (path === '/') return '/en'
  return `/en${path}`
}
