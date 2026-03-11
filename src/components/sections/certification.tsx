"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const { certifications } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="certifications"
      className="py-24 px-6 max-w-5xl mx-auto border-t border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Certifications & Awards
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Award size={28} />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-foreground/60">
                {cert.issuer} • {cert.date}
              </p>
            </div>
            {cert.link && cert.link !== "#" && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
