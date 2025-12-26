'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, GraduationCap, Users } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import { experience } from '@/data/experience'

export default function ExperiencePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase
      case 'education':
        return GraduationCap
      case 'freelance':
        return Users
      default:
        return Briefcase
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500'
      case 'education':
        return 'bg-green-500'
      case 'freelance':
        return 'bg-purple-500'
      default:
        return 'bg-accent'
    }
  }

  return (
    <div className="min-h-screen px-4 md:px-8 pb-16">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Experience"
          description="My professional journey, education, and career milestones."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          {experience.map((exp) => {
            const TypeIcon = getTypeIcon(exp.type)
            
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative flex gap-8 mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-8 w-4 h-4 rounded-full ${getTypeColor(exp.type)} transform -translate-x-1/2 mt-1 z-10 flex items-center justify-center`}>
                  <TypeIcon className="w-2.5 h-2.5 text-white" />
                </div>

                {/* Content */}
                <div className="ml-6 md:ml-16 flex-1">
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="card p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 text-xs rounded-md ${
                            exp.type === 'work'
                              ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                              : exp.type === 'education'
                              ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                              : 'bg-purple-500/10 text-purple-500 border border-purple-500/20'
                          }`}>
                            {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
