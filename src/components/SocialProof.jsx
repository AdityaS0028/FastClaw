import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SocialProof = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="social-proof section-padding">
      <div className="container">
        <div className="proof-grid">
          <div className="proof-text row-span-2">
            <h2 className="mono section-tag">/// POSITIONING</h2>
            <p className="large-text">
              The new generation of AI is not just chat. <br />
              It is <strong>agents that execute tasks for you.</strong>
            </p>
            <p className="quote-desc">
              OpenClaw is one of the fastest-growing open-source AI assistants, designed to run autonomous workflows through messaging apps and integrations.
            </p>
          </div>
          
          <div className="barrier-box">
            <h3 className="mono mb-4 text-accent">THE OLD WAY:</h3>
            <ul className="barrier-list mono">
              <li>- SERVERS MAINTENANCE</li>
              <li>- COMMAND LINE SETUP</li>
              <li>- MODEL CONFIGURATION</li>
              <li>- API INTEGRATIONS</li>
              <li>- SECURITY CONFIGURATION</li>
            </ul>
          </div>

          <div className="solution-box glow-card">
            <h3 className="mono mb-4">THE FASTCLAW WAY:</h3>
            <p className="mono text-accent large-text">2 CLICKS. DONE.</p>
            <div className="scanline" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .social-proof {
          background: var(--bg-darker);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .proof-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .large-text {
          font-size: 2.5rem;
          line-height: 1.2;
          margin: 1.5rem 0;
        }
        .section-tag {
          color: var(--accent-color);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .quote-desc {
          font-size: 1.1rem;
          color: var(--text-secondary);
          border-left: 2px solid var(--accent-color);
          padding-left: 1.5rem;
        }
        .barrier-box {
          padding: 2rem;
          border: 1px solid var(--border-color);
          background: rgba(255, 0, 0, 0.05);
        }
        .barrier-list {
          font-size: 0.8rem;
          opacity: 0.7;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .solution-box {
          padding: 2rem;
          border: 1px solid var(--accent-color);
          background: rgba(0, 242, 255, 0.05);
          position: relative;
          overflow: hidden;
        }
        .text-accent { color: var(--accent-color); }
        .mb-4 { margin-bottom: 1rem; }
        
        .glow-card {
          box-shadow: 0 0 40px rgba(0, 242, 255, 0.1);
        }

        .scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-color);
          opacity: 0.3;
          animation: scan 3s linear infinite;
        }

        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }

        @media (max-width: 968px) {
          .proof-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}} />
    </section>
  );
};

export default SocialProof;
