'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import { experience } from '@/data/experience'

export default function ExperiencePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="min-h-screen px-4 md:px-8 pb-16">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Experience"
          description="Professional journey and career timeline."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="card p-6 group"
            >
              <div className="flex items-start gap-4">
                {/* Company Logo Circle */}
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-border">
                  <span className="text-lg font-bold text-accent">
                    {exp.company.charAt(0)}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted mt-1">
                        <span className="font-medium">{exp.company}</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full glass border border-border whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-muted mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-sm text-muted">
                    {exp.description}
                  </p>

                  {/* View Details Button */}
                  <button className="mt-4 text-sm text-accent hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
