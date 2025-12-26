'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import Link from 'next/link'
import { socialLinks } from '@/data/profile'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    email: Mail,
  }

  return (
    <footer className="py-8 px-4 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-muted flex items-center gap-1"
          >
            © {currentYear} Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Kartik Singh
          </motion.p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {Object.entries(socialLinks).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons]
              if (!Icon) return null
              
              const href = key === 'email' ? `mailto:${url}` : url
              
              return (
                <motion.a
                  key={key}
                  href={href}
                  target={key === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg glass border border-border hover:border-accent/50 hover:text-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
