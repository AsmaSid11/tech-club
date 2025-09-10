  // Simple FlipDigit for calendar-style flip
  const FlipDigit = ({ value }) => {
    const [prev, setPrev] = useState(value);
    const [flipping, setFlipping] = useState(false);
    useEffect(() => {
      if (value !== prev) {
        setFlipping(true);
        const timeout = setTimeout(() => {
          setFlipping(false);
          setPrev(value);
        }, 700);
        return () => clearTimeout(timeout);
      }
    }, [value, prev]);
    return (
      <span className="inline-block relative w-[2em] h-[1.4em] align-middle select-none" style={{ perspective: 1800 }}>
        <motion.span
          key={value}
          initial={{ rotateX: 180, opacity: 0.15, scale: 0.88, boxShadow: '0 16px 40px #fff', background: '#fff8' }}
          animate={{ rotateX: 0, opacity: 1, scale: 1.08, boxShadow: '0 2px 16px #fff6', background: 'transparent' }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 120, damping: 14 }}
          className="absolute inset-0 flex items-center justify-center w-full h-full text-inherit rounded shadow-2xl"
          style={{ willChange: 'transform,opacity,box-shadow' }}
        >
          {value}
        </motion.span>
        {!flipping && (
          <span className="opacity-0 absolute inset-0 flex items-center justify-center w-full h-full">{prev}</span>
        )}
      </span>
    );
  };
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getTechFusionHighlights } from "../utils/techfusionImages";

import data from "../../public/json/events.json";

