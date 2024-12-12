'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <motion.section 
      id="about"
      className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-indigo-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut" 
      }}
    >
      <motion.h2 
        className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="max-w-3xl mx-auto text-center bg-white shadow-2xl rounded-xl p-8 border-2 border-indigo-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            Hello! I'm <span className="font-bold text-indigo-600">Mariz Gutib</span>, a passionate developer with a keen interest in creating innovative web solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I specialize in modern web technologies and enjoy building user-friendly, performant applications that push the boundaries of design and functionality.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
} 