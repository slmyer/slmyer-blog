import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import ParallaxSection from './ParallaxSection'
import Link from 'next/link'

export default function MainSection() {
  return (
    <div className="relative top-0 h-[80vh] overflow-hidden">
      <ParallaxSection className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-90" />
      </ParallaxSection>

      <div className="container relative flex h-full items-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            欢迎来到 Slmyer 的博客
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            分享前端开发技术与见解，记录学习之路。
          </p>
          <div className="mt-10">
            <Link href="/blog">
              <Button
                size="lg"
                variant="secondary"
                className="group text-white transition-all duration-300 hover:translate-y-[-2px] hover:bg-white/10"
              >
                查看所有文章
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-16 w-full bg-gradient-to-b from-transparent to-background" />
    </div>
  )
}
