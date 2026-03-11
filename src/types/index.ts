export interface Project {
  title: string;
  tech: string[];
  link?: string;
  repo?: string;
  description: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Skill {
  name: string;
  iconClass: string; // Changed from iconName
}

export interface PortfolioData {
  hero: {
    name: string;
    tagline: string;
    summary: string;
    availability: string;
  };
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}