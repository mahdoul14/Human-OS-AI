
import React, { useState, useEffect, useRef } from 'react';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
}

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#!?@#$%^&*()[]{}';

const ScrambleText: React.FC<{ text: string; delay?: number; duration?: number }> = ({ text, delay = 0, duration = 800 }) => {
  const [displayText, setDisplayText] = useState(text);
  const timerRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const totalFrames = 30; // Number of scramble steps
    
    // Reset state to initial text length but scrambled
    const initialScramble = text.split('').map(() => SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]).join('');
    setDisplayText(initialScramble);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;

      if (progress < delay) {
        frameRef.current = requestAnimationFrame(step);
        return;
      }

      const timeInside = progress - delay;
      const ratio = Math.min(timeInside / duration, 1);
      
      const currentText = text.split('').map((char, index) => {
        if (char === ' ' || char === '\n') return char;
        if (ratio > (index / text.length)) return char;
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }).join('');

      setDisplayText(currentText);

      if (ratio < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay, duration]);

  return <>{displayText}</>;
};

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const isHuman = theme === 'human';

  return (
    <section className="pt-20 pb-40 relative">
      <div className="mb-12">
        <p 
          key={`status-${theme}`} 
          className={`font-mono text-xs tracking-[0.3em] uppercase mb-4 transition-colors duration-500 animate-reveal ${isHuman ? 'text-zinc-500' : 'text-[#00f2ff]'}`}
        >
          {isHuman ? (
            <ScrambleText text="Status: Operational System 3.0" duration={400} />
          ) : (
            <ScrambleText text="Status: Neural Architecture Engaged" duration={400} />
          )}
        </p>
        
        <h1 
          key={`heading-${theme}`}
          className="font-space text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] transition-all duration-500 animate-reveal"
        >
          {isHuman ? (
            <>
              <ScrambleText text="The Operating System" duration={600} /> <br />
              <span className="text-zinc-700">
                <ScrambleText text="for the " delay={200} duration={600} />
              </span>
              <ScrambleText text="Exponential Era." delay={400} duration={600} />
            </>
          ) : (
            <>
              <ScrambleText text="Autonomic Speed" duration={600} /> <br />
              <span className="text-zinc-400">
                <ScrambleText text="for the " delay={200} duration={600} />
              </span>
              <ScrambleText text="Infinite Scale." delay={400} duration={600} />
            </>
          )}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* The Agency Card */}
        <div 
          key={`agency-${theme}`}
          className="space-y-6 animate-reveal [animation-delay:200ms]"
          style={{ animationFillMode: 'both' }}
        >
          <div className="flex items-center gap-3">
             <div className={`h-[1px] w-12 transition-all duration-500 ${isHuman ? 'bg-white' : 'bg-[#00f2ff]'}`} />
             <span className="font-space font-medium text-xl uppercase tracking-widest">
               <ScrambleText text="The Agency" duration={500} />
             </span>
          </div>
          <h2 className="text-3xl font-medium leading-tight transition-all duration-500 min-h-[5rem]">
            {isHuman ? (
              <ScrambleText text="Scale your company without increasing the headcount. We engineer your autonomic infrastructure." duration={800} />
            ) : (
              <ScrambleText text="Eliminate operational friction. We build self-evolving architectures that handle complexity without fatigue." duration={800} />
            )}
          </h2>
          <button className={`px-8 py-4 rounded-full font-bold transition-theme border overflow-hidden relative group ${isHuman ? 'bg-white text-black border-white hover:bg-zinc-200' : 'bg-black text-[#00f2ff] border-[#00f2ff] hover:bg-zinc-900 shadow-[0_0_20px_-5px_rgba(0,242,255,0.3)]'}`}>
            <span className="relative z-10">
              {isHuman ? "Begin Systems Audit" : "Initiate System Deployment"}
            </span>
          </button>
        </div>

        {/* The Academy Card */}
        <div 
          key={`academy-${theme}`}
          className="space-y-6 animate-reveal [animation-delay:400ms]"
          style={{ animationFillMode: 'both' }}
        >
          <div className="flex items-center gap-3">
             <div className={`h-[1px] w-12 transition-all duration-500 ${isHuman ? 'bg-white' : 'bg-[#00f2ff]'}`} />
             <span className="font-space font-medium text-xl uppercase tracking-widest">
               <ScrambleText text="The Academy" duration={500} />
             </span>
          </div>
          <h2 className="text-3xl font-medium leading-tight transition-all duration-500 min-h-[5rem]">
            {isHuman ? (
              <ScrambleText text="Future-proof your leadership. Master the architecture of AI performance in 90 days." duration={800} />
            ) : (
              <ScrambleText text="Upgrade your mental hardware. Systematize elite performance using the power of integrated intelligence." duration={800} />
            )}
          </h2>
          <button className={`px-8 py-4 rounded-full font-bold transition-theme border ${isHuman ? 'border-zinc-500 hover:bg-white hover:text-black' : 'border-[#00f2ff]/30 text-zinc-400 hover:border-[#00f2ff] hover:text-[#00f2ff] hover:bg-black'}`}>
             <span className="relative z-10">
              {isHuman ? "Secure Your Slot" : "Upload Knowledge Base"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
