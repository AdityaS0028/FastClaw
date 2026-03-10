import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HowItWorks = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const steps = [
    {
      num: "01",
      title: "Launch your assistant",
      desc: "Click Create Instance. Your OpenClaw server is automatically deployed and configured. No DevOps required."
    },
    {
      num: "02",
      title: "Connect your channels",
      desc: "Link the apps you already use: WhatsApp, Telegram, Slack, Discord, Email. OpenClaw routes messages into an AI agent runtime."
    },
    {
      num: "03",
      title: "Start delegating tasks",
      desc: 'Just send a message like: "Check my calendar tomorrow" or "Summarize these emails". Your assistant handles it.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works section-padding">
      <div className="container">
        <div className="section-header-left">
          <h2 className="mono section-tag">/// DEPLOYMENT_FLOW</h2>
          <h3 className="section-title">How It Works</h3>
        </div>

        <div className="steps-container">
          {steps.map((step, i) => (
            <div 
              key={i} 
              ref={el => stepsRef.current[i] = el}
              className={`step-item ${i % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="step-content">
                <span className="step-num mono">{step.num}</span>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
              <div className="step-visual">
                <div className="visual-box">
                  <div className="visual-line" />
                  <div className="visual-circle" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .how-it-works {
          background: var(--bg-darker);
          position: relative;
          overflow: hidden;
        }
        .section-header-left {
          margin-bottom: 6rem;
        }
        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 8rem;
          position: relative;
        }
        .steps-container::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--border-color);
          z-index: 0;
        }
        .step-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          position: relative;
          z-index: 1;
        }
        .step-content {
          width: 45%;
          padding: 3rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
        }
        .step-visual {
          width: 45%;
          display: flex;
          justify-content: center;
        }
        .step-item.reverse {
          flex-direction: row-reverse;
        }
        .step-num {
          font-size: 3rem;
          color: var(--accent-color);
          display: block;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        .step-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .step-desc {
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .visual-box {
          width: 100px;
          height: 100px;
          border: 1px solid var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .visual-line {
          position: absolute;
          width: 150px;
          height: 1px;
          background: var(--accent-color);
          right: 50px;
        }
        .step-item.reverse .visual-line {
          left: 50px;
          right: auto;
        }
        .visual-circle {
          width: 10px;
          height: 10px;
          background: var(--accent-color);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-color);
        }

        @media (max-width: 768px) {
          .steps-container::before { left: 20px; }
          .step-item, .step-item.reverse { flex-direction: column; align-items: flex-start; gap: 2rem; }
          .step-content, .step-visual { width: 100%; padding-left: 4rem; }
          .step-visual { justify-content: flex-start; display: none; }
        }
      `}} />
    </section>
  );
};

export default HowItWorks;
