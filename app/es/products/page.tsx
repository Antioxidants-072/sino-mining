import type { Metadata } from 'next'
import { ProductCatalog } from '@/components/product-catalog'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactCTA } from '@/components/contact-cta'
import { getContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Productos | SINOMINING',
  description: 'Equipos de procesamiento mineral de alta calidad: celdas de flotacion, tanques de agitacion, concentradores y mas.',
}

export default function ProductsPage() {
  const { breadcrumb, productsPage } = getContent('es')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="es" altHref="/products" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="es"
          items={[
            { label: breadcrumb.home, href: '/' },
            { label: breadcrumb.allProducts },
          ]}
        />
        <ProductCatalog
          lang="es"
          categories={productsPage.categories}
          products={productsPage.products}
          allLabel={productsPage.allLabel}
          viewDetails={productsPage.viewDetails}
          resultsLabelTemplate={productsPage.resultsLabelTemplate}
        />
        <ContactCTA lang="es" />
      </main>
      <SiteFooter lang="es" />
    </div>
  )
}
