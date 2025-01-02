import Image from 'next/image'
import { Github, Mail, Globe } from 'lucide-react'

const technologies = [
  {
    category: '前端开发',
    items: ['JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  { category: '后端开发', items: ['Next.js', 'Node.js', 'Docker', 'Nginx', 'Rust'] },
  { category: '构建工具', items: ['Webpack', 'Vite', 'Rollup'] },
]

const socialLinks = [
  { name: 'Email', url: 'mailto:15156272530@163.com', icon: Mail },
  { name: 'GitHub', url: 'https://github.com/slmyer', icon: Github },
  { name: 'Website', url: 'https://slmyer.cn', icon: Globe },
]

export default function About() {
  return (
    <div className="container mx-auto animate-fade-in px-4 py-12 pt-24 text-text delay-200 md:px-0 md:py-48">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-[300px,1fr] md:gap-20">
          {/* Left Column */}
          <div className="space-y-8">
            <Image
              src="/images/avatar.jpg"
              alt="Slmyer"
              width={300}
              height={300}
              className="mx-auto rounded-[50%] shadow-lg md:mx-0"
            />
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Slmyer</h1>
              <p className="text-sub-text">前端开发工程师</p>
            </div>
            <div className="flex justify-center space-x-4">
              {socialLinks.slice(0, 4).map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sub-text transition-colors duration-200 hover:text-foreground"
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="space-y-12">
            <section className="space-y-6">
              <p className="text-lg leading-relaxed">暂时想不到什么来介绍自己，等想到再补充吧。</p>
            </section>

            <section className="space-y-8">
              {technologies.map((tech) => (
                <div key={tech.category} className="space-y-3">
                  <h3 className="text-sm font-medium uppercase tracking-wide text-sub-text">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="hover:bg-primary/10 inline-flex rounded-full px-3 py-1 text-sm transition-colors duration-200 hover:text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
