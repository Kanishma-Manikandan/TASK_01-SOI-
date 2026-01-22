import { useState } from 'react'
import Hero from './components/Hero'
import TrustSignals from './components/TrustSignals'
import PainPoints from './components/PainPoints'
import ConversionForm from './components/ConversionForm'
import './index.css'

function App() {
  const [demoGuide, setDemoGuide] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);

  const handleStartAudit = () => {
    setResetTrigger(prev => prev + 1);
    setDemoGuide(false);
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDemoClick = () => {
    setDemoGuide(true);
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white bg-grid font-body relative">
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-royal/20">
        <div className="text-sm font-bold font-pixel tracking-widest text-white">
          <span className="text-lime-400">BRAND</span>.
        </div>
        <button
          onClick={handleStartAudit}
          className="px-5 py-2 rounded-full bg-royal hover:bg-royal/90 transition-all text-xs font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
        >
          Get Started
        </button>
      </nav>

      {/* Main Content */}
      <main className="pt-24">
        <Hero
          onDemoClick={handleDemoClick}
          onStartAudit={handleStartAudit}
        />
        <TrustSignals />
        <PainPoints />
        <ConversionForm showGuide={demoGuide} resetTrigger={resetTrigger} />
      </main>

      {/* Retro Footer */}
      <footer className="py-12 border-t border-white/10 mt-20 text-center">
        <p className="font-pixel text-[10px] text-slate-500 uppercase tracking-widest">
          &copy; 2026 Conversion Protocol. <span className="text-lime-400">System Online</span>
        </p>
      </footer>
    </div>
  )
}

export default App
