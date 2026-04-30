import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="/" className="nav-logo"> 
          <img src="./Title_white.png" alt="Gutargoo Logo" className="logo-image" />
        </a>

        <div className="nav-cta">
          <span className="nav-available">Available for iOS & Android</span>
          <a
            href="https://play.google.com/store/apps/details?id=com.gutargooproo.application"
            className="btn-get-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the app
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;