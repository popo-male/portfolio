import { PortfolioData } from "@/types";
import { Database } from "lucide-react";

export const portfolioData: PortfolioData = {
  hero: {
    name: "Koh Yu Bin",
    tagline: "Software Engineer & Data Science Enthusiast",
    summary: "Computer Science graduate with a CGPA of 3.2640. Specialized in Machine Learning, ETL Pipelines, and Full-Stack Development with hands-on internship experience.",
    availability: "Open to Work", 
  },
  
  // Flattened skills with string identifiers for icons
  skills: [
    { name: "Python", iconClass: "devicon-python-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "C++", iconClass: "devicon-cplusplus-plain colored" },
    { name: "HTML", iconClass: "devicon-html5-plain colored" },
    { name: "CSS", iconClass: "devicon-css3-plain colored" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain-wordmark colored" },
    { name: "Docker", iconClass: "devicon-docker-plain colored" },
    { name: "Git", iconClass: "devicon-git-plain colored" },
    { name: "SQL", iconClass: "devicon-azuresqldatabase-plain colored" }, // Generic SQL
    { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
    { name: "Streamlit", iconClass: "devicon-streamlit-plain colored" }, 
    // Note: A few niche tools might not be in Devicon. See the note below!
    { name: "MLFlow", iconClass: "devicon-python-plain" }, 
    { name: "Polars", iconClass: "devicon-python-plain" }, 
  ],
  // Reference: https://devicon.dev/

  experience: [
    {
      company: "GlobeOSS Sdn. Bhd.",
      role: "Developer/Engineer Intern",
      duration: "June 2025 - Oct 2025",
      description: [
        "Developed Zero-shot classification models for high-tech product identification.",
        "Built backend modules for ETL pipelines including 'Front Door' system for landing zone monitoring.",
        "Integrated MLflow for experiment tracking and model versioning.",
        "Implemented data validation using Pydantic and Great Expectations."
      ]
    }
  ],

  education: [
    {
      institution: "Universiti Tunku Abdul Rahman", // Replace with your actual university
      degree: "Bachelor of Computer Science",
      duration: "2022-2025", // Replace with your year
      description: [
        "Graduated with a CGPA of 3.2640",
        "Relevant coursework: Data Science, Artificial Intelligence, Software Development, Database Development, Programming & Systems, Web & Application Development"
      ]
    }
  ],

  certifications: [
    {
      title: "Data Visualization and Building Dashboards with Excel and Cognos by IBM",
      issuer: "EDX",
      date: "17 May 2022",
      link: "https://courses.edx.org/certificates/ade0aa5ab8eb49abb0fa2d5c9eb0a428"
    },
    {
      title: "Analyzing Data with Excel by IBM",
      issuer: "EDX",
      date: "07 May 2022",
      link: "https://courses.edx.org/certificates/43e916e53a8b4fdbb84c8de1875fe300"
    },
    {
      title: "Analyzing Data with Python by IBM",
      issuer: "EDX",
      date: "07 March 2022",
      link: "https://courses.edx.org/certificates/6246835238e84d11a5eaf3493ba9333a"
    },
    {
      title: "Data Analytics Basics for Everyone by IBM",
      issuer: "EDX",
      date: "31 March 2022",
      link: "https://courses.edx.org/certificates/d72855540e144fda81ca0e1540abc665"
    },
    {
      title: "Python Basics for Data Science by IBM",
      issuer: "EDX",
      date: "12 January 2022",
      link: "https://courses.edx.org/certificates/f1fe2b905b8743369da8aafce0fa04ec"
    }
  ],

  projects: [
    {
      title: "Traffic Sign Classification",
      tech: ["Python", "Deep Learning", "CNN"],
      description: "Designed a CNN model achieving 99.6% accuracy in classifying traffic signs from dataset images.",
      repo: "https://courses.edx.org/certificates/f1fe2b905b8743369da8aafce0fa04ec"
    },
    {
      title: "ETL Ingestion System",
      tech: ["Python", "Watchdog", "SQL"],
      description: "Modular pipeline to monitor, extract, and process diverse data files with real-time database status tracking."
    },
    {
      title: "Company Name Matching",
      tech: ["XGBoost", "Elasticsearch", "Python"],
      description: "Built an XGBoost model for fuzzy company name matching, integrating Elasticsearch for candidate retrieval."
    },
    {
      title: "Books Rental Service",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: "Web application allowing users to rent books using local storage for session management."
    }
  ],

  contact: {
    email: "ybkoh5050@gmail.com",
    linkedin: "www.linkedin.com/in/koh-yu-bin-7760b2352",
    github: "https://github.com/popo-male" // Update with your actual github username
  }
};