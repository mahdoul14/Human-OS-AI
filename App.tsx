import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeMode } from './types';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import Legal from './pages/Legal';
import Syllabus from './pages/Syllabus';
import AuditProtocol from './pages/AuditProtocol';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('human');

  const toggleTheme = () => {
    setTheme(prev => prev === 'human' ? 'ai' : 'human');
  };

  const isHuman = theme === 'human';

  return (
    <div className={`relative min-h-screen transition-theme font-inter selection:bg-[#00f2ff] selection:text-black overflow-hidden flex flex-col ${isHuman ? 'bg-[#050505] text-white' : 'bg-white text-zinc-900'}`}>

      {/* LIVING BACKGROUNDS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`aurora-bg transition-opacity duration-1000 ${isHuman ? 'aurora-human' : ''}`} />
        {!isHuman && (
          <div className="absolute inset-0 dot-matrix opacity-40 transition-theme duration-1000 mix-blend-multiply" />
        )}
      </div>

      <div className="relative z-10 w-full overflow-hidden flex flex-col flex-grow">
        <Header theme={theme} />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home theme={theme} onSetTheme={setTheme} />} />
            <Route path="/manifesto" element={<Manifesto theme={theme} />} />
            <Route path="/legal/privacy" element={<Legal theme={theme} documentType="privacy" />} />
            <Route path="/legal/terms" element={<Legal theme={theme} documentType="terms" />} />
            <Route path="/legal/security" element={<Legal theme={theme} documentType="security" />} />
            <Route path="/syllabus" element={<Syllabus theme={theme} />} />
            <Route path="/audit-protocol" element={<AuditProtocol theme={theme} />} />
          </Routes>
        </div>

        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default App;
