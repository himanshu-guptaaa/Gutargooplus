import './ShowcaseScroll.css';

const row1 = [
  '/01NCR.jpg',
  '/afsaan.jpg',
  '/badcat.jpg',
  '/network.jpg',
  
  '/01NCR.jpg',
  '/afsaan.jpg',
  '/badcat.jpg',
  '/network.jpg',
  '/landscape alien frank.jpg',

];

const row2 = [

  '/networker3.jpeg',
  '/landscapeafsaan.jpg',
  '/Landscape1.jpg',
  '/landscape.jpg',
  '/landscape badcat.jpg',
  '/landscape alien frank.jpg',
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
