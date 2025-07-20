import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative w-screen flex flex-col items-center justify-center min-h-screen pt-16 pb-24 overflow-hidden text-center animate-fade-in-up">
        {/* Background layers */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-fuchsia-950 to-purple-900" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
            <div className="absolute w-[32rem] h-[32rem] bg-[radial-gradient(circle,rgba(121,40,202,0.22)_0%,transparent_70%)] rounded-full blur-2xl animate-pulse-slow" />
            <div className="absolute w-96 h-96 bg-[radial-gradient(circle,rgba(230,62,109,0.18)_0%,transparent_70%)] rounded-full blur-xl animate-pulse-medium" />
            <div className="absolute w-60 h-60 bg-[radial-gradient(circle,rgba(121,40,202,0.18)_0%,transparent_70%)] rounded-full blur-lg animate-pulse-fast" />
            <div className="absolute w-80 h-80 border-2 border-fuchsia-900/40 rounded-full animate-spin-slow" style={{ borderStyle: 'dashed' }} />
            <div className="absolute w-48 h-48 border border-pink-900/30 rounded-full animate-spin-reverse" style={{ borderStyle: 'dotted' }} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 animate-fade-in-up vh-100 vw-100">
          <img src="/images/logo.png" alt="Technology Club Logo" className="w-28 h-28 sm:w-32 sm:h-32 drop-shadow-xl rounded-full bg-white/10 p-2 mb-8 animate-fade-in" />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white font-tech drop-shadow mb-6 animate-fade-in-up delay-100">Technology Club</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-fuchsia-200 mb-10 font-medium animate-fade-in-up delay-200">Innovate. Create. Transform.</p>
          <a href="#about" className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-700 via-fuchsia-900 to-purple-900 text-white font-bold text-xl shadow-lg hover:scale-110 hover:shadow-pink-500/40 active:scale-95 transition-all duration-300 animate-fade-in-up delay-300 focus:outline-none focus:ring-4 focus:ring-fuchsia-700/40 smooth-scroll">
            Explore
          </a>
        </div>
        <style>{`
          html { scroll-behavior: smooth; }
          @keyframes pulse-slow { 0%, 100% { opacity: 0.7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
          .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
          @keyframes pulse-medium { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.12); } }
          .animate-pulse-medium { animation: pulse-medium 4s ease-in-out infinite; }
          @keyframes pulse-fast { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.16); } }
          .animate-pulse-fast { animation: pulse-fast 2.5s ease-in-out infinite; }
          @keyframes spin-slow { 100% { transform: rotate(360deg); } }
          .animate-spin-slow { animation: spin-slow 18s linear infinite; }
          @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
          .animate-spin-reverse { animation: spin-reverse 24s linear infinite; }
          @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
          .animate-fade-in-up { animation: fade-in-up 1.1s cubic-bezier(0.23, 1, 0.32, 1) both; }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
          .animate-fade-in { animation: fade-in 1.2s ease both; }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto animate-fade-in-up">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-32 h-32 opacity-30 text-fuchsia-900" fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" />
          </svg>
          <svg className="absolute bottom-0 right-0 w-24 h-24 opacity-20 text-pink-900" fill="none" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" rx="12" stroke="currentColor" strokeWidth="8" />
          </svg>
        </div>
        <div className="relative z-10 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-fuchsia-300 mb-10 font-tech drop-shadow">About Us</h2>
          <div className="max-w-2xl text-center text-white/90 text-lg sm:text-xl md:text-2xl space-y-6">
            <p>The Technology Club at NIT Srinagar is a community of tech enthusiasts dedicated to fostering innovation and technological advancement. We provide a platform for students to explore cutting-edge technologies, develop practical skills, and collaborate on exciting projects.</p>
            <p>Our mission is to create a vibrant tech ecosystem within the campus, organizing workshops, hackathons, and technical discussions that encourage learning and creativity. We believe in the power of technology to transform the world and aim to equip students with the knowledge and experience they need to be part of that transformation.</p>
          </div>
        </div>
      </section>

      {/* Explore the Club Section */}
      <section className="relative w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-fuchsia-300 mb-12 font-tech drop-shadow">Explore the Club</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full">
          {/* Events */}
          <Link to="/events" className="group bg-gradient-to-br from-gray-900/80 via-fuchsia-950/80 to-purple-900/80 rounded-2xl shadow-lg p-10 flex flex-col items-center hover:scale-105 hover:shadow-pink-500/30 hover:border-fuchsia-400 transition-all duration-300 border border-fuchsia-900/30 focus:outline-none focus:ring-4 focus:ring-fuchsia-700/30">
            <span className="mb-5 text-5xl text-pink-400 group-hover:text-fuchsia-400 transition-colors">📅</span>
            <h3 className="text-2xl font-semibold text-white mb-3 font-tech">Events</h3>
            <p className="text-fuchsia-200 text-center text-base">Check out our upcoming and past events, workshops, and hackathons.</p>
          </Link>
          {/* Gallery */}
          <Link to="/gallery" className="group bg-gradient-to-br from-gray-900/80 via-fuchsia-950/80 to-purple-900/80 rounded-2xl shadow-lg p-10 flex flex-col items-center hover:scale-105 hover:shadow-pink-500/30 hover:border-fuchsia-400 transition-all duration-300 border border-fuchsia-900/30 focus:outline-none focus:ring-4 focus:ring-fuchsia-700/30">
            <span className="mb-5 text-5xl text-pink-400 group-hover:text-fuchsia-400 transition-colors">🖼️</span>
            <h3 className="text-2xl font-semibold text-white mb-3 font-tech">Gallery</h3>
            <p className="text-fuchsia-200 text-center text-base">See memorable moments and highlights from our club activities.</p>
          </Link>
          {/* Projects */}
          <Link to="/projects" className="group bg-gradient-to-br from-gray-900/80 via-fuchsia-950/80 to-purple-900/80 rounded-2xl shadow-lg p-10 flex flex-col items-center hover:scale-105 hover:shadow-pink-500/30 hover:border-fuchsia-400 transition-all duration-300 border border-fuchsia-900/30 focus:outline-none focus:ring-4 focus:ring-fuchsia-700/30">
            <span className="mb-5 text-5xl text-pink-400 group-hover:text-fuchsia-400 transition-colors">💡</span>
            <h3 className="text-2xl font-semibold text-white mb-3 font-tech">Projects</h3>
            <p className="text-fuchsia-200 text-center text-base">Explore innovative projects and collaborations by our members.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
