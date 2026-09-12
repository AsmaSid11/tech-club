import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <div className="brand-marks">
              <span className="brand-mark"><img src="/images/logo.webp" alt="Technology Club" /></span>
              <span className="brand-mark nit-mark"><img src="/images/nit-logo.png" alt="NIT Srinagar" /></span>
            </div>
            <span style={{ fontWeight: 700, letterSpacing: '0.1em' }}>TECHNOLOGY CLUB · NIT SRINAGAR</span>
          </div>
          <p>Building a vibrant technology ecosystem at NIT Srinagar through learning, collaboration and experimentation.</p>
        </div>
        <div className="footer-links">
          <Link to="/events">Events <ArrowUpRight size={14}/></Link>
          <Link to="/gallery">Gallery <ArrowUpRight size={14}/></Link>
          <Link to="/team">Team <ArrowUpRight size={14}/></Link>
          <Link to="/archives">Archives <ArrowUpRight size={14}/></Link>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Technology Club, NIT Srinagar</span><span>Innovate. Create. Transform.</span></div>
    </footer>
  );
}
