import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CC Team Hub',
  description: 'Internal resource library for the Creator Camp team',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
