import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import data from "../../public/json/events.json";

const eventsJson = data;

const events = Array.from({ length: 2 }, (_, i) => ({
  id: eventsJson[i].id,
  name: eventsJson[i].name,
  start_time: eventsJson[i].start_time,
  end_time: eventsJson[i].end_time,
  venue: eventsJson[i].venue,
  image: eventsJson[i].image,
}));
const TechFusion25 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [highlightImages, setHighlightImages] = useState([]);
  const [highlightsLoading, setHighlightsLoading] = useState(true);
  // custom button background color (default deep plum) and hover shade
  const [viewHighlightsBg, setViewHighlightsBg] = useState('#3b1033');

  // carousel helpers removed — events are displayed in a responsive grid
  // no countdown needed anymore; event completed
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 60 },
    }),
  };
  // removed countdown timer effect

  useEffect(() => {
    setHighlightsLoading(true);
    const highlights = [
      { src: "/images/techfusion25/highlights/1.webp", alt: "Highlight 1", id: 1 },
      { src: "/images/techfusion25/highlights/2.webp", alt: "Highlight 2", id: 2 },
      { src: "/images/techfusion25/highlights/3.webp", alt: "Highlight 3", id: 3 },
      { src: "/images/techfusion25/highlights/4.webp", alt: "Highlight 4", id: 4 },
      { src: "/images/techfusion25/highlights/5.webp", alt: "Highlight 5", id: 5 },
      { src: "/images/techfusion25/highlights/6.webp", alt: "Highlight 6", id: 6 },
      { src: "/images/techfusion25/highlights/7.webp", alt: "Highlight 7", id: 7 },
      { src: "/images/techfusion25/highlights/8.webp", alt: "Highlight 8", id: 8 },
      { src: "/images/techfusion25/highlights/9.webp", alt: "Highlight 9", id: 9 },
      { src: "/images/techfusion25/highlights/10.webp", alt: "Highlight 10", id: 10 },
      { src: "/images/techfusion25/highlights/11.webp", alt: "Highlight 11", id: 11 },
      { src: "/images/techfusion25/highlights/12.webp", alt: "Highlight 12", id: 12 },
      { src: "/images/techfusion25/highlights/13.webp", alt: "Highlight 13", id: 13 },
      { src: "/images/techfusion25/highlights/14.webp", alt: "Highlight 14", id: 14 },
      { src: "/images/techfusion25/highlights/15.webp", alt: "Highlight 15", id: 15 },
      { src: "/images/techfusion25/highlights/16.webp", alt: "Highlight 16", id: 16 },
    ];
    setHighlightImages(highlights);
    setHighlightsLoading(false);
  }, []);

  // --- STARLIGHT ANIMATION CONFIG ---
  const starlights = [
    { top: '10%', delay: 0.2, duration: 2.1, scale: 1.0 },
    { top: '16%', delay: 0.6, duration: 2.4, scale: 1.1 },
    { top: '22%', delay: 1.0, duration: 2.6, scale: 1.2 },
    { top: '28%', delay: 0.3, duration: 2.2, scale: 1.1 },
    { top: '34%', delay: 0.7, duration: 2.2, scale: 1.1 },
    { top: '40%', delay: 1.5, duration: 2.8, scale: 1.0 },
    { top: '46%', delay: 0.2, duration: 2.6, scale: 1.2 },
    { top: '52%', delay: 1.3, duration: 2.5, scale: 1.4 },
    { top: '58%', delay: 0.6, duration: 2.0, scale: 1.0 },
    { top: '64%', delay: 1.1, duration: 3.1, scale: 1.3 },
    { top: '70%', delay: 0.4, duration: 2.4, scale: 1.1 },
    { top: '76%', delay: 1.0, duration: 2.9, scale: 1.2 },
    { top: '82%', delay: 0.8, duration: 2.7, scale: 1.3 },
    { top: '88%', delay: 1.6, duration: 2.2, scale: 1.0 },
  ];

  // Scrambled Text Animation for Heading
  const scrambleText = (target, scrambleChars, progress) => {
    // progress: 0 (all scrambled) to 1 (all revealed)
    const revealCount = Math.floor(target.length * progress);
    let scrambled = '';
    for (let i = 0; i < target.length; i++) {
      if (target[i] === ' ' || target[i] === "'") {
        scrambled += target[i];
      } else if (i < revealCount) {
        scrambled += target[i];
      } else {
        scrambled += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
      }
    }
    return scrambled;
  };

  const heading = "TechFusion'25";
  const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  const [scrambled, setScrambled] = useState(heading);
  const [scrambleTrigger, setScrambleTrigger] = useState(0);
  useEffect(() => {
    let frame = 0;
    const totalFrames = 30 + heading.length * 3;
    let interval = setInterval(() => {
      frame++;
      const progress = Math.min(1, frame / totalFrames);
      setScrambled(scrambleText(heading, scrambleChars, progress));
      if (progress === 1) {
        clearInterval(interval);
        setTimeout(() => setScrambleTrigger(t => t + 1), 2000); // restart after 2s
      }
    }, 32);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [scrambleTrigger]);

  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full flex flex-col items-center justify-center min-h-screen pt-16 pb-24 overflow-hidden text-center">
        {/* --- Animated Starlight Background (now only in hero section) --- */}
        <div className="pointer-events-none absolute inset-0 w-full h-full z-0">
          {starlights.map((star, i) => (
            <motion.div
              key={i}
              initial={{ x: '-5vw', width: 8, opacity: 0, boxShadow: '0 0 16px 4px #fff8' }}
              animate={{
                x: '105vw',
                width: 64 * star.scale,
                opacity: [0, 1, 0.7, 0],
                boxShadow: [
                  '0 0 16px 4px #fff8',
                  '0 0 32px 8px #fff',
                  '0 0 24px 6px #fff8',
                  '0 0 0px 0px #fff0',
                ],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: star.duration,
                delay: star.delay,
                ease: 'easeInOut',
              }}
              style={{
                top: star.top,
                left: 0,
                height: 6 * star.scale,
                borderRadius: 9999,
                background: 'white',
                position: 'absolute',
                filter: 'blur(0.5px)',
                zIndex: 1,
              }}
            />
          ))}
        </div>
        {/* --- End Animated Starlight --- */}
    {/* Background video removed as requested */}

  <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 animate-fade-in-up w-full max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-tech drop-shadow mb-4 leading-tight">
            {scrambled}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white opacity-70 mt-2">
            The Festival Of Next Generation Thinkers
          </p>

          {/* Event completed banner */}
          <div className="mt-8 w-full px-4">
              <div className="relative max-w-5xl mx-auto rounded-2xl p-4 sm:p-6 overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute -left-20 -top-16 w-64 h-64  rounded-full filter blur-3xl opacity-35" />
              <div aria-hidden className="pointer-events-none absolute -right-24 bottom-[-20px] w-56 h-56 bg-gradient-to-tr from-indigo-500/18 via-fuchsia-500/10 to-transparent rounded-full filter blur-2xl opacity-30" />

              <div className="relative z-10 bg-white/40 rounded-2xl backdrop-blur-md shadow-sm p-6 md:p-8 border-0">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">TechFusion'25 — Successfully Completed</h2>
                    <p className="mt-2 text-gray-700 max-w-xl text-sm md:text-base">Thanks to everyone who participated — it was a great two-day festival of ideas, workshops, competitions, and collaboration. Relive the moments and explore the outcomes below.</p>

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-3 md:hidden">
                      <button
                        onClick={() => {
                          if (location.pathname === '/techfusion25') {
                            const el = document.getElementById('highlights');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            navigate('/techfusion25#highlights');
                          }
                        }}
                        onMouseEnter={() => setViewHighlightsBg('#5a1f55')}
                        onMouseLeave={() => setViewHighlightsBg('#521046ff')}
                        style={{ backgroundColor: viewHighlightsBg }}
                        className="w-full sm:w-auto inline-flex items-center gap-2 px-6 py-2 rounded-lg text-white font-semibold shadow-md transform transition"
                      >
                        View Highlights
                      </button>

                      <button
                        onClick={() => navigate('/techfusion25/events')}
                        className="w-full sm:w-auto inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-300 text-gray-900 font-medium bg-white/60 hover:bg-white/80 transition mt-3 sm:mt-0"
                      >
                        Events Archive
                      </button>
                    </div>
                    {/* Centered buttons for md+ screens */}
                    <div className="hidden md:flex md:justify-center md:gap-3 mt-6">
                      <button
                        onClick={() => {
                          if (location.pathname === '/techfusion25') {
                            const el = document.getElementById('highlights');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            navigate('/techfusion25#highlights');
                          }
                        }}
                        onMouseEnter={() => setViewHighlightsBg('#5a1f55')}
                        onMouseLeave={() => setViewHighlightsBg('#521046ff')}
                        style={{ backgroundColor: viewHighlightsBg }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg text-white font-semibold shadow-md transform transition"
                      >
                        View Highlights
                      </button>

                      <button
                        onClick={() => navigate('/techfusion25/events')}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-gray-300 text-gray-900 font-medium bg-white/60 hover:bg-white/80 transition"
                      >
                        Events Archive
                      </button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex-shrink-0 grid grid-cols-2 gap-4 text-center md:text-right">
                    <div className="px-3 py-2">
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">1K+</div>
                      <div className="text-xs text-gray-600 tracking-wider mt-1">Attendees</div>
                    </div>
                    <div className="px-3 py-2">
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">16</div>
                      <div className="text-xs text-gray-600 tracking-wider mt-1">Events</div>
                    </div>
                    {/* <div className="px-3 py-2">
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">150+</div>
                      <div className="text-xs text-gray-600 tracking-wider mt-1">Projects</div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-6 sm:px-12 lg:px-32">
        <div className="py-20 text-4xl sm:text-5xl text-center font-semibold text-white/70">
          About
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          {/* Left Side - Text */}
          <motion.div
            className="w-full md:w-3/5"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
            viewport={{ once: true, amount: 0.35 }} 
          >
            <div className="text-lg font-lg text-white/70 ">
              Our flagship two-day intra-college tech fest brought together a
              diverse mix of workshops, hackathons, coding competitions, and
              interactive sessions under one banner. It served as a platform for
              students to showcase their talents, gain hands-on experience, and
              collaborate across disciplines, while fostering creativity,
              problem-solving, and innovation. With its blend of learning,
              competition, and teamwork, the fest created an energetic space
              where students explored new technologies, built connections, and
              experienced the true spirit of tech-driven growth on campus.
            </div>
          </motion.div>

          {/* Right Side - Images */}
            <motion.div
            className="relative w-full md:w-2/5 h-[300px] md:h-[400px] rounded-2xl"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
            viewport={{ once: true, amount: 0.35 }} // <-- change here
          >
            {/* Big Image */}
            <img
              src="./images/techfusion25/Techfusionposter-main.webp"
              alt="Main"
              loading="eager"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />

            {/* Small Image overlapping */}
            <img
              src="./images/gallery/2.webp"
              alt="Overlay"
              loading="eager"
              className="md:absolute md:bottom-[-40px] md:left-[-40px] bottom-0 left-4 w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] object-cover rounded-lg shadow-xl border-4 border-white"
            />
          </motion.div>
        </div>
      </div>

      <div className="py-10 px-4">
        <div className="text-center py-10 text-5xl font-bold text-white/70">
          Events
        </div>

        <div className="flex justify-center">
          <div className="relative w-full">
            {/* arrows hidden because events are displayed in a responsive grid */}
            <button className="hidden" aria-hidden="true" />

            {/* Events: horizontal snap on small, 2-up grid on md+ */}
            <div className="w-full px-4">
              <div className="flex gap-6 items-stretch snap-x snap-mandatory overflow-x-auto no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:snap-none">
                {events.map((ev, idx) => (
                  <motion.div
                    key={ev.id}
                    data-card
                    variants={cardVariants}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    className="snap-center flex-shrink-0 w-[86%] sm:w-[52%] md:w-full relative event-card flex flex-col md:flex-row bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-3 sm:p-6 border border-fuchsia-300 transition-all duration-300 hover:shadow-fuchsia-500/40 overflow-hidden"
                  >
                    {/* Image column */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
                      <img
                        className="w-full h-36 sm:h-44 md:h-40 lg:h-48 object-contain bg-black/20 rounded-lg p-2"
                        src={ev.image}
                        alt={ev.name}
                        loading="eager"
                      />
                    </div>

                    {/* Details column */}
                    <div className="flex-1 pl-0 md:pl-6 mt-3 md:mt-0 md:pl-6 flex flex-col justify-between text-left gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                          {ev.name}
                        </h3>
                        <div className="flex flex-col gap-2">
                          <p className="text-gray-200 text-sm font-medium">
                            <span className="font-semibold text-fuchsia-300">Time:</span> {ev.start_time} - {ev.end_time}
                          </p>
                          <p className="text-gray-200 text-sm font-medium">
                            <span className="font-semibold text-fuchsia-300">Venue:</span> {ev.venue}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-6">
                        <button
                          onClick={() => navigate(`/techfusion25/events/${ev.id}`)}
                          className="inline-block w-full md:w-auto px-4 py-2 text-center rounded-lg border border-fuchsia-500 text-fuchsia-300 font-medium bg-fuchsia-900/10 hover:bg-fuchsia-600/20 hover:text-fuchsia-100 transition-all duration-200"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* view more events button */}
        <div className="text-center pt-9">
          <a
            href="/techfusion25/events"
            onClick={(e) => {
              if (e.ctrlKey || e.metaKey || e.button === 1) return;
              e.preventDefault();
              navigate("/techfusion25/events");
            }}
            className=" text-2xl sm:text-3xl font-semibold inline-block mt-auto px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-300 font-medium bg-fuchsia-900/10 hover:bg-fuchsia-600/20 hover:text-fuchsia-100 transition-all duration-200 shadow-fuchsia-900/20 shadow-sm"
          >
            View More Events...
          </a>
        </div>
      </div>
      {/* highlights */}
  <div id="highlights" className="py-20">
        <div className="text-center py-10 text-5xl font-bold text-white/70">
          Highlights
        </div>

        {highlightsLoading ? (
          <div className="flex justify-center items-center py-16">
            <div className="text-white/70 text-xl">Loading highlights...</div>
          </div>
        ) : highlightImages.length > 0 ? (
          <div className="overflow-hidden w-full py-4 rounded-xl">
            <motion.div
              className="flex gap-12 [&input]:!rounded-xl"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {highlightImages.concat(highlightImages).map((image, i) => (
                <div key={i} className="flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="eager"
                    className="h-56 sm:h-64 md:h-72 w-64 sm:w-80 md:w-96 object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="flex justify-center items-center py-16">
            <div className="text-white/70 text-xl">
              No highlight images found. Add images to
              /images/techfusion25/highlights/ folder.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechFusion25;
