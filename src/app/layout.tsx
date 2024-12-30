import type { Metadata } from 'next'
import { Fira_Code, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/theme/ThemeContext'
import { Header } from '@/components/Header'

const space = Space_Grotesk({
  subsets: ['latin'], // 指定加载拉丁字符集
  weight: ['400', '700'], // 指定字体粗细
  variable: '--font-space',
})

const fira = Fira_Code({
  subsets: ['latin'], // 指定加载拉丁字符集
  weight: ['400'], // 指定字体粗细
  variable: '--font-fira',
})

export const metadata: Metadata = {
  title: 'Slmyer Blog',
  description: 'A minimalist personal blog with a touch of elegance',
  icons: '/images/slmyer.png',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${space.className} ${space.variable} ${fira.variable}`}>
      <body className={`bg-gray-50 transition-colors dark:bg-gray-900`}>
        <ThemeProvider>
          <div className="bg-grid-gray-900/[0.04] dark:bg-grid-gray-100/[0.03] fixed inset-0 -z-10" />
          <div className="mx-auto flex min-h-screen flex-col">
            <Header></Header>
            <main className="flex-1">{children}</main>
            <Footer></Footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
