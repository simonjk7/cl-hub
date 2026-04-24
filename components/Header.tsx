'use client'

import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/logout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  return (
    <header
      className="sticky top-0 z-10 px-6 py-4 flex items-center justify-between"
      style={{
        background: 'rgba(10,10,10,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-black"
          style={{ background: 'var(--accent)' }}
        >
          CC
        </div>
        <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
          Team Hub
        </span>
      </div>

      <button
        onClick={handleLogout}
        className="text-xs px-3 py-1.5 rounded-lg transition-colors"
        style={{ color: 'var(--muted)', background: 'var(--card)', border: '1px solid var(--border)' }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text)'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--muted)'
        }}
      >
        Sign out
      </button>
    </header>
  )
}
