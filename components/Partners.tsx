import React from 'react';
import { ThemeMode } from '../types';
import { LogoCloud } from './ui/logo-cloud';

interface PartnersProps {
  theme: ThemeMode;
}

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia Logo" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase Logo" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso Logo" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub Logo" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI Logo" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk Logo" },
];

const Partners: React.FC<PartnersProps> = ({ theme }) => {
  const isHuman = theme === 'human';

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className={`
        absolute inset-0 transition-all duration-1000
        ${isHuman
          ? 'bg-white/95 border-y border-white/20 backdrop-blur-3xl shadow-2xl'
          : 'bg-white/80 border-y border-zinc-100 backdrop-blur-2xl shadow-sm'
        }
      `} />

      {!isHuman && (
        <div className="absolute inset-0 dot-matrix opacity-[0.06] pointer-events-none mix-blend-multiply transition-opacity duration-1000" />
      )}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <h2 className="mb-10 text-center font-space font-medium text-xl tracking-tight md:text-3xl transition-colors duration-500 text-black">
          <span className="opacity-50">Trusted by experts.</span>
          <br />
          <span className="font-bold">Used by the leaders.</span>
        </h2>

        <div className="mx-auto my-5 h-px max-w-sm transition-colors duration-500 bg-black/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} isHuman={isHuman} />

        <div className="mt-5 mx-auto h-px max-w-[800px] w-full transition-colors duration-500 bg-black/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
};

export default Partners;