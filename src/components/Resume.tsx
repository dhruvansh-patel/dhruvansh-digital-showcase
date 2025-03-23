
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileDown, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Diploma in Computer Systems Technology",
      institution: "BCIT",
      period: "2023 - Present",
      expected: "Expected Graduation: June 2025"
    }
  ];

  const experience = [
    {
      position: "Technical Support",
      company: "Swami Cable Networks",
      period: "2020 - 2022",
      responsibilities: [
        "Provided technical support to customers",
        "Resolved network and connectivity issues",
        "Assisted with hardware and software installation"
      ]
    },
    {
      position: "Pharmacy Assistant",
      company: "Local Pharmacy",
      period: "2018 - 2020",
      responsibilities: [
        "Assisted pharmacists with medication dispensing",
        "Managed inventory and stock levels",
        "Provided customer service to patients"
      ]
    }
  ];

  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2023"
    },
    {
      name: "Web Development",
      issuer: "InternShala",
      date: "2022"
    }
  ];

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div 
        ref={ref}
        className={`section-container transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="section-title flex items-center gap-4 before:content-['03.'] before:font-mono before:text-highlight before:text-2xl mb-16">
          Resume
        </h2>
        
        <div className="mb-8 flex justify-end">
          <a 
            href="#" 
            className="btn-primary flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileDown size={18} className="mr-2" />
            Download Resume
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="glass p-8 rounded-lg">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center mr-4">
                <GraduationCap className="text-highlight" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="pb-6 border-b border-navy-light">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <span className="text-highlight font-mono text-sm px-3 py-1 bg-navy-light rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate mb-2">{edu.institution}</p>
                  <p className="text-slate-light italic">{edu.expected}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="glass p-8 rounded-lg">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center mr-4">
                <Briefcase className="text-highlight" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="pb-6 border-b border-navy-light">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-white">{exp.position}</h4>
                    <span className="text-highlight font-mono text-sm px-3 py-1 bg-navy-light rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate mb-4">{exp.company}</p>
                  <ul className="text-slate-light space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-highlight mr-2">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="glass p-8 rounded-lg lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center mr-4">
                <Award className="text-highlight" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-2">{cert.name}</h4>
                  <p className="text-slate mb-1">Issued by: {cert.issuer}</p>
                  <p className="text-slate-light">Date: {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
