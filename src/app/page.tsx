import MainSection from '@/components/MainSection'
import RecentPosts from '@/components/RecentPosts'

export default function HomePage() {
  return (
    <div className="min-h-screen animate-fade-in-up bg-background delay-200">
      <main>
        <MainSection></MainSection>
        <RecentPosts></RecentPosts>
      </main>
    </div>
  )
}
