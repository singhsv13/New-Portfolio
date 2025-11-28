import React from 'react';
import { User, Cpu, Zap, Eye, Download, FileText } from 'lucide-react';
import logo from '../assets/profile_pic.jpg'

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 px-4 max-w-6xl mx-auto scroll-mt-28">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 uppercase tracking-wider">
          <User className="text-cyan-500" />
          Profile_Dossier
        </h2>
        <div className="h-0.5 w-24 bg-cyan-500 mt-4 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Visual Identity (4 Cols) */}
        <div className="lg:col-span-5 relative group flex flex-col gap-6">
           <div className="relative w-full aspect-square max-w-sm mx-auto border border-zinc-800 bg-zinc-900/50 p-2">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50"></div>
              
              {/* Image Container */}
              <div className="w-full h-full relative overflow-hidden bg-black group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-shadow duration-500">
                <img 
                  src={logo} 
                  alt="Simarprit Virdi" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                   <p className="font-mono text-cyan-500 text-xs tracking-widest uppercase">Status: Online</p>
                </div>
              </div>
           </div>

           {/* Stats Row */}
           <div className="grid grid-cols-3 gap-2 mt-0 max-w-sm mx-auto w-full">
              {[
                { label: 'Exp', val: '1+ Yrs' },
                { label: 'Projects', val: '5+' },
                { label: 'Focus', val: 'Frontend' }
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 p-3 text-center hover:border-cyan-500/30 transition-colors">
                   <div className="text-lg font-bold text-white">{stat.val}</div>
                   <div className="text-[9px] text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>

           {/* Hire Me / Resume Button */}
           <a href="#contact" className="w-full max-w-sm mx-auto group/btn overflow-hidden relative border border-cyan-500/50 bg-cyan-500/10 py-4 px-6 flex items-center justify-center gap-3 hover:bg-cyan-500 hover:text-black transition-all duration-300">
              <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 bg-cyan-500 transition-transform duration-300 ease-out"></div>
              <FileText size={18} className="relative z-10 text-cyan-400 group-hover/btn:text-black" />
              <span className="relative z-10 font-bold uppercase tracking-widest text-xs text-cyan-400 group-hover/btn:text-black">
                Hire Me
              </span>
              <Download size={14} className="relative z-10 opacity-0 group-hover/btn:opacity-100 -translate-x-2 group-hover/btn:translate-x-0 transition-all duration-300 text-black" />
           </a>
        </div>

        {/* Right Column: Narrative Data (8 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Bio Module */}
          <div className="bg-zinc-900/30 border-l-2 border-cyan-500 p-8 relative overflow-hidden group hover:bg-zinc-900/40 transition-colors">
            <div className="absolute top-2 right-2 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors">
               <Cpu size={24} />
            </div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 animate-pulse"></span>
              Core Directive
            </h3>
            <p className="text-zinc-300 leading-relaxed font-light text-lg">
            I am <span className="text-white font-semibold">Simar</span>, a software engineer focused on building what lasts. 
  I design <span className="text-cyan-400 hover:underline cursor-none">robust digital ecosystems</span> where 
  precision meets reliability. I craft scalable web solutions from complex challenges.
            </p>
          </div>

          {/* Technical Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-zinc-900/20 border border-zinc-800 p-6 hover:border-zinc-600 transition-colors group">
                <div className="flex items-center gap-3 mb-3 text-zinc-400 group-hover:text-cyan-400 transition-colors">
                   <Zap size={18} />
                   <h4 className="font-mono text-xs uppercase tracking-widest">Efficiency</h4>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                   Obsessed with load times and render cycles. I optimize for the millisecond, ensuring seamless user interactions.
                </p>
             </div>

             <div className="bg-zinc-900/20 border border-zinc-800 p-6 hover:border-zinc-600 transition-colors group">
                <div className="flex items-center gap-3 mb-3 text-zinc-400 group-hover:text-cyan-400 transition-colors">
                   <Eye size={18} />
                   <h4 className="font-mono text-xs uppercase tracking-widest">Visuals</h4>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                   Merging brutalist aesthetics with functional design. Every pixel serves a purpose in the interface.
                </p>
             </div>
          </div>

          {/* Location / Status Bar */}
          <div className="flex items-center justify-between border-t border-zinc-800 pt-6 mt-6">
             <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
                Based in: <span className="text-zinc-400">India</span>
             </div>
             <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                System Check: <span className="text-green-500">Optimal</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;