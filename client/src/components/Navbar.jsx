import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/techfusion25', label: "TechFusion '25" },
  { to: '/gallery', label: 'Gallery' },
  { to: '/events', label: 'Events' },
  { to: '/projects', label: 'Projects' },
  { to: '/past-members', label: 'Past Members' },
  { to: '/team', label: 'Team' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 fixed top-0 left-0 w-full z-20 bg-gray-900/95 backdrop-blur-lg border-b border-violet-dark/50 shadow-[0_4px_32px_0_rgba(0,0,0,0.4)] animate-navbar-flicker">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-violet-deep/60 to-violet-dark/60"></div>
      <div className="flex items-center gap-3 relative z-10">
        <div className="relative">
          <img
            src="/images/logo.png"
            alt="Tech Club Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-violet-dark shadow-[0_0_16px_4px_rgba(106,30,85,0.5)] hover:scale-110 hover:shadow-[0_0_32px_8px_rgba(59,28,50,0.7)] transition-transform duration-300 bg-white p-1"
            style={{ boxShadow: '0 0 24px 4px #6A1E55, 0 0 8px 2px #3B1C32' }}
          />
        </div>
        <span className="text-xl sm:text-2xl font-extrabold text-white tracking-widest font-tech drop-shadow-[0_0_8px_#6A1E55]">Technology Club</span>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-300 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800/90 transition-all duration-200 relative z-10"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(v => !v)}
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 drop-shadow-sm ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 drop-shadow-sm ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 drop-shadow-sm ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Desktop Nav */}
      <div className="hidden sm:flex gap-4 md:gap-6 relative z-10">
        {navLinks.map(link => {
          const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
          const baseClasses = "group relative font-semibold uppercase tracking-wide font-tech px-3 py-2 transition-all duration-300 rounded-lg";
          const activeClasses = "bg-white/10 text-violet-300 drop-shadow-[0_0_6px_rgba(196,181,253,0.4)]";
          const inactiveClasses = "text-white hover:bg-white/10 hover:text-violet-300 hover:drop-shadow-[0_0_6px_rgba(196,181,253,0.3)]";

          if (link.label === 'About') {
            return (
              <a
                key={link.to}
                href="/#about"
                className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                {link.label}
                <span className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-violet-dark to-violet-deep transition-transform duration-300 transform ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            );
          }
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            >
              {link.label}
              <span className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-violet-dark to-violet-deep transition-transform duration-300 transform ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          );
        })}
      </div>
      {/* Mobile Nav */}
      <div className={`sm:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900/95 backdrop-blur-md shadow-2xl z-30 transform transition-transform duration-300 border-l-2 border-violet-dark/50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-violet-deep/80 to-violet-dark/80"></div>
        <button
          className="relative z-10 absolute top-4 right-4 text-white text-3xl focus:outline-none hover:text-violet-300 transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <nav className="relative z-10 flex flex-col items-center mt-20 gap-6 px-4">
          {navLinks.map(link => {
            const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
            const baseClasses = "text-lg font-semibold uppercase tracking-wide font-tech px-6 py-3 transition-all duration-300 rounded-lg w-full text-center border border-transparent";
            const activeClasses = "bg-violet-dark/40 text-violet-200 border-violet-400/50 shadow-lg shadow-violet-dark/20";
            const inactiveClasses = "text-white hover:bg-violet-dark/30 hover:text-violet-200 hover:border-violet-400/30 active:bg-violet-dark/50";


            if (link.label === 'About') {
              return (
                <a
                  key={link.to}
                  href="/#about"
                  className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      {/* Overlay for mobile menu */}

      {menuOpen && <div className="sm:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-20" onClick={() => setMenuOpen(false)}></div>}

      <style>{`
        @keyframes navbar-flicker {
          0%, 100% { 
            box-shadow: 0 4px 32px 0 rgba(0,0,0,0.4), 0 0 8px 2px rgba(59,28,50,0.8);
          }
          50% { 
            box-shadow: 0 4px 32px 0 rgba(0,0,0,0.6), 0 0 16px 4px rgba(106,30,85,0.9);
          }
        }
        .animate-navbar-flicker { animation: navbar-flicker 2.5s infinite alternate; }
      `}</style>
    </nav>
  );
} 