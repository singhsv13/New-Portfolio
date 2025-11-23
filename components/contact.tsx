import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 px-4 max-w-4xl mx-auto scroll-mt-28">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 uppercase tracking-wider">
          <Mail className="text-cyan-500" />
          Initialize Connection
        </h2>
        <div className="h-0.5 w-24 bg-cyan-500 mt-4 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      </div>

      <div className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800 p-8 md:p-12 relative overflow-hidden">
        {/* Decorative Scan line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20 animate-pulse"></div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-mono text-cyan-500 uppercase tracking-widest">/User_Name</label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
                className="w-full bg-zinc-950 border-b border-zinc-800 px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:bg-zinc-900/50 transition-all placeholder-zinc-700 rounded-none"
                placeholder="ENTER IDENTIFIER"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono text-cyan-500 uppercase tracking-widest">/Comms_Channel</label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
                className="w-full bg-zinc-950 border-b border-zinc-800 px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:bg-zinc-900/50 transition-all placeholder-zinc-700 rounded-none"
                placeholder="EMAIL@DOMAIN.COM"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-mono text-cyan-500 uppercase tracking-widest">/Transmission_Data</label>
            <textarea
              id="message"
              required
              rows={5}
              value={formState.message}
              onChange={e => setFormState({...formState, message: e.target.value})}
              className="w-full bg-zinc-950 border-b border-zinc-800 px-4 py-4 text-white focus:outline-none focus:border-cyan-500 focus:bg-zinc-900/50 transition-all resize-none placeholder-zinc-700 rounded-none"
              placeholder="INPUT MESSAGE SEQUENCE..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className={`
              w-full py-5 font-bold tracking-[0.2em] uppercase text-sm transition-all duration-300 flex items-center justify-center gap-3 border rounded-none
              ${status === 'success' 
                ? 'bg-green-500/10 text-green-400 border-green-500' 
                : 'bg-cyan-500/5 text-cyan-500 border-cyan-500/30 hover:bg-cyan-500 hover:text-black hover:border-cyan-500'}
            `}
          >
            {status === 'submitting' ? (
              'Transmitting...'
            ) : status === 'success' ? (
              'Transmission Complete'
            ) : (
              <>
                Send Transmission <Send size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;