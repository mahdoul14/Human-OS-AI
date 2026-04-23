import React, { useRef, useState, useEffect } from 'react';
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const AUTOPLAY_DURATION = 6000;

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const card = container.children[0] as HTMLElement;
      if (!card) return;

      const itemWidth = card.offsetWidth;
      const gap = 32;
      const index = Math.round(scrollPosition / (itemWidth + gap));

      setActiveIndex(Math.min(Math.max(index, 0), TESTIMONIALS.length - 1));
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = 50;
    const step = (interval / AUTOPLAY_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNextSlide();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, isDragging, activeIndex]);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        const offset = card.offsetLeft;
        container.scrollTo({ left: offset - container.clientWidth / 2 + card.clientWidth / 2, behavior: 'smooth' });
      }
    }
  };

  const handleNextSlide = () => {
    const nextIndex = activeIndex >= TESTIMONIALS.length - 1 ? 0 : activeIndex + 1;
    scrollToCard(nextIndex);
  };

  const handlePrevSlide = () => {
    const prevIndex = activeIndex <= 0 ? TESTIMONIALS.length - 1 : activeIndex - 1;
    scrollToCard(prevIndex);
  };

  const manualScroll = (direction: 'left' | 'right') => {
    setProgress(0);
    if (direction === 'left') {
      handlePrevSlide();
    } else {
      handleNextSlide();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    if (!scrollContainerRef.current) return;
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    // Filter out empties just in case, mapped to Initials
    return parts.length > 1 ? `${parts[0][0]}${parts[1][0]}` : `${parts[0][0]}`;
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => { setIsPaused(false); handleMouseLeave(); }}
    >
      <div ref={headerRef} className={`mb-16 flex flex-col md:flex-row justify-between items-end gap-6 reveal-base ${headerVisible ? 'reveal-visible' : ''}`}>
        <div className="w-full">
          <p className={`font-mono text-xs uppercase tracking-[0.3em] mb-4 ${isHuman ? 'text-zinc-500' : 'text-[#00f2ff]'}`}>
            Section 04 // Validation
          </p>
          <div className="flex justify-between items-end w-full">
            <h2 className="font-space text-5xl md:text-6xl font-bold tracking-tighter">What users say.</h2>
            <div className="hidden md:flex gap-4 items-center">
              <div className={`h-[2px] w-16 bg-black/10 rounded-full overflow-hidden mr-4 ${!isHuman && 'bg-white/10'}`}>
                <div
                  className={`h-full transition-all ease-linear ${isHuman ? 'bg-zinc-800' : 'bg-[#00f2ff]'}`}
                  style={{ width: `${progress}%`, transitionDuration: '50ms' }}
                />
              </div>
              <button
                onClick={() => manualScroll('left')}
                className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 transform hover:scale-110 active:scale-95 ${isHuman ? 'border-zinc-700 hover:bg-white hover:text-black hover:border-white text-zinc-400' : 'border-zinc-300 hover:bg-[#00f2ff] hover:text-black hover:border-[#00f2ff] text-zinc-400'}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => manualScroll('right')}
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
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`flex overflow-x-auto gap-8 pb-14 pt-4 no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-[calc(50vw-200px)] lg:-mx-20 lg:px-[calc(50vw-240px)] ${!isDragging ? 'snap-x scroll-smooth cursor-grab' : 'cursor-grabbing'}`}
      >
        {TESTIMONIALS.map((t, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div
              key={idx}
              onClick={() => {
                if (!isDragging) scrollToCard(idx);
              }}
              className={`flex-none w-[85vw] sm:w-[400px] md:w-[480px] snap-center p-8 md:p-12 rounded-[2.5rem] transition-all duration-700 select-none
               ${isHuman ? 'glass-panel border-white/5' : 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'}
               ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-40 hover:opacity-70 cursor-pointer'}
              `}
            >
              <span className={`text-6xl md:text-7xl font-space font-black leading-none transition-colors duration-500 ${isHuman ? (isActive ? 'text-zinc-800' : 'text-zinc-900') : (isActive ? 'text-[#00f2ff]/30' : 'text-zinc-300')}`}>"</span>
              <p className="text-lg md:text-2xl italic font-light leading-relaxed mb-12 -mt-4 pointer-events-none">
                {t.content}
              </p>
              <div className="flex items-center gap-4">
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full font-space font-bold text-sm tracking-tighter shadow-inner transition-all duration-500
                 ${isHuman ? 'bg-zinc-800 text-white' : 'bg-[#00f2ff]/20 text-[#00f2ff]'}
                 ${isActive && !isHuman ? 'shadow-[0_0_15px_-2px_#00f2ff] scale-110' : ''}`}>
                  <span className="z-10">{getInitials(t.name)}</span>
                  <div className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${isActive ? (isHuman ? 'border-zinc-500/50 scale-100' : 'border-[#00f2ff] scale-110 blur-[1px]') : 'border-transparent scale-90'}`} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className={`font-space font-bold text-lg md:text-xl uppercase tracking-tighter transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80'}`}>{t.name}</p>
                  <p className={`font-mono text-[9px] md:text-[11px] uppercase tracking-widest transition-opacity duration-500 ${isActive ? 'opacity-50' : 'opacity-30'}`}>{t.role}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Testimonials;
