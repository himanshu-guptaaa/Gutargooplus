import { useEffect, useRef } from 'react';
import './Clap.css';

const LocalOttSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="clap" ref={ref}>
      <div className="container">
        <div className="clap-inner">
          {/* Left Side: Content & USP */}
          <div className="clap-text">
            <div className="clap-badge reveal">✨ Regional Cinema</div>
            <h2 className="clap-title reveal">
              Celebrate<br />
              <span>Local Artists.</span>
            </h2>
            <p className="clap-sub reveal">
              We support state-level movies and production houses. <strong>A platform where your local stories shine.</strong>
            </p>
            <p className="clap-desc reveal">
              Discover movies and web series produced right in your area, crafted beautifully in your native language. We give local talent the spotlight they deserve.
            </p>

            <div className="clap-points reveal">
              <div className="clap-point">
                <span className="clap-point-icon">🎬</span>
                <span>Exclusive state-wise movies and series</span>
              </div>
              <div className="clap-point">
                <span className="clap-point-icon">🗣️</span>
                <span>Stream content in your own native language</span>
              </div>
              <div className="clap-point">
                <span className="clap-point-icon">🚀</span>
                <span>Empower and support regional production houses</span>
              </div>
            </div>

            <div className="clap-formula reveal">
              Every stream =&nbsp;<span>Culture</span>&nbsp;+&nbsp;<span>Recognition</span>&nbsp;+&nbsp;<span>Growth</span>
            </div>

            <p className="clap-tagline reveal">
              Stories aren't built by algorithms. They're born from culture.<br />
              <strong>Watch what feels like home.</strong>
            </p>
          </div>

          {/* Right Side: Continuous Video */}
          <div className="clap-visual">
            <div className="clap-phone-wrap">
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/MapSquare.mp4"
                className="clap-media"
              />
              <div className="clap-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalOttSection;