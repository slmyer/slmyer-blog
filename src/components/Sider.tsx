import { IPost } from '@/app/blog/utils'
import dayjs from 'dayjs'
import Link from 'next/link'

export default function Sidebar({ posts }: { posts: IPost[] }) {
  const tagMap = new Map()

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      const count = tagMap.get(tag) || 0
      tagMap.set(tag, count + 1)
    })
  })

  const categories = [...tagMap].map(([tag, count]) => {
    return {
      tag,
      count,
      href: '/blog',
    }
  })

  const recentPosts = posts.sort((a, b) => +a.date - +b.date).slice(0, 3)

  return (
    <div className={`w-full space-y-8 md:w-64`}>
      {/* Categories Section */}
      <div className="rounded-lg bg-card p-6">
        <h2 className="text-md mb-4 font-medium text-primary">文章分类</h2>
        <nav className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.tag}
              href={category.href}
              className="group flex items-center justify-between py-1 text-sm text-text transition-colors duration-200 hover:text-[#7C3AED]"
            >
              <span>{category.tag}</span>
              <span className="group-hover:text-primay text-sub-text">({category.count})</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="rounded-lg bg-card p-6">
        <h2 className="text-md mb-4 font-medium text-primary">最近文章</h2>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <article key={post.title} className="space-y-1">
              <time className="text-xs text-sub-text">
                {dayjs(post.date).format('YYYY年MM月DD日')}
              </time>
              <h3>
                <Link
                  href={`/blog/${post.slug}`}
                  className="line-clamp-2 text-sm text-text transition-colors duration-200 hover:text-primary"
                >
                  {post.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
