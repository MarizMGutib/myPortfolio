'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const formFields = [
    { id: 'name', type: 'text', placeholder: 'Your Name' },
    { id: 'email', type: 'email', placeholder: 'Your Email' },
    { id: 'message', type: 'textarea', placeholder: 'Your Message' }
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
        Contact Me
      </motion.h2>
      <motion.form 
        className="max-w-md mx-auto space-y-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: 'spring' }}
      >
        {formFields.map((field) => (
          <motion.div key={`form-field-${field.id}`}>
            {field.type === 'textarea' ? (
              <Textarea placeholder={field.placeholder} />
            ) : (
              <Input type={field.type} placeholder={field.placeholder} />
            )}
          </motion.div>
        ))}
        <Button type="submit" className="w-full">Send Message</Button>
      </motion.form>
    </motion.section>
  )
}

