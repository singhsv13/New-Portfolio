import React, { useState } from 'react';
import { Layers, Move, Github, ExternalLink, ArrowUpRight, Folder, Terminal } from 'lucide-react';
import { Project } from '../types';

const initialProjects: Project[] = [
  {
    id: 'p1',
    title: 'Showflix',
    category: 'Entertainment',
    description: 'Your personal hub for movies and shows – watch, save, and get recommendations with Showflix’s sleek, responsive interface.',
    span: 'medium', 
    tech: ['React', 'Tailwind', 'React Router'],
    color: 'hover:border-red-500/50',
    githubLink: 'https://github.com/singhsv13/ShowFlix',
    demoLink: 'https://showflixx.vercel.app/home'
  },
  {
    id: 'p2',
    title: 'Evvento',
    category: 'Event Manager',
    description: 'Event Manager app designed to allow users to register, unregister, and manage events. Features event filtering, sorting, and user-specific registrations.',
    span: 'medium',
    tech: ['Angular', 'Firebase', 'Bootstrap'],
    color: 'hover:border-purple-500/50',
    githubLink: 'https://github.com/singhsv13/Evvento',
    demoLink: 'https://evventmanager.vercel.app/'
  },
  {
    id: 'p3',
    title: 'Currency',
    category: 'FinTech',
    description: 'Real-time currency conversion tool allowing users to convert one currency to another with live exchange rates.',
    span: 'medium',
    tech: ['React', 'Tailwind'],
    color: 'hover:border-green-500/50',
    githubLink: 'https://github.com/singhsv13/Currency-Convertor',
    demoLink: 'https://convertmycurrency.netlify.app/'
  },
  {
    id: 'p4',
    title: 'Quiz App',
    category: 'Education',
    description: 'Timed quiz app that presents randomized questions, tracks scores, and auto-submits answers.',
    span: 'small', 
    tech: ['React', 'Tailwind'],
    color: 'hover:border-blue-500/50',
    githubLink: 'https://github.com/singhsv13/Quiz-App',
    demoLink: 'https://reactquizify.vercel.app/'
  },
  {
    id: 'p5',
    title: 'Pass Gen',
    category: 'Security',
    description: 'Modern, interactive password generator. Customize length and check strength in real-time.',
    span: 'small',
    tech: ['React', 'Tailwind'],
    color: 'hover:border-pink-500/50',
    githubLink: 'https://github.com/singhsv13/pass-gen',
    demoLink: 'https://passxgen.vercel.app/'
  }
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = 'move'; 
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
    e.preventDefault();
    if (!draggedId || draggedId === targetId) return;

    const draggedIndex = projects.findIndex(p => p.id === draggedId);
    const targetIndex = projects.findIndex(p => p.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newProjects = [...projects];
    const temp = newProjects[draggedIndex];
    newProjects[draggedIndex] = newProjects[targetIndex];
    newProjects[targetIndex] = temp;

    setProjects(newProjects);
    setDraggedId(null);
  };

  const getSpanClasses = (span: string) => {
    switch(span) {
      case 'large': return 'col-span-1 md:col-span-2 row-span-1 md:row-span-2';
      case 'medium': return 'col-span-1 md:col-span-2 row-span-1';
      case 'tall': return 'col-span-1 row-span-1 md:row-span-2';
      default: return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id="projects" className="py-12 px-4 max-w-7xl mx-auto scroll-mt-28">
      {/* Consistent Header matching other sections */}
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 uppercase tracking-wider">
          <Layers className="text-cyan-500" />
          Project_Matrix
        </h2>
        <div className="h-0.5 w-24 bg-cyan-500 mt-4 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        
        {/* Optional Sub-badge */}
        <div className="mt-6 flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
           <Move size={12} className="text-cyan-500 animate-pulse" />
           <span>System: Grid Draggable</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6 grid-flow-dense">
        {projects.map((project) => (
          <div
            key={project.id}
            draggable
            onDragStart={(e) => handleDragStart(e, project.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, project.id)}
            className={`
              ${getSpanClasses(project.span)}
              group relative flex flex-col bg-zinc-900/20 backdrop-blur-sm border border-zinc-800 
              transition-all duration-300 cursor-grab active:cursor-grabbing overflow-hidden
              hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:bg-zinc-900/40
              ${draggedId === project.id ? 'opacity-20 border-dashed border-cyan-500' : ''}
              ${project.color}
            `}
          >
            {/* Decorative Corner Markers */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-600 group-hover:border-cyan-500 transition-colors"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-600 group-hover:border-cyan-500 transition-colors"></div>
            
            {/* Card Content Area */}
            <div className="flex-1 p-6 flex flex-col relative z-10">
              
              {/* Top Bar */}
              <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-2 text-cyan-500">
                    <Folder size={16} />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{project.category}</span>
                 </div>
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-cyan-500 transition-colors" />
                 </div>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-cyan-100 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6 line-clamp-3 md:line-clamp-none">
                {project.description}
              </p>

              {/* Tech Tags - Pushed to bottom of content area */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[9px] font-mono uppercase border border-zinc-800 px-2 py-1 text-zinc-500 bg-black/50 group-hover:text-cyan-400 group-hover:border-cyan-900/50 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Persistent Action Bar - High Visibility */}
            <div className="flex items-stretch h-14 border-t border-zinc-800 group-hover:border-zinc-700 transition-colors">
              {/* Github Button */}
              {project.githubLink ? (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors text-xs font-mono uppercase tracking-widest border-r border-zinc-800 group-hover:border-zinc-700"
                >
                  <Github size={16} />
                  <span>Source</span>
                </a>
              ) : (
                 <div className="flex-1 flex items-center justify-center gap-2 bg-zinc-950 text-zinc-700 text-xs font-mono uppercase tracking-widest border-r border-zinc-800 cursor-not-allowed">
                   <Github size={16} />
                   <span>Private</span>
                 </div>
              )}

              {/* Live Demo Button - Primary Action */}
              {project.demoLink ? (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all text-xs font-bold uppercase tracking-widest relative overflow-hidden group/btn"
                >
                  <div className="absolute inset-0 bg-cyan-500/10 group-hover/btn:bg-transparent transition-colors"></div>
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-zinc-700 text-xs font-bold uppercase tracking-widest cursor-not-allowed">
                   <Terminal size={16} />
                   <span>Offline</span>
                </div>
              )}
            </div>

            {/* Background Texture on Hover */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"></div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;