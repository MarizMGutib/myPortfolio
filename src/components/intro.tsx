'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

export function Intro() {
  const socialLinks = [
    { id: 'github', icon: GithubIcon, label: 'GitHub' },
    { id: 'linkedin', icon: LinkedinIcon, label: 'LinkedIn' },
    { id: 'email', icon: MailIcon, label: 'Email' }
  ]

  return (
    <motion.section 
      className="py-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Software Developer
      </motion.h2>
      <motion.p 
        className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Passionate about creating elegant solutions to complex problems. Experienced in full-stack development with a focus on React and Node.js.
      </motion.p>
      <motion.div 
        className="flex justify-center space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {socialLinks.map(({ id, icon: Icon, label }) => (
          <Button key={`social-${id}`} variant="outline" size="icon">
            <Icon className="h-4 w-4" />
            <span className="sr-only">{label}</span>
          </Button>
        ))}
      </motion.div>
    </motion.section>
  )
}

