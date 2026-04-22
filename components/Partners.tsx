import React from 'react';
import { ThemeMode } from '../types';
import { SiOpenai, SiAnthropic, SiZapier, SiGithub } from 'react-icons/si';

interface PartnersProps {
  theme: ThemeMode;
}

const Partners: React.FC<PartnersProps> = ({ theme }) => {
  const isHuman = theme === 'human';

  const partners = [
    {
      name: 'OpenAI',
      icon: SiOpenai,
    },
    {
      name: 'Anthropic',
      icon: SiAnthropic,
    },
    {
      name: 'Zapier',
      icon: SiZapier,
    },
    {
      name: 'GitHub',
      icon: SiGithub,
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* Dynamic Background Layer */}
      <div className={`
        absolute inset-0 transition-all duration-1000
        ${isHuman
          ? 'bg-white/5 border-y border-white/10 backdrop-blur-3xl shadow-[inset_0_0_100px_rgba(255,255,255,0.03)]'
          : 'bg-white/80 border-y border-zinc-100 backdrop-blur-2xl shadow-sm'
        }
      `} />

      {/* Subtle Dot Matrix for AI Mode Background */}
      {!isHuman && (
        <div className="absolute inset-0 dot-matrix opacity-[0.06] pointer-events-none mix-blend-multiply transition-opacity duration-1000" />
      )}

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center gap-16">

          {/* Enhanced Animated Banner */}
          <div className={`
            px-10 py-2.5 rounded-full transition-all duration-700 transform cursor-default
            ${isHuman
              ? 'bg-white text-black animate-pulse-white-glow'
              : 'bg-black text-[#00f2ff] border border-[#00f2ff]/20 animate-bob-cyan-glow'
            }
          `}>
            <span className="text-[11px] font-black tracking-[0.4em] uppercase whitespace-nowrap">
              Orchestrated by
            </span>
          </div>

          {/* Reliable React Icons Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
            {partners.map((partner) => {
              const Icon = partner.icon;
              return (
                <div
                  key={partner.name}
                  className="transition-all duration-500 group cursor-default"
                  title={partner.name}
                >
                  <div className={`
                  p-7 rounded-[3rem] transition-all duration-700 transform group-hover:-translate-y-4 group-hover:scale-105 flex items-center justify-center
                  ${isHuman
                      ? 'bg-white/5 border border-white/10 shadow-xl group-hover:bg-white/10 group-hover:shadow-white/5'
                      : 'bg-white group-hover:bg-zinc-50 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] shadow-lg border border-black/5'
                    }
                `}>
                    <Icon className={`h-10 w-10 md:h-12 md:w-12 transition-all duration-500 ${isHuman ? 'text-white' : 'text-zinc-900 group-hover:text-black'}`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;