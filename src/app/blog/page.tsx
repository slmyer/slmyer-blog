import Card from '@/components/Card'
import { getBlogByCatalog } from './utils'
import EmptyState from '@/components/Empty'
import Sidebar from '@/components/Sider'

export default async function Blog() {
  const allBlogs = getBlogByCatalog('blog')

  return (
    <div className="flex flex-1 animate-fade-in flex-col gap-4 py-8 delay-[200ms] md:py-12">
      <h1 className="text-2xl">所有文章</h1>

      {allBlogs.length > 0 ? (
        <div className="flex">
          <div className="hidden w-1/4 md:block">
            <Sidebar posts={allBlogs}></Sidebar>
          </div>
          <div className="flex-1">
            <div className="grid gap-4 sm:gap-6">
              {allBlogs.map((blog) => (
                <Card key={blog.title} post={blog} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}
