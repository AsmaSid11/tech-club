import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from 'lucide-react';
import { DRIVE_LINKS, carouselImages, galleryImages, galleryEvents } from '../data/gallery';

export default function Gallery() {
  const featured = carouselImages;
  const [filter, setFilter] = useState('All');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [paused, setPaused] = useState(false);

  const gridImages =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.event === filter);

  useEffect(() => {
    if (paused || featured.length === 0) return undefined;
    const timer = setTimeout(() => {
      setCarouselIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [carouselIndex, paused, featured.length]);

  useEffect(() => {
    if (selectedIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === gridImages.length - 1 ? 0 : prev + 1));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === 0 ? gridImages.length - 1 : prev - 1));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex, gridImages.length]);

  const goCarousel = (direction) => {
    if (direction === 'next') {
      setCarouselIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
    } else {
      setCarouselIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
    }
  };

  const current = featured[carouselIndex];
  const driveUrl = DRIVE_LINKS[filter] || DRIVE_LINKS['All'];

  return (
    <div className="subpage-section">
      <div className="subpage-header">
        <div className="subpage-eyebrow">
          <span /> 05 — VISUAL ARCHIVE
        </div>
        <div className="subpage-header-split">
          <div>
            <motion.h1
              className="subpage-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Event <span className="brand-word">gallery.</span>
            </motion.h1>
          </div>
          <div>
            <p className="subpage-desc">
              High-resolution captures from hackathons, workshops, and build nights across semesters at NIT Srinagar.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Hero Carousel */}
      {featured.length > 0 && (
        <div
          className="gallery-hero-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          <div className="gallery-hero-overlay">
            <div className="carousel-top">
              <span className="card-tag highlight">FEATURED PERSPECTIVE</span>
              <span style={{ fontFamily: 'DM Mono', fontSize: '11px', color: '#ccc', letterSpacing: '0.14em' }}>
                0{carouselIndex + 1} / 0{featured.length}
              </span>
            </div>

            <div className="carousel-bottom">
              <div className="carousel-caption">
                <h2>{current.alt}</h2>
                <p>TECHNOLOGY CLUB · NIT SRINAGAR</p>
              </div>

              <div className="carousel-controls">
                <button
                  className="carousel-btn"
                  onClick={() => goCarousel('prev')}
                  aria-label="Previous image"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  className="carousel-btn"
                  onClick={() => goCarousel('next')}
                  aria-label="Next image"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Drive Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          margin: '40px 0 24px',
        }}
      >
        <div className="gallery-filters" style={{ margin: 0 }}>
          {galleryEvents.map((evt) => (
            <button
              key={evt}
              className={`gallery-filter-btn ${filter === evt ? 'active' : ''}`}
              onClick={() => setFilter(evt)}
            >
              {evt}
            </button>
          ))}
        </div>

        {driveUrl && (
          <a
            href={driveUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-ghost"
            style={{ padding: '10px 18px', fontSize: '11px' }}
          >
            Google Drive Album <ArrowUpRight size={14} />
          </a>
        )}
      </div>

      {/* Grid of gallery images */}
      <div className="gallery-masonry">
        {gridImages.map((img, i) => (
          <motion.div
            key={`${img.src}-${i}`}
            className="gallery-item"
            onClick={() => setSelectedIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + (i % 6) * 0.05, duration: 0.5 }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-item-overlay">
              <span>{img.event}</span>
              <p>{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && gridImages[selectedIndex] && (
        <div className="lightbox-backdrop" onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <img
              src={gridImages[selectedIndex].src}
              alt={gridImages[selectedIndex].alt}
            />

            <div className="lightbox-info">
              <div className="lightbox-caption">{gridImages[selectedIndex].alt}</div>
              <div className="lightbox-meta">
                {gridImages[selectedIndex].event} · {selectedIndex + 1} / {gridImages.length}
              </div>
            </div>

            <button
              className="lightbox-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev === 0 ? gridImages.length - 1 : prev - 1));
              }}
              aria-label="Previous photo"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              className="lightbox-nav next"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev === gridImages.length - 1 ? 0 : prev + 1));
              }}
              aria-label="Next photo"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
