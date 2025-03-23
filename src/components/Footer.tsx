
import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
          {/* Scroll to top button */}
          <a
            href="#hero"
            className="w-12 h-12 rounded-full glass flex items-center justify-center mb-8 hover:bg-highlight/10 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="text-highlight" />
          </a>
          
          {/* Social links */}
          <div className="flex space-x-6 mb-8">
            <a 
              href="mailto:pateldhruvansh@gmail.com" 
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-highlight/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} className="text-highlight" />
            </a>
            <a 
              href="https://linkedin.com/in/dhruvansh-patel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-highlight/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-highlight" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-highlight/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} className="text-highlight" />
            </a>
          </div>
          
          {/* Credits */}
          <div className="text-slate text-sm">
            <p>Designed & Built by Dhruvansh Patel</p>
            <p className="mt-1">&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
