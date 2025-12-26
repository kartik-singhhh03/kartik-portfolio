'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Sun, Moon, Sparkles, Zap, FileText, Waves, Music, Monitor } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const themes = [
  { id: 'light', name: 'Light', icon: Sun },
  { id: 'dark', name: 'Dark', icon: Moon },
  { id: 'retro', name: 'Retro', icon: Sparkles },
  { id: 'cyberpunk', name: 'Cyberpunk', icon: Zap },
  { id: 'paper', name: 'Paper', icon: FileText },
  { id: 'aurora', name: 'Aurora', icon: Waves },
  { id: 'synthwave', name: 'Synthwave', icon: Music },
  { id: 'system', name: 'System', icon: Monitor },
] as const

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-card animate-pulse" />
    )
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-lg glass border border-border hover:border-accent/50 transition-colors"
        aria-label="Toggle theme"
      >
        <Palette className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute right-0 mt-2 w-48 py-2 rounded-xl glass border border-border shadow-xl z-50"
            >
              {themes.map((t) => {
                const Icon = t.icon
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id as any)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                      theme === t.id
                        ? 'bg-accent/10 text-accent'
                        : 'hover:bg-card-hover'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{t.name}</span>
                  </button>
                )
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
