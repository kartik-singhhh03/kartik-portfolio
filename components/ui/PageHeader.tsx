'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  description: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12 pt-24"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
        {title}
      </h1>
      <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  )
}
