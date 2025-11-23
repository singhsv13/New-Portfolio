import React, { useEffect, useState } from 'react';
import { ArrowRight, Terminal, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "SOFTWARE_ENGINEER";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 overflow-hidden border-b border-zinc-900">
      
      {/* Abstract Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute left-[10%] top-0 bottom-0 w-px bg-zinc-900"></div>
         <div className="absolute right-[10%] top-0 bottom-0 w-px bg-zinc-900"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Typography Column */}
        <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Top Tag */}
          <div className="flex items-center gap-3 mb-8">
             <div className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono tracking-widest uppercase">
                <span className="mr-2 animate-pulse">●</span>
                Available for hire
             </div>
             <div className="h-px w-20 bg-zinc-800"></div>
          </div>

          {/* Name */}
          <h1 className="font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-6 text-white">
            SIMAR<span className="text-zinc-800">PRIT</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-500 filter drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              VIRDI
            </span>
          </h1>

          {/* Role Typing */}
          <div className="flex items-center gap-3 h-8 mb-8">
            <Terminal size={18} className="text-zinc-600" />
            <p className="font-mono text-lg md:text-xl text-zinc-400 tracking-[0.2em] uppercase">
              {text}<span className="animate-pulse text-cyan-500">_</span>
            </p>
          </div>

          <p className="max-w-md text-zinc-500 leading-relaxed mb-10 border-l-2 border-zinc-800 pl-6 py-2">
          Designing tomorrow’s web with <span className="text-cyan-400 font-medium">engineering that delivers</span>.  
  Fast. Functional. Future-ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
             <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs overflow-hidden hover:bg-cyan-500 transition-colors duration-300">
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowRight size={14} />
                </span>
             </a>
             <a href="#contact" className="px-8 py-4 border border-zinc-800 text-zinc-400 font-bold uppercase tracking-widest text-xs hover:text-white hover:border-white transition-all duration-300 bg-black/50 backdrop-blur-sm">
                Contact Me
             </a>
          </div>
        </div>

        {/* Visual/Stats Column */}
        <div className="hidden lg:flex justify-end relative">
           {/* Decorative Tech Card */}
           <div className="w-80 h-96 bg-zinc-900/10 backdrop-blur-sm border border-zinc-800 relative p-6 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-500">
              
              {/* Animated Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-600 group-hover:border-cyan-500 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-zinc-600 group-hover:border-cyan-500 transition-colors"></div>
              
              <div className="flex justify-between items-start">
                 <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <div>System_Load</div>
                    <div className="text-2xl text-white mt-1 font-bold">98.4<span className="text-cyan-500 text-sm">%</span></div>
                 </div>
                 <Activity size={20} className="text-cyan-500 animate-pulse-slow" />
              </div>

              {/* Fake Code Visualization */}
              <div className="space-y-2 font-mono text-[10px] text-zinc-600">
                 <div className="flex justify-between"><span>Importing modules...</span><span>DONE</span></div>
                 <div className="flex justify-between text-cyan-500/50"><span>Initializing UI...</span><span>DONE</span></div>
                 <div className="flex justify-between"><span>Checking integrity...</span><span>OK</span></div>
                 <div className="h-px w-full bg-zinc-800 my-2"></div>
                 <div className="opacity-50">
                   &lt;Hero /&gt; component mounted.<br/>
                   User_Session: ACTIVE
                 </div>
              </div>

              <div className="absolute -right-4 top-12 flex flex-col gap-2">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-1 h-8 bg-zinc-800 group-hover:bg-cyan-500/50 transition-colors duration-500" style={{ transitionDelay: `${i * 100}ms` }}></div>
                 ))}
              </div>
           </div>
        </div>

      </div>
      
      {/* Bottom Ticker */}
      <div className="absolute bottom-0 w-full border-t border-zinc-800 bg-black/80 backdrop-blur text-[10px] font-mono text-zinc-600 py-3 px-6 flex justify-between uppercase tracking-widest">
         <div className="flex gap-8">
            <span>Loc: India</span>
            <span>Lat: 28.7041</span>
            <span>Lng: 77.1025</span>
         </div>
         <div className="hidden md:block animate-pulse text-cyan-500">
            Systems Normal
         </div>
      </div>
    </section>
  );
};

export default Hero;