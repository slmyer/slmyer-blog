import Card from '@/src/components/Card'
import { getBlogByCatalog } from '@/src/app/blog/utils'
import EmptyState from '@/src/components/Empty'
import Sidebar from '@/src/components/Sider'

export default async function Blog(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params

  const allBlogs = getBlogByCatalog('blog')

  const catalogBlogs = allBlogs.filter((post) => post.tags.includes(slug))

  return (
    <div className="flex flex-1 animate-fade-in flex-col gap-4 py-8 delay-[200ms] md:py-12">
      <h1 className="text-2xl">{slug}</h1>

      {allBlogs.length > 0 ? (
        <div className="flex">
          <div className="hidden w-1/4 md:block">
            <Sidebar posts={allBlogs}></Sidebar>
          </div>
          <div className="flex-1">
            <div className="grid gap-4 sm:gap-6">
              {catalogBlogs.map((blog) => (
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
