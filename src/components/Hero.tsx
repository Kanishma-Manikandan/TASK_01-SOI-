import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { WordReveal } from './WordReveal';

interface Props {
    onDemoClick?: () => void;
    onStartAudit?: () => void;
}

const Hero: React.FC<Props> = ({ onDemoClick, onStartAudit }) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center text-center px-4">
            {/* Vignette Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <ScrollReveal width="100%">
                    <div className="inline-block px-4 py-2 border border-lime-400/30 rounded-full bg-lime-400/5 backdrop-blur-sm mb-8">
                        <span className="font-pixel text-[10px] text-lime-400 tracking-widest uppercase">
                            System Online
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-pixel leading-tight tracking-tighter text-white text-shadow-custom mb-8">
                        <WordReveal text="OPTIMIZE YOUR WEB PRESENCE" />
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-mono leading-relaxed">
                        Deploy your conversion algorithms. Analyze traffic patterns. Dominate the market utilizing advanced audit protocols.
                    </p>
                </ScrollReveal>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <button
                        onClick={onStartAudit}
                        className="px-8 py-4 bg-lime-400 text-black font-bold font-pixel text-xs tracking-widest uppercase rounded flex items-center gap-2 shadow-[6px_6px_0px_0px_rgba(29,78,216,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(29,78,216,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                        Start Audit
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>

                    <button
                        onClick={() => {
                            if (onDemoClick) onDemoClick();
                            document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-4 border-2 border-white/10 bg-white/5 backdrop-blur-sm text-white font-bold font-pixel text-xs tracking-widest uppercase rounded hover:bg-white/10 transition-colors"
                    >
                        View Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
