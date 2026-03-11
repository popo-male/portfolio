"use client";

import { portfolioData } from "@/data/portfolio";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const { hero } = portfolioData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.div
          variants={itemVariants}
          className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
        >
          {hero.availability}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground"
        >
          Hi, I&apos;m <span className="text-primary">{hero.name}</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6"
        >
          {hero.tagline}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/60 mb-10 leading-relaxed max-w-2xl"
        >
          {hero.summary}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <a
            href="mailto:ybkoh5050@gmail.com"
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-transform active:scale-95"
          >
            Contact Me <ArrowRight size={18} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-transparent text-foreground border border-border px-6 py-3 rounded-lg font-medium hover:bg-foreground/5 transition-transform active:scale-95"
          >
            Download CV <Download size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
