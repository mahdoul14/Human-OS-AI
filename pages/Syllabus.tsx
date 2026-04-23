import React, { useEffect } from 'react';
import { ThemeMode } from '../types';

interface SyllabusProps {
    theme: ThemeMode;
}

const Syllabus: React.FC<SyllabusProps> = ({ theme }) => {
    const isHuman = theme === 'human';

    useEffect(() => {
        document.title = "Human OS | Syllabus";
        return () => { document.title = "Human OS - Performance Architecture"; };
    }, []);

    return (
        <main className="max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-20 relative z-20 py-32 flex-grow">
            <div className={`transition-all duration-1000 ${isHuman ? 'text-white' : 'text-zinc-900'}`}>
                <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
                    THE <span className="text-[#00f2ff]">SYLLABUS</span>
                </h1>
                <p className="text-xl font-light mb-16">
                    The official curriculum of the Human OS Academy. Master systems architecture and generative AI workflows.
                </p>
                <div className="space-y-8">
                    <div className={`border p-8 rounded-xl backdrop-blur-md ${isHuman ? 'border-zinc-800 bg-white/5' : 'border-zinc-200 bg-black/5'}`}>
                        <h3 className="text-2xl font-bold text-[#00f2ff] mb-4">Phase I: The Foundations</h3>
                        <p className="text-lg opacity-80">Overcoming UI reliance. Moving from individual prompting to multi-step logic paths.</p>
                    </div>
                    <div className={`border p-8 rounded-xl backdrop-blur-md ${isHuman ? 'border-zinc-800 bg-white/5' : 'border-zinc-200 bg-black/5'}`}>
                        <h3 className="text-2xl font-bold text-[#00f2ff] mb-4">Phase II: Autonomous Agents</h3>
                        <p className="text-lg opacity-80">Building self-correcting logic pipelines and internal corporate knowledge retrieval systems.</p>
                    </div>
                    <div className={`border p-8 rounded-xl backdrop-blur-md ${isHuman ? 'border-zinc-800 bg-white/5' : 'border-zinc-200 bg-black/5'}`}>
                        <h3 className="text-2xl font-bold text-[#00f2ff] mb-4">Phase III: Market Deployment</h3>
                        <p className="text-lg opacity-80">Packaging engineered flows into high-ticket enterprise service offerings or scalable products.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Syllabus;
