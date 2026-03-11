"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="flex flex-col h-full bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <FolderGit2 size={24} />
              </div>
              <div className="flex gap-3 text-foreground/50">
                {project.repo && project.repo !== "#" && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-foreground/70 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs font-mono font-medium text-primary bg-primary/5 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}