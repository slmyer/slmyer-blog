import MainSection from '@/src/components/MainSection'
import RecentPosts from '@/src/components/RecentPosts'

export default function HomePage() {
  return (
    <div className="min-h-screen animate-fade-in-up delay-200">
      <main>
        <MainSection></MainSection>
        <RecentPosts />
      </main>
    </div>
  )
}
