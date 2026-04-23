import React from 'react';
import { ThemeMode } from '../types';
import { OFFERS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface OffersGridProps {
  theme: ThemeMode;
}

const OfferCardItem = ({ offer, isMiddle, isHuman, idx }: any) => {
  const { ref, isVisible } = useScrollReveal(0.1, idx * 150);

  return (
    <div
      ref={ref}
      className={`
        reveal-base ${isVisible ? 'reveal-visible' : ''}
        relative rounded-[2.5rem] p-8 lg:p-12 min-h-[750px] flex flex-col justify-between 
        transition-all duration-500 ease-out group/card
        ${isHuman
          ? 'glass-panel border-white/5 hover:border-white/20 hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]'
          : 'bg-white/80 border border-white hover:border-[#00f2ff]/50 hover:shadow-[0_0_80px_-20px_rgba(0,242,255,0.3)] shadow-xl'
        } 
        backdrop-blur-xl hover:backdrop-blur-none
        hover:scale-[1.02] hover:-translate-y-[8px] z-10 hover:z-20
        group-hover/grid:opacity-60 hover:!opacity-100 
        group-hover/grid:blur-[2px] hover:!blur-none
      `}
    >
      {isMiddle && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
          <div className={`
            px-6 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase whitespace-nowrap border
            transition-all duration-500
            ${isHuman
              ? 'bg-zinc-200 text-black border-white shadow-xl'
              : 'bg-black text-[#00f2ff] border-[#00f2ff] shadow-[0_0_20px_rgba(0,242,255,0.5)]'
            }
          `}>
            System Recommended
          </div>
        </div>
      )}

      <div>
        <div className="flex justify-between items-start mb-10 lg:mb-14">
          <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase border ${isHuman ? 'border-zinc-700 text-zinc-400 bg-zinc-900/50' : 'border-zinc-200 text-zinc-500 bg-white/50'
            }`}>
            {offer.category}
          </span>
          <span className={`font-mono text-[9px] px-3 py-1 rounded border transition-colors duration-500 ${isHuman ? 'text-[#00f2ff] border-[#00f2ff]/30 bg-[#00f2ff]/10' : 'text-zinc-500 border-zinc-200 bg-zinc-50'}`}>
            {offer.status}
          </span>
        </div>

        <h3 className="font-space text-3xl lg:text-4xl font-extrabold mb-6 transition-all leading-tight">
          {offer.title}
        </h3>
        <p className="text-lg opacity-70 font-light leading-relaxed mb-10">
          {offer.description}
        </p>

        {/* FEATURE BULLETS */}
        <ul className="space-y-4 mb-10">
          {offer.features.map((feature: any, fIdx: number) => (
            <li key={fIdx} className="flex items-start gap-3">
              <div className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500 ${isHuman ? 'bg-zinc-500' : 'bg-[#00f2ff]'}`} />
              <span className="text-sm lg:text-base font-medium opacity-60 group-hover/card:opacity-90 transition-opacity">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto space-y-8 lg:space-y-10">
        <div className="space-y-2">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Primary Focus</p>
          <p className="text-sm font-medium opacity-80">{offer.outcome}</p>
        </div>

        <div className="pt-8 border-t border-zinc-800/10 space-y-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 italic">
              Expected Outcome: {offer.roi}
            </span>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">Investment:</span>
              <span className="font-space text-3xl lg:text-4xl font-bold tracking-tighter">{offer.price}</span>
            </div>
          </div>

          <a
            href="https://calendly.com/adam-human-os-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`
            block text-center relative w-full py-4 rounded-full font-bold transition-all uppercase tracking-widest text-xs overflow-hidden
            transform hover:translate-y-[-2px] active:scale-95 shadow-lg
            ${isHuman
                ? 'bg-white text-black hover:bg-zinc-200'
                : 'bg-black text-white hover:bg-zinc-900 border border-[#00f2ff]/20 hover:border-[#00f2ff]/50 hover:shadow-[0_0_30px_rgba(0,242,255,0.3)]'
              }
          `}>
            <span className="relative z-10">Get Started</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const OffersGrid: React.FC<OffersGridProps> = ({ theme }) => {
  const isHuman = theme === 'human';
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);

  const filteredOffers = OFFERS.filter(offer =>
    isHuman ? offer.category === 'Academy' : offer.category === 'Agency'
  );

  return (
    <section>
      <div ref={headerRef} className={`mb-20 reveal-base ${headerVisible ? 'reveal-visible' : ''}`}>
        <p className={`font-mono text-xs uppercase tracking-[0.3em] mb-4 transition-colors duration-500 ${isHuman ? 'text-zinc-500' : 'text-[#00f2ff]'}`}>
          {isHuman ? 'THE ACADEMY' : 'THE AGENCY'} // TRACK 01
        </p>
        <h2 className="font-space text-5xl md:text-7xl font-black tracking-tighter">
          {isHuman ? 'Performance Mastery.' : 'Autonomous Infrastructure.'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 group/grid relative z-20">
        {filteredOffers.map((offer, idx) => (
          <OfferCardItem key={idx} offer={offer} isMiddle={idx === 1} isHuman={isHuman} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default OffersGrid;
