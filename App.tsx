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
        <div className={`aurora-bg transition-opacity duration-1000 ${isHuman ? 'aurora-human' : ''}`} />
        {!isHuman && (
          <div className="absolute inset-0 dot-matrix opacity-40 transition-theme duration-1000 mix-blend-multiply" />
        )}
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <main className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-20">
          <Hero theme={theme} />
        </main>

        <Partners theme={theme} />

        <main className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-20">
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
