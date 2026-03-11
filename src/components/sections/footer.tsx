import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { contact, hero } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {hero.name}
          </h3>
          <p className="text-foreground/60 text-sm">
            Building robust pipelines and intelligent models.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="text-foreground/60 hover:text-primary transition-colors p-2"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors p-2"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-border/50 text-center text-sm text-foreground/40 font-medium">
        © {currentYear} {hero.name}. All rights reserved.
      </div>
    </footer>
  );
}
