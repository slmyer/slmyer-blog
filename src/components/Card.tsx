import Link from 'next/link'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { IPost } from '@/app/blog/utils'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

export default function Card({ post }: { post: IPost }) {
  return (
    <article className="group relative overflow-hidden rounded-lg bg-card shadow-sm transition-all duration-300 ease-in-out hover:translate-y-1 hover:shadow-md">
      <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent" />
      <Link
        href={`/blog/${post.slug}`}
        className="relative block p-4 sm:flex sm:items-center sm:justify-between"
      >
        <div>
          <h2 className="text-2xl font-bold text-text transition-colors">{post.title}</h2>

          {post.summary && (
            <p className="text-md mt-2 line-clamp-2 leading-relaxed text-sub-text sm:line-clamp-1">
              {post.summary}
            </p>
          )}
          {/* 元信息区 */}
          <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-sub-text">
              <Calendar className="h-4 w-4" />
              <time> {format(post.date, 'PPP', { locale: zhCN })}</time>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-md inline-flex items-center rounded-full px-1 py-0.5 font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm font-medium text-primary">
            <span>阅读更多</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
      <div className="h-1 origin-left scale-x-0 transform bg-gradient-to-r from-[#c4b5fd] to-primary transition-transform duration-300 group-hover:scale-x-100"></div>
    </article>
  )
}
