import React from 'react';
import Background from './components/background';
import Hero from './components/hero';
import About from './components/about';
import Experience from './components/experience';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import { Github, Linkedin, Twitter, Instagram, Code, Ghost } from 'lucide-react';

const App: React.FC = () => {
  const links = {
    github: 'https://github.com/singhsv13',
    linkedin: 'https://www.linkedin.com/in/simarpritvirdi/',
    x: 'https://x.com/simarizzed',
    instagram: 'https://instagram.com/simarpritvirdi/',
    // leetcode: '',
    snapchat: 'https://www.snapchat.com/@simarvirdee'
  };
  return (
    <div className="relative min-h-screen text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      <Background />
      
      {/* Navigation Overlay - Sharp & Professional */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none">
        <div className="pointer-events-auto text-cyan-500 font-bold font-mono text-xl cursor-pointer hover:text-white transition-colors tracking-tighter border-2 border-transparent hover:border-cyan-500/20 p-1">
          SV
        </div>
        
        {/* Sharp, Professional Nav Bar */}
        <div className="pointer-events-auto hidden md:flex bg-black/70 backdrop-blur-md border-b border-zinc-800/80">
          {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="px-8 py-3 text-xs uppercase tracking-widest text-zinc-400 hover:text-cyan-400 hover:bg-white/5 transition-all font-mono border-r border-zinc-800/50 last:border-r-0 hover:border-cyan-500/30 border-b-2 border-b-transparent hover:border-b-cyan-500"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile indicator */}
        <div className="md:hidden flex gap-2 pointer-events-auto">
             <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse"></div>
             <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse delay-75"></div>
             <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse delay-150"></div>
        </div>
      </nav>

      <main className="relative z-0 pt-0">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-zinc-900 bg-black flex flex-col items-center gap-8">
        <div className="flex gap-6">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500 transition-all hover:-translate-y-1">
            <Github size={20} />
          </a>
          <a href={links.linkedin} className="p-3 border border-zinc-800 text-zinc-400 hover:text-blue-400 hover:border-blue-500 transition-all hover:-translate-y-1">
            <Linkedin size={20} />
          </a>
          <a href={links.instagram} className="p-3 border border-zinc-800 text-zinc-400 hover:text-pink-400 hover:border-pink-500 transition-all hover:-translate-y-1">
            <Instagram size={20} />
          </a>
          <a href={links.x} className="p-3 border border-zinc-800 text-zinc-400 hover:text-sky-400 hover:border-sky-500 transition-all hover:-translate-y-1">
            <Twitter size={20} />
          </a>
          {/* <a href="#" title="Leetcode" className="p-3 border border-zinc-800 text-zinc-400 hover:text-yellow-400 hover:border-yellow-500 transition-all hover:-translate-y-1">
            <Code size={20} />
          </a> */}
          <a href={links.snapchat} title="Snapchat" className="p-3 border border-zinc-800 text-zinc-400 hover:text-yellow-200 hover:border-yellow-300 transition-all hover:-translate-y-1">
            <Ghost size={20} />
          </a>
        </div>
        <p className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest">© {new Date().getFullYear()} SIMARPRIT VIRDI</p>
      </footer>
    </div>
  );
};

export default App;