import React from 'react';
import { Check, Database } from 'lucide-react';

const Pricing = ({ openWaitlist }) => {
  const tiers = [
    {
      name: "Starter",
      sub: "PERSONAL_RELEASE",
      price: "$19",
      storage: "20 GB Cloud Storage",
      features: ["1 AI Agent", "Messaging integrations", "Basic automation tools", "Community support"]
    },
    {
      name: "Pro",
      sub: "OPERATOR_EDITION",
      price: "$59",
      storage: "80 GB Cloud Storage",
      features: ["3 AI Agents", "Advanced integrations", "Custom models", "Priority compute"],
      featured: true
    },
    {
      name: "Operator",
      sub: "SYSTEM_MANAGER",
      price: "$129",
      storage: "200 GB Cloud Storage",
      features: ["10 AI Agents", "API access", "Automation monitoring", "Priority compute"]
    },
    {
      name: "Agency",
      sub: "ENTERPRISE_CORE",
      price: "$299+",
      storage: "1 TB Cloud Storage",
      features: ["Unlimited Agents", "Team management", "White-label platform", "Dedicated compute"]
    }
  ];

  return (
    <section id="pricing" className="pricing-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="mono section-tag">/// SUBSCRIPTION_TIERS</h2>
          <h3 className="section-title">Access Models</h3>
          <p className="section-desc mt-4">Infrastructure-based pricing scaled for your automation needs.</p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, i) => (
            <div key={i} className={`pricing-card ${tier.featured ? 'featured' : ''}`}>
              {tier.featured && <div className="featured-badge mono">MOST_POPULAR</div>}
              <div className="tier-header">
                <span className="mono sub-name">{tier.sub}</span>
                <h4 className="tier-name">{tier.name}</h4>
                <div className="tier-price">
                  <span className="price">{tier.price}</span>
                  {tier.name !== "Agency" && <span className="period">/MONTH</span>}
                </div>
              </div>
              
              <div className="storage-badge-container">
                <div className="hud-tag storage-tag">
                  <Database size={14} /> <span className="mono">{tier.storage}</span>
                </div>
              </div>

              <ul className="tier-features">
                {tier.features.map((f, j) => (
                  <li key={j} className="mono">
                    <Check size={14} className="text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`glow-btn ${tier.featured ? 'full' : ''}`} onClick={openWaitlist}>
                STABLISH_LINK
              </button>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .pricing-section {
          background: var(--bg-darker);
        }
        .mt-4 { margin-top: 1rem; }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .pricing-card {
          padding: 3rem 2rem;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .pricing-card.featured {
          border-color: var(--accent-color);
          background: rgba(0, 242, 255, 0.02);
          transform: scale(1.05);
          z-index: 2;
          box-shadow: 0 0 50px rgba(0, 242, 255, 0.1);
        }
        .featured-badge {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--accent-color);
          color: var(--bg-color);
          padding: 0.25rem 1rem;
          font-size: 0.7rem;
          font-weight: bold;
        }
        .tier-header {
          margin-bottom: 2rem;
        }
        .sub-name {
          font-size: 0.7rem;
          color: var(--accent-color);
          opacity: 0.7;
        }
        .tier-name {
          font-size: 1.75rem;
          margin: 0.5rem 0;
        }
        .tier-price {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }
        .price {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--mono-font);
        }
        .period {
          font-size: 0.75rem;
          opacity: 0.5;
        }
        .storage-badge-container {
          margin-bottom: 2rem;
        }
        .storage-tag {
          width: 100%;
          justify-content: flex-start;
          padding: 0.75rem;
          background: rgba(0, 242, 255, 0.1);
          border-color: rgba(0, 242, 255, 0.3);
          color: var(--accent-color);
        }
        .tier-features {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-grow: 1;
        }
        .tier-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .pricing-card .glow-btn {
          width: 100%;
          justify-content: center;
          font-size: 0.8rem;
        }
        .pricing-card .glow-btn.full {
          background: var(--accent-color);
          color: var(--bg-color);
        }

        @media (max-width: 1200px) {
          .pricing-card.featured { transform: none; }
          .pricing-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default Pricing;
