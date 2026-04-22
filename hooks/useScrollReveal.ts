import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold: number = 0.1, delayMs: number = 0, triggerOnce: boolean = true) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delayMs);
                    if (triggerOnce && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, triggerOnce, delayMs]);

    return { ref, isVisible };
}
