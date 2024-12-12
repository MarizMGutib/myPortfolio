"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      id: "Expensify",
      title: "Expensify",
      description:
        "A full-stack saving solution with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      id: "live-auction",
      title: "Live Auction",
      description:
        "A real-time bidding platform where users can participate in the buying and selling of items through a competitive bidding process.",
      technologies: ["Next.js", "TypeScript", "SQLyog", "GraphQL"],
    },
    {
      id: "barangay-health",          
      title: "Barangay Health Information and Reports",
      description:
        "A barangay health platform that track nutrition and immunization record of a child.",
      technologies: ["Next.js", "Express.js", "Apache", "SQLyog"],
    },
  ];

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
        Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={`project-${project.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={`${project.id}-tech-${techIndex}`}
                      variant="outline"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
