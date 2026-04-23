import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { Link } from 'react-router-dom';

interface HeaderProps {
  theme: ThemeMode;
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  const isHuman = theme === 'human';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) document.body.classList.add('mobile-menu-open');
    else document.body.classList.remove('mobile-menu-open');
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 z-50 py-6 px-6 lg:px-20 flex justify-between items-center backdrop-blur-xl border-b transition-all duration-500 ${isHuman ? 'border-white/5 bg-black/30' : 'border-black/5 bg-white/50'}`}>
        <div className="flex items-center gap-2">
          <Link to="/" className="font-space font-bold text-xl md:text-2xl tracking-tighter transition-colors duration-500">HUMAN OS</Link>
          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500 ${isHuman ? 'bg-zinc-500' : 'bg-[#00f2ff] shadow-[0_0_8px_#00f2ff]'}`} />
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest opacity-80">
          <Link to="/#offers" className="hover:opacity-100 hover:tracking-widest transition-all">Solutions</Link>
          <Link to="/#social" className="hover:opacity-100 hover:tracking-widest transition-all">Proof</Link>
          <Link to="/#faq" className="hover:opacity-100 hover:tracking-widest transition-all">Inquiry</Link>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-500 text-[10px] font-bold uppercase tracking-widest ${isHuman
              ? 'border-zinc-800 text-zinc-400 hover:border-zinc-400 hover:text-white'
              : 'border-[#00f2ff]/20 text-zinc-500 hover:border-[#00f2ff] hover:text-[#00f2ff] hover:shadow-[0_0_15px_-5px_#00f2ff]'
              }`}
          >
            <span className="inline">Join OS</span>
          </a>



          <button
            className="md:hidden ml-2 p-2 relative z-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${isHuman ? 'bg-white' : 'bg-black'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${isHuman ? 'bg-white' : 'bg-black'} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 transition-all duration-300 ${isHuman ? 'bg-white' : 'bg-black'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out backdrop-blur-2xl ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} ${isHuman ? 'bg-black/90 text-white' : 'bg-white/90 text-black'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-10 text-2xl font-space font-medium uppercase tracking-widest">
          <Link to="/#offers" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00f2ff] transition-colors">Solutions</Link>
          <Link to="/#social" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00f2ff] transition-colors">Proof</Link>
          <Link to="/#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#00f2ff] transition-colors">Inquiry</Link>
          <a href={SOCIAL_LINKS.discord} onClick={() => setMobileMenuOpen(false)} className={`mt-8 px-10 py-4 border rounded-full text-base font-bold transition-all ${isHuman ? 'border-zinc-700 hover:bg-white hover:text-black' : 'border-[#00f2ff] text-[#00f2ff] hover:bg-[#00f2ff] hover:text-black'}`}>Join OS</a>
        </div>
      </div>
    </>
  );
};
export default Header;
