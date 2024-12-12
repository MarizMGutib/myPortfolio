'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '🔺' },
  { name: 'TypeScript', icon: '📝' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'GraphQL', icon: '📊' },
  { name: 'Docker', icon: '🚢' }
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: { type: 'spring', stiffness: 300 }
    }
  }

  return (
    <motion.section 
      id="skills"
      className="container mx-auto px-4 py-16 bg-gradient-to-br from-secondary/10 to-primary/10 dark:bg-gray-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-primary/80 dark:text-primary/60 tracking-tight">
        My Technical Skills
      </h2>
      <motion.div 
        className="flex flex-wrap justify-center gap-6"
        variants={containerVariants}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="
              bg-white 
              dark:bg-gray-800
              shadow-lg 
              rounded-xl 
              p-4 
              w-40 
              text-center 
              transform 
              transition-all 
              duration-300 
              hover:shadow-xl
              border-2 
              border-transparent 
              hover:border-primary/30
              dark:border-gray-700
              dark:hover:border-primary/50
            "
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-primary/90 dark:text-white/90">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
} 