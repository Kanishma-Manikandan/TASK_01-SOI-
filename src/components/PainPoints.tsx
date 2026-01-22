import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { WordReveal } from './WordReveal';

const PainPoints: React.FC = () => {
    const [activePoint, setActivePoint] = useState<{ title: string; desc: string; detail: string } | null>(null);

    const issues = [
        {
            title: 'High Bounce Rate',
            desc: '70% of visitors leave within 5 seconds.',
            detail: 'A high bounce rate indicates your landing page is failing to hook visitors immediately. Common causes include slow load speeds, irrelevant content, or poor design. Our audit pinpoints exactly where you are losing their attention.'
        },
        {
            title: 'Confusing UX',
            desc: 'Users get lost in complex navigation.',
            detail: 'If users cannot find what they need in 3 clicks, they leave. We analyze your navigation structure and user flow to streamline the path to conversion, ensuring a frictionless experience.'
        },
        {
            title: 'Slow Load Times',
            desc: 'Every second delay drops conversion by 7%.',
            detail: 'Speed is a feature. We scan for unoptimized assets, heavy scripts, and server bottlenecks that are killing your SEO and user retention. Get your site loading in under 2 seconds.'
        },
        {
            title: 'Weak CTAs',
            desc: 'Buttons that blend in don\'t get clicked.',
            detail: 'Your Call-to-Action is the most important pixel on the screen. We evaluate contrast, placement, and copy to ensure your buttons demand attention and drive clicks.'
        },
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <ScrollReveal width="100%">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                        <WordReveal text="Where Are You Losing Revenue?" />
                    </h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {issues.map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 100} width="100%">
                            <div
                                onClick={() => setActivePoint(item)}
                                className="glass-panel p-8 hover:bg-white/10 transition-all cursor-pointer group border border-white/10 rounded-lg text-center h-full active:scale-95"
                            >
                                <div className="text-3xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">⚠️</div>
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                <p className="text-xs text-lime-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">[ CLICK FOR ANALYSIS ]</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {activePoint && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-[#111] border-2 border-lime-400 p-8 max-w-md w-full rounded-lg shadow-[0_0_50px_rgba(190,242,100,0.2)] relative">
                        <button
                            onClick={() => setActivePoint(null)}
                            className="absolute top-4 right-4 text-white hover:text-lime-400 font-pixel"
                        >
                            X
                        </button>
                        <h3 className="text-xl font-bold font-pixel text-lime-400 mb-4">{activePoint.title}</h3>
                        <p className="text-white font-mono leading-relaxed text-sm mb-6">
                            {activePoint.detail}
                        </p>
                        <button
                            onClick={() => setActivePoint(null)}
                            className="w-full py-3 bg-lime-400 text-black font-bold font-pixel text-xs uppercase hover:bg-white transition-colors"
                        >
                            ACKNOWLEDGE
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PainPoints;
