import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/archives', label: 'Archives' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Team' },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const active = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to.split('#')[0]);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-marks">
            <span className="brand-mark" title="Technology Club"><img src="/images/logo.webp" alt="Technology Club NIT Srinagar" /></span>
            <span className="brand-mark nit-mark" title="NIT Srinagar"><img src="/images/nit-logo.png" alt="National Institute of Technology Srinagar" /></span>
          </div>
          <span className="brand-copy"><b>TECHNOLOGY</b><span>CLUB · NIT SRINAGAR</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => link.label === 'About' ? (
            <a key={link.label} href="/#about" className={active(link.to) ? 'nav-link active' : 'nav-link'}>{link.label}</a>
          ) : (
            <Link key={link.label} to={link.to} className={active(link.to) ? 'nav-link active' : 'nav-link'}>{link.label}</Link>
          ))}
          <Link to="/events" className="nav-cta">Explore <ArrowUpRight size={15} /></Link>
        </nav>

        <button className="mobile-menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mobile-drawer">
          {navLinks.map((link) => link.label === 'About' ? (
            <a key={link.label} href="/#about" onClick={() => setOpen(false)}>{link.label}</a>
          ) : (
            <Link key={link.label} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <Link to="/events" className="nav-cta mobile-cta" onClick={() => setOpen(false)}>Explore <ArrowUpRight size={15} /></Link>
        </div>
      )}
    </header>
  );
}
