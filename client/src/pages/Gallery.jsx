import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiCircle } from 'react-icons/fi';
import { getAllGalleryImages, getGallery2Images } from '../utils/enhancedGalleryImages';

export default function Gallery() {
  const [allImages, setAllImages] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const INITIAL_LOAD = 6;

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        console.log('Loading gallery images...');
        // Load gallery2 images first for featured carousel, then fallback to all gallery images
        const gallery2 = await getGallery2Images();
        const validImages = await getAllGalleryImages();
        console.log('Found gallery2 images:', gallery2.length, gallery2.map(img => img.filename));
        console.log('Found images:', validImages.length, validImages.map(img => img.filename));

        // Mark origin for images from main gallery as 'gallery'
        const allWithOrigin = validImages.map(img => ({ ...img, origin: img.origin || 'gallery' }));

        // Combine: gallery2 first, then other images that aren't duplicates
        // Use filename (basename) for deduplication so copies across folders don't repeat
        const combined = [];
        const seen = new Set();

        const addIfUnique = (img) => {
          const name = (img.src || '').split('/').pop()?.toLowerCase();
          if (!name || seen.has(name)) return false;
          seen.add(name);
          combined.push(img);
          return true;
        };

        gallery2.forEach(img => addIfUnique(img));
        allWithOrigin.forEach(img => addIfUnique(img));

        // Explicit carousel images: gallery2 images named 1-4 (numeric id 1..4)
        const carouselSources = gallery2
          .filter(img => typeof img.id === 'number' && img.id >= 1 && img.id <= 4)
          .sort((a, b) => a.id - b.id);

        // Reserve those if found, otherwise fallback to first up-to-4 images from combined
        let carouselImgs = carouselSources;
        if (carouselImgs.length === 0) {
          const fallbackCount = Math.min(combined.length, 4);
          carouselImgs = combined.slice(0, fallbackCount);
        }

        // Ensure uniqueness by filename for carousel as well
        const uniqueCarousel = [];
        const seenC = new Set();
        carouselImgs.forEach(i => {
          const name = (i.src || '').split('/').pop()?.toLowerCase();
          if (!name || seenC.has(name)) return;
          seenC.add(name);
          uniqueCarousel.push(i);
        });
        setCarouselImages(uniqueCarousel);

        setAllImages(combined);
  // Grid images should be all images except the explicit carousel images
  const carouselSet = new Set(carouselImgs.map(i => i.src));
  setImages(combined.filter(img => !carouselSet.has(img.src)));
      } catch (error) {
        console.error('Error loading gallery images:', error);
        // Fallback to empty array if loading fails
        setAllImages([]);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };
    
    loadImages();
  }, []);
  
  useEffect(() => {
    if (carouselImages.length > 0) {
      const maxIdx = Math.max(0, carouselImages.length - 1);
      const timer = setTimeout(() => {
        setCarouselIndex((prevIndex) => (prevIndex === maxIdx ? 0 : prevIndex + 1));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [carouselIndex, carouselImages.length]);

  // No pagination: grid will show all non-carousel images immediately

  const openLightbox = (index, sourceArray) => {
    const globalIndex = allImages.findIndex(img => img.src === sourceArray[index].src);
    setSelectedImage(globalIndex);
  };

  const closeLightbox = () => setSelectedImage(null);
  const goToNext = () => setSelectedImage((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  const goToPrev = () => setSelectedImage((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));

  const handleCarouselNav = (newIndex) => {
  const maxIndex = Math.max(0, carouselImages.length - 1);
  if (newIndex < 0) newIndex = maxIndex;
  else if (newIndex > maxIndex) newIndex = 0;
    setCarouselIndex(newIndex);
  };

  return (
    <section className="py-16 text-white font-tech min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-4xl sm:text-5xl font-bold text-center text-violet-300 mb-4 drop-shadow-lg" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }}>
          Gallery
        </motion.h2>
        <motion.p className="text-lg sm:text-xl text-center text-violet-200 mb-12 font-medium" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7, type: 'spring' }}>
          Featured Moments
        </motion.p>
        
        {/* Carousel */}
        {loading ? (
          <div className="flex justify-center items-center h-64 sm:h-80 md:h-96 w-full mb-16 rounded-2xl bg-gray-800/50">
            <div className="text-violet-300 text-xl">Loading gallery...</div>
          </div>
        ) : allImages.length > 0 ? (
          <div className="relative h-80 sm:h-[24rem] md:h-[28rem] w-full mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-violet-dark/20">
            <AnimatePresence initial={false}>
              <motion.img
                key={carouselIndex}
                src={carouselImages[carouselIndex]?.src}
                alt={carouselImages[carouselIndex]?.alt}
                className="absolute w-full h-full object-cover object-center cursor-pointer"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                onClick={() => openLightbox(carouselIndex, carouselImages)}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <button onClick={() => handleCarouselNav(carouselIndex - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-violet-300 transition-colors z-10 p-2 bg-black/30 rounded-full"><FiChevronLeft /></button>
            <button onClick={() => handleCarouselNav(carouselIndex + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-violet-300 transition-colors z-10 p-2 bg-black/30 rounded-full"><FiChevronRight /></button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, i) => (
                <button key={i} onClick={() => setCarouselIndex(i)} className={`w-3 h-3 rounded-full transition-colors ${i === carouselIndex ? 'bg-violet-300' : 'bg-white/50 hover:bg-white'}`}></button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 sm:h-80 md:h-96 w-full mb-16 rounded-2xl bg-gray-800/50">
            <div className="text-violet-300 text-xl">No images found in gallery</div>
          </div>
        )}

        <motion.h3 className="text-3xl sm:text-4xl font-bold text-center text-violet-300 mt-20 mb-4 drop-shadow-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }}>
          Explore Our Moments
        </motion.h3>
        <div className="flex justify-center mb-12">
            <div className="h-1 w-24 bg-gradient-to-r from-violet-300 to-purple-400 rounded-full"></div>
        </div>

        {/* Image Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {((expanded ? images : images.slice(0, 6))).map((image, idx) => (
            <motion.div
              key={image.src}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => openLightbox(idx, images)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (idx % INITIAL_LOAD) * 0.15 }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-80 sm:h-96 md:h-[28rem] object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105" />
            </motion.div>
          ))}
        </div>

        {images.length > 6 && (
          <div className="text-center mt-8">
            <motion.button onClick={() => setExpanded(prev => !prev)} className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-dark to-violet-deep text-white font-semibold shadow-md hover:scale-105 transition-transform">
              {expanded ? 'View Less' : 'View More'}
            </motion.button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute top-4 right-4 text-white text-4xl hover:text-violet-300 transition-colors" onClick={closeLightbox}><FiX /></button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-violet-300 transition-colors" onClick={goToPrev}><FiChevronLeft /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-violet-300 transition-colors" onClick={goToNext}><FiChevronRight /></button>
            <motion.img key={selectedImage} src={allImages[selectedImage].src} alt={allImages[selectedImage].alt} className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 25 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 