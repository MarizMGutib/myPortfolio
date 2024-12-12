'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Contact() {
  const [isClient, setIsClient] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement form submission logic
    console.log(formData)
  }

  if (!isClient) return null

  return (
    <motion.section 
      id="contact"
      className="container mx-auto px-4 py-16 bg-secondary/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <form 
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
          className="w-full px-4 py-2 border rounded-lg"
          rows={4}
          required
        />
        <button 
          type="submit"
          className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  )
} 