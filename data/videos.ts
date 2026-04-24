export interface Video {
  id: string
  title: string
  description: string
  youtubeId: string
  category: 'all-hands' | 'presentation' | 'training'
  date: string
  presenter: string
}

export const videos: Video[] = [
  {
    id: 'how-we-turned-wabi-around',
    title: 'How We Turned Wabi Around',
    description: 'Max covers trial reels, client management & communication, team building, and creator management — breaking down the full story of turning Wabi around.',
    youtubeId: '6ut9i6GTK50',
    category: 'presentation',
    date: '2025-01-01',
    presenter: 'Mullet Max',
  },
  {
    id: 'carousels-copy-and-growth',
    title: 'Carousels, Copy, & Growth',
    description: 'Cristina covers how the Creator Camp account grew, the role of carousels as a growth lever, and how great copywriting amplifies reach and engagement.',
    youtubeId: 'ABAPsq8XGug',
    category: 'presentation',
    date: '2025-01-01',
    presenter: 'Cristina Colina',
  },
]

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'all-hands', label: 'All Hands' },
  { id: 'presentation', label: 'Presentations' },
  { id: 'training', label: 'Training' },
] as const
