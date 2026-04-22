import React, { useState, useEffect, useRef } from 'react';
import { ThemeMode } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

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
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const { ref: agencyRef, isVisible: agencyVisible } = useScrollReveal(0.1, 200);
  const { ref: academyRef, isVisible: academyVisible } = useScrollReveal(0.1, 400);

  return (
    <section className="pt-20 pb-40 relative z-20">
      <div ref={headerRef} className={`mb-12 reveal-base ${headerVisible ? 'reveal-visible' : ''}`}>
        <p
          key={`status-${theme}`}
          className={`font-mono text-xs tracking-[0.3em] uppercase mb-4 transition-colors duration-500 ${isHuman ? 'text-zinc-500' : 'text-[#00f2ff]'}`}
        >
          {isHuman ? (
            <ScrambleText text="Status: Operational System 3.0" duration={400} />
          ) : (
            <ScrambleText text="Status: Neural Architecture Engaged" duration={400} />
          )}
        </p>

        <h1
          key={`heading-${theme}`}
          className="font-space text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] transition-all duration-500"
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
              <span className="text-[#00f2ff]/40">
                <ScrambleText text="for the " delay={200} duration={600} />
              </span>
              <ScrambleText text="Infinite Scale." delay={400} duration={600} />
            </>
          )}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div
          ref={agencyRef}
          key={`agency-${theme}`}
          className={`space-y-6 reveal-base ${agencyVisible ? 'reveal-visible' : ''} p-8 lg:p-10 rounded-[2rem] transition-all duration-500 ${isHuman ? 'glass-panel border border-white/10' : 'bg-white/80 backdrop-blur-2xl border border-white/40 shadow-xl'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`h-[1px] w-12 transition-all duration-500 ${isHuman ? 'bg-white' : 'bg-[#00f2ff]'}`} />
            <span className="font-space font-bold text-xl uppercase tracking-widest">
              <ScrambleText text="The Agency" duration={500} />
            </span>
          </div>
          <h2 className="text-xl md:text-3xl font-medium leading-tight transition-all duration-500 min-h-[5rem]">
            {isHuman ? (
              <ScrambleText text="Scale your company without increasing headcount. We engineer autonomic infrastructures." duration={800} />
            ) : (
              <ScrambleText text="Eliminate operational friction. We build self-evolving architectures that handle complexity." duration={800} />
            )}
          </h2>
          <button className={`px-8 py-4 w-full md:w-auto rounded-full font-bold transition-all duration-300 border overflow-hidden relative group transform hover:scale-105 active:scale-95 ${isHuman ? 'bg-white text-black border-white hover:bg-zinc-200 shadow-lg' : 'bg-black text-[#00f2ff] border-[#00f2ff] hover:bg-zinc-900 shadow-[0_0_20px_-5px_rgba(0,242,255,0.3)]'}`}>
            <span className="relative z-10">
              {isHuman ? "Begin Systems Audit" : "Initiate Deployment"}
            </span>
          </button>
        </div>

        <div
          ref={academyRef}
          key={`academy-${theme}`}
          className={`space-y-6 reveal-base ${academyVisible ? 'reveal-visible' : ''} p-8 lg:p-10 rounded-[2rem] transition-all duration-500 ${isHuman ? 'glass-panel border border-zinc-700/50' : 'bg-zinc-100/60 backdrop-blur-2xl border border-white/80 shadow-md'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`h-[1px] w-12 transition-all duration-500 ${isHuman ? 'bg-zinc-500' : 'bg-zinc-300'}`} />
            <span className="font-space font-bold text-xl uppercase tracking-widest text-zinc-500">
              <ScrambleText text="The Academy" duration={500} />
            </span>
          </div>
          <h2 className="text-xl md:text-3xl font-medium leading-tight transition-all duration-500 min-h-[5rem] text-zinc-400">
            {isHuman ? (
              <ScrambleText text="Future-proof your leadership. Master the architecture of AI performance." duration={800} />
            ) : (
              <ScrambleText text="Upgrade your mental hardware. Systematize elite performance using intelligence." duration={800} />
            )}
          </h2>
          <button className={`px-8 py-4 w-full md:w-auto rounded-full font-bold transition-all duration-300 border transform hover:scale-105 active:scale-95 shadow-sm ${isHuman ? 'border-zinc-500 text-zinc-300 hover:bg-white hover:text-black hover:border-white' : 'border-[#00f2ff]/30 text-zinc-400 hover:border-[#00f2ff] hover:text-[#00f2ff] hover:bg-black hover:shadow-lg'}`}>
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
