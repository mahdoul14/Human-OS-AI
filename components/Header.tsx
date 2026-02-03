
import React from 'react';
import { ThemeMode } from '../types';
import { SOCIAL_LINKS } from '../constants';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const isHuman = theme === 'human';
  
  return (
    <header className="sticky top-0 z-50 py-6 px-6 lg:px-20 flex justify-between items-start backdrop-blur-md">
      <div className="flex items-center gap-2 pt-2">
        <span className="font-space font-bold text-2xl tracking-tighter transition-colors duration-500">HUMAN OS</span>
        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isHuman ? 'bg-zinc-500' : 'bg-[#00f2ff] shadow-[0_0_8px_#00f2ff]'}`} />
      </div>

      <nav className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest opacity-80 pt-3">
        <a href="#offers" className="hover:opacity-100 transition-opacity">Solutions</a>
        <a href="#social" className="hover:opacity-100 transition-opacity">Proof</a>
        <a href="#faq" className="hover:opacity-100 transition-opacity">Inquiry</a>
      </nav>

      <div className="flex items-center gap-6">
        {/* Discord Button linked to constants */}
        <a 
          href={SOCIAL_LINKS.discord} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 text-[10px] font-bold uppercase tracking-widest ${
            isHuman 
              ? 'border-zinc-800 text-zinc-400 hover:border-zinc-400 hover:text-white' 
              : 'border-[#00f2ff]/20 text-zinc-500 hover:border-[#00f2ff] hover:text-[#00f2ff] hover:shadow-[0_0_15px_-5px_#00f2ff]'
          }`}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/>
          </svg>
          <span className="hidden sm:inline">Join OS</span>
        </a>

        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-3">
            <span className={`font-mono text-[9px] uppercase tracking-widest transition-opacity duration-500 ${isHuman ? 'opacity-100 font-bold' : 'opacity-30'}`}>Human</span>
            
            <button 
              onClick={onToggleTheme}
              aria-label="Toggle System Mode"
              className={`relative w-16 h-8 rounded-full transition-all duration-500 p-1 flex items-center shadow-inner ${isHuman ? 'bg-zinc-800' : 'bg-zinc-200'}`}
            >
              <div className={`w-6 h-6 rounded-full transition-all duration-500 flex items-center justify-center transform shadow-sm ${isHuman ? 'translate-x-0 bg-white text-black' : 'translate-x-8 bg-black text-white'}`}>
                <span className="text-[8px] font-bold">
                  {isHuman ? 'H' : 'AI'}
                </span>
              </div>
            </button>

            <span className={`font-mono text-[9px] uppercase tracking-widest transition-opacity duration-500 ${!isHuman ? 'opacity-100 font-bold text-[#00f2ff]' : 'opacity-30'}`}>AI Mode</span>
          </div>
          
          <p className={`font-mono text-[8px] uppercase tracking-[0.2em] transition-colors duration-500 mr-1 ${isHuman ? 'text-zinc-500' : 'text-[#00f2ff]'}`}>
            Shift System Reality
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
