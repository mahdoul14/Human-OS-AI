import React, { useEffect } from 'react';
import { ThemeMode } from '../types';

interface LegalProps {
    theme: ThemeMode;
    documentType: 'privacy' | 'terms' | 'security';
}

const contentMap = {
    privacy: {
        title: "PRIVACY POLICY",
        content: "We take your data seriously. As an architecture firm building autonomous systems, security is our primary pillar. Your data remains your property. We never train public models on client-sensitive information."
    },
    terms: {
        title: "TERMS OF SERVICE",
        content: "By engaging with Human OS, you accept our standard architecture terms. All custom deployments are governed by individual master service agreements."
    },
    security: {
        title: "SECURITY PROTOCOL",
        content: "Our systems are built on zero-trust architectures. We isolate client execution environments and ensure stringent API-gateway authentication for all autonomous agents."
    }
};

const Legal: React.FC<LegalProps> = ({ theme, documentType }) => {
    const isHuman = theme === 'human';
    const data = contentMap[documentType];

    useEffect(() => {
        document.title = `Human OS | ${data.title}`;
        return () => { document.title = "Human OS - Performance Architecture"; };
    }, [data.title]);

    return (
        <main className="max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-20 relative z-20 py-32 flex-grow">
            <div className={`transition-all duration-1000 ${isHuman ? 'text-white' : 'text-zinc-900'}`}>
                <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter uppercase">
                    {data.title}
                </h1>
                <div className="space-y-8 text-lg font-light leading-relaxed">
                    <p>{data.content}</p>
                </div>
            </div>
        </main>
    );
};

export default Legal;
