import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('techfusion-popup-shown');
    
    if (!popupShown && !hasShownPopup) {
      // Show popup after 1.5 seconds
      const timer = setTimeout(() => {
        setShowPopup(true);
        setHasShownPopup(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [hasShownPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Remember that popup was shown in this session
    sessionStorage.setItem('techfusion-popup-shown', 'true');
  };

  const handlePopupClick = () => {
    handleClosePopup();
  };
  return (
    <div className="flex flex-col items-center w-full">
      {/* TechFusion Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClosePopup}
            >
              {/* Popup Container */}
              <motion.div
                className="relative bg-gradient-to-br from-gray-900/95 via-violet-deep/90 to-violet-dark/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-violet-400/30 max-w-md w-full mx-4 overflow-hidden"
                initial={{ scale: 0.7, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.7, opacity: 0, y: 50 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 25,
                  duration: 0.5 
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute -top-10 -right-10 w-20 h-20 bg-violet-400/20 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360] 
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-400/15 rounded-full"
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 180, 0] 
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClosePopup}
                  className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Content */}
                <div className="relative z-10 p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    initial={{ rotate: -10, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🚀</span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-2xl font-bold text-white mb-3 font-tech"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    TechFusion'25 is Here!
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-violet-200 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Don't miss out on our flagship tech festival! Exciting competitions, workshops, and innovation await you.
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      to="/techfusion25/events"
                      onClick={handlePopupClick}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-violet-500/25"
                    >
                      Explore Events
                    </Link>
                    <button
                      onClick={handleClosePopup}
                      className="flex-1 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-200 border border-white/20"
                    >
                      Maybe Later
                    </button>
                  </motion.div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent"
                  style={{
                    background: "linear-gradient(45deg, rgba(139, 69, 255, 0.3), rgba(168, 85, 247, 0.3), rgba(139, 69, 255, 0.3))",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative w-screen flex flex-col items-center justify-center min-h-screen pt-16 pb-24 overflow-hidden text-center animate-fade-in-up">
        {/* Background layers removed to use App-level background */}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 animate-fade-in-up vh-100 vw-100">
          <img src="/images/logo.webp" alt="Technology Club Logo" className="w-28 h-28 sm:w-32 sm:h-32 drop-shadow-xl rounded-full bg-white/10 p-2 mb-8 animate-fade-in" />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white font-tech drop-shadow mb-6 animate-fade-in-up delay-100">Technology Club</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-violet-200 mb-10 font-medium animate-fade-in-up delay-200">Innovate. Create. Transform.</p>
          <a href="#explore" className="px-10 py-4 rounded-full bg-gradient-to-r from-violet-dark via-violet-deep to-purple-900 text-white font-bold text-xl shadow-lg hover:scale-110 hover:shadow-violet-dark/40 active:scale-95 transition-all duration-300 animate-fade-in-up delay-300 focus:outline-none focus:ring-4 focus:ring-violet-dark/40 smooth-scroll">
            Explore
          </a>
        </div>
        <style>{`
          html { scroll-behavior: smooth; }
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
          <svg className="absolute top-0 left-0 w-32 h-32 opacity-30 text-violet-dark" fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" />
          </svg>
          <svg className="absolute bottom-0 right-0 w-24 h-24 opacity-20 text-violet-deep" fill="none" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" rx="12" stroke="currentColor" strokeWidth="8" />
          </svg>
        </div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-violet-300 to-purple-400 bg-clip-text text-transparent mb-4 font-tech drop-shadow-lg tracking-wide uppercase animate-fade-in-up">
            About Us
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-violet-300 to-purple-400 rounded-full animate-pulse"></div>
          </div>
          <div className="max-w-2xl text-center text-white/90 text-lg sm:text-xl md:text-2xl space-y-6 flex flex-col items-center mx-auto">
            <p>The Technology Club at NIT Srinagar is a community of tech enthusiasts dedicated to fostering innovation and technological advancement. We provide a platform for students to explore cutting-edge technologies, develop practical skills, and collaborate on exciting projects.</p>
            <p>Our mission is to create a vibrant tech ecosystem within the campus, organizing workshops, hackathons, and technical discussions that encourage learning and creativity. We believe in the power of technology to transform the world and aim to equip students with the knowledge and experience they need to be part of that transformation.</p>
          </div>
        </div>
      </section>

      {/* Explore the Club Section */}
      <section id="explore" className="relative w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-violet-300 to-purple-400 bg-clip-text text-transparent mb-4 font-tech drop-shadow-lg tracking-wide uppercase animate-fade-in-up">
          Explore the Club
        </h2>
        <div className="flex justify-center mb-10">
          <div className="h-1 w-20 bg-gradient-to-r from-violet-300 to-purple-400 rounded-full animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full">
          {/* Events */}
          <Link to="/events" className="group bg-white/5 backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-violet-deep/80 to-violet-dark/80 rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-violet-dark/30 hover:border-transparent hover:bg-gradient-to-tr hover:from-violet-dark/60 hover:to-violet-deep/60 hover:shadow-violet-dark/40 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-violet-dark/30 relative overflow-hidden">
            <span className="mb-5 text-5xl text-violet-300 group-hover:text-violet-200 transition-colors group-hover:animate-bounce">📅</span>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-300 to-purple-400 rounded-full mb-5 opacity-70 group-hover:opacity-100 transition-all"></div>
            <h3 className="text-2xl font-semibold text-white mb-3 font-tech drop-shadow">Events</h3>
            <p className="text-violet-200 text-center text-base">Check out our upcoming and past events, workshops, and hackathons.</p>
            <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-violet-300 group-hover:shadow-[0_0_40px_0_rgba(106,30,85,0.3)] transition-all duration-300"></div>
          </Link>
          {/* Gallery */}
          <Link to="/gallery" className="group bg-white/5 backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-violet-deep/80 to-violet-dark/80 rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-violet-dark/30 hover:border-transparent hover:bg-gradient-to-tr hover:from-violet-dark/60 hover:to-violet-deep/60 hover:shadow-violet-dark/40 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-violet-dark/30 relative overflow-hidden">
            <span className="mb-5 text-5xl text-violet-300 group-hover:text-violet-200 transition-colors group-hover:animate-pulse">🖼️</span>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-300 to-purple-400 rounded-full mb-5 opacity-70 group-hover:opacity-100 transition-all"></div>
            <h3 className="text-2xl font-semibold text-white mb-3 font-tech drop-shadow">Gallery</h3>
            <p className="text-violet-200 text-center text-base">See memorable moments and highlights from our club activities.</p>
            <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-violet-300 group-hover:shadow-[0_0_40px_0_rgba(106,30,85,0.3)] transition-all duration-300"></div>
          </Link>
          {/* Projects */}
          <Link to="/projects" className="group bg-white/5 backdrop-blur-md bg-gradient-to-br from-gray-900/80 via-violet-deep/80 to-violet-dark/80 rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-violet-dark/30 hover:border-transparent hover:bg-gradient-to-tr hover:from-violet-dark/60 hover:to-violet-deep/60 hover:shadow-violet-dark/40 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-violet-dark/30 relative overflow-hidden">
            <span className="mb-5 text-5xl text-violet-300 group-hover:text-violet-200 transition-colors group-hover:animate-spin">💡</span>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-300 to-purple-400 rounded-full mb-5 opacity-70 group-hover:opacity-100 transition-all"></div>
            <h3 className="text-2xl font-semibold text-white mb-3 font-tech drop-shadow">Projects</h3>
            <p className="text-violet-200 text-center text-base">Explore innovative projects and collaborations by our members.</p>
            <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-violet-300 group-hover:shadow-[0_0_40px_0_rgba(106,30,85,0.3)] transition-all duration-300"></div>
          </Link>
        </div>
      </section>
    </div>
  );
}
