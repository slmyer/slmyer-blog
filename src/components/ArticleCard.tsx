import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import dayjs from 'dayjs'
import { ArrowRight } from 'lucide-react'
import type { IPost } from '@/app/blog/utils'

export function ArticleCard({ title, summary, date, slug }: IPost) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <Card className="border-none shadow-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
        <CardHeader>
          <CardTitle className="line-clamp-2 text-2xl group-hover:text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{summary}</p>
          <div className="flex items-center justify-between">
            <time className="text-muted-foreground text-sm">
              <time> {dayjs(date).format('YYYY年MM月DD日')}</time>
            </time>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
