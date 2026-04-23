
import React from 'react';
import { ThemeMode } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { Link } from 'react-router-dom';

interface FooterProps {
  theme: ThemeMode;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isHuman = theme === 'human';

  return (
    <footer className={`py-20 px-6 lg:px-20 border-t ${isHuman ? 'border-zinc-900' : 'border-zinc-100 bg-zinc-50'}`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:col-span-1 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h3 className="font-space font-bold text-3xl tracking-tighter">HUMAN OS</h3>
            <p className="max-w-md opacity-60 font-light leading-relaxed">
              We are the architects of the modern enterprise. We bridge the gap between human potential and artificial velocity.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest opacity-40">Resources</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link to="/manifesto" className={`hover:text-[#00f2ff] transition-colors ${!isHuman ? 'text-zinc-500' : ''}`}>Manifesto</Link></li>
              <li><Link to="/audit-protocol" className={`hover:text-[#00f2ff] transition-colors ${!isHuman ? 'text-zinc-500' : ''}`}>Audit Protocol</Link></li>
              <li><Link to="/syllabus" className={`hover:text-[#00f2ff] transition-colors ${!isHuman ? 'text-zinc-500' : ''}`}>Syllabus</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest opacity-40">Connect</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="hover:text-[#00f2ff] transition-colors flex items-center gap-2">Discord <span className="text-[8px] opacity-40">● Community</span></a></li>
              <li><a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#00f2ff] transition-colors">Twitter</a></li>
              <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#00f2ff] transition-colors">LinkedIn</a></li>
              <li><a href={SOCIAL_LINKS.substack} target="_blank" rel="noopener noreferrer" className="hover:text-[#00f2ff] transition-colors">Substack</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-zinc-800/20 opacity-40 text-[10px] font-mono tracking-widest uppercase">
          <p>© 2025 Human OS. All systems operational.</p>
          <div className="flex gap-8">
            <Link to="/legal/privacy">Privacy</Link>
            <Link to="/legal/terms">Terms</Link>
            <Link to="/legal/security">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
