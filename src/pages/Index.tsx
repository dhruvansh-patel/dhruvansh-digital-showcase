
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import { useInView } from "react-intersection-observer";

// For animations on scroll
const loadScript = () => {
  if (typeof document !== "undefined") {
    // Add IntersectionObserver polyfill if needed
    const script = document.createElement("script");
    script.src = "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver";
    script.async = true;
    document.body.appendChild(script);
  }
};

const Index = () => {
  useEffect(() => {
    loadScript();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </Layout>
  );
};

export default Index;
