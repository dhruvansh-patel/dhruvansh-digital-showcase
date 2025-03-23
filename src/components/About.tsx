
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "JavaScript", "C++"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Node.js"]
    },
    {
      title: "Networking",
      skills: ["IPv6", "Windows Server", "Network Security"]
    },
    {
      title: "Cybersecurity",
      skills: ["Penetration Testing", "Ethical Hacking", "System Security"]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div 
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-3/5">
            <h2 className="section-title flex items-center gap-4 before:content-['01.'] before:font-mono before:text-highlight before:text-2xl">
              About Me
            </h2>
            <p className="text-xl mb-6">
              I am a final-year Computer Systems Technology student with a strong passion 
              for coding, networking, and cybersecurity. My coursework has provided me with 
              hands-on experience in software development, networking protocols, and IT infrastructure.
            </p>
            <p className="text-xl mb-10">
              My approach combines technical excellence with creative problem-solving. 
              I'm dedicated to creating secure, efficient, and user-friendly systems that make 
              technology work better for people.
            </p>
            
            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                  <div 
                    key={index} 
                    className={`glass p-6 rounded-lg transition-all duration-700 delay-${index * 200}`}
                  >
                    <h4 className="text-xl font-bold text-white mb-3">{category.title}</h4>
                    <div className="flex flex-wrap">
                      {category.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <a href="#contact" className="btn-primary font-mono text-sm">
              Contact Me
            </a>
          </div>
          
          <div className="md:w-2/5 flex justify-center items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-highlight opacity-20 rounded-lg blur-sm group-hover:opacity-30 transition duration-300"></div>
              <div className="relative max-w-sm rounded-lg overflow-hidden">
                {/* Placeholder for profile image - please replace with your actual headshot */}
                <div className="aspect-square w-full bg-navy-light flex items-center justify-center relative">
                  <span className="text-slate">Profile Picture</span>
                  <div className="absolute inset-0 border-2 border-highlight rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
