import React, { useEffect } from 'react';
import { ThemeMode } from '../types';

interface ManifestoProps {
    theme: ThemeMode;
}

const Manifesto: React.FC<ManifestoProps> = ({ theme }) => {
    const isHuman = theme === 'human';

    // Dynamic meta handler
    useEffect(() => {
        document.title = "Human OS | Manifesto";
        return () => {
            document.title = "Human OS - Performance Architecture";
        };
    }, []);

    return (
        <main className="max-w-[1000px] mx-auto px-6 sm:px-12 lg:px-20 relative z-20 py-32 flex-grow">
            <div className={`transition-all duration-1000 ${isHuman ? 'text-white' : 'text-zinc-900'}`}>
                <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
                    THE <span className="text-[#00f2ff]">MANIFESTO</span>
                </h1>

                <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed">
                    <p>
                        We are engineering the absolute peak of human output. The era of busywork is over. The era of the automated hyper-producer has begun.
                    </p>
                    <p>
                        Human OS is not just a toolset; it is a fundamental architecture. We rebuild your operational reality from the ground up, injecting autonomous systems into your daily loops.
                    </p>
                    <p>
                        Our core belief is simple: Technology should not abstract us from the work, it should abstract the friction, leaving only the pure, undistilled output of human creative intent.
                    </p>
                    <div className="p-8 border-l-4 border-[#00f2ff] bg-black/20 my-16">
                        <h3 className="text-2xl font-bold mb-4">THE NEW ERA OF ENGINEERING</h3>
                        <p className="text-base opacity-80">
                            Every revolution begins with sight. We audit the invisible inefficiencies. We map them, we target them, we eliminate them. We augment every element of your digital environment.
                        </p>
                    </div>
                    <p>
                        Welcome to the new operating system for the modern builder. Turn noise into signal.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Manifesto;
