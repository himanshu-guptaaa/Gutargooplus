import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'What kind of content does Gutargoo+ offer?',
    a: "Gutargoo+ offers Regional Stories and Pure Drama. We feature addictive movies, web series, and short series crafted specifically for mobile viewing in your own regional language.",
  },
  {
    q: 'Is there a subscription plan?',
    a: "No! Gutargoo+ is 100% FREE. You can enjoy unlimited viewing of all our movies, TV shows, and series without any paid subscription, hidden fees, or membership plans.",
  },
  {
    q: 'What does "Creator-First OTT" mean?',
    a: "We don't just showcase shows; we celebrate the people who make them. Gutargoo+ is built to directly support and recognize the writers, directors, actors, debutants, and crew who bring these amazing regional stories to life.",
  },
  {
    q: 'Which languages are available?',
    a: "We focus heavily on Indian regional languages. Our goal is to bring you authentic, culturally relevant stories from every state in their native language.",
  },
  {
    q: 'Is the content safe and clean?',
    a: "Yes. Gutargoo+ is built on genuine entertainment. No spammy shortcuts, no random dubbed content. Just original, high-quality stories made with care, specifically for you.",
  },
  {
    q: 'Why Gutargoo+ over other OTT apps?',
    a: "Because we're India's apna OTT platform! We offer premium regional storytelling and influencer-driven content completely for free. It's high-quality entertainment without the frustrating paywalls.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header">
          <div className="section-tag">Got Questions?</div>
          <h2 className="faq-title">FAQs</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                <div className="faq-icon">{open === i ? '−' : '+'}</div>
              </div>
              {open === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;