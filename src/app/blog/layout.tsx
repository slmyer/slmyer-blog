export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-6xl justify-center px-4 py-16 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
