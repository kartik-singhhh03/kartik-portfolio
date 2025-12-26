'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import SkillIcon from '@/components/ui/SkillIcon'
import { skills } from '@/data/skills'

export default function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen px-4 md:px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Skills"
          description="Key skills that define my professional identity."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="card p-5 group"
            >
              <div className="mb-4">
                <SkillIcon name={skill.icon} className="w-10 h-10 text-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-muted mb-3 line-clamp-2">
                {skill.description}
              </p>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < skill.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
