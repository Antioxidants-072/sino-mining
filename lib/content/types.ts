export type Lang = 'zh' | 'en'

export type PressRelease = {
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  image?: string
}

export type NavLink = {
  label: string
  href: string
}

export type ProductCategory = {
  id: string
  label: string
}

export type ProductSpecTable = {
  caption: string
  headers: string[]
  rows: string[][]
}

export type ProductDetail = {
  modelSeries: string
  heroImage: string
  heroAlt: string
  applicationLabel: string
  applicationRange: string
  advantagesLabel: string
  advantages: string[]
  featuresLabel: string
  features: string[]
  workingPrincipleLabel: string
  workingPrinciple: string
  specTable: ProductSpecTable
  contactCta: string
  backToProducts: string
}

export type Product = {
  slug: string
  categoryId: string
  name: string
  spec: string
  description: string
  image: string
  detail?: ProductDetail
}

export type ArticleFact = {
  label: string
  value: string
}

export type ArticleSection = {
  heading?: string
  body?: string
  list?: string[]
  image?: string
  imageAlt?: string
}

export type ArticlePageContent = {
  slug: string
  kind: 'about' | 'press-release'
  category?: string
  date?: string
  title: string
  subtitle?: string
  heroImage: string
  heroAlt: string
  facts?: ArticleFact[]
  sections: ArticleSection[]
  backLabel: string
  backHref: string
  contactCta?: string
}

export type ContactOffice = {
  region: string
  address: string
  phone: string
  landline?: string
  fax?: string
  email: string
}

export type ContactPageContent = {
  heading: string
  subtitle: string
  heroImage: string
  heroAlt: string
  hotlineLabel: string
  hotline: string
  formHeading: string
  formNameLabel: string
  formCompanyLabel: string
  formEmailLabel: string
  formPhoneLabel: string
  formMessageLabel: string
  formMessagePlaceholder: string
  formSubmitLabel: string
  officesHeading: string
  offices: ContactOffice[]
}

export type SiteContent = {
  brandName: string
  header: {
    utilityLinks: NavLink[]
    productLinks: NavLink[]
    contactSales: string
    searchLabel: string
    searchPlaceholder: string
    searchNoResults: string
    searchSectionProducts: string
    searchSectionNews: string
    searchSeeAll: string
    searchAllProductsLabel: string
    searchAllNewsLabel: string
    langLabel: string
    langSwitchLabel: string
  }
  footer: {
    description: string
    columns: { title: string; links: string[] }[]
    copyright: string
    privacy: string
    terms: string
  }
  hero: {
    slides: {
      titleLines: string[]
      subtitle: string
      cta: string
      image: string
      imageAlt: string
    }[]
  }
  aboutTeaser: {
    eyebrow: string
    title: string
    body: string
    stats: ArticleFact[]
    image: string
    imageAlt: string
    cta: string
  }
  businessGrid: {
    heading: string
    items: {
      title: string
      description: string
      image: string
      alt: string
      cta: string
    }[]
  }
  latestReleases: {
    heading: string
    allLink: string
  }
  contactCTA: {
    heading: string
    description: string
    cta: string
  }
  breadcrumb: {
    home: string
    mining: string
    crushing: string
    newsroom: string
    allProducts: string
  }
  productsPage: {
    heading: string
    subtitle: string
    allLabel: string
    viewDetails: string
    resultsLabelTemplate: string
    categories: ProductCategory[]
    products: Product[]
  }
  mining: {
    tabs: string[]
    heroTitle: string
    heroSubtitle: string
    heroAlt: string
    lastUpdated: string
    miningEquipment: {
      title: string
      subtitle: string
      body: string
      contactExperts: string
      recommendedHeading: string
      viewDetails: string
      products: {
        slug: string
        categoryId: string
        name: string
        description: string
        image: string
      }[]
    }
    conveying: {
      title: string
      subtitle: string
      body: string
      contactExperts: string
      recommendedHeading: string
      viewDetails: string
      products: {
        slug: string
        categoryId: string
        name: string
        description: string
        image: string
      }[]
    }
  }
  newsroom: {
    heading: string
    subtitle: string
  }
  releases: PressRelease[]
  pressReleaseDetails: ArticlePageContent[]
  about: ArticlePageContent
  contactPage: ContactPageContent
}
