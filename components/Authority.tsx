
import React from 'react';
import { ThemeMode } from '../types';

interface AuthorityProps {
  theme: ThemeMode;
}

const Authority: React.FC<AuthorityProps> = ({ theme }) => {
  const isHuman = theme === 'human';

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background element to replace image weight */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-5 pointer-events-none transition-all duration-1000 ${isHuman ? 'text-white' : 'text-[#00f2ff]'}`}>
         <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
         </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-16">
        <div className="space-y-6">
          <p className={`font-mono text-xs uppercase tracking-[0.3em] transition-colors duration-500 ${isHuman ? 'text-zinc-500' : 'text-[#00f2ff]'}`}>
            Section 02 // Systems Architecture
          </p>
          <h2 className="font-space text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] transition-all duration-500">
            The Framework <br /> for Performance.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-xl md:text-3xl opacity-80 leading-relaxed font-light tracking-tight transition-all duration-500">
            We don't just implement software. We engineer the convergence of human intent and algorithmic speed. Most firms focus on flashy tools; we focus on the <span className={`font-bold italic ${isHuman ? 'text-white' : 'text-black'}`}>Systems Architecture</span> required to lead in the exponential era.
          </p>
          
          <div className={`w-24 h-[1px] mx-auto ${isHuman ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-8">
            <div className="space-y-4 group">
              <p className={`font-space text-6xl md:text-8xl font-bold tracking-tighter transition-all duration-500 ${isHuman ? 'text-white' : 'text-zinc-900'}`}>$500M+</p>
              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Efficiency Value Managed</p>
                <div className={`h-[2px] w-0 group-hover:w-full transition-all duration-700 mx-auto ${isHuman ? 'bg-zinc-500' : 'bg-[#00f2ff]'}`} />
              </div>
            </div>
            <div className="space-y-4 group">
              <p className={`font-space text-6xl md:text-8xl font-bold tracking-tighter transition-all duration-500 ${isHuman ? 'text-white' : 'text-zinc-900'}`}>94%</p>
              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Operational Scaling Rate</p>
                <div className={`h-[2px] w-0 group-hover:w-full transition-all duration-700 mx-auto ${isHuman ? 'bg-zinc-500' : 'bg-[#00f2ff]'}`} />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12">
          <p className="font-space font-bold text-xl uppercase italic tracking-tighter opacity-40">Logic Over Noise.</p>
        </div>
      </div>
    </section>
  );
};

export default Authority;
