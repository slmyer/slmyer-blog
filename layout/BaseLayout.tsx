export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto px-4 py-16 sm:px-8 lg:px-16">{children}</div>
}
