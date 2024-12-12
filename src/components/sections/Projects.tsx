'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    name: 'Project 1',
    description: 'A brief description of the project',
    image: '/path/to/project1-image.jpg',
    technologies: ['React', 'Next.js', 'Tailwind'],
    link: '#'
  },
  // Add more projects
]

export function Projects() {
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
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="border rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image 
              src={project.image} 
              alt={project.name} 
              width={400} 
              height={250} 
              className="w-full object-cover"
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