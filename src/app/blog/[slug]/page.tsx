import '@/styles/prism.css'
import { notFound } from 'next/navigation'
import dayjs from 'dayjs'
import { Calendar, Tag } from 'lucide-react'
import { getBlogPosts } from '@/app/blog/utils'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkMdx from 'remark-mdx'
import remarkMath from 'remark-math'
import { remarkAlert } from 'remark-github-blockquote-alert'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeKatexNoTranslate from 'rehype-katex-notranslate'
import rehypeCitation from 'rehype-citation'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import CodeBlockWrap from '@/components/CodeBlock'
import { visit } from 'unist-util-visit'
import Mermaid from '@/components/Mermaid'

export async function generateStaticParams() {
  return getBlogPosts().map((v) => {
    return {
      slug: v.slug,
    }
  })
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = getBlogPosts().find((post) => encodeURIComponent(post.slug) === slug)

  if (!post) {
    return
  }

  return {
    title: post.title,
    description: post.summary,
  }
}

export default async function Blog(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params

  const post = getBlogPosts().find((post) => encodeURIComponent(post.slug) === slug)

  if (!post) {
    notFound()
  }

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath, remarkAlert, remarkMdx],
        rehypePlugins: [
          () => (tree) => {
            visit(tree, (node) => {
              if (node?.type === 'element' && node?.tagName === 'pre') {
                const [codeEl] = node.children

                if (codeEl.tagName !== 'code') return

                node.raw = codeEl.children?.[0].value
              }
            })
          },
          [rehypePrismPlus, { defaultLanguage: 'javascript', ignoreMissing: true }],
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'append',
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
          () => (tree) => {
            visit(tree, 'element', (node) => {
              if (node?.type === 'element' && node?.tagName === 'pre') {
                node.properties['raw'] = node.raw
              }
            })
          },
          rehypeMdxCodeProps, // 放置最后，这一步已经生成了 HTML 无法再通过 visit 访问
        ],
        format: 'mdx',
        remarkRehypeOptions: {
          footnoteLabel: '参考',
        },
      },
    },
    components: {
      pre: (props) => {
        if (props.className === 'language-mermaid') {
          return <Mermaid chart={props.raw} {...props}></Mermaid>
        }

        return <CodeBlockWrap {...props}></CodeBlockWrap>
      },
      Mermaid,
    },
  })

  return (
    <section className="w-full animate-fade-in-up overflow-hidden px-4 pt-8 delay-200 md:pt-16 xl:px-0">
      <header className="flex flex-col items-center space-y-4 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
        <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-text sm:text-4xl sm:leading-10 md:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-1.5 text-sub-text">
          <Calendar className="h-4 w-4" />
          <time> {dayjs(post.date).format('YYYY年MM月DD日')}</time>
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

      <article className="prose max-w-none pt-8 dark:prose-dark">{content}</article>
    </section>
  )
}
