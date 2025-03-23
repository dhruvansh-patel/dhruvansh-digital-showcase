
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth animation on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy opacity-90"></div>
        {/* Code background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmZmZmYiLz4KICA8L3BhdHRlcm4+Cjwvc3ZzPg==')]"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <div className={`transition-all duration-500 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="font-mono text-highlight mb-6">Hi, my name is</p>
          </div>
          
          <div className={`transition-all duration-500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Dhruvansh Patel.
            </h1>
          </div>
          
          <div className={`transition-all duration-500 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate mb-8">
              I build digital solutions.
            </h2>
          </div>
          
          <div className={`transition-all duration-500 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl text-slate max-w-xl mb-12">
              Welcome to my digital portfolio! I am a Computer Systems Technology student 
              specializing in networking, software development, and cybersecurity. This portfolio 
              showcases my technical skills, projects, and experience as I prepare for a career in 
              IT and software development.
            </p>
          </div>
          
          <div className={`transition-all duration-500 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="#projects" className="btn-primary">
              Check out my work
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="font-mono text-slate text-sm mb-4">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-slate rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-highlight rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
