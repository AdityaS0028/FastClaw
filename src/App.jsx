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
        <div className="nav-links mobile-hide">
          <a href="#features" className="mono">/// FEATURES</a>
          <a href="#how-it-works" className="mono">/// WORKFLOW</a>
          <a href="#pricing" className="mono">/// ACCESS</a>
        </div>
        <div className="hud-status">
          <button className="nav-cta-btn mono" onClick={() => setIsWaitlistOpen(true)}>
          <span className="dot"></span> TRY_NOW
        </button>
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
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          background: rgba(2, 2, 2, 0.7);
        }
        @media (min-width: 768px) {
          .hud-nav {
            padding: 1.5rem 3rem;
          }
        }
        .logo-text {
          font-family: var(--mono-font);
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 0.2em;
          color: var(--accent-color);
        }
        @media (min-width: 768px) {
          .logo-text {
            font-size: 1.5rem;
          }
        }
        .logo-sub {
          font-family: var(--mono-font);
          font-size: 0.5rem;
          opacity: 0.5;
          margin-left: 0.5rem;
          border-left: 1px solid var(--text-muted);
          padding-left: 0.5rem;
          display: none;
        }
        @media (min-width: 1024px) {
          .logo-sub {
            display: inline-block;
          }
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .mobile-hide {
            display: none;
          }
        }
        .nav-links a {
          font-size: 0.8rem;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: var(--accent-color);
        }
        .nav-cta-btn {
          background: rgba(0, 242, 255, 0.1);
          border: 1px solid var(--accent-color);
          color: var(--accent-color);
          padding: 0.5rem 1rem;
          font-size: 0.7rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-cta-btn:hover {
          background: var(--accent-color);
          color: var(--bg-color);
          box-shadow: 0 0 15px var(--accent-color);
        }
        .dot {
          width: 8px;
          height: 8px;
          background: #00f2ff;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px #00f2ff;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
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
