import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ProductCatalog } from '@/components/product-catalog'
import { ContactCTA } from '@/components/contact-cta'
import { getContent } from '@/lib/content'

export const metadata: Metadata = {
  title: '全部产品 | AnHui Sinomining Machinery',
  description:
    '皖矿机械全部产品目录，涵盖破碎机、振动筛、浮选机、磨机、给料机与输送设备。',
}

export default function ProductsPage() {
  const { breadcrumb, productsPage } = getContent('zh')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="zh" altHref="/en/products" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="zh"
          items={[
            { label: breadcrumb.home, href: '/' },
            { label: breadcrumb.allProducts },
          ]}
        />

        <section className="mx-auto max-w-[1600px] px-6 pb-8 lg:px-10">
          <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            {productsPage.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {productsPage.subtitle}
          </p>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-10">
          <ProductCatalog
            lang="zh"
            categories={productsPage.categories}
            products={productsPage.products}
            allLabel={productsPage.allLabel}
            viewDetails={productsPage.viewDetails}
            resultsLabelTemplate={productsPage.resultsLabelTemplate}
          />
        </section>

        <ContactCTA lang="zh" />
      </main>
      <SiteFooter lang="zh" />
    </div>
  )
}
