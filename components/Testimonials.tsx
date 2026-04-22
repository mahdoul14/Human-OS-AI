import React, { useRef } from 'react';
import { ThemeMode } from '../types';
import { TESTIMONIALS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TestimonialsProps {
  theme: ThemeMode;
}

const Testimonials: React.FC<TestimonialsProps> = ({ theme }) => {
  const isHuman = theme === 'human';
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div ref={headerRef} className={`mb-16 flex flex-col md:flex-row justify-between items-end gap-6 reveal-base ${headerVisible ? 'reveal-visible' : ''}`}>
        <div className="w-full">
          <p className={`font-mono text-xs uppercase tracking-[0.3em] mb-4 ${isHuman ? 'text-zinc-500' : 'text-[#00f2ff]'}`}>
            Section 04 // Validation
          </p>
          <div className="flex justify-between items-end w-full">
            <h2 className="font-space text-5xl md:text-6xl font-bold tracking-tighter">Executive Sentiment.</h2>
            {/* Navigation Arrows for Desktop */}
            <div className="hidden md:flex gap-4">
              <button
                onClick={() => scroll('left')}
                className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 transform hover:scale-110 active:scale-95 ${isHuman ? 'border-zinc-700 hover:bg-white hover:text-black hover:border-white text-zinc-400' : 'border-zinc-300 hover:bg-[#00f2ff] hover:text-black hover:border-[#00f2ff] text-zinc-400'}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 transform hover:scale-110 active:scale-95 ${isHuman ? 'border-zinc-700 hover:bg-white hover:text-black hover:border-white text-zinc-400' : 'border-zinc-300 hover:bg-[#00f2ff] hover:text-black hover:border-[#00f2ff] text-zinc-400'}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-8 pb-14 pt-4 snap-x no-scrollbar scroll-smooth -mx-6 px-6 sm:-mx-12 sm:px-12 lg:-mx-20 lg:px-20"
      >
        {TESTIMONIALS.map((t, idx) => (
          <div
            key={idx}
            className={`flex-none w-[85vw] sm:w-[400px] md:w-[480px] snap-center p-8 md:p-12 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${isHuman ? 'glass-panel border-white/5' : 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
              }`}
          >
            <span className={`text-6xl md:text-7xl font-space font-black leading-none ${isHuman ? 'text-zinc-800' : 'text-[#00f2ff]/30'}`}>"</span>
            <p className="text-lg md:text-2xl italic font-light leading-relaxed mb-12 -mt-4">
              {t.content}
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-space font-bold text-lg md:text-xl uppercase tracking-tighter">{t.name}</p>
              <p className="font-mono text-[9px] md:text-[11px] uppercase tracking-widest opacity-50">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
