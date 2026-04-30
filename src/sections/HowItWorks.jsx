import { useEffect, useRef, useState } from 'react';
import './HowItWorks.css';

const plans = [
  {
    name: 'Basic',
    originalPrice: '99',
    quality: 'HD',
    features: ['HD Streaming', 'Watch on 1 device', 'Contains Ads'],
  },
  {
    name: 'Premium',
    originalPrice: '199',
    quality: '4K',
    popular: true,
    features: ['4K Ultra HD', 'Watch on 2 devices', 'Ad-Free Experience'],
  },
  {
    name: 'Enterprise',
    originalPrice: '349',
    quality: '4K+HDR',
    features: ['4K Ultra HD + HDR', 'Watch on 5 devices', 'Ad-Free Experience', 'Offline Downloads'],
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasScrolledIntoView) {
          setHasScrolledIntoView(true);
          // Wait 1.5 seconds after seeing the section, then trigger the "FREE" reveal animation
          setTimeout(() => {
            setIsRevealed(true);
          }, 1500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [hasScrolledIntoView]);

  return (
    <section className="pricing-section" id="pricing" ref={sectionRef}>
      <div className="pricing-glow" />
      
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="section-tag">Subscription Plans</div>
          
          <h2 className="pricing-title">
            <span className={`title-text ${isRevealed ? 'hide' : ''}`}>Choose Your Plan</span>
            <span className={`title-text reveal-text ${isRevealed ? 'show' : ''}`}>
              Just Kidding. It's <span className="text-primary">100% FREE!</span>
            </span>
          </h2>
          <p className="pricing-subtitle">
            Experience premium regional storytelling.
          </p>
        </div>

        <div className="pricing-cards">
          {plans.map((plan, i) => (
            <div
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${isRevealed ? 'free-mode' : ''}`}
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="card-top">
                <h3 className="plan-name">{plan.name}</h3>
                <span className="plan-quality">{plan.quality}</span>
              </div>

              <div className="price-wrapper">
                <div className="price-currency">₹</div>
                
                <div className={`price-amount ${isRevealed ? 'struck' : ''}`}>
                  {plan.originalPrice}
                  <div className="strike-line"></div>
                </div>
                
                <div className="price-period">/mo</div>

                <div className={`price-free ${isRevealed ? 'show' : ''}`}>
                  0
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`btn-plan ${isRevealed ? 'btn-free' : ''}`}>
                {isRevealed ? 'Watch for Free Now' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
