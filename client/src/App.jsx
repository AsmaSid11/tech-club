import './App.css';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Home from './pages/Home';
import Events from './pages/Events';
import Archives from './pages/Archives';
import PastMembers from './pages/PastMembers';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="grid-overlay" />
      <Navbar />
      <main className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/projects" element={<Navigate to="/" replace />} />
          <Route path="/past-members" element={<PastMembers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