const EVENT_DATE = new Date("2025-09-12T09:00:00"); // Example date

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
  const [highlightImages, setHighlightImages] = useState([]);
  const [highlightsLoading, setHighlightsLoading] = useState(true);
  const listRef = useRef(null);

  const scrollByAmount = (direction = "next") => {
    const el = listRef.current;
    if (!el) return;
    // Try to scroll by one card width if possible, fallback to 80% container width
    const firstCard = el.querySelector('[data-card]');
    let amount = Math.floor(el.clientWidth * 0.8);
    if (firstCard) {
      // include gap / margin by using bounding rect
      const cardRect = firstCard.getBoundingClientRect();
      amount = Math.floor(cardRect.width + 24); // 24px compensates for gap
    }
    el.scrollBy({ left: amount * (direction === "next" ? 1 : -1), behavior: "smooth" });
  };

  const next = () => scrollByAmount("next");
  const prev = () => scrollByAmount("prev");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 60 },
    }),
  };
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = EVENT_DATE - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Load highlight images
  useEffect(() => {
    const loadHighlights = async () => {
      setHighlightsLoading(true);
      try {
        const highlights = await getTechFusionHighlights();
        setHighlightImages(highlights);
      } catch (error) {
        console.error("Error loading highlight images:", error);
        // Fallback to some default images if loading fails
        setHighlightImages([
          {
            src: "/images/gallery/1.webp",
            alt: "TechFusion Highlight 1",
            id: 1,
          },
          {
            src: "/images/gallery/2.webp",
            alt: "TechFusion Highlight 2",
            id: 2,
          },
        ]);
      } finally {
        setHighlightsLoading(false);
      }
    };

    loadHighlights();
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

        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 animate-fade-in-up w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white font-tech drop-shadow mb-4">
            {scrambled}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white opacity-70 mt-2">
            The Festival Of Next Generation Thinkers
          </p>

          {/* Countdown placed inside hero and made responsive */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center items-center text-base sm:text-lg font-bold text-white w-full px-4">
            <div className="flex items-center justify-center">
              <div className="flex gap-4 md:gap-6 text-white font-bold text-3xl md:text-5xl">
                {/* Days */}
                <div className="flex flex-col items-center">
                  <div className="bg-white/30 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg">
                    <FlipDigit value={String(timeLeft.days).padStart(2, '0')} />
                  </div>
                  <span className="mt-2 text-xs md:text-sm tracking-widest">
                    DAYS
                  </span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="bg-white/30 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg">
                    <FlipDigit value={String(timeLeft.hours).padStart(2, '0')} />
                  </div>
                  <span className="mt-2 text-xs md:text-sm tracking-widest">
                    HRS
                  </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="bg-white/30 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg">
                    <FlipDigit value={String(timeLeft.minutes).padStart(2, '0')} />
                  </div>
                  <span className="mt-2 text-xs md:text-sm tracking-widest">
                    MIN
                  </span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="bg-white/30 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg">
                    <FlipDigit value={String(timeLeft.seconds).padStart(2, '0')} />
                  </div>
                  <span className="mt-2 text-xs md:text-sm tracking-widest">
                    SEC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24 px-6 sm:px-12 lg:px-32">
        <div className="py-20 text-5xl text-center font-semibold text-white/70">
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
            viewport={{ once: true, amount: 0.35 }} // <-- change here
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
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />

            {/* Small Image overlapping */}
            <img
              src="./images/gallery/2.webp"
              alt="Overlay"
              className="absolute md:bottom-[-40px] md:left-[-40px] bottom-[-20px] left-4 w-[120px] md:w-[150px] h-[120px] md:h-[150px] object-cover rounded-lg shadow-xl border-4 border-white"
            />
          </motion.div>
        </div>
      </div>

      <div className="py-10 px-4">
        <div className="text-center py-10 text-5xl font-bold text-white/70">
          Events
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={prev}
              aria-label="previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-fuchsia-500/70 hover:bg-fuchsia-500 text-white p-2 rounded-full z-20 md:hidden"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              aria-label="next"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-fuchsia-500/70 hover:bg-fuchsia-500 text-white p-2 rounded-full z-20 md:hidden"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable container with snap */}
            <div
              ref={listRef}
              className="overflow-x-auto no-scrollbar scroll-pl-6 scroll-smooth px-4"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="flex gap-6 items-stretch w-max snap-x snap-mandatory">
                {events.map((ev) => (
                  <div
                    key={ev.id}
            data-card
              className="snap-center flex-shrink-0 w-[86%] sm:w-[52%] md:w-[44%] lg:w-[36%] xl:w-[30%] 2xl:w-[26%] relative event-card flex flex-col bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-3 sm:p-6 border border-fuchsia-300 transition-all duration-300 hover:shadow-fuchsia-500/40 min-h-[320px] overflow-hidden"
                  >
                    <div className="flex-grow">
                      <img
                        className="w-full h-44 sm:h-52 md:h-48 lg:h-56 object-cover rounded-lg mb-4"
                        src={ev.image}
                        alt={ev.name}
                      />
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                        {ev.name}
                      </h3>
                      <div className="flex flex-col gap-2">
                        <p className="text-gray-200 text-sm font-medium">
                          <span className="font-semibold text-fuchsia-300">
                            Time:
                          </span>{" "}
                          {ev.start_time} - {ev.end_time}
                        </p>
                        <p className="text-gray-200 text-sm font-medium">
                          <span className="font-semibold text-fuchsia-300">
                            Venue:
                          </span>{" "}
                          {ev.venue}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/techfusion25/events/${ev.id}`)}
                      className="inline-block w-full mt-4 px-4 py-2 text-center rounded-lg border border-fuchsia-500 text-fuchsia-300 font-medium bg-fuchsia-900/10 hover:bg-fuchsia-600/20 hover:text-fuchsia-100 transition-all duration-200"
                    >
                      View Details
                    </button>
                  </div>
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
              // allow ctrl/cmd or middle-click to open in new tab
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
      <div className="py-20">
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
              animate={{ x: ["0%", "-50%"] }} // -50% for seamless loop
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 25, // adjust speed
                  ease: "linear",
                },
              }}
            >
              {highlightImages.concat(highlightImages).map((image, i) => (
                <div key={i} className="flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-72 w-96 object-cover rounded-lg shadow-lg"
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
