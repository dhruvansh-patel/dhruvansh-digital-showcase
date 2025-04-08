
import React, { useEffect, useState } from 'react';
import { Code, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const fullTexts = [
    "Building Digital Solutions.",
    "Aiming for Precision.",
    "Securing Web Apps.",
    "Solving Problems."
  ];

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = "";
  
    const type = () => {
      const fullText = fullTexts[phraseIndex];
  
      if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
      }
  
      setText(currentText);
  
      let delay = isDeleting ? 50 : 100;
  
      if (!isDeleting && charIndex === fullText.length) {
        delay = 2000; // Wait before deleting
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % fullTexts.length;
        delay = 500; // Wait before typing next phrase
      }
  
      setTimeout(type, delay);
    };
  
    const timer = setTimeout(() => {
      setIsVisible(true);
      type();
    }, 300);
  
    return () => clearTimeout(timer);
  }, []);
  
  

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy opacity-90"></div>
        {/* Code background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmZmZmYiLz4KICA8L3BhdHRlcm4+Cjwvc3ZzPg==')]"></div>
      </div>

      <div className="section-container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className={`transition-all duration-500 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="font-mono text-highlight mb-4">Hi, my name is</p>
          </div>
          
          <div className={`transition-all duration-500 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
              Dhruvansh Patel.
            </h1>
          </div>
          
          <div className={`transition-all duration-500 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate mb-6">
              <span>{text}</span>
              <span className="animate-blink">|</span>
            </h2>
          </div>
          
          <div className={`transition-all duration-500 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg text-slate max-w-xl mb-8">
              Welcome to my digital portfolio! I am a Computer Systems Technology student 
              specializing in networking, software development, and cybersecurity. This portfolio 
              showcases my technical skills, projects, and experience.
            </p>
          </div>
          
          <div className={`transition-all duration-500 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="#projects" className="btn-primary">
              Check out my work
            </a>
          </div>
        </div>

        {/* Code Editor Graphic */}
        <div className={`hidden md:block transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass p-4 rounded-lg shadow-lg">
            <div className="flex items-center border-b border-navy-light pb-2 mb-3">
              <div className="flex gap-1.5 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center justify-center px-4 py-1 text-xs rounded-md bg-navy-light text-slate-lighter">
                <Terminal size={12} className="mr-2" /> portfolio.js
              </div>
            </div>
            <div className="font-mono text-sm">
              <div className="mb-1.5"><span className="text-purple-400">import</span> <span className="text-blue-300">React</span> <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;</div>
              
              <div className="mb-1.5"><span className="text-purple-400">const</span> <span className="text-yellow-300">Portfolio</span> <span className="text-white">=</span> <span className="text-purple-400">()</span> <span className="text-white">{" => {"}</span></div>
              
              <div className="mb-1.5 pl-6"><span className="text-purple-400">const</span> <span className="text-blue-300">skills</span> <span className="text-white">=</span> <span className="text-yellow-300">[</span><span className="text-green-300">'React'</span>, <span className="text-green-300">'TypeScript'</span>, <span className="text-green-300">'Node.js'</span>, <span className="text-green-300">'Python'</span><span className="text-yellow-300">]</span>;</div>
              
              <div className="mb-1.5 pl-6"><span className="text-purple-400">return</span> <span className="text-white">(</span></div>
              
              <div className="mb-1.5 pl-12"><span className="text-blue-500">{'<div>'}</span></div>
              
              <div className="mb-1.5 pl-16"><span className="text-blue-500">{'<h1>'}</span><span className="text-white">Dhruvansh Patel</span><span className="text-blue-500">{'</h1>'}</span></div>
              
              <div className="mb-1.5 pl-16"><span className="text-blue-500">{'<p>'}</span><span className="text-white">Full Stack Developer</span><span className="text-blue-500">{'</p>'}</span></div>
              
              <div className="mb-1.5 pl-16"><span className="text-blue-500">{'<SkillList '}</span><span className="text-yellow-300">skills</span><span className="text-white">=</span><span className="text-blue-300">{"{skills}"}</span><span className="text-blue-500">{'/>'}</span></div>
              
              <div className="mb-1.5 pl-12"><span className="text-blue-500">{'</div>'}</span></div>
              
              <div className="mb-1.5 pl-6"><span className="text-white">);</span></div>
              
              <div className="mb-1.5"><span className="text-white">};</span></div>
              
              <div className="mb-1.5"><span className="text-purple-400">export</span> <span className="text-purple-400">default</span> <span className="text-yellow-300">Portfolio</span>;</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - made smaller and positioned better */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="font-mono text-slate text-xs mb-2">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-slate rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-highlight rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
