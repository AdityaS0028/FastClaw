import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Rocket, ChevronRight } from 'lucide-react';

const Hero = ({ openWaitlist }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(titleRef.current.children, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    );
  }, []);

  return (
    <section ref={containerRef} className="hero-section section-padding">
      <div className="container">
        <div className="hero-content">
          <div className="hud-tag">
            <span className="pulse-dot" /> DEPLOY_PROTOCOL_ACTIVE
          </div>
          
          <h1 ref={titleRef} className="hero-title">
            <span>Your Own AI Assistant.</span><br />
            <span className="text-glow">Running 24/7. In Two Clicks.</span>
          </h1>

          <div ref={subtitleRef} className="hero-subtitle">
            <p>Deploy your personal <strong>OpenClaw AI agent</strong> in seconds.</p>
            <p className="highlight-list">
              <span className="mono">[ NO SERVERS ]</span>
              <span className="mono">[ NO DOCKER ]</span>
              <span className="mono">[ NO TERMINAL ]</span>
            </p>
            <p className="description">
              Connect it to <strong>WhatsApp, Telegram, Slack, or Discord</strong> and start delegating real tasks to your AI assistant.
            </p>
          </div>

          <div ref={ctaRef} className="hero-actions">
            <button className="glow-btn" onClick={openWaitlist}>
              Launch your AI assistant <ChevronRight size={18} />
            </button>
            <p className="mono meta-text">V.1.0_STABLE_RELEASE</p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 10rem;
        }
        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin: 2rem 0;
          font-weight: 800;
        }
        .text-glow {
          color: var(--accent-color);
          text-shadow: 0 0 30px var(--accent-glow);
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin-bottom: 3rem;
        }
        .highlight-list {
          display: flex;
          gap: 1.5rem;
          margin: 1.5rem 0;
          font-size: 0.9rem;
          color: var(--accent-color);
        }
        .description {
          line-height: 1.6;
        }
        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .meta-text {
          font-size: 0.6rem;
          opacity: 0.4;
          letter-spacing: 0.3em;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-color);
          border-radius: 50%;
          display: inline-block;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 242, 255, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 242, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 242, 255, 0); }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .highlight-list { flex-direction: column; gap: 0.5rem; }
        }
      `}} />
    </section>
  );
};

export default Hero;
