
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  features: string[];
  challenge: string;
  repository: string;
  image: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: "UNO Game (LAN Multiplayer)",
      description: "A JavaFX-based multiplayer UNO game designed for local network play.",
      features: [
        "Multiplayer support over LAN",
        "Custom game rules and dynamic UI",
        "Secure data handling with encryption"
      ],
      challenge: "Implemented efficient socket communication for smooth gameplay.",
      repository: "#",
      image: "/placeholder.svg",
      technologies: ["Java", "JavaFX", "Socket Programming", "Multithreading"]
    },
    {
      title: "EIDR Record Management",
      description: "A web-based application for fetching, translating, and storing EIDR records.",
      features: [
        "AI-driven translation and transliteration",
        "Language identification automation",
        "AWS NoSQL storage for scalability"
      ],
      challenge: "Optimized AI processing for faster record retrieval.",
      repository: "#",
      image: "/placeholder.svg",
      technologies: ["Python", "AWS", "AI/ML", "NoSQL", "Web API"]
    },
    {
      title: "CurrencyX",
      description: "A Python-based currency converter that allows users to convert between multiple currencies using real-time exchange rates.",
      features: [
        "Fetches real-time exchange rates from an API",
        "Supports multiple currencies with accurate conversion calculations",
        "User-friendly CLI/GUI for ease of use",
        "Data mapping using graphs and visual elements"
      ],
      challenge: "Ensured accuracy in exchange rates and optimized API calls for efficiency.",
      repository: "#",
      image: "/placeholder.svg",
      technologies: ["Python", "API Integration", "Data Visualization", "GUI Development"]
    },
    {
      title: "MyStocks",
      description: "A Python-based script to compare data between different stocks and save the data in real time.",
      features: [
        "Fetches real-time stock prices from an API",
        "Supports multiple exchanges with accurate rates",
        "User-friendly CLI/GUI for ease of use",
        "Data mapping using graphs and visual elements"
      ],
      challenge: "Compared important data points required while trading stocks and optimized API calls for efficiency.",
      repository: "#",
      image: "/placeholder.svg",
      technologies: ["Python", "Financial APIs", "Data Analysis", "Real-time Processing"]
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div 
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title flex items-center gap-4 before:content-['02.'] before:font-mono before:text-highlight before:text-2xl mb-16">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card transition-all duration-700 delay-${index * 200}`}
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-navy-light flex items-center justify-center">
                  <span className="text-slate">{project.title} Screenshot</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate mb-4">
                  {project.description}
                </p>
                
                <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                <ul className="mb-4 list-disc list-inside text-slate">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                
                <h4 className="text-lg font-semibold text-white mb-2">Challenge & Solution:</h4>
                <p className="text-slate mb-6">
                  {project.challenge}
                </p>
                
                <div className="flex flex-wrap mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.repository} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-slate hover:text-highlight transition-colors duration-300"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center text-slate hover:text-highlight transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
