import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export interface IPost {
  content: string
  slug: string
  date: string
  tags: string[]
  title: string
  summary: string
}

const MDXConfig = {
  dirPath: 'content',
}

export function getCatalogs() {
  const catalogs = fs.readdirSync(MDXConfig.dirPath)
  return catalogs
}

function getMDXFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')

  const { content, data } = matter(rawContent)

  return {
    content,
    ...data,
    slug: data.title,
  } as IPost
}

function getMDXData(catalogs: string[]) {
  return catalogs.reduce<IPost[]>((allFile, catalog) => {
    const files = getMDXFiles(path.join(MDXConfig.dirPath, catalog))
    const mdxFiles = files.map((file) => readMDXFile(path.join(MDXConfig.dirPath, catalog, file)))
    return allFile.concat(mdxFiles)
  }, [])
}

export function getBlogPosts() {
  const catalogs = getCatalogs()
  return getMDXData(catalogs)
}

export function getBlogByCatalog(type = 'blog') {
  const files = getMDXFiles(path.join(MDXConfig.dirPath, type))
  return files.map((file) => readMDXFile(path.join(MDXConfig.dirPath, type, file)))
}

export function getRecentPosts(limit = 5) {
  const allBlogs = getBlogByCatalog()

  return allBlogs.sort((a, b) => +a.date - +b.date).slice(0, limit)
}
