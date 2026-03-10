import React from 'react';
import { Mail, Calendar, Search, BarChart3, Settings, MessageSquare } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Mail />, title: "Manage Emails", desc: "Triage your inbox and draft replies automatically." },
    { icon: <Calendar />, title: "Schedule Meetings", desc: "Coordinate across time zones and calendars with ease." },
    { icon: <Search />, title: "Run Research", desc: "Browse the web, synthesize findings, and deliver reports." },
    { icon: <BarChart3 />, title: "Automate Workflows", desc: "Connect your existing tools into autonomous cycles." },
    { icon: <Settings />, title: "Control Tools", desc: "Execute actions through APIs and system integrations." },
    { icon: <MessageSquare />, title: "Chat Interface", desc: "No new apps. Just message your AI from your favorite chat tool." },
  ];

  return (
    <section id="features" className="features-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="mono section-tag">/// CAPABILITIES</h2>
          <h3 className="section-title">Turn OpenClaw into a <br /><span className="text-accent">Cloud AI Employee</span></h3>
          <p className="section-desc">Deploy a fully configured OpenClaw agent that runs continuously in the cloud.</p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4 className="feature-title">{f.title}</h4>
              <p className="feature-desc">{f.desc}</p>
              <div className="card-border" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .features-section {
          background: var(--bg-color);
        }
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        .section-title {
          font-size: 3.5rem;
          margin: 1rem 0;
        }
        .section-desc {
          max-width: 600px;
          margin: 0 auto;
          color: var(--text-secondary);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          padding: 3rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
        }
        .feature-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-color);
          background: rgba(0, 242, 255, 0.02);
        }
        .feature-icon {
          color: var(--accent-color);
          margin-bottom: 2rem;
          transform: scale(1.5);
          transform-origin: left;
        }
        .feature-title {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .feature-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .card-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-color);
          transition: width 0.3s ease;
        }
        .feature-card:hover .card-border {
          width: 100%;
        }
      `}} />
    </section>
  );
};

export default Features;
