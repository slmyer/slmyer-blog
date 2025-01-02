import { getRecentPosts } from '@/src/app/blog/utils'
import { ArticleCard } from './ArticleCard'

export default async function RecentPosts() {
  const posts = await getRecentPosts()

  if (!posts.length) {
    return
  }

  return (
    <section className="container mx-auto px-4 py-12 sm:px-0">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">近期文章</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  )
}
