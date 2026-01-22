import { ScrollReveal } from './ScrollReveal';

const TrustSignals: React.FC = () => {
    const brands = ['TechCorp', 'DataFlow', 'Optimize.io', 'WebScale', 'FutureSaaS'];

    return (
        <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl px-4 text-center">
                <ScrollReveal width="100%">
                    <p className="text-slate-400 mb-8 uppercase tracking-widest text-xs font-semibold">Trusted by High-Growth Teams</p>
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 px-4 md:px-12">
                        {brands.map((brand) => (
                            <div key={brand} className="text-xl font-bold font-heading">{brand}</div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default TrustSignals;
