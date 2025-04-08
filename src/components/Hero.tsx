import React from "react";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 bg-navy"
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy opacity-90" />
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmZmZmYiLz4KICA8L3BhdHRlcm4+Cjwvc3ZzPg==')]" />
      </div>

      {/* Main Grid */}
      <div className="section-container relative z-10 grid md:grid-cols-2 gap-8 items-center px-6">
        <div>
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-mono text-highlight mb-4">Hi, my name is</p>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl font-display font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Dhruvansh Patel.
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            className="min-h-[3.5rem] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate">
              <Typewriter
                words={[
                  "Building Digital Solutions.",
                  "Crafting Code with Precision.",
                  "Deploying Secure Web Apps.",
                  "Solving Problems with Passion.",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-slate max-w-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Welcome to my digital portfolio! I am a Computer Systems Technology student 
            specializing in networking, software development, and cybersecurity. This portfolio 
            showcases my technical skills, projects, and experience.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#projects"
              className="inline-block px-6 py-3 border-2 border-highlight text-highlight rounded-lg font-semibold transition hover:bg-highlight hover:text-navy"
            >
              Check out my work
            </a>
          </motion.div>
        </div>

        {/* Code Editor Graphic */}
        <motion.div
          className="hidden md:block glass p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center border-b border-navy-light pb-2 mb-3">
            <div className="flex gap-1.5 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center justify-center px-4 py-1 text-xs rounded-md bg-navy-light text-slate-lighter">
              <Terminal size={12} className="mr-2" /> portfolio.js
            </div>
          </div>
          <div className="font-mono text-sm text-left">
            <div className="mb-1.5 text-purple-400">import</div>
            <div className="mb-1.5"><span className="text-blue-300">React</span> <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;</div>
            <div className="mb-1.5"><span className="text-purple-400">const</span> <span className="text-yellow-300">Portfolio</span> = <span className="text-white">() =&gt; {'{'}</span></div>
            <div className="mb-1.5 pl-6"><span className="text-purple-400">const</span> <span className="text-blue-300">skills</span> = [<span className="text-green-300">'React'</span>, <span className="text-green-300">'TypeScript'</span>, <span className="text-green-300">'Node.js'</span>, <span className="text-green-300">'Python'</span>];</div>
            <div className="mb-1.5 pl-6"><span className="text-purple-400">return</span> (</div>
            <div className="mb-1.5 pl-12">&lt;div&gt;</div>
            <div className="mb-1.5 pl-16">&lt;h1&gt;Dhruvansh Patel&lt;/h1&gt;</div>
            <div className="mb-1.5 pl-16">&lt;p&gt;Full Stack Developer&lt;/p&gt;</div>
            <div className="mb-1.5 pl-16">&lt;SkillList skills=&#123;skills&#125; /&gt;</div>
            <div className="mb-1.5 pl-12">&lt;/div&gt;</div>
            <div className="mb-1.5 pl-6">&#125;;</div>
            <div className="mb-1.5"><span className="text-purple-400">export default</span> <span className="text-yellow-300">Portfolio</span>;</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="font-mono text-slate text-xs mb-2">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-slate rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-highlight rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
