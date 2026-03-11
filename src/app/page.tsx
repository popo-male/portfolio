import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skill";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certification";
import Projects from "@/components/sections/project";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
