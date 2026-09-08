import type { Lang, SiteContent } from './types'
import { zh } from './zh'
import { en } from './en'
import { es } from './es'
import { ru } from './ru'

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
  LanguageOption,
} from './types'

const content: Partial<Record<Lang, SiteContent>> = { zh, en, es, ru }

export function getContent(lang: Lang): SiteContent {
  // Fallback: if requested language is not yet registered (e.g. ru),
  // return the English content so the site still renders.
  return content[lang] ?? en
}

/**
 * Builds a link for the given language. Chinese is served with no prefix,
 * English/Spanish are served under their respective prefixes.
 */
export function localizedHref(lang: Lang, path: string): string {
  if (path === '#') return path
  if (lang === 'zh') return path
  if (path === '/') return `/${lang}`
  return `/${lang}${path}`
}
