import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/events', label: 'Events' },
  { to: '/projects', label: 'Projects' },
  { to: '/past-members', label: 'Past Members' },
  { to: '/team', label: 'Team' },

]

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-gray-900/80 via-fuchsia-950/80 to-pink-900/80 backdrop-blur-lg border-b border-fuchsia-800 shadow-[0_4px_32px_0_rgba(230,62,109,0.15)] animate-navbar-flicker">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src="/images/logo.png"
            alt="Tech Club Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-pink-700 shadow-[0_0_16px_4px_rgba(230,62,109,0.5)] hover:scale-110 hover:shadow-[0_0_32px_8px_rgba(121,40,202,0.7)] transition-transform duration-300 bg-white p-1"
            style={{ boxShadow: '0 0 24px 4px #e63e6d, 0 0 8px 2px #7928ca' }}
          />
        </div>
        <span className="text-xl sm:text-2xl font-extrabold text-white tracking-widest font-tech drop-shadow-[0_0_8px_#e63e6d]">Tech Club</span>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(v => !v)}
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Desktop Nav */}
      <div className="hidden sm:flex gap-4 md:gap-6">
        {navLinks.map(link => {
          const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-white font-semibold uppercase tracking-wide font-tech px-2 py-1 transition-colors duration-200 ${isActive ? 'text-pink-400' : 'hover:text-pink-300'}`}
            >
              {link.label}
              <span className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 transition-all duration-300 ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'}`}></span>
            </Link>
          );
        })}
      </div>
      {/* Mobile Nav */}
      <div className={`sm:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gradient-to-br from-gray-900 via-fuchsia-950 to-pink-900 shadow-2xl z-30 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <nav className="flex flex-col items-center mt-20 gap-6">
          {navLinks.map(link => {
            const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg font-semibold uppercase tracking-wide font-tech px-2 py-1 transition-colors duration-200 ${isActive ? 'text-pink-400' : 'hover:text-pink-300'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && <div className="sm:hidden fixed inset-0 bg-black bg-opacity-40 z-20" onClick={() => setMenuOpen(false)}></div>}
      <style>{`
        @keyframes navbar-flicker {
          0%, 100% { box-shadow: 0 4px 32px 0 rgba(230,62,109,0.15), 0 0 8px 2px #7928ca; }
          50% { box-shadow: 0 4px 32px 0 rgba(230,62,109,0.25), 0 0 16px 4px #e63e6d; }
        }
        .animate-navbar-flicker { animation: navbar-flicker 2.5s infinite alternate; }
      `}</style>
    </nav>
  );
} 