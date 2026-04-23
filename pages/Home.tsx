import React, { useEffect } from 'react';
import { ThemeMode } from '../types';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import OffersGrid from '../components/OffersGrid';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

interface HomeProps {
    theme: ThemeMode;
    onSetTheme: (theme: ThemeMode) => void;
}

const Home: React.FC<HomeProps> = ({ theme, onSetTheme }) => {
    useEffect(() => {
        document.title = "Human OS - Performance Architecture";
    }, []);

    return (
        <>
            <main className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-20">
                <Hero theme={theme} onSetTheme={onSetTheme} />
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
        </>
    );
};

export default Home;
