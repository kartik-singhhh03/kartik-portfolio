'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'
import { projects } from '@/data/projects'

type FilterType = 'all' | 'personal' | 'professional'

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="min-h-screen px-4 md:px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Projects"
          description="Showcasing my impactful projects and technical achievements."
        />

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8">
          {['all', 'personal', 'professional'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as FilterType)}
              className={`px-6 py-2 text-sm rounded-lg transition-all ${
                filter === tab
                  ? 'bg-accent text-background'
                  : 'glass border border-border hover:border-accent/50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3, type: 'spring', stiffness: 300 } }}
              className="card-item group overflow-hidden hover-pop"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-accent/30 group-hover:scale-125 transition-transform duration-500">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md glass border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View ${project.title} on GitHub`}
                      aria-label={`View ${project.title} on GitHub`}
                      className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View ${project.title} live demo`}
                      aria-label={`View ${project.title} live demo`}
                      className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
