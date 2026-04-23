import React, { useEffect } from 'react';
import { ThemeMode } from '../types';

interface AuditProps {
    theme: ThemeMode;
}

const AuditProtocol: React.FC<AuditProps> = ({ theme }) => {
    const isHuman = theme === 'human';

    useEffect(() => {
        document.title = "Human OS | Audit Protocol";
        return () => { document.title = "Human OS - Performance Architecture"; };
    }, []);

    return (
        <main className="max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-20 relative z-20 py-32 flex-grow">
            <div className={`transition-all duration-1000 ${isHuman ? 'text-white' : 'text-zinc-900'}`}>
                <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter uppercase">
                    Audit <span className="text-[#00f2ff]">Protocol</span>
                </h1>
                <p className="text-xl font-light leading-relaxed mb-8">
                    The first step of an Agency integration. We extract the hidden complexities of your workforce. By mapping the full operational structure, we locate immediate friction points tailored for autonomous remediation.
                </p>

                <ul className="list-disc list-inside space-y-4 text-lg opacity-80 font-light mt-8">
                    <li>Map internal communication inefficiencies</li>
                    <li>Assess recurring data transport logic</li>
                    <li>Identify high-volume human bottleneck tasks</li>
                    <li>Propose multi-agent LLM replacement modules</li>
                </ul>
            </div>
        </main>
    );
};

export default AuditProtocol;
