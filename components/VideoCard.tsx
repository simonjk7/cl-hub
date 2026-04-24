import Link from 'next/link'
import Image from 'next/image'
import { Video } from '@/data/videos'

const CATEGORY_LABELS: Record<string, string> = {
  'all-hands': 'All Hands',
  presentation: 'Presentation',
  training: 'Training',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Link href={`/video/${video.id}`} className="group block">
      <div
        className="rounded-2xl overflow-hidden transition-colors duration-200"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLDivElement).style.background = 'var(--card-hover)'
          ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.12)'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLDivElement).style.background = 'var(--card)'
          ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
        }}
      >
        {/* Thumbnail */}
        <div className="relative w-full aspect-video bg-black overflow-hidden">
          <Image
            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Play icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
            >
              <svg
                className="w-5 h-5 ml-0.5"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(245,200,66,0.12)', color: 'var(--accent)' }}
            >
              {CATEGORY_LABELS[video.category] ?? video.category}
            </span>
          </div>
          <h3
            className="font-semibold text-sm leading-snug mb-2 line-clamp-2 transition-colors duration-200 group-hover:text-white"
            style={{ color: 'var(--text)' }}
          >
            {video.title}
          </h3>
          <p className="text-xs line-clamp-2 mb-3" style={{ color: 'var(--muted)' }}>
            {video.description}
          </p>
          <div className="flex items-center justify-between text-xs" style={{ color: 'var(--muted)' }}>
            <span>{video.presenter}</span>
            <span>{formatDate(video.date)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
