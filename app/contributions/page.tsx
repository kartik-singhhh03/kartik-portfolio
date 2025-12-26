'use client'

import { motion } from 'framer-motion'
import { GitMerge, ExternalLink, Layers } from 'lucide-react'
import { contributions } from '@/data/contributions'

export default function ContributionsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Container */}
        <div className="rounded-2xl bg-card border border-border p-8 md:p-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Contributions
            </h1>
            <p className="text-muted text-sm max-w-md mx-auto">
              My contributions to the open source community and projects I maintain.
            </p>
          </motion.div>

          {/* Contributions Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {contributions.map((contribution) => (
              <motion.a
                key={contribution.id}
                href={contribution.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all group"
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
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 text-xs rounded-md ${
                        contribution.type === 'PR'
                          ? 'bg-green-500/10 text-green-500'
                          : contribution.type === 'Issue'
                          ? 'bg-purple-500/10 text-purple-500'
                          : 'bg-blue-500/10 text-blue-500'
                      }`}
                    >
                      {contribution.type}
                    </span>
                    <span className="text-xs text-muted">
                      {contribution.contributions} PR{contribution.contributions > 1 ? 's' : ''}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-accent transition-colors" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
