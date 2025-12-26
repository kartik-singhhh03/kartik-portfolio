export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  github?: string
  live?: string
  image?: string
  category: 'personal' | 'professional'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'StripeViz',
    description: 'A full-stack SaaS dashboard for visualizing Stripe revenue metrics in real time, including subscriptions, churn, and failed payments. Implements secure authentication, Stripe OAuth/API access, and scalable data pipelines.',
    techStack: ['Next.js', 'TypeScript', 'Stripe API', 'OAuth', 'Tailwind CSS'],
    github: 'https://github.com/kartik-singhhh03/StripeViz',
    live: 'https://stripe-viz.vercel.app/',
    image: '/stripeViz.png',
    category: 'professional',
  },
  {
    id: '2',
    title: 'Bharat Bill Generator',
    description: 'A professional invoice generation tool for Indian businesses with GST support, customizable templates, and PDF export functionality.',
    techStack: ['React', 'TypeScript', 'PDF Generation', 'Tailwind CSS'],
    github: 'https://github.com/kartik-singhhh03/Bharat-Bill-Gen08',
    live: 'https://bharat-bill-generator.vercel.app/',
    image: '/invoicegen.png',
    category: 'professional',
  },
  {
    id: '3',
    title: 'Second Brain App',
    description: 'A beautiful Second Brain App built with the MERN stack (MongoDB, Express, React, Node.js). This app helps users capture, organize, and retrieve their YouTube videos, tweets, and links in one place — acting as a digital "second brain".',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/kartik-singhhh03/Second-Brain-app',
    live: 'https://second-brain-app-1r1r.vercel.app/',
    image: '/secondbrain.png',
    category: 'professional',
  },
  {
    id: '4',
    title: 'ClaimWise – Intelligent Claims Processing',
    description: '1st Place – NIT Delhi Hackathon. FastAPI + React pipeline processing 1000+ docs/hr with OCR & ML fraud scoring; LangGraph for agentic workflows (70% less manual work).',
    techStack: ['FastAPI', 'React', 'OCR', 'Machine Learning', 'LangGraph', 'Python'],
    github: 'https://github.com/kartik-singhhh03/ClaimWise',
    live: 'https://github.com/kartik-singhhh03/ClaimWise',
    image: '/claimwise.png',
    category: 'professional',
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'This very portfolio website built with Next.js, featuring multiple themes and smooth animations.',
    techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/kartik-singhhh03/portfolio',
    live: 'https://kartik-singh.dev',
    category: 'personal',
  },
]
