import { useState, useEffect, useRef } from 'react';
import './Moments.css';

const moments = [
  {
    img: './public/landscape alien frank.jpg',
    title: 'Waiting for a cab?',
    sub: 'Watch an episode.',
  },
  {
    img: './public/landscape badcat.jpg',
    title: 'Coffee break at work?',
    sub: 'Two minutes of drama.',
  },
  {
    img: './public/landscapeafsaan.jpg',
    title: 'Stuck in traffic?',
    sub: 'Let the drama continue.',
  },
  {
    img: './public/networker3.jpeg',
    title: 'In the lift?',
    sub: 'Just enough time for a story.',
  },
  {
    img: './public/Landscape1.jpg',
    title: 'Lying in bed?',
    sub: 'End your day with a short drama.',
  },
];

const Moments = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % moments.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = (i) => {
    setActive(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % moments.length);
    }, 3000);
  };

  return (
    <section className="moments">
      <div className="container">
        <div className="moments-header">
          <div className="section-tag">Entertainment That Moves With You</div>
          <h2 className="moments-title">
            Fits perfectly into<br />
            <span className="text-primary">every moment</span> of your day
          </h2>
        </div>

        <div className="moments-layout">
          <div className="moments-tabs">
            {moments.map((m, i) => (
              <button
                key={i}
                className={`moment-tab ${active === i ? 'active' : ''}`}
                onClick={() => handleClick(i)}
              >
                <div className="tab-content">
                  <span className="tab-title">{m.title}</span>
                  <span className="tab-sub">{m.sub}</span>
                </div>
                <div className="tab-arrow">→</div>
              </button>
            ))}
          </div>

          <div className="moments-display">
            {moments.map((m, i) => (
              <div
                key={i}
                className={`moment-slide ${active === i ? 'active' : ''}`}
              >
                <img src={m.img} alt={m.title} />
                <div className="moment-caption">
                  <h3>{m.title}</h3>
                  <p>{m.sub}</p>
                </div>
              </div>
            ))}
            <div className="moment-dots">
              {moments.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${active === i ? 'active' : ''}`}
                  onClick={() => handleClick(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moments;
