"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Skills() {
  const { skills } = portfolioData;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag handlers remain exactly the same
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-6xl mx-auto border-t border-border overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Technical Arsenal
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </motion.div>

      <div className="relative w-full overflow-hidden group cursor-grab active:cursor-grabbing">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto hide-scrollbar w-max animate-marquee group-hover:pause-animation"
          style={{ paddingBottom: "10px" }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px] bg-card border border-border rounded-xl p-6 shadow-sm hover:border-primary/50 transition-colors flex-shrink-0 select-none pointer-events-none"
            >
              {/* REPLACED LUCIDE RENDERER WITH DEVICON <i> TAG */}
              <i className={`${skill.iconClass} text-5xl mb-3`}></i>

              <span className="font-medium text-foreground/80">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
