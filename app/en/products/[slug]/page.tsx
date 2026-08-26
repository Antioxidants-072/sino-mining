import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { ProductDetail } from '@/components/product-detail'
import { ContactCTA } from '@/components/contact-cta'
import { getContent } from '@/lib/content'

export function generateStaticParams() {
  const { productsPage } = getContent('en')
  return productsPage.products
    .filter((product) => product.detail)
    .map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { productsPage } = getContent('en')
  const product = productsPage.products.find((item) => item.slug === slug)
  const detail = product?.detail

  if (!detail) return {}

  return {
    title: `${product!.name} | AnHui Sinomining Machinery`,
    description: detail.applicationRange,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { breadcrumb, productsPage } = getContent('en')
  const product = productsPage.products.find((item) => item.slug === slug)
  const detail = product?.detail

  if (!product || !detail) notFound()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="en" altHref={`/products/${slug}`} />
      <main className="flex-1">
        <BreadcrumbNav
          lang="en"
          items={[
            { label: breadcrumb.home, href: '/en' },
            { label: breadcrumb.allProducts, href: '/en/products' },
            { label: product.name },
          ]}
        />

        <ProductDetail lang="en" product={product} />

        <div className="mx-auto max-w-[1600px] px-6 pb-4 lg:px-10">
          <a
            href="/en/products"
            className="text-sm font-semibold text-accent hover:text-accent/80"
          >
            {`\u2190 ${detail.backToProducts}`}
          </a>
        </div>

        <div id="contact">
          <ContactCTA lang="en" />
        </div>
      </main>
      <SiteFooter lang="en" />
    </div>
  )
}
