import React from 'react';
import { Briefcase, Calendar, Terminal } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Velocis',
    role: 'Software Developer',
    period: 'Jan 2024 - Present',
    description: [
      'Developed and deployed modular list components with pagination, sorting, search, and advanced filters, improving data accessibility and reducing load latency by 30%.',
      'Resolved over 50+ high-impact defects and optimized REST API integrations, ensuring stability and consistency across modules.',
      'Implemented accessibility compliance and multilingual localization (English, Hindi, Kannada) by designing JSON translation keys, fixing backend-driven strings, and refining UI for inclusivity and automation readiness.',
      'Collaborated cross-functionally with QA, backend, and senior developers to streamline workflows, enforce role-based security controls, and accelerate release cycles by 15%.',
      'Enhanced user experience by integrating confirmation dialogs, tooltips, icons, and navigational consistency across different modules, aligning with design standards and boosting usability.'
    ]
  },
  {
    id: 'exp-2',
    company: 'Western Union',
    role: 'Software Developer Trainee',
    period: 'Jan 2023 - Apr 2023',
    description: [
      'Developed and optimized RESTful APIs for a fintech platform, improving data flow, scalability, and performance.',
      'Worked within the Channel Engineering Team using Java, Spring Boot, and MySQL to deliver high-performance backend solutions.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 px-4 max-w-6xl mx-auto scroll-mt-28">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 uppercase tracking-wider">
          <Briefcase className="text-cyan-500" />
          Career_Log
        </h2>
        <div className="h-0.5 w-24 bg-cyan-500 mt-4 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      </div>

      <div className="relative">
        {/* Timeline Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent"></div>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black border border-cyan-500 z-10 mt-8 rotate-45 shadow-[0_0_15px_rgba(6,182,212,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-2 h-2 bg-cyan-400"></div>
              </div>

              {/* Connector Line (Horizontal) */}
              <div className={`hidden md:block absolute top-11 h-px bg-cyan-900/50 w-12 ${index % 2 === 0 ? 'left-1/2 -ml-12' : 'left-1/2'}`}></div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 w-full md:w-[calc(50%-3rem)] group">
                <div className="relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-8 hover:bg-zinc-900/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
                  
                  {/* Hover Border Highlight */}
                  <div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/50 transition-colors duration-500"></div>
                  
                  {/* Decorative Scan Line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:animate-[scan_2s_linear_infinite]"></div>

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 pb-4 border-b border-zinc-800 group-hover:border-cyan-500/30 transition-colors relative z-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mt-1 uppercase tracking-widest">
                        <Terminal size={12} />
                        {exp.role}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono bg-black border border-zinc-800 px-3 py-1 mt-3 md:mt-0 uppercase tracking-widest">
                      <Calendar size={10} />
                      {exp.period}
                    </div>
                  </div>
                  
                  {/* List */}
                  <ul className="space-y-4 relative z-10">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <span className="mt-1.5 min-w-[12px] h-[12px] flex items-center justify-center border border-zinc-700 group-hover/item:border-cyan-500/50 transition-colors">
                          <span className="w-1.5 h-1.5 bg-cyan-500 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                        </span>
                        <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover/item:text-zinc-200 transition-colors">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Corner Markers */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-600 group-hover:border-cyan-500 transition-colors"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-600 group-hover:border-cyan-500 transition-colors"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;