import { useEffect, useRef } from 'react';
import './Why.css';

const reasons = [
  {
    icon: '📺',
    title: 'A New Category: The Short Series',
    desc: 'Stories told in two-minute bursts, stacked into 10–100 episodes. A whole new way to binge – original, cinematic, addictive.',
  },
  {
    icon: '👏',
    title: "India's First Creator-First OTT",
    desc: 'With Claps, fans can directly appreciate and support actors, writers, directors, and debutants. Because creators deserve applause.',
  },
  {
    icon: '🌏',
    title: 'Regional & Culturally Rooted',
    desc: 'Entertainment in your language, reflecting your world. Clean, genuine stories that feel closer to home than anything dubbed.',
  },
  {
    icon: '🎭',
    title: 'Original Stories. Real Talent',
    desc: 'Not recycled content, not shortcuts. Every show is crafted by storytellers with fresh ideas and authentic voices.',
  },
  {
    icon: '⭐',
    title: "Platform for Tomorrow's Stars",
    desc: 'From seasoned actors to debutant writers, Chai Shots is a launchpad where talent is discovered, encouraged, and celebrated.',
  },
  {
    icon: '⏱️',
    title: 'Entertainment that Fits Your Life',
    desc: 'Designed for short breaks, chai breaks, cab rides, late nights. Stories that move with you.',
  },
];

const Why = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.why-card');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why" id="why" ref={ref}>
      <div className="container">
        <div className="why-header">
          <div className="section-tag">Why Gutargo+?</div>
          <h2 className="why-title">
            Real storytelling is not<br />
            a trend. It's a <span className="text-primary">culture.</span>
          </h2>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div
              className="why-card"
              key={i}
              style={{ transitionDelay: `${(i % 3) * 0.12}s` }}
            >
              <div className="why-card-icon">{r.icon}</div>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-desc">{r.desc}</p>
              <div className="why-card-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
