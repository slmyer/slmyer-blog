'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Mail, Globe } from 'lucide-react'

const technologies = [
  {
    category: '前端开发',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Webpack'],
  },
  { category: '后端开发', items: ['Node.js', 'Docker', 'Nginx'] },
  { category: '开发工具', items: ['Git', 'VS Code', 'Vim', 'Postman', 'Chrome Extension'] },
]

const socialLinks = [
  { name: 'Email', url: 'mailto:15156272530@163.com', icon: Mail },
  { name: 'GitHub', url: 'https://github.com/slmyer', icon: Github },
  { name: 'Website', url: 'https://slmyer.cn', icon: Globe },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function About() {
  return (
    <div className="to-muted/30 min-h-screen bg-gradient-to-br from-background px-4 py-12 pt-24 md:px-0 md:py-48">
      <motion.main
        className="mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid gap-12 md:grid-cols-[300px,1fr] md:gap-20">
          {/* Left Column */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <Image
              src="/images/avatar.jpg"
              alt="Slmyer"
              width={300}
              height={300}
              className="mx-auto rounded-[50%] shadow-lg md:mx-0"
            />
            <div className="text-center md:text-left">
              <h1 className="mb-2 text-3xl font-bold">Slmyer</h1>
              <p className="text-muted-foreground">前端开发工程师</p>
            </div>
            <div className="flex justify-center space-x-4 md:justify-start">
              {socialLinks.slice(0, 4).map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div className="space-y-12" variants={itemVariants}>
            <section className="space-y-6">
              <p className="text-lg leading-relaxed">
                你好！我是一名前端开发者，热爱技术创新和开源项目。专注于构建高性能、可扩展的 Web
                应用。
              </p>
            </section>

            <section className="space-y-8">
              {technologies.map((tech) => (
                <div key={tech.category} className="space-y-3">
                  <h3 className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="bg-muted hover:bg-primary/10 inline-block rounded-full px-3 py-1 text-sm transition-colors duration-200 hover:text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </motion.div>
        </div>
      </motion.main>
    </div>
  )
}
