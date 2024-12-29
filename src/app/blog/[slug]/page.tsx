import { notFound } from 'next/navigation'
import { getBlogPosts } from '@/app/blog/utils'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { remarkAlert } from 'remark-github-blockquote-alert'
import '@/styles/prism.css'
import { Calendar, Tag } from 'lucide-react'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeKatexNoTranslate from 'rehype-katex-notranslate'
import rehypeCitation from 'rehype-citation'

export async function generateStaticParams() {
  return getBlogPosts().map((v) => {
    return {
      slug: v.slug,
    }
  })
}

export default async function Blog(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath, remarkAlert],
        rehypePlugins: [
          [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'prepend',
              headingProperties: {
                className: ['content-header'],
              },
              content: () => {
                // 使用自定义 SVG 图标
                return {
                  type: 'element',
                  tagName: 'span',
                  properties: {
                    className: ['icon-wrapper'],
                    style: 'margin-left: 0.5rem;',
                  },
                  children: [
                    {
                      type: 'element',
                      tagName: 'svg',
                      properties: {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        stroke: 'currentColor',
                        'stroke-width': '2',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        className: ['lucide', 'lucide-link'], // 自定义 SVG 类名
                      },
                      children: [
                        {
                          type: 'element',
                          tagName: 'path',
                          properties: {
                            d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
                          },
                        },
                        {
                          type: 'element',
                          tagName: 'path',
                          properties: {
                            d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
                          },
                        },
                      ],
                    },
                  ],
                }
              },
            },
          ],
          rehypeKatex,
          rehypeKatexNoTranslate,
          rehypeCitation,
        ],
      },
    },
  })

  return (
    <section className="w-full animate-fade-in-up overflow-hidden px-4 delay-200 xl:px-0">
      <header className="flex flex-col items-center space-y-4 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
        <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-text sm:text-4xl sm:leading-10 md:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-1.5 text-sub-text">
          <Calendar className="h-4 w-4" />
          <time> {format(post.date, 'PPP', { locale: zhCN })}</time>
        </div>
        <div className="flex items-center gap-1 text-sub-text">
          <Tag className="h-4 w-4" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full px-1 py-0.5 text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article className="prose max-w-none pb-8 pt-10 dark:prose-dark">{content}</article>
    </section>
  )
}
