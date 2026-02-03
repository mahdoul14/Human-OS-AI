
import React from 'react';
import { ThemeMode } from '../types';
import { OFFERS } from '../constants';

interface OffersGridProps {
  theme: ThemeMode;
}

const OffersGrid: React.FC<OffersGridProps> = ({ theme }) => {
  const isHuman = theme === 'human';
  
  // Filter logic: Human = Academy, AI = Agency
  const filteredOffers = OFFERS.filter(offer => 
    isHuman ? offer.category === 'Academy' : offer.category === 'Agency'
  );

  return (
    <section>
      <div className="mb-20">
        <p className={`font-mono text-xs uppercase tracking-[0.3em] mb-4 transition-colors duration-500 ${isHuman ? 'text-zinc-500' : 'text-[#00f2ff]'}`}>
          {isHuman ? 'THE ACADEMY' : 'THE AGENCY'} // TRACK 01
        </p>
        <h2 className="font-space text-5xl md:text-6xl font-bold tracking-tighter">
          {isHuman ? 'Performance Mastery.' : 'Autonomous Infrastructure.'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 group/grid relative">
        {filteredOffers.map((offer, idx) => {
          const isMiddle = idx === 1;
          
          return (
            <div 
              key={idx}
              className={`
                relative rounded-3xl p-8 lg:p-12 min-h-[750px] flex flex-col justify-between 
                transition-all duration-500 ease-out group/card
                ${isHuman 
                  ? 'bg-zinc-900/40 border border-zinc-800 hover:border-zinc-300 hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.15)]' 
                  : 'bg-white/80 border border-zinc-200 hover:border-[#00f2ff] hover:shadow-[0_0_80px_-20px_rgba(0,242,255,0.4)] shadow-sm'
                } 
                backdrop-blur-md hover:backdrop-blur-none
                hover:scale-[1.05] hover:-translate-y-[12px] z-10 hover:z-20
                group-hover/grid:opacity-50 hover:!opacity-100 
                group-hover/grid:blur-[4px] hover:!blur-none
              `}
            >
              {isMiddle && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                  <div className={`
                    px-5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap border
                    transition-all duration-500
                    ${isHuman 
                      ? 'bg-zinc-200 text-black border-white shadow-lg' 
                      : 'bg-black text-[#00f2ff] border-[#00f2ff] animate-pulse-cyan'
                    }
                  `}>
                    System Recommended
                  </div>
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-12 lg:mb-16">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
                    isHuman ? 'border-zinc-700 text-zinc-500' : 'border-zinc-300 text-zinc-400'
                  }`}>
                    {offer.category}
                  </span>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded border transition-colors duration-500 ${isHuman ? 'text-[#00f2ff] border-[#00f2ff]/30' : 'text-zinc-500 border-zinc-200'}`}>
                    {offer.status}
                  </span>
                </div>
                
                <h3 className="font-space text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 transition-all group-hover/card:tracking-tight leading-tight">
                  {offer.title}
                </h3>
                <p className="text-lg lg:text-xl opacity-70 font-light leading-relaxed mb-10">
                  {offer.description}
                </p>

                {/* FEATURE BULLETS */}
                <ul className="space-y-4 mb-10">
                  {offer.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500 ${isHuman ? 'bg-zinc-600' : 'bg-[#00f2ff]'}`} />
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
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-30 italic">
                      Expected Outcome: {offer.roi}
                    </span>
                    <div className="flex items-baseline gap-3">
                       <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">Investment:</span>
                       <span className="font-space text-2xl lg:text-3xl font-bold tracking-tighter">{offer.price}</span>
                    </div>
                  </div>
                  
                  <button className={`
                    relative w-full py-4 rounded-full font-bold transition-all uppercase tracking-widest text-xs overflow-hidden
                    ${isHuman 
                      ? 'bg-white text-black hover:bg-zinc-200' 
                      : 'bg-black text-white hover:bg-zinc-900'
                    }
                  `}>
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 z-0 opacity-0 group-hover/card:opacity-20 transition-opacity">
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-shimmer`} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OffersGrid;
