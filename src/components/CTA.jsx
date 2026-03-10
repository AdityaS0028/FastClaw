import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight } from 'lucide-react';

const CTA = ({ openWaitlist }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current.querySelector('.cta-card'),
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="cta-section section-padding">
      <div className="container">
        <div className="cta-card">
          <div className="cta-glitch-text mono">SYSTEM_INIT_PULSE</div>
          <h2 className="cta-title">
            Stop chatting with AI.<br />
            <span className="text-accent">Start delegating work to it.</span>
          </h2>
          <p className="cta-desc">
            Launch your OpenClaw assistant in seconds. No setup. No infrastructure. <br />
            Just AI that works for you.
          </p>
          <div className="cta-actions">
            <button className="glow-btn large" onClick={openWaitlist}>
              Create your AI assistant <ChevronRight size={20} />
            </button>
          </div>
          <div className="cta-footer mono">
            NODE_STATUS: READY_FOR_DEPLOYMENT
          </div>
          <div className="corner corners-tl" />
          <div className="corner corners-br" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cta-section {
          background: var(--bg-darker);
          padding-bottom: 12rem;
        }
        .cta-card {
          background: linear-gradient(135deg, rgba(0, 242, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);
          border: 1px solid var(--accent-color);
          padding: 6rem 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 50px rgba(0, 242, 255, 0.1);
        }
        .cta-glitch-text {
          font-size: 0.7rem;
          color: var(--accent-color);
          margin-bottom: 2rem;
          letter-spacing: 0.5em;
          opacity: 0.6;
        }
        .cta-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 2rem;
        }
        .cta-desc {
          color: var(--text-secondary);
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }
        .cta-actions {
          display: flex;
          justify-content: center;
        }
        .cta-footer {
          margin-top: 4rem;
          font-size: 0.6rem;
          opacity: 0.4;
          letter-spacing: 0.2em;
        }
        .glow-btn.large {
          padding: 1.5rem 3rem;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .cta-title { font-size: 2.5rem; }
          .cta-card { padding: 4rem 2rem; }
        }
      `}} />
    </section>
  );
};

export default CTA;
