
import React, { useState } from 'react';
import { ThemeMode } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import OffersGrid from './components/OffersGrid';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('human');

  const toggleTheme = () => {
    setTheme(prev => prev === 'human' ? 'ai' : 'human');
  };

  const isHuman = theme === 'human';

  return (
    <div className={`relative min-h-screen transition-theme font-inter selection:bg-[#00f2ff] selection:text-black overflow-hidden ${isHuman ? 'bg-[#050505] text-white' : 'bg-white text-zinc-900'}`}>
      
      {/* LIVING BACKGROUNDS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {isHuman ? (
          <div className="relative w-full h-full overflow-hidden transition-theme duration-1000">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-zinc-700/20 rounded-full blur-[120px] animate-orbit-1" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-800/20 rounded-full blur-[120px] animate-orbit-2" />
            <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-zinc-600/10 rounded-full blur-[120px] animate-orbit-3" />
          </div>
        ) : (
          <div className="w-full h-full dot-matrix opacity-40 transition-theme duration-1000" />
        )}
      </div>

      <div className="relative z-10">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        
        <main className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <Hero theme={theme} />
        </main>

        <Partners theme={theme} />
        
        <main className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
          <div id="offers" className="py-32">
            <OffersGrid theme={theme} />
          </div>

          <div id="social" className="py-32">
            <Testimonials theme={theme} />
          </div>

          <div id="faq" className="py-32">
            <FAQ theme={theme} />
          </div>
        </main>

        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default App;
