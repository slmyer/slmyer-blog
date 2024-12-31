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
  title: 'slmyer博客',
  description: 'A minimalist personal blog with a touch of elegance',
  icons: '/images/slmyer.png',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" className={`${space.className} ${space.variable} ${fira.variable}`}>
      <body className={`bg-background transition-colors`}>
        <ThemeProvider>
          <div className="scrollbar-none mx-auto flex h-[100vh] min-h-screen flex-col overflow-y-scroll">
            <Header></Header>
            <main className="flex-1">{children}</main>
            <Footer></Footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
