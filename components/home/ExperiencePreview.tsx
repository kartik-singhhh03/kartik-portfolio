'use client'

import { motion } from 'framer-motion'
import { Calendar, Briefcase, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { experience } from '@/data/experience'

const PREVIEW_COUNT = 2

export default function ExperiencePreview() {
  const previewExperience = experience.filter(e => e.type === 'work').slice(0, PREVIEW_COUNT)

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
        {/* Section Container with Background */}
        <div className="rounded-2xl bg-card border border-border p-8 md:p-12" style={{ boxShadow: '0 8px 30px var(--shadow-color)' }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Experience
            </h2>
            <p className="text-muted text-sm">
              My professional journey and career highlights.
            </p>
          </motion.div>

          {/* Experience Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {previewExperience.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.01, transition: { duration: 0.3, type: 'spring', stiffness: 300 } }}
                className="card-item p-5 hover-pop"
              >
                <div className="flex items-start gap-4">
                  {/* Company Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-accent">{exp.company}</p>
                      </div>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-muted line-clamp-2">
                      {exp.description}
                    </p>
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
            <Link href="/experience">
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
