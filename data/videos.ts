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
    id: 'example-1',
    title: 'Q1 2025 All Hands',
    description: 'Quarterly all-hands covering team updates, goals, and company direction for Q1 2025.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'all-hands',
    date: '2025-01-15',
    presenter: 'Leadership Team',
  },
  {
    id: 'example-2',
    title: 'Content Strategy Deep Dive',
    description: 'A walkthrough of our content strategy framework and how to apply it to client projects.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'presentation',
    date: '2025-02-10',
    presenter: 'Simon',
  },
  {
    id: 'example-3',
    title: 'Onboarding: How We Work',
    description: 'An overview of CC team workflows, tools, and communication norms for new team members.',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'training',
    date: '2025-03-01',
    presenter: 'Simon',
  },
]

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'all-hands', label: 'All Hands' },
  { id: 'presentation', label: 'Presentations' },
  { id: 'training', label: 'Training' },
] as const
