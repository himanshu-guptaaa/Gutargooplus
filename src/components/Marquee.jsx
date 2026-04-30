import './Marquee.css';

const items = ['हिन्दी', 'ENGLISH', 'తెలుగు', 'ਪੰਜਾਬੀ', 'کشمیری', 'ꯃꯤꯇꯩꯂꯣꯟ', 'ગુજરાતી', 'मराठी'];

const Marquee = ({ reverse = false }) => {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrapper">
      <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
