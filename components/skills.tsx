import React from 'react';
import { Terminal, Code, Box, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: <Code size={18} />,
    items: ['Javascript', 'Typescript', 'C++', 'Java']
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: <Box size={18} />,
    items: ['Angular', 'React']
  },
  {
    id: 'libraries',
    title: 'Libraries',
    icon: <Terminal size={18} />,
    items: [
      'TailwindCSS', 'Bootstrap', 'MaterialUI', 
      'React Router', 'Redux Toolkit', 'PrimeNG', 
      'RxJS', 'NgRx'
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Databases',
    icon: <Wrench size={18} />,
    items: [
      'VSCode', 'Eclipse', 'PostgreSQL', 'MySQL', 
      'Vite', 'Git', 'SVN'
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 px-4 max-w-6xl mx-auto scroll-mt-28">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 uppercase tracking-wider">
          <Database className="text-cyan-500" />
          Tech_Stack
        </h2>
        <div className="h-0.5 w-24 bg-cyan-500 mt-4 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div 
            key={category.id} 
            className="group relative bg-zinc-900/20 backdrop-blur-sm border border-zinc-800 p-8 hover:border-cyan-500/30 transition-all duration-300"
          >
            {/* Decorative Corner Markers */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-600 group-hover:border-cyan-500 transition-colors"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-600 group-hover:border-cyan-500 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-600 group-hover:border-cyan-500 transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-600 group-hover:border-cyan-500 transition-colors"></div>

            <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
              <div className="text-cyan-500">
                {category.icon}
              </div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-zinc-300 group-hover:text-cyan-400 transition-colors">
                {category.title}
              </h3>
              <span className="ml-auto text-[10px] font-mono text-zinc-600">0{idx + 1}</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="relative overflow-hidden px-3 py-2 bg-black border border-zinc-800 hover:border-cyan-500/50 hover:bg-cyan-950/10 transition-all duration-300 cursor-default group/item"
                >
                  <span className="relative z-10 text-xs font-mono text-zinc-400 uppercase tracking-wider group-hover/item:text-cyan-300 transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;