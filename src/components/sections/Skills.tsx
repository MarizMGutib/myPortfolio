'use client'

import { motion } from 'framer-motion'

const skills = [
  'React', 
  'Next.js', 
  'TypeScript', 
  'Tailwind CSS', 
  'Node.js', 
  'GraphQL',
  'Docker'
]

export function Skills() {
  return (
    <motion.section 
      id="skills"
      className="container mx-auto px-4 py-16 bg-secondary/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="bg-primary/10 px-4 py-2 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 