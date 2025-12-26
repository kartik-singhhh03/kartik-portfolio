export interface Contribution {
  id: string
  repo: string
  description: string
  url: string
  stars: number
  forks: number
  type: 'PR' | 'Issue' | 'Maintainer'
  contributions: number
}

export const contributions: Contribution[] = [
  {
    id: '1',
    repo: 'facebook/react',
    description: 'Fixed a bug in the React DevTools extension that caused incorrect component highlighting.',
    url: 'https://github.com/facebook/react',
    stars: 220000,
    forks: 45000,
    type: 'PR',
    contributions: 2,
  },
  {
    id: '2',
    repo: 'vercel/next.js',
    description: 'Improved documentation for App Router and added examples for common use cases.',
    url: 'https://github.com/vercel/next.js',
    stars: 120000,
    forks: 25000,
    type: 'PR',
    contributions: 5,
  },
  {
    id: '3',
    repo: 'tailwindlabs/tailwindcss',
    description: 'Reported and helped fix an issue with dark mode class detection.',
    url: 'https://github.com/tailwindlabs/tailwindcss',
    stars: 78000,
    forks: 4000,
    type: 'Issue',
    contributions: 1,
  },
  {
    id: '4',
    repo: 'shadcn/ui',
    description: 'Added new component variants and improved accessibility features.',
    url: 'https://github.com/shadcn/ui',
    stars: 55000,
    forks: 3000,
    type: 'PR',
    contributions: 3,
  },
  {
    id: '5',
    repo: 'microsoft/TypeScript',
    description: 'Contributed to type definitions and reported edge cases in type inference.',
    url: 'https://github.com/microsoft/TypeScript',
    stars: 95000,
    forks: 12000,
    type: 'Issue',
    contributions: 2,
  },
  {
    id: '6',
    repo: 'kartik-singhhh03/open-source-lib',
    description: 'Maintaining an open-source utility library for React developers.',
    url: 'https://github.com/kartik-singhhh03/open-source-lib',
    stars: 150,
    forks: 25,
    type: 'Maintainer',
    contributions: 50,
  },
]
