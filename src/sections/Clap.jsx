import { useEffect, useRef } from 'react';
import './Clap.css';

const clapImages = [
  'https://framerusercontent.com/images/6YNskoJWIU0Tz3yUlRvhKIgcU.png?width=1300&height=400',
  'https://framerusercontent.com/images/yJ7T7jq4ziwZXXA6buf5JYAdyYA.png?width=1300&height=400',
  'https://framerusercontent.com/images/dP3oZxrGrv5IN1vehORQrsWTLpM.png?width=1300&height=400',
];

const Clap = () => {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const imgIndex = useRef(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      imgIndex.current = (imgIndex.current + 1) % clapImages.length;
      if (imgRef.current) {
        imgRef.current.style.opacity = '0';
        setTimeout(() => {
          if (imgRef.current) {
            imgRef.current.src = clapImages[imgIndex.current];
            imgRef.current.style.opacity = '1';
          }
        }, 300);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="clap" ref={ref}>
      <div className="container">
        <div className="clap-inner">
          <div className="clap-text">
            <div className="clap-badge reveal">✨ New Feature</div>
            <h2 className="clap-title reveal">
              Introducing<br />
              <span>Local Artist.</span>
            </h2>
            <p className="clap-sub reveal">
              We support local movies and Production. <strong>A Place Where everyone is welcome.</strong>
            </p>
            <p className="clap-desc reveal">
              Clap lets you send love, notes, and even money directly to creators.
            </p>

            <div className="clap-points reveal">
              <div className="clap-point">
                <span className="clap-point-icon">✍️</span>
                <span>Write a short note (up to 500 characters)</span>
              </div>
              <div className="clap-point">
                <span className="clap-point-icon">💰</span>
                <span>Send a tip (₹20 to ₹10,000)</span>
              </div>
              <div className="clap-point">
                <span className="clap-point-icon">❤️</span>
                <span>Support creators directly</span>
              </div>
            </div>

            <div className="clap-formula reveal">
              Every clap =&nbsp;<span>Applause</span>&nbsp;+&nbsp;<span>Recognition</span>&nbsp;+&nbsp;<span>Income</span>
            </div>

            <p className="clap-tagline reveal">
              Stories aren't built by algorithms. They're built by people.<br />
              <strong>Clap is how you say thank you.</strong>
            </p>
          </div>

          <div className="clap-visual">
            <div className="clap-phone-wrap">
              <img
                ref={imgRef}
                src={clapImages[0]}
                alt="Clap feature"
                className="clap-img"
              />
              <div className="clap-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clap;
