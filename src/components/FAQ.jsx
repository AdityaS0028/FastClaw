import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is OpenClaw?",
      a: "OpenClaw is an open-source autonomous AI assistant that can execute tasks across apps like email, messaging, and calendars using large language models."
    },
    {
      q: "Do I need coding experience?",
      a: "No. Our platform removes the need to install servers, configure Docker, or run command-line setups. It is literally click and deploy."
    },
    {
      q: "Which models can I use?",
      a: "You can connect any supported LLM provider including OpenAI, Claude, DeepSeek, Gemini, and OpenRouter models."
    },
    {
      q: "Is my data private?",
      a: "Your assistant runs in a dedicated environment with isolated configuration and encrypted credentials. You own the instance."
    }
  ];

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="mono section-tag">/// SUPPORT_QUERIES</h2>
          <h3 className="section-title">Frequently Asked Questions</h3>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="faq-question">
                <span className="mono question-text">{faq.q}</span>
                <div className="faq-toggle">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-section {
          background: var(--bg-color);
        }
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .faq-item:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        .faq-question {
          padding: 2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .question-text {
          font-size: 1.1rem;
          letter-spacing: 0.05em;
        }
        .faq-toggle {
          color: var(--accent-color);
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s ease;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .faq-item.open .faq-answer {
          max-height: 200px;
          padding-bottom: 2rem;
        }
        .faq-item.open .question-text {
          color: var(--accent-color);
        }
      `}} />
    </section>
  );
};

export default FAQ;
