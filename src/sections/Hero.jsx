import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const movies = [
  '/network.jpg', 
  '/afsaan.jpg',
  '/badcat.jpg',
  '/01NCR.jpg',
  '/alien frnk 2.jpg',
];

const words = [
  "Full High.",
  "Your Entertainment.",
  "Always Real.",
  "Pure Drama.",
  "No Limits."
  
];

const Hero = () => {
  const titleRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Text changing logic
  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(textInterval);
  }, []);

  // Carousel auto-play logic
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % movies.length);
    }, 3000);
    return () => clearInterval(carouselInterval);
  }, []);

  // Title fade-in animation
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(40px)';
      setTimeout(() => {
        titleRef.current.style.transition = 'all 0.9s cubic-bezier(0.16,1,0.3,1)';
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }, 200);
    }
  }, []);

  // Calculate position relative to the active card
  const getOffset = (index) => {
    const diff = index - activeIndex;
    if (diff < -Math.floor(movies.length / 2)) return diff + movies.length;
    if (diff > Math.floor(movies.length / 2)) return diff - movies.length;
    return diff;
  };

  return (
    <section className="hero">
      {/* Top Content: Title & Buttons */}
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          REGIONAL STORIES.<br />
          <span className="hero-highlight">{words[textIndex]}</span>
        </h1>

        <div className="hero-cta">
          <a
            href="https://apps.apple.com/in/app/gutargoo/id6761012576"
            target="_blank"
            rel="noopener noreferrer"
            className="store-link"
          >
            <img src="/apple.png" alt="Download on the App Store" className="store-logo" />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.gutargooproo.application"
            target="_blank"
            rel="noopener noreferrer"
            className="store-link"
          >
            <img src="/playstore.png" alt="Get it on Google Play" className="store-logo" />
          </a>
        </div>
      </div>

      {/* Bottom Content: Anchored Fan Spread */}
      <div className="cards-spread-container">
        {movies.map((poster, index) => {
          const offset = getOffset(index);
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <div
              key={index}
              className={`spread-card ${isActive ? 'active' : ''}`}
              style={{
                '--offset': offset,
                '--abs-offset': absOffset,
                zIndex: movies.length - absOffset
              }}
            >
              <img src={poster} alt={`Movie Poster ${index + 1}`} />
              {/* Optional dark overlay for background posters to make center pop */}
              {!isActive && <div className="card-overlay"></div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;