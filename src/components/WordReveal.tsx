import React, { useEffect, useRef, useState } from 'react';

interface Props {
    text: string;
    delay?: number;
    className?: string; // Allow passing text classes
}

export const WordReveal = ({ text, delay = 0, className = "" }: Props) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const words = text.split(" ");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <span ref={ref} className={`inline-block ${className}`}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className={`inline-block mr-[0.25em] transition-all duration-500 reveal-text ${isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${delay + i * 50}ms` }}
                >
                    {word}
                </span>
            ))}
        </span>
    );
};
