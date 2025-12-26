'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'

const PREVIEW_COUNT = 3

export default function ProjectsPreview() {
  const previewProjects = projects.slice(0, PREVIEW_COUNT)

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
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Container */}
        <div className="rounded-2xl bg-card border border-border p-8 md:p-12" style={{ boxShadow: '0 8px 30px var(--shadow-color)' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Projects
          </h2>
          <p className="text-muted text-sm">
            Showcasing impactful projects and technical achievements.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {previewProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3, type: 'spring', stiffness: 300 } }}
              className="card-item overflow-hidden group hover-pop"
            >
              {/* Project Image */}
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent/30 group-hover:scale-125 transition-transform duration-500">
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
                <p className="text-xs text-muted mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-card border border-border"
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <Link href="/projects">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent-hover transition-all"
              style={{ boxShadow: '0 4px 14px var(--shadow-accent)' }}
            >
              <ChevronRight className="w-4 h-4" />
              <span>View All</span>
            </motion.div>
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
