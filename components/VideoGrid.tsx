'use client'

import { useState } from 'react'
import { Video, CATEGORIES } from '@/data/videos'
import VideoCard from './VideoCard'

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? videos : videos.filter((v) => v.category === active)

  return (
    <div>
      {/* Category Filter */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150"
            style={
              active === cat.id
                ? { background: 'var(--accent)', color: '#000' }
                : {
                    background: 'var(--card)',
                    color: 'var(--muted)',
                    border: '1px solid var(--border)',
                  }
            }
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24" style={{ color: 'var(--muted)' }}>
          <p className="text-sm">No videos in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  )
}
