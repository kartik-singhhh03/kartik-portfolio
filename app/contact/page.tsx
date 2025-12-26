'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin, Twitter, User, AtSign, MessageSquare, Code2, Briefcase, Star } from 'lucide-react'
import { profile, socialLinks } from '@/data/profile'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    alert('Message sent successfully!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    leetcode: Code2,
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
              Get In Touch
            </h1>
            <p className="text-muted text-sm max-w-md mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Info Card */}
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm">{socialLinks.email}</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-muted">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm">{profile.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Card */}
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me
                </h3>
                
                <div className="flex gap-3">
                  {Object.entries(socialLinks)
                    .filter(([key]) => key !== 'email' && key !== 'upwork')
                    .map(([key, url]) => {
                      const Icon = socialIcons[key as keyof typeof socialIcons]
                      if (!Icon) return null
                      
                      return (
                        <motion.a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent hover:text-background transition-all"
                        >
                          <Icon className="w-4 h-4" />
                        </motion.a>
                      )
                    })}
                </div>
              </div>

              {/* Upwork Freelance Card */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-green-500" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Work With Me
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-green-500">Rising Talent on Upwork</span>
                </div>
                
                <p className="text-sm text-muted mb-4">
                  Looking for a freelance developer? Let&apos;s collaborate on your next project! Hire me on Upwork or DM me directly via email.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={socialLinks.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-green-500 text-white font-medium text-sm hover:bg-green-600 transition-colors"
                  >
                    <Briefcase className="w-4 h-4" />
                    Hire on Upwork
                  </motion.a>
                  <motion.a
                    href={`mailto:${socialLinks.email}?subject=Freelance Inquiry`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent/10 border border-accent/20 text-foreground font-medium text-sm hover:bg-accent hover:text-background transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Email Me
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-background border border-border space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors text-sm"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors resize-none text-sm"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 rounded-lg bg-accent text-background text-sm font-medium hover:bg-accent-hover transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
