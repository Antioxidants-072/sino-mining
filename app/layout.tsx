import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-cjk',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: '中能矿机 AnHui Sinomining Machinery | 矿山装备解决方案',
  description:
    '中能矿机（AnHui Sinomining Machinery），为矿山客户提供端到端的全流程装备解决方案。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${spaceGrotesk.variable} ${inter.variable} ${notoSansSC.variable} light bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
