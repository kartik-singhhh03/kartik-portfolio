export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string
  highlights: string[]
  type: 'work' | 'education' | 'freelance'
}

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Full Stack Developer',
    company: 'InternPe',
    location: 'Remote',
    period: 'Aug 2024 - Sep 2024',
    description: 'Working on building scalable web applications and leading frontend architecture decisions.',
    highlights: [
      'Led the migration of legacy codebase to React and TypeScript',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews',
    ],
    type: 'work',
  },
  {
    id: '2',
    title: 'Web Developer ',
    company: 'DSDL club KIET',
    location: 'Ghaziabad, India',
    period: 'Jun 2023 - present',
    description: 'Developed and maintained user interfaces for the company\'s main product.',
    highlights: [
      'Built reusable component library used across 5 projects',
      'Improved page load performance by 40%',
      'Collaborated with design team to implement pixel-perfect UIs',
    ],
    type: 'work',
  },
  {
    id: '3',
    title: 'Bachelor of Technology',
    company: 'KIET Group of Institutions',
    location: 'Ghaziabad, India',
    period: '2023 - 2027',
    description: 'Studied Computer Science and Engineering with focus on software development.',
    highlights: [
      'CGPA: 8.0/10',
      'Led technical team in college fest',
      'Won multiple hackathons',
    ],
    type: 'education',
  },
  {
    id: '4',
    title: 'Freelance Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Building custom solutions for clients ranging from small businesses to startups.',
    highlights: [
      'Delivered 15+ projects across various industries',
      'Maintained 100% client satisfaction rate',
      'Specialized in React and Node.js solutions',
    ],
    type: 'freelance',
  },
]
