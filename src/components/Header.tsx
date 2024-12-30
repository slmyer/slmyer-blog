import Link from 'next/link'
import Icon from './Icon'
import Nav from './Nav'

export function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 mx-auto w-full px-4 backdrop-blur sm:px-16 lg:px-24">
      <div className="container flex h-16 max-w-full items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center gap-1 text-text">
            <Icon width={20} height={20}></Icon>
            Slmyer
          </div>
        </Link>
        <Nav></Nav>
      </div>
    </header>
  )
}
