import React from 'react';
import { ThemeMode } from '../types';

interface PartnersProps {
  theme: ThemeMode;
}

const Partners: React.FC<PartnersProps> = ({ theme }) => {
  const isHuman = theme === 'human';

  const partners = [
    {
      name: 'OpenAI',
      path: "M22.28 12c0-2.048-1.356-3.846-3.387-4.192l-.528-.1V3.03l-.445.223A12.04 12.04 0 0 0 12 1.667 12.04 12.04 0 0 0 4.08 4.92l-.445-.223v4.678l-.528.1C1.076 9.82.28 11.618.28 13.667c0 2.048 1.356 3.846 3.387 4.192l.528.1v4.678l.445-.223A12.04 12.04 0 0 0 12 22.333a12.04 12.04 0 0 0 7.92-3.253l.445.223v-4.678l.528-.1c2.031-.346 3.387-2.144 3.387-4.192zm-12.28-7.33l1.247.623L12 4.414l.753.879 1.247-.623c.31-.155.602-.275.875-.36a10.61 10.61 0 0 1-2.875 1.04v1.833l-.75-.375-.75.375V5.35a10.61 10.61 0 0 1-2.875-1.04c.273.085.565.205.875.36zm-4.73 3.673l.53-.1v-2.02a10.61 10.61 0 0 1 1.04-2.875c-.085.273-.205.565-.36.875l-.623 1.247.879.753-.879.753L4.23 8.127l-.1.53c-.346 2.031-2.144 3.387-4.192 3.387-.14 0-.28 0-.419-.015a10.63 10.63 0 0 1 1.03-3.048c1.373-.24 2.766-.453 4.172-.638zm1.04 11.054l-.879-.753-.623-1.247c-.155-.31-.275-.602-.36-.875a10.61 10.61 0 0 1 1.04 2.875v2.02l.53.1c2.031.346 3.387 2.144 3.387 4.192 0 .14 0 .28-.015.419a10.63 10.63 0 0 1-3.048-1.03c-.24-1.373-.453-2.766-.638-4.172l.006-.431zM12 20.354l-.753-.879-1.247.623c-.31.155-.602.275-.875.36a10.61 10.61 0 0 1 2.875-1.04v-1.833l.75.375.75-.375v1.833a10.61 10.61 0 0 1 2.875 1.04c-.273-.085-.565-.205-.875-.36l-1.247-.623L12 20.354zm6.73-3.673l-.53.1v2.02c-.34.996-.7 1.956-1.04 2.875.085-.273.205-.565.36-.875l.623-1.247-.879-.753.879-.753.623-1.247.1-.53c.346-2.031 2.144-3.387 4.192-3.387.14 0 .28 0 .419.015a10.63 10.63 0 0 1-1.03 3.048c-1.373.24-2.766.453-4.172.638zm-.01-7.008l.879.753.623 1.247c.155.31.275.602.36.875a10.61 10.61 0 0 1-1.04-2.875v-2.02l-.53-.1c-2.031-.346-3.387-2.144-3.387-4.192 0-.14 0-.28.015-.419a10.63 10.63 0 0 1 3.048 1.03c.24 1.373.453 2.766.638 4.172l-.006.431z",
    },
    {
      name: 'Anthropic',
      path: "M17.143 0h-3.429L8.571 5.143 3.429 0H0l6.857 6.857L0 13.714h3.429l5.142-5.143 5.143 5.143h3.429L10.286 6.857 17.143 0z",
    },
    {
      name: 'Zapier',
      path: "M21.176 10.428l-8.496-8.496a.916.916 0 0 0-1.294 0L2.88 10.428a.916.916 0 0 0 0 1.294l8.496 8.496a.916.916 0 0 0 1.294 0l8.496-8.496a.916.916 0 0 0 0-1.294z",
    },
    {
      name: 'GitHub',
      path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
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
          
          {/* Reliable SVG Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="transition-all duration-500 group cursor-default"
                title={partner.name}
              >
                <div className={`
                  p-7 rounded-[3rem] transition-all duration-700 transform group-hover:-translate-y-4 group-hover:scale-105
                  ${isHuman 
                    ? 'bg-white/5 border border-white/10 shadow-xl group-hover:bg-white/10 group-hover:shadow-white/5' 
                    : 'bg-white group-hover:bg-zinc-50 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] shadow-lg border border-black/5'
                  }
                `}>
                  <svg 
                    viewBox="0 0 24 24" 
                    className={`h-10 md:h-12 w-auto transition-all duration-500 fill-current ${isHuman ? 'text-white' : 'text-zinc-900'}`}
                  >
                    <path d={partner.path} />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;