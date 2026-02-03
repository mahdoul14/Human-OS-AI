
import React from 'react';
import { ThemeMode } from '../types';
import { TESTIMONIALS } from '../constants';

interface TestimonialsProps {
  theme: ThemeMode;
}

const Testimonials: React.FC<TestimonialsProps> = ({ theme }) => {
  const isHuman = theme === 'human';

  return (
    <section>
       <div className="mb-20">
        <p className={`font-mono text-xs uppercase tracking-[0.3em] mb-4 ${isHuman ? 'text-zinc-500' : 'text-[#00f2ff]'}`}>
          Section 04 // Validation
        </p>
        <h2 className="font-space text-5xl md:text-6xl font-bold tracking-tighter text-center">Executive Sentiment.</h2>
      </div>

      <div className="flex overflow-x-auto gap-8 pb-10 snap-x no-scrollbar">
        {TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx}
            className={`flex-none w-[350px] md:w-[450px] snap-center p-10 rounded-3xl ${
              isHuman ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200 shadow-xl'
            }`}
          >
            <span className={`text-6xl font-space font-bold ${isHuman ? 'text-zinc-700' : 'text-zinc-200'}`}>"</span>
            <p className="text-xl italic font-light leading-relaxed mb-10 -mt-6">
              {t.content}
            </p>
            <div>
              <p className="font-space font-bold text-xl uppercase tracking-tighter">{t.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
