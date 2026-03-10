import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';
// Import the generated api. Using a try-catch pattern or ignoring types
// until the user runs `npx convex dev`.
import { useMutation } from 'convex/react';
// We'll assume the user runs `npx convex dev` which generates this file.
// For now we will use a loose reference or just build string if needed.
// Wait, Convex react hooks strictly prefer the api object. 
// We will import it but ts-ignore it for now if we were using TS, but this is JSX.
import { api } from '../../convex/_generated/api.js';

const WaitlistModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  
  const joinWaitlist = useMutation(api ? api.waitlist.join : 'waitlist:join');

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(modalRef.current, 
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out", delay: 0.1 }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, { y: 20, opacity: 0, scale: 0.95, duration: 0.2, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, delay: 0.1, onComplete: () => {
      setStatus('idle');
      setMessage('');
      setFormData({ name: '', email: '', phone: '' });
      onClose();
    }});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus('error');
      setMessage('Name and Email are required.');
      return;
    }

    setStatus('loading');
    setMessage('CONNECTING...');

    try {
      const result = await joinWaitlist(formData);
      if (result.success) {
        setStatus('success');
        setMessage("Success: You're on the list.");
      } else {
        setStatus('error');
        setMessage(result.message || 'CONNECTION FAILED.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('CONNECTION_FAILED: Platform unreachable. Are you sure you ran `npx convex dev`?');
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" ref={overlayRef}>
      <div className="modal-container glow-card" ref={modalRef}>
        <button className="close-btn" onClick={handleClose}>
          <span className="mono">[ <X size={16} /> ]</span>
        </button>

        <div className="modal-header">
          <h2 className="mono section-tag">/// EARLY ACCESS</h2>
          <h3 className="section-title modal-title">
            Request an <span className="text-accent">Agent.</span>
          </h3>
          <p className="section-desc modal-desc">
            FastClaw is currently in private Alpha. Provide your details to secure priority access.
          </p>
        </div>

        {status === 'success' ? (
          <div className="success-state mono">
            <CheckCircle size={48} className="text-accent mb-4" />
            <p className="text-accent mb-2">ACCESS_GRANTED</p>
            <p className="text-secondary">{message}</p>
            <p className="text-muted mt-4 text-xs">We will contact you shortly.</p>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="mono">/// NAME *</label>
              <input 
                type="text" 
                placeholder="John Does"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                disabled={status === 'loading'}
                required
              />
            </div>
            
            <div className="input-group">
              <label className="mono">/// EMAIL *</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                disabled={status === 'loading'}
                required
              />
            </div>

            <div className="input-group">
              <label className="mono">/// PHONE (OPTIONAL)</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                disabled={status === 'loading'}
              />
            </div>

            {status === 'error' && (
              <div className="error-msg mono text-xs mt-2 text-red-500">
                <AlertTriangle size={12} className="inline mr-1" />
                {message}
              </div>
            )}

            <button 
              type="submit" 
              className="glow-btn full mt-4"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'TRANSMITTING...' : 'REQUEST ACCESS'}
            </button>
          </form>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .modal-container {
          background: var(--bg-darker);
          border: 1px solid var(--accent-color);
          padding: 2rem 1.5rem;
          width: 100%;
          max-width: 500px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }
        @media (min-width: 768px) {
          .modal-container {
            padding: 3rem;
          }
        }
        .close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .close-btn:hover {
          color: var(--accent-color);
        }
        .modal-title {
          font-size: 2rem;
          margin-top: 1rem;
        }
        .modal-desc {
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }
        .waitlist-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .input-group label {
          display: block;
          font-size: 0.7rem;
          color: var(--accent-color);
          opacity: 0.8;
          margin-bottom: 0.5rem;
        }
        .input-group input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          padding: 1rem;
          color: var(--text-primary);
          font-family: var(--sans-font);
          transition: all 0.3s ease;
        }
        .input-group input:focus {
          outline: none;
          border-color: var(--accent-color);
          background: rgba(0, 242, 255, 0.05);
          box-shadow: 0 0 15px rgba(0, 242, 255, 0.1);
        }
        .glow-btn.full {
          width: 100%;
          justify-content: center;
        }
        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 0;
        }
        .text-red-500 {
          color: #ef4444;
        }
        .text-xs {
          font-size: 0.75rem;
        }
        .mt-2 { margin-top: 0.5rem; }
        .mt-4 { margin-top: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .inline { display: inline-block; vertical-align: middle; }
        .mr-1 { margin-right: 0.25rem; }
      ` }} />
    </div>
  );
};

export default WaitlistModal;
