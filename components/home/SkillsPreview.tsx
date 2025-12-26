'use client'

import { motion } from 'framer-motion'
import { Star, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { skills } from '@/data/skills'
import SkillIcon from '@/components/ui/SkillIcon'

const PREVIEW_COUNT = 6

export default function SkillsPreview() {
  const previewSkills = skills.slice(0, PREVIEW_COUNT)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
              Skills
            </h2>
            <p className="text-muted text-sm">
              Key skills that define my professional identity.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {previewSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, type: 'spring', stiffness: 300 } }}
                className="card-item p-5 hover-pop"
              >
                <div className="flex flex-col">
                  <div className="mb-3">
                    <SkillIcon name={skill.icon} className="w-10 h-10 text-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted mb-3 line-clamp-2">
                    {skill.description}
                  </p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < skill.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted/30'
                      }`}
                    />
                  ))}
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
          <Link href="/skills">
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
