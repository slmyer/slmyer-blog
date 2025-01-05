import EmptyState from '@/components/Empty'

export default async function Blog() {
  return (
    <div className="flex flex-1 animate-fade-in flex-col gap-4 py-8 delay-[200ms] md:py-12">
      <EmptyState />
    </div>
  )
}
