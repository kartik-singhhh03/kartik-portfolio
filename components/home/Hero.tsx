'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail, Code2 } from 'lucide-react'
import Image from 'next/image'
import { profile, socialLinks } from '@/data/profile'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Avatar with Profile Picture */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          className="mb-6"
        >
          <motion.div 
            className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full p-1 bg-accent pulse-accent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-card">
              <Image
                src="/profilepic.jpeg"
                alt={profile.name}
                width={176}
                height={176}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-muted mb-4">{profile.title}</p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm md:text-base text-muted max-w-xl mx-auto mb-8"
        >
          {profile.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-4 h-4" />
            GitHub
          </motion.a>
          <motion.a
            href={socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Code2 className="w-4 h-4" />
            LeetCode
          </motion.a>
          <motion.a
            href="/contact"
            className="btn-secondary flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{ boxShadow: '0 2px 10px var(--shadow-color)' }}
          >
            <Mail className="w-4 h-4" />
            Contact
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-muted"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
