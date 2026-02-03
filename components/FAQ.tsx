
import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { FAQS } from '../constants';

interface FAQProps {
  theme: ThemeMode;
}

const FAQ: React.FC<FAQProps> = ({ theme }) => {
  const isHuman = theme === 'human';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="mb-20">
        <p className={`font-mono text-xs uppercase tracking-[0.3em] mb-4 transition-colors duration-500 ${isHuman ? 'text-zinc-500' : 'text-[#00f2ff]'}`}>
          Section 05 // Clarity
        </p>
        <h2 className="font-space text-5xl md:text-6xl font-bold tracking-tighter">Strategic Inquiries.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0">
        {FAQS.map((item, idx) => (
          <div 
            key={idx}
            className={`group border-b transition-all duration-500 ${
              isHuman 
                ? 'border-zinc-800 hover:border-zinc-600' 
                : 'border-zinc-100 hover:border-zinc-300'
            }`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full py-8 lg:py-10 flex justify-between items-center text-left outline-none"
            >
              <span className={`
                font-space text-lg lg:text-xl font-medium pr-8 transition-all duration-500
                ${isHuman 
                  ? 'text-zinc-300 group-hover:text-white' 
                  : 'text-zinc-600 group-hover:text-black'
                }
                ${openIndex === idx ? (isHuman ? 'text-white' : 'text-black') : ''}
              `}>
                {item.question}
              </span>
              <div className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
                <span className={`absolute h-0.5 w-4 bg-current transition-all duration-500 ${isHuman ? 'text-zinc-500' : 'text-zinc-400'} ${openIndex === idx ? 'rotate-0 !text-[#00f2ff]' : 'rotate-0'}`} />
                <span className={`absolute w-0.5 h-4 bg-current transition-all duration-500 ${isHuman ? 'text-zinc-500' : 'text-zinc-400'} ${openIndex === idx ? 'rotate-90 scale-0 opacity-0' : 'rotate-0'}`} />
              </div>
            </button>
            
            {/* Modern height transition using grid-template-rows */}
            <div className={`
              grid transition-all duration-500 ease-in-out
              ${openIndex === idx ? 'grid-rows-[1fr] opacity-100 pb-8 lg:pb-10' : 'grid-rows-[0fr] opacity-0'}
            `}>
              <div className="overflow-hidden">
                <p className={`
                  text-lg leading-relaxed font-light transition-all duration-700 delay-100
                  ${isHuman ? 'text-zinc-400' : 'text-zinc-500'}
                  ${openIndex === idx ? 'translate-y-0' : '-translate-y-4'}
                `}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
