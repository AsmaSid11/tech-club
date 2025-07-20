import logo from '../assets/react.svg'; // Replace with your actual logo path if different

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[60vh] pt-8 pb-12">
        {/* Animated Circles Background */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="circle bg-pink-500/30 w-60 h-60 rounded-full blur-2xl animate-pulse-slow" />
              <div className="circle bg-fuchsia-500/20 w-40 h-40 rounded-full blur-xl absolute top-10 left-10 animate-pulse-medium" />
              <div className="circle bg-purple-500/20 w-24 h-24 rounded-full blur-lg absolute top-20 left-20 animate-pulse-fast" />
            </div>
          </div>
        </div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="hero-logo mb-4">
            <img src={logo} alt="Technology Club Logo" className="w-24 h-24 drop-shadow-xl rounded-full bg-white/10 p-2" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-tech drop-shadow mb-2">Technology Club</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-fuchsia-200 mb-6 font-medium">Innovate. Create. Transform.</p>
          <a href="#about" className="cta-btn inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:scale-105 hover:from-pink-400 hover:to-fuchsia-500 transition-all duration-300">Explore</a>
        </div>
        {/* Custom Keyframes for Circles */}
        <style>{`
          @keyframes pulse-slow { 0%, 100% { opacity: 0.7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
          .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
          @keyframes pulse-medium { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.12); } }
          .animate-pulse-medium { animation: pulse-medium 4s ease-in-out infinite; }
          @keyframes pulse-fast { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.16); } }
          .animate-pulse-fast { animation: pulse-fast 2.5s ease-in-out infinite; }
        `}</style>
      </section>
      {/* Existing Content */}
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-8 py-12 text-white font-tech text-2xl sm:text-3xl md:text-4xl text-center">
        Welcome to the Tech Club!
      </div>
    </div>
  )
} 