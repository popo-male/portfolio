"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="py-24 px-6 max-w-5xl mx-auto border-t border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </motion.div>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
              <div className="absolute left-0 top-1.5 md:hidden text-primary">
                <GraduationCap size={20} />
              </div>

              <div className="mb-4 md:mb-0 md:col-span-1 md:text-right mt-1.5">
                <span className="text-sm font-semibold tracking-wider text-foreground/50 uppercase">
                  {edu.duration}
                </span>
              </div>

              <div className="md:col-span-3 border-l-2 border-border/50 pl-6 relative">
                <div className="hidden md:block absolute -left-[11px] top-1.5 bg-background text-primary">
                  <GraduationCap size={20} />
                </div>

                <h3 className="text-2xl font-bold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-lg text-primary font-medium mb-4">
                  {edu.institution}
                </p>

                {edu.description && (
                  <ul className="space-y-3">
                    {edu.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-foreground/70 leading-relaxed flex items-start"
                      >
                        <span className="mr-2 mt-2 w-1.5 h-1.5 bg-primary/50 rounded-full flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
