import { notFound } from 'next/navigation'
import Link from 'next/link'
import { videos } from '@/data/videos'
import Header from '@/components/Header'

const CATEGORY_LABELS: Record<string, string> = {
  'all-hands': 'All Hands',
  presentation: 'Presentation',
  training: 'Training',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function generateStaticParams() {
  return videos.map((v) => ({ id: v.id }))
}

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const video = videos.find((v) => v.id === id)
  if (!video) notFound()

  const related = videos.filter((v) => v.id !== video.id && v.category === video.category).slice(0, 3)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Back */}
        <Link
          href="/"
          className="back-link inline-flex items-center gap-1.5 text-sm mb-8 transition-colors"
          style={{ color: 'var(--muted)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all videos
        </Link>

        {/* Video embed */}
        <div
          className="w-full aspect-video rounded-2xl overflow-hidden mb-8"
          style={{ border: '1px solid var(--border)' }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Meta */}
        <div className="mb-6">
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full mb-3 inline-block"
            style={{ background: 'rgba(245,200,66,0.12)', color: 'var(--accent)' }}
          >
            {CATEGORY_LABELS[video.category] ?? video.category}
          </span>
          <h1 className="text-2xl font-bold tracking-tight mb-3" style={{ color: 'var(--text)' }}>
            {video.title}
          </h1>
          <div className="flex items-center gap-4 text-sm mb-4" style={{ color: 'var(--muted)' }}>
            <span>{video.presenter}</span>
            <span>·</span>
            <span>{formatDate(video.date)}</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#999' }}>
            {video.description}
          </p>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <h2 className="text-sm font-semibold mb-5 uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
              More in {CATEGORY_LABELS[video.category]}
            </h2>
            <div className="space-y-3">
              {related.map((v) => (
                <Link
                  key={v.id}
                  href={`/video/${v.id}`}
                  className="related-item flex items-center gap-4 p-3 rounded-xl"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                    alt={v.title}
                    className="w-24 h-14 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: 'var(--text)' }}>
                      {v.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                      {v.presenter} · {formatDate(v.date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
