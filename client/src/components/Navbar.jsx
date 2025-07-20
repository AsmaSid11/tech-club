import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/projects', label: 'Projects' },
  { to: '/past-members', label: 'Past Members' },
  { to: '/team', label: 'Team' },
  { to: '/gallery', label: 'Gallery' },
]

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="flex items-center justify-between px-8 py-4 fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-gray-900/70 via-fuchsia-950/70 to-pink-900/70 backdrop-blur-lg border-b border-fuchsia-800 shadow-[0_4px_32px_0_rgba(230,62,109,0.15)] animate-navbar-flicker ">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src="/images/logo.png"
            alt="Tech Club Logo"
            className="h-12 w-12 rounded-full border-2 border-pink-700 shadow-[0_0_16px_4px_rgba(230,62,109,0.5)] hover:scale-110 hover:shadow-[0_0_32px_8px_rgba(121,40,202,0.7)] transition-transform duration-300 bg-white p-1"
            style={{ boxShadow: '0 0 24px 4px #e63e6d, 0 0 8px 2px #7928ca' }}
          />
        </div>
        <span className="text-2xl font-extrabold text-white tracking-widest font-tech drop-shadow-[0_0_8px_#e63e6d]">Tech Club</span>
      </div>
      <div className="flex gap-6">
        {navLinks.map(link => {
          const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-white font-semibold uppercase tracking-wide font-tech px-2 py-1 transition-colors duration-200
                ${isActive ? 'text-pink-400' : 'hover:text-pink-300'}
              `}
            >
              {link.label}
              <span className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 transition-all duration-300
                ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'}`}></span>
            </Link>
          );
        })}
      </div>
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