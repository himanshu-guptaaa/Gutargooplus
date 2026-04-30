import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import Marquee from './components/Marquee';
import About from './sections/About';
import HowItWorks from './sections/HowItWorks';
import Clap from './sections/Clap';
// import Why from './sections/Why';
import ShowcaseScroll from './sections/ShowcaseScroll';
import Moments from './sections/Moments';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';

// Legal Pages
import Terms from './sections/Terms'; 
import Privacy from './sections/Privacy'; 

// This groups your main landing page sections together
const LandingPage = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <HowItWorks />
      <Marquee reverse />
      <Clap />
      {/* <Why /> */}
      <ShowcaseScroll />
      <Moments />
      <FAQ />
      <CTA />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        {/* Routes handle switching between the Home page and Legal pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;