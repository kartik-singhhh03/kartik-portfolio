'use client'

import { motion } from 'framer-motion'
import { GitMerge, ExternalLink, ChevronRight, Layers } from 'lucide-react'
import Link from 'next/link'
import { contributions } from '@/data/contributions'

const PREVIEW_COUNT = 3

export default function ContributionsPreview() {
  const previewContributions = contributions.slice(0, PREVIEW_COUNT)

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
              Contributions
            </h2>
            <p className="text-muted text-sm">
              Open-source contributions and community involvement.
            </p>
          </motion.div>

          {/* Contributions Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {previewContributions.map((contribution) => (
              <motion.a
                key={contribution.id}
                href={contribution.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, type: 'spring', stiffness: 300 } }}
                className="card-item p-5 group hover-pop"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-muted" />
                    <span className="text-sm font-medium text-foreground">
                      {contribution.repo.split('/')[1]}
                    </span>
                  </div>
                  <GitMerge className="w-4 h-4 text-muted" />
                </div>

                <p className="text-xs text-muted mb-4 line-clamp-2">
                  {contribution.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{contribution.repo.split('/')[0]}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-accent transition-colors" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <Link href="/contributions">
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
