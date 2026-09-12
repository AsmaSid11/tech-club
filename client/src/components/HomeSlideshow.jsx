import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Sparkles } from 'lucide-react';
import { homeSlideshowImages } from '../data/homeSlideshow';

export default function HomeSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const total = homeSlideshowImages.length;
  const timerRef = useRef(null);

  // Responsive visible count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1100) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, total - visibleCount);

  // Auto slide every 2.5 seconds
  useEffect(() => {
    if (!isPlaying) return undefined;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2600);

    return () => clearInterval(timerRef.current);
  }, [isPlaying, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Calculate card width percentage based on visible count
  const cardWidthPercent = 100 / visibleCount;
  // Gap is 16px, so translation is offset by card + gap
  const trackTransform = `translateX(-${currentIndex * (cardWidthPercent)}%)`;

  const progressPercent = ((currentIndex + 1) / (maxIndex + 1)) * 100;

  return (
    <section className="slideshow-section">
      <div className="slideshow-header">
        <div>
          <div className="section-kicker">MOMENTS & EXPERIMENTS</div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', margin: '8px 0 0', letterSpacing: '-0.04em', lineHeight: 1.05 }}>
            Captured from the <span className="brand-word">floor.</span>
          </h2>
        </div>

        <div className="slideshow-controls">
          <button
            className="slideshow-btn"
            onClick={handlePrev}
            aria-label="Previous card"
            title="Previous"
          >
            <ArrowLeft size={16} />
          </button>

          <button
            className={`slideshow-btn ${isPlaying ? 'active-play' : ''}`}
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            title={isPlaying ? 'Pause' : 'Auto-play (2.6s)'}
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} />}
          </button>

          <button
            className="slideshow-btn"
            onClick={handleNext}
            aria-label="Next card"
            title="Next"
          >
            <ArrowRight size={16} />
          </button>

          <Link
            to="/gallery"
            className="button button-ghost"
            style={{ padding: '9px 15px', fontSize: '11px', marginLeft: '6px' }}
          >
            All 40+ Photos <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      <div
        className="slideshow-viewport"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <div
          className="slideshow-track"
          style={{
            transform: trackTransform,
            transition: 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          {homeSlideshowImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="slideshow-card"
              style={{
                flex: `0 0 calc(${cardWidthPercent}% - ${(16 * (visibleCount - 1)) / visibleCount}px)`,
              }}
            >
              <div className="slideshow-card-img-wrap">
                <img src={img.src} alt={img.title} loading="lazy" />
                <span className="slideshow-card-tag">{img.tag}</span>
              </div>
              <div className="slideshow-card-body">
                <p className="slideshow-card-title">{img.title}</p>
                <span className="slideshow-card-num">
                  {i < 9 ? `0${i + 1}` : i + 1} / {total}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slideshow-progress-bar">
        <div
          className="slideshow-progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </section>
  );
}
