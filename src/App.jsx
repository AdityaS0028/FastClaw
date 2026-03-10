import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Shield, Cpu, Zap, MessageSquare, Mail, Calendar, Search, BarChart3, ChevronDown, Rocket, Layers, Globe, Clock, Plus, Minus } from 'lucide-react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import WaitlistModal from './components/WaitlistModal';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = React.useState(false);

  useEffect(() => {
    // Basic atmospheric animations for the grid
    gsap.to('.grid-overlay', {
      opacity: 0.15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div ref={mainRef} className="app-container">
      <div className="ambient-bg" />
      <div className="grid-overlay" />
      
      {/* HUD ELEMENTS */}
      <nav className="hud-nav">
        <div className="logo-container">
          <span className="logo-text">FASTCLAW</span>
          <span className="logo-sub">OS_HOST_V.1.0</span>
        </div>
        <div className="nav-links">
          <a href="#features" className="mono">/// FEATURES</a>
          <a href="#how-it-works" className="mono">/// WORKFLOW</a>
          <a href="#pricing" className="mono">/// ACCESS</a>
        </div>
        <div className="hud-status">
          <div className="status-dot pulse" />
          <span className="mono">SYSTEM_STABLE</span>
        </div>
      </nav>

      {/* Decorative Corners */}
      <div className="corner corners-tl" />
      <div className="corner corners-tr" />
      <div className="corner corners-bl" />
      <div className="corner corners-br" />

      <main>
        <Hero openWaitlist={() => setIsWaitlistOpen(true)} />
        <SocialProof />
        <Features />
        <HowItWorks />
        <UseCases />
        <Pricing openWaitlist={() => setIsWaitlistOpen(true)} />
        <FAQ />
        <CTA openWaitlist={() => setIsWaitlistOpen(true)} />
      </main>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />

      <footer className="hud-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left mono">
              © 2026 FASTCLAW // DEPLOYABLE AI INFRASTRUCTURE
            </div>
            <div className="footer-right mono">
              [ POWERED BY OPENCLAW ]
            </div>
          </div>
        </div>
      </footer>

      {/* ADDITIONAL STYLES FOR HUD */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hud-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          backdrop-filter: blur(5px);
          border-bottom: 1px solid var(--border-color);
        }
        .logo-text {
          font-family: var(--mono-font);
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 0.2em;
          color: var(--accent-color);
        }
        .logo-sub {
          font-family: var(--mono-font);
          font-size: 0.6rem;
          opacity: 0.5;
          margin-left: 0.5rem;
          border-left: 1px solid var(--text-muted);
          padding-left: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 3rem;
        }
        .nav-links a {
          font-size: 0.8rem;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: var(--accent-color);
        }
        .hud-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.7rem;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-color);
          border-radius: 50%;
        }
        .pulse {
          animation: pulse-ring 2s infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        .corner {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 1px solid var(--accent-color);
          opacity: 0.3;
          z-index: 101;
          pointer-events: none;
        }
        .corners-tl { top: 20px; left: 20px; border-right: none; border-bottom: none; }
        .corners-tr { top: 20px; right: 20px; border-left: none; border-bottom: none; }
        .corners-bl { bottom: 20px; left: 20px; border-right: none; border-top: none; }
        .corners-br { bottom: 20px; right: 20px; border-left: none; border-top: none; }

        .hud-footer {
          border-top: 1px solid var(--border-color);
          padding: 2rem 0;
          font-size: 0.7rem;
          opacity: 0.6;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
        }
      `}} />
    </div>
  );
}

export default App;
