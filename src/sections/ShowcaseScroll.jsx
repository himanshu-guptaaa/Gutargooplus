import './ShowcaseScroll.css';

const row1 = [
  '/networker 2.webp',
  '/ad1.webp',
  '/ad2.webp',
  '/ad3.webp',
 '/networker 2.webp',
  '/ad5.webp',
  '/ad6.webp',
  '/00.webp',
  

  
];

const row2 = [

 '/networker 3.webp',
  '/landscape.webp',
  '/landscape (2).webp',
  '/landscape (3).webp',
  '/networker 3.webp',
  '/Landscape (5).webp',
  '/landscape (6).webp',
  '/landscape alien frank.webp',
  'landscape.webp',
];

const ShowcaseScroll = () => {
  return (
    <section className="showcase">
      <div className="showcase-header">
        <div className="section-tag" style={{margin: '0 auto', display: 'inline-block'}}>Original Content</div>
        <h2 className="showcase-title">
          Original Stories.<br />
          <span className="text-primary">Real Talent.</span>
        </h2>
      </div>

      <div className="scroll-row scroll-row-left">
        <div className="scroll-track">
          {[...row1, ...row1].map((src, i) => (
            <div className="scroll-card scroll-card--portrait" key={i}>
              <img src={src} alt="Show" />
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-row scroll-row-right">
        <div className="scroll-track scroll-track--reverse">
          {[...row2, ...row2].map((src, i) => (
            <div className="scroll-card scroll-card--landscape" key={i}>
              <img src={src} alt="Show" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseScroll;
