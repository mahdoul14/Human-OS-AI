import React, { useState, useEffect, useRef } from 'react';
import { ThemeMode } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeroProps {
  theme: ThemeMode;
  onSetTheme: (theme: ThemeMode) => void;
}

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#!?@#$%^&*()[]{}';

const ScrambleText: React.FC<{ text: string; delay?: number; duration?: number }> = ({ text, delay = 0, duration = 800 }) => {
  const [displayText, setDisplayText] = useState(text);
  const timerRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
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

const Hero: React.FC<HeroProps> = ({ theme, onSetTheme }) => {
  const isHuman = theme === 'human';
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const { ref: agencyRef, isVisible: agencyVisible } = useScrollReveal(0.1, 200);
  const { ref: academyRef, isVisible: academyVisible } = useScrollReveal(0.1, 400);

  return (
    <section className="pt-8 pb-40 relative z-20">

      {/* THEME SELECTOR PILL */}
      <div className="flex flex-col items-center justify-center mb-24 relative z-30">
        <div className={`relative inline-flex flex-col md:flex-row rounded-[2rem] md:rounded-full p-2 border shadow-2xl transition-all duration-500 overflow-hidden ${isHuman ? 'bg-zinc-100/50 backdrop-blur-md border-zinc-200' : 'bg-black/80 backdrop-blur-md border-[#00f2ff]/30 shadow-[0_0_50px_-15px_rgba(0,242,255,0.3)]'}`}>

          {/* Active Background Slide */}
          <div
            className={`absolute z-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-3xl md:rounded-full shadow-sm 
              ${isHuman
                ? 'bg-white/90 top-2 bottom-2 left-2 right-2 md:right-1/2'
                : 'bg-[#00f2ff] top-2 bottom-2 left-2 md:left-1/2 right-2'}`}
          />

          <button
            onClick={() => onSetTheme('human')}
            className={`relative z-10 px-6 py-6 md:px-8 md:py-4 flex flex-col items-center justify-center gap-2 transition-all duration-500 w-full md:w-72 
              ${isHuman ? 'text-black' : 'text-zinc-400 hover:text-white'}`}
          >
            <span className="font-bold text-sm md:text-base tracking-widest uppercase">The Academy</span>
            <span className="text-[10px] uppercase font-mono tracking-widest opacity-60">— For Leaders</span>
          </button>

          <button
            onClick={() => onSetTheme('ai')}
            className={`relative z-10 px-6 py-6 md:px-8 md:py-4 flex flex-col items-center justify-center gap-2 transition-all duration-500 w-full md:w-72 
              ${!isHuman ? 'text-black' : 'text-zinc-600 hover:text-black'}`}
          >
            <span className="font-bold text-sm md:text-base tracking-widest uppercase">The Agency</span>
            <span className="text-[10px] uppercase font-mono tracking-widest opacity-60">— For Operators</span>
          </button>
        </div>

        <p className={`mt-10 text-xs font-mono uppercase tracking-[0.4em] font-bold transition-colors duration-500 ${isHuman ? 'text-zinc-400' : 'text-[#00f2ff]/60'}`}>
          Choose your path
        </p>
      </div>

      <div ref={headerRef} className={`flex flex-col items-center text-center max-w-5xl mx-auto reveal-base ${headerVisible ? 'reveal-visible' : ''}`}>

        <h1
          key={`heading-${theme}`}
          className="font-space text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[1.05] transition-all duration-500 mb-8"
        >
          {isHuman ? (
            <ScrambleText text="Master AI Before It Masters Your Industry" duration={600} />
          ) : (
            <ScrambleText text="We Build the AI Infrastructure Your Business Runs On" duration={600} />
          )}
        </h1>

        <h2
          key={`subheading-${theme}`}
          className={`text-lg md:text-2xl leading-relaxed md:leading-relaxed max-w-4xl mb-14 transition-all duration-500 ${isHuman ? 'text-zinc-400' : 'text-zinc-400'}`}
        >
          {isHuman ? (
            <ScrambleText text="A 90-day performance academy for founders and operators who want to future-proof their leadership and reclaim 10+ hours a week." duration={800} delay={200} />
          ) : (
            <ScrambleText text="Human OS architects and deploys autonomous systems for operator-led teams — so you scale revenue without scaling headcount." duration={800} delay={200} />
          )}
        </h2>

        <div className="flex flex-col items-center gap-6 w-full relative z-40">
          <a
            href="https://calendly.com/adam-human-os-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden flex items-center justify-center px-10 py-5 rounded-full font-bold text-sm md:text-base tracking-widest transition-all duration-500 transform hover:-translate-y-1 active:scale-95 shadow-2xl border 
             ${isHuman
                ? 'bg-white text-black border-white hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]'
                : 'bg-black text-[#00f2ff] border-[#00f2ff]/60 hover:border-[#00f2ff] hover:bg-zinc-900 shadow-[0_0_30px_-5px_rgba(0,242,255,0.3)] hover:shadow-[0_0_50px_rgba(0,242,255,0.5)]'
              }`}
          >
            <span className="relative z-10 uppercase flex items-center gap-3">
              {isHuman ? "→ Secure Your Academy Slot" : "→ Book a Free Systems Audit"}
            </span>
          </a>

          <div className="flex items-center gap-3 mt-4 opacity-50 hover:opacity-80 transition-opacity duration-300">
            <div className={`w-2 h-2 rounded-full animate-pulse ${isHuman ? 'bg-white' : 'bg-[#00f2ff]'}`} />
            <p className="font-mono text-[9px] md:text-xs tracking-[0.2em] uppercase text-center">
              Trusted by 50+ founders and operators across Europe & the US
            </p>
            <div className={`w-2 h-2 rounded-full animate-pulse ${isHuman ? 'bg-white' : 'bg-[#00f2ff]'}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
