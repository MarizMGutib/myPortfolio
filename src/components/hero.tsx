'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Hero background"
        fill
        priority
        quality={100}
        style={{ 
          objectFit: 'cover', 
          filter: 'brightness(0.7)' 
        }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60 z-10" />
      <motion.div 
        className="relative z-20 text-center text-white px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.5, 
          type: "spring", 
          stiffness: 100 
        }}
      >
        <motion.h1 
          className="text-6xl font-bold mb-6 tracking-tight"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          Mariz Gutib
        </motion.h1>
        <motion.p 
          className="text-2xl font-light max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Crafting Digital Experiences with Creativity and Precision
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a 
            href="#about" 
            className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors"
          >
            Discover More
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

