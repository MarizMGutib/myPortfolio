'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export function Skills() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs',
    'Git', 'Docker', 'AWS', 'CI/CD', 'Agile'
  ]

  return (
    <motion.section 
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Skills
      </motion.h2>
      <motion.div 
        className="flex flex-wrap justify-center gap-2"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: 'spring' }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={`skill-${index}-${skill}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Badge variant="secondary">{skill}</Badge>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

