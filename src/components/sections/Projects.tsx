'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo } from 'react'

const projects = [
  {
    id: 1,
    name: 'Expensify',
    description: 'Simplify financial tracking with an intuitive expense management platform that empowers businesses to control and optimize their spending.',
    image: '/expensify.png',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 2,
    name: 'IcarePro',
    description: 'Revolutionize healthcare administration with a comprehensive system that streamlines patient care, billing, and medical record management.',
    image: '/IcarePro.png',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 3,
    name: 'ShopStock',
    description: 'Optimize retail operations with an intelligent inventory management solution that tracks stock levels, sales, and provides real-time insights.',
    image: '/ShopStock.png',
    technologies: ['React', 'Next.js', 'Tailwind'],
    link: '#'
  },
  {
    id: 4,
    name: 'Live Auction',
    description: 'Transform the auction experience with a dynamic online platform that connects auctioneers and buyers in real-time.',
    image: '/liveauction.png',
    technologies: ['React', 'Next.js', 'Tailwind'],
    link: '#'
  },
  {
    id: 5,
    name: 'Barangay Management System',
    description: 'Empower local communities with a digital platform that centralizes health records, resident information, and administrative processes.',
    image: '/bhs.png',
    technologies: ['React', 'Next.js', 'Tailwind'],
    link: '#'
  },
  {
    id: 6,
    name: 'Live Auction',
    description: 'Transform the auction experience with a dynamic online platform that connects auctioneers and buyers in real-time.',
    image: '/liveauction.png',
    technologies: ['React', 'Next.js', 'Tailwind'],
    link: '#'
  },
  // Add more projects
]

export function Projects() {
  const memoizedProjects = useMemo(() => projects, [])

  return (
    <motion.section 
      id="projects"
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memoizedProjects.map((project) => (
          <motion.div
            key={project.id}
            className="border rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image 
              src={project.image} 
              alt={project.name || 'Project'} 
              width={400} 
              height={250} 
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-primary/10 px-2 py-1 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 