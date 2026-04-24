import { videos } from '@/data/videos'
import VideoGrid from '@/components/VideoGrid'
import Header from '@/components/Header'

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Page heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--text)' }}>
            Resources
          </h1>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            All hands recordings, team presentations, and training videos.
          </p>
        </div>

        <VideoGrid videos={videos} />
      </main>
    </div>
  )
}
