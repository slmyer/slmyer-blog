import Link from 'next/link'
import SwitchTheme from './SwitchTheme'

const navConfig = [
  {
    href: '/blog',
    title: '文章',
  },
  {
    href: '/about',
    title: '关于',
  },
]

const Nav = () => {
  return (
    <div className="flex items-center gap-6">
      {navConfig.map((nav) => {
        return (
          <Link
            key={nav.title}
            href={nav.href}
            className="text-muted-foreground text-sm font-semibold transition-colors hover:text-foreground"
          >
            {nav.title}
          </Link>
        )
      })}
      <SwitchTheme></SwitchTheme>
    </div>
  )
}

export default Nav
