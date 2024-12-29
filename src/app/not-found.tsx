import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <div className="flex animate-fade-in-up flex-col items-center space-y-6 text-center delay-200">
        <div className="bg-primary/10 rounded-full p-4">
          <FileQuestion className="h-12 w-12 text-primary" />
        </div>

        <div className="space-y-2 text-text">
          <h1 className="text-4xl font-bold">404</h1>
          <h2 className="text-md font-medium">页面不见了</h2>
          <p className="text-sub-text">大概是躲猫猫去了，要不要一起找找看？</p>
        </div>
      </div>
    </div>
  )
}
