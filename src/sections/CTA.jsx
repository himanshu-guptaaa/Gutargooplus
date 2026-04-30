import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-glow-left" />
      <div className="cta-glow-right" />
      <div className="container">
        <div className="cta-inner">
          <div className="cta-logo"><img src="Gutargoo G.png" alt="" /></div>
          <h2 className="cta-title">
            Get the Drama<br />your Day Deserves.
          </h2>
          <p className="cta-sub">
            Snackable. Fictional. Emotional. Real.<br />
            Welcome to Chai Shots.
          </p>
          <p className="cta-available">Available for iOS & Android</p>
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
          </div>
        
     
    </section>
  );
};

export default CTA;
