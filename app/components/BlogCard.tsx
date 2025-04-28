import Link from 'next/link'
import { CalendarIcon } from 'lucide-react'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
}

export default function BlogCard({ title, excerpt, date, readTime, slug }: BlogCardProps) {
  return (
    <div className="p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-gray-800 hover:border-gray-700 transition-all">
      <Link href={`/community/${slug}`}>
        <article className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <CalendarIcon className="w-4 h-4" />
            <span>{date}</span>
            <span>•</span>
            <span>{readTime} read</span>
          </div>
          <h2 className="text-xl font-semibold text-white hover:text-gray-300 transition-colors">
            {title}
          </h2>
          <p className="text-gray-400 line-clamp-3">
            {excerpt}
          </p>
          <div className="pt-2">
            <span className="text-blue-400 hover:text-blue-300 transition-colors">
              Read more →
            </span>
          </div>
        </article>
      </Link>
    </div>
  )
} 