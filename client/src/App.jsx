import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Projects from './pages/Projects'
import PastMembers from './pages/PastMembers'
import Team from './pages/Team'
import Gallery from './pages/Gallery'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Enhanced Techy Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-fuchsia-950 to-purple-900" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        {/* Animated Techy Circles */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
          <div className="absolute w-[32rem] h-[32rem] bg-[radial-gradient(circle,rgba(121,40,202,0.22)_0%,transparent_70%)] rounded-full blur-2xl animate-pulse-slow" />
          <div className="absolute w-96 h-96 bg-[radial-gradient(circle,rgba(230,62,109,0.18)_0%,transparent_70%)] rounded-full blur-xl animate-pulse-medium" />
          <div className="absolute w-60 h-60 bg-[radial-gradient(circle,rgba(121,40,202,0.18)_0%,transparent_70%)] rounded-full blur-lg animate-pulse-fast" />
          {/* Techy ring */}
          <div className="absolute w-80 h-80 border-2 border-fuchsia-900/40 rounded-full animate-spin-slow" style={{borderStyle:'dashed'}} />
          <div className="absolute w-48 h-48 border border-pink-900/30 rounded-full animate-spin-reverse" style={{borderStyle:'dotted'}} />
        </div>
        {/* Custom Keyframes for Circles and Rings */}
        <style>{`
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
        `}</style>
      </div>
      <div className="relative z-10 min-h-screen bg-transparent">
        <Navbar />
        <main className="pt-24 px-2 sm:px-6 md:px-10 transition-all duration-300 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/past-members" element={<PastMembers />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
