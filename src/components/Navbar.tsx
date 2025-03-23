
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#hero" className="font-display font-bold text-2xl text-white">
            Dhruvansh<span className="text-highlight">.</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">
            <span className="text-highlight font-mono">01.</span> About
          </a>
          <a href="#projects" className="nav-link">
            <span className="text-highlight font-mono">02.</span> Projects
          </a>
          <a href="#resume" className="nav-link">
            <span className="text-highlight font-mono">03.</span> Resume
          </a>
          <a href="#contact" className="nav-link">
            <span className="text-highlight font-mono">04.</span> Contact
          </a>
          <a 
            href="#contact" 
            className="btn-primary ml-4 font-mono text-sm"
          >
            Get In Touch
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-lighter hover:text-highlight"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden bg-navy-light/90 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="w-full h-full flex flex-col items-center justify-center space-y-8 p-6">
          <a href="#about" className="nav-link text-xl" onClick={closeMenu}>
            <span className="text-highlight font-mono">01.</span> About
          </a>
          <a href="#projects" className="nav-link text-xl" onClick={closeMenu}>
            <span className="text-highlight font-mono">02.</span> Projects
          </a>
          <a href="#resume" className="nav-link text-xl" onClick={closeMenu}>
            <span className="text-highlight font-mono">03.</span> Resume
          </a>
          <a href="#contact" className="nav-link text-xl" onClick={closeMenu}>
            <span className="text-highlight font-mono">04.</span> Contact
          </a>
          <a 
            href="#contact" 
            className="btn-primary mt-4 font-mono"
            onClick={closeMenu}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
