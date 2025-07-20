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
        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-fuchsia-950 to-pink-900" />
        {/* Noise Layer */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E')] opacity-20" />
        {/* Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        {/* Animated Glow Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(230,62,109,0.18),transparent_70%)] animate-pulse opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(121,40,202,0.18),transparent_70%)] animate-pulse opacity-60" />
        {/* Animated SVG Blobs */}
        <svg className="absolute w-[500px] h-[500px] top-[-120px] left-[-120px] animate-float-slow opacity-40" viewBox="0 0 500 500" fill="none"><ellipse cx="250" cy="250" rx="200" ry="180" fill="#e63e6d" /></svg>
        <svg className="absolute w-[350px] h-[350px] bottom-[-100px] right-[-100px] animate-float-medium opacity-30" viewBox="0 0 500 500" fill="none"><ellipse cx="250" cy="250" rx="170" ry="140" fill="#7928ca" /></svg>
        <svg className="absolute w-[200px] h-[200px] top-[60%] left-[60%] animate-float-fast opacity-30" viewBox="0 0 500 500" fill="none"><ellipse cx="250" cy="250" rx="100" ry="90" fill="#e63e6d" /></svg>
        {/* Custom Keyframes for Floating Animation */}
        <style>{`
          @keyframes float-slow { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(30px) scale(1.05); } 100% { transform: translateY(0) scale(1); } }
          .animate-float-slow { animation: float-slow 18s ease-in-out infinite; }
          @keyframes float-medium { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(-25px) scale(1.04); } 100% { transform: translateY(0) scale(1); } }
          .animate-float-medium { animation: float-medium 13s ease-in-out infinite; }
          @keyframes float-fast { 0% { transform: translateY(0) scale(1); } 50% { transform: translateY(18px) scale(1.03); } 100% { transform: translateY(0) scale(1); } }
          .animate-float-fast { animation: float-fast 9s ease-in-out infinite; }
        `}</style>
      </div>
      <div className="relative z-10 min-h-screen bg-transparent">
        <Navbar />
        <main className="max-w-5xl mx-auto bg-gray-900 bg-opacity-80 rounded-xl shadow-xl pt-20">
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
  )
}