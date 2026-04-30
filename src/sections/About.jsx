import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  // Logic to handle the .reveal CSS animation when scrolling
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className="about" id="about">
      {/* Assuming you have a wrapper to center content, usually max-width: 1200px */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div className="about-grid">
          
          {/* Left Side: Video */}
          <div className="about-left reveal" ref={addToRefs}>
            <div className="about-image-wrap">
              {/* 
                autoPlay, loop, muted, and playsInline are all REQUIRED 
                for a background video to automatically play on mobile devices.
              */}
              <video 
                src="/video.mp4" 
                className="about-video"
                autoPlay 
                loop 
                muted 
                playsInline 
                disablePictureInPicture
              />
              <div className="about-img-glow"></div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="about-right">
            <div className="section-tag reveal" ref={addToRefs}>
              About Gutargo+
            </div>
            
            <p className="about-text about-text--bold reveal" ref={addToRefs}>
              Experience stories that feel close to home. <span className="text-primary">Original Series</span> in your language.
            </p>
            
            <p className="about-text reveal" ref={addToRefs}>
              We bring you high-quality, addictive short series tailored for your phone. Whether you have 5 minutes or 5 hours, dive into a world of endless entertainment.
            </p>

            <div className="about-stats reveal" ref={addToRefs}>
              <div className="stat">
                <span className="stat-number">50<span className="stat-unit">+</span></span>
                <span className="stat-label">Original Shows</span>
              </div>
              
              <div className="stat-divider"></div>
              
              <div className="stat">
                <span className="stat-number">10<span className="stat-unit">M+</span></span>
                <span className="stat-label">Active Users</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;