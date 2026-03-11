"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto border-t border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
        <p className="text-foreground/70 max-w-xl mx-auto text-lg">
          I'm currently looking for new opportunities. Whether you have a
          question, a project idea, or just want to say hi, I'll try my best to
          get back to you!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-6"
      >
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-transform active:scale-95 w-full sm:w-auto justify-center"
        >
          <Send size={20} />
          Say Hello
        </a>

        <div className="flex gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-card border border-border rounded-lg text-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-card border border-border rounded-lg text-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="p-4 bg-card border border-border rounded-lg text-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
