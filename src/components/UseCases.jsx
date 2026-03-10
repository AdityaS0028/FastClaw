import React from 'react';
import { Mail, Search, Eye, User, PenTool, Terminal, Settings, Database, Clock } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      icon: <Mail />,
      title: "AI Inbox Manager",
      desc: "Read, sort, and reply to emails automatically. Classify leads and escalate tickets.",
      tasks: ["Sort support emails", "Auto-reply to common FAQs", "Summarize long threads"]
    },
    {
      icon: <Search />,
      title: "Autonomous Lead Research",
      desc: "Research prospects while you sleep. Browse websites and gather company data.",
      tasks: ["Find companies in niche", "Enrich leads with data", "Analyze competitor sites"]
    },
    {
      icon: <Eye />,
      title: "Competitor Monitoring",
      desc: "Track competitor websites, pricing pages, and product updates automatically.",
      tasks: ["Monitor price changes", "Track product launches", "Analyze SEO strategies"]
    },
    {
      icon: <User />,
      title: "AI Executive Assistant",
      desc: "Manage your schedule, tasks, and reminders directly from your chat app.",
      tasks: ["Schedule meetings", "Check calendar conflicts", "Set daily reminders"]
    },
    {
      icon: <PenTool />,
      title: "Content Automation",
      desc: "Run a full content pipeline: research trends, generate drafts, and publish.",
      tasks: ["Research trending topics", "Generate post drafts", "Track engagement metrics"]
    },
    {
      icon: <Terminal />,
      title: "Developer Automation",
      desc: "Execute scripts, monitor logs, and manage deployments via chat commands.",
      tasks: ["Run terminal commands", "Debug systems remotely", "Monitor cloud status"]
    },
    {
      icon: <Settings />,
      title: "Workflow Automation",
      desc: "Replace repetitive manual workflows across various business tools and APIs.",
      tasks: ["Automate reports", "Update CRM data", "Trigger multi-app hooks"]
    },
    {
      icon: <Database />,
      title: "Research Assistant",
      desc: "Gather information and compile research reports without manual browsing.",
      tasks: ["Summarize articles", "Gather market research", "Compile data reports"]
    },
    {
      icon: <Clock />,
      title: "24/7 Business Ops",
      desc: "Run automated tasks and scheduled jobs continuously on cloud servers.",
      tasks: ["Nightly system reports", "24/7 uptime monitoring", "Scheduled data syncs"]
    }
  ];

  return (
    <section id="use-cases" className="use-cases-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="mono section-tag">/// USE_CASES</h2>
          <h3 className="section-title">What Your AI Assistant Can Do</h3>
          <p className="section-desc">Real, evidence-based implementations used by modern builders.</p>
        </div>

        <div className="use-cases-grid">
          {cases.map((c, i) => (
            <div key={i} className="case-card">
              <div className="case-header">
                <div className="case-icon">{c.icon}</div>
                <h4 className="case-title">{c.title}</h4>
              </div>
              <p className="case-desc">{c.desc}</p>
              <div className="case-tasks">
                <span className="mono task-label">EXAMPLE_TASKS:</span>
                <ul>
                  {c.tasks.map((t, j) => (
                    <li key={j} className="mono">• {t}</li>
                  ))}
                </ul>
              </div>
              <div className="card-corner" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .use-cases-section {
          background: var(--bg-color);
        }
        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .case-card {
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          padding: 2.5rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .case-card:hover {
          background: rgba(0, 242, 255, 0.03);
          border-color: var(--accent-color);
          transform: scale(1.02);
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .case-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .case-icon {
          color: var(--accent-color);
        }
        .case-title {
          font-size: 1.1rem;
          letter-spacing: 0.1em;
        }
        .case-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
          min-height: 4.5rem;
        }
        .case-tasks {
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
        }
        .task-label {
          font-size: 0.7rem;
          color: var(--accent-color);
          margin-bottom: 0.75rem;
          display: block;
          opacity: 0.8;
        }
        .case-tasks ul {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .case-tasks li {
          font-size: 0.75rem;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }
        .case-card:hover .case-tasks li {
          color: var(--text-primary);
        }
        .card-corner {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 15px 15px 0;
          border-color: transparent var(--border-color) transparent transparent;
          transition: border-color 0.3s ease;
        }
        .case-card:hover .card-corner {
          border-color: transparent var(--accent-color) transparent transparent;
        }

        @media (max-width: 1024px) {
          .use-cases-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .use-cases-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default UseCases;
