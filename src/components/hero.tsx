'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

const letterVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export function Hero() {
  return (
    <motion.section 
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60 z-10" />
      
      <motion.div
        className="mb-8 z-15 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/mypic.png"
          alt="Mariz Gutib"
          width={192}
          height={192}
          priority
          className="object-cover w-full h-full"
          style={{ filter: 'brightness(1) contrast(1.3)' }}
        />
      </motion.div>

      <motion.div 
        className="relative z-20 text-center text-white px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <motion.h1 
          className="text-6xl font-bold mb-6 tracking-tight flex justify-center space-x-2"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {"Hello, it's Me ".split('').map((char, idx) => (
            <motion.span 
              key={idx}
              className="inline-block"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
          {"Mariz Gutib".split('').map((char, idx) => (
            <motion.span 
              key={idx + 100}
              className="inline-block text-blue-400"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
        <div className="flex space-x-4 mt-4 items-center justify-center">
          <a href="https://facebook.com" target="_blank" className="text-white text-3xl hover:text-blue-500"><FaFacebook /></a>
          <a href="https://whatsapp.com" target="_blank" className="text-white text-3xl hover:text-green-500"><FaWhatsapp /></a>
          <a href="https://instagram.com" target="_blank" className="text-white text-3xl hover:text-pink-500"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" className="text-white text-3xl hover:text-blue-700"><FaLinkedin /></a>
        </div>

        <motion.p 
          className="text-2xl font-light max-w-2xl mx-auto mt-[2rem]"
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
