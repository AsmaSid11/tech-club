import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { DRIVE_LINKS, carouselImages, galleryImages, galleryEvents } from '../data/gallery';

export default function Gallery() {
  const featured = carouselImages;
  const [filter, setFilter] = useState('All');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [paused, setPaused] = useState(false);

  const [lightboxPool, setLightboxPool] = useState(galleryImages);

  const gridImages = (() => {
    if (filter === 'All') {
      const take = (event) =>
        galleryImages.filter((img) => img.event === event).slice(0, 3);
      const recent = take('Orientation 2026');
      const fusion = take('TechFusion 2025');
      const club = take('Club moments');
      const mixed = [];
      for (let i = 0; i < 3; i += 1) {
        if (recent[i]) mixed.push(recent[i]);
        if (fusion[i]) mixed.push(fusion[i]);
        if (club[i]) mixed.push(club[i]);
      }
      return mixed;
    }
    return galleryImages.filter((img) => img.event === filter).slice(0, 6);
  })();

  useEffect(() => {
    if (paused || featured.length === 0) return undefined;
    const timer = setTimeout(() => {
      setCarouselIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
    }, 5200);
    return () => clearTimeout(timer);
  }, [carouselIndex, paused, featured.length]);

  useEffect(() => {
    if (selectedIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === lightboxPool.length - 1 ? 0 : prev + 1));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === 0 ? lightboxPool.length - 1 : prev - 1));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex, lightboxPool.length]);

  const goCarousel = (next) => {
    const max = featured.length - 1;
    if (next < 0) setCarouselIndex(max);
    else if (next > max) setCarouselIndex(0);
    else setCarouselIndex(next);
  };

  const current = featured[carouselIndex];

  const openLightbox = (src, pool = gridImages) => {
    const idx = pool.findIndex((img) => img.src === src);
    if (idx >= 0) {
      setLightboxPool(pool);
      setSelectedIndex(idx);
    }
  };

  return (
    <section className="py-16 sm:py-20 text-white font-tech min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center text-violet-300 mb-10 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          Event Gallery
        </motion.h1>

        <motion.div
          className="relative h-[22rem] sm:h-[28rem] md:h-[34rem] w-full mb-5 rounded-3xl overflow-hidden border border-violet-dark/40 shadow-[0_0_40px_rgba(106,30,85,0.25)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={current?.src}
              src={current?.src}
              alt={current?.alt}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              onClick={() => openLightbox(current.src, featured)}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goCarousel(carouselIndex - 1)}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white text-2xl hover:bg-violet-dark/80 hover:text-violet-200 transition-colors"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goCarousel(carouselIndex + 1)}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white text-2xl hover:bg-violet-dark/80 hover:text-violet-200 transition-colors"
          >
            <FiChevronRight />
          </button>
        </motion.div>

        <div className="flex justify-center gap-2 mb-16">
          {featured.map((img, i) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCarouselIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === carouselIndex ? 'w-8 bg-violet-300' : 'w-3 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {galleryEvents.map((event) => (
              <button
                key={event}
                type="button"
                onClick={() => {
                  setFilter(event);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  filter === event
                    ? 'bg-white text-violet-deep'
                    : 'bg-white/5 text-violet-200 hover:bg-white/10 border border-white/10'
                }`}
              >
                {event}
              </button>
            ))}
          </div>
          <a
            href={DRIVE_LINKS[filter]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-dark to-violet-deep text-white text-xs font-semibold uppercase tracking-wider hover:scale-105 transition-transform w-fit"
          >
            {filter === 'All' ? 'All albums' : `${filter} album`}
            <FiExternalLink />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {gridImages.map((image) => (
            <button
              key={image.src}
              type="button"
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 group bg-black/20"
              onClick={() => openLightbox(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && lightboxPool[selectedIndex] && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white text-4xl hover:text-violet-300"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
            >
              <FiX />
            </button>
            <button
              type="button"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-violet-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev === 0 ? lightboxPool.length - 1 : prev - 1));
              }}
              aria-label="Previous"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-violet-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev === lightboxPool.length - 1 ? 0 : prev + 1
                );
              }}
              aria-label="Next"
            >
              <FiChevronRight />
            </button>
            <motion.img
              key={lightboxPool[selectedIndex].src}
              src={lightboxPool[selectedIndex].src}
              alt={lightboxPool[selectedIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
