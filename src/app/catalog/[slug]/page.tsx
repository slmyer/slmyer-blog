import Card from '@/components/Card'
import { getBlogByCatalog, getBlogPosts } from '@/app/blog/utils'
import EmptyState from '@/components/Empty'
import Sidebar from '@/components/Sider'
import BaseLayout from '@/layout/BaseLayout'

export async function generateStaticParams() {
  const tags = (await getBlogPosts()).reduce<string[]>((a, c) => {
    return a.concat(c.tags)
  }, [])

  return Array.from(new Set([...tags])).map((t) => {
    return {
      slug: t,
    }
  })
}

export default async function Blog(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params

  const allBlogs = getBlogByCatalog('blog')

  const catalogBlogs = allBlogs.filter((post) => post.tags.includes(decodeURIComponent(slug)))

  return (
    <BaseLayout>
      <div className="flex flex-1 animate-fade-in flex-col gap-4 py-8 delay-[200ms] md:py-12">
        <h1 className="text-2xl">{decodeURIComponent(slug)}</h1>

        {allBlogs.length > 0 ? (
          <div className="flex">
            <div className="hidden w-1/4 md:block">
              <Sidebar posts={allBlogs} catalog={decodeURIComponent(slug)}></Sidebar>
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
    </BaseLayout>
  )
}
