import Card from '@/components/Card'
import { getBlogByCatalog } from './utils'
import EmptyState from '@/components/Empty'

export default async function Blog() {
  const allBlogs = getBlogByCatalog('blog')

  return (
    <div className="container flex-1 animate-fade-in py-8 delay-[200ms] md:py-12">
      {allBlogs.length > 0 ? (
        <div className="grid gap-4 sm:gap-6">
          {allBlogs.map((blog) => (
            <Card key={blog.title} post={blog} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}
