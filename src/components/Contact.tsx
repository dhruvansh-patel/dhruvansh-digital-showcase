
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div 
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title flex items-center gap-4 before:content-['04.'] before:font-mono before:text-highlight before:text-2xl">
          Contact
        </h2>
        <p className="section-subtitle max-w-2xl mx-auto text-center">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Contact Form */}
          <div className="glass p-8 rounded-lg">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Get In Touch</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-lighter mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md bg-navy-light border border-slate/20 focus:border-highlight/50 focus:outline-none focus:ring-1 focus:ring-highlight/50 text-white transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-lighter mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md bg-navy-light border border-slate/20 focus:border-highlight/50 focus:outline-none focus:ring-1 focus:ring-highlight/50 text-white transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-lighter mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full p-3 rounded-md bg-navy-light border border-slate/20 focus:border-highlight/50 focus:outline-none focus:ring-1 focus:ring-highlight/50 text-white transition-all duration-300 resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="glass p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center mr-4">
                    <Mail className="text-highlight" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-light text-sm">Email</p>
                    <a 
                      href="mailto:pateldhruvansh@gmail.com" 
                      className="text-white hover:text-highlight transition-colors duration-300"
                    >
                      pateldhruvansh@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center mr-4">
                    <Linkedin className="text-highlight" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-light text-sm">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/dhruvansh-patel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-highlight transition-colors duration-300"
                    >
                      linkedin.com/in/dhruvansh-patel
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center mr-4">
                    <Github className="text-highlight" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-light text-sm">GitHub</p>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-highlight transition-colors duration-300"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Current Status</h3>
              <div className="bg-navy-light p-4 rounded-lg border-l-4 border-highlight">
                <p className="text-white">
                  I'm currently a final-year student looking for internship and job opportunities 
                  in software development, networking, and cybersecurity roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
