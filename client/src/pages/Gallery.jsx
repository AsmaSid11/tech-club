import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiCircle } from 'react-icons/fi';
import { getAllGalleryImages } from '../utils/enhancedGalleryImages';

export default function Gallery() {
  const [allImages, setAllImages] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const INITIAL_LOAD = 6;

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        console.log('Loading gallery images...');
        const validImages = await getAllGalleryImages();
        console.log('Found images:', validImages.length, validImages.map(img => img.filename));
        setAllImages(validImages);
        setImages(validImages.slice(0, INITIAL_LOAD));
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
    if (allImages.length > 0) {
      const timer = setTimeout(() => {
        setCarouselIndex((prevIndex) => (prevIndex === Math.min(allImages.length - 1, 3) ? 0 : prevIndex + 1));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [carouselIndex, allImages.length]);

  const loadMoreImages = () => {
    const currentLength = images.length;
    const newImages = allImages.slice(currentLength, currentLength + INITIAL_LOAD);
    setImages([...images, ...newImages]);
  };

  const openLightbox = (index, sourceArray) => {
    const globalIndex = allImages.findIndex(img => img.src === sourceArray[index].src);
    setSelectedImage(globalIndex);
  };

  const closeLightbox = () => setSelectedImage(null);
  const goToNext = () => setSelectedImage((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  const goToPrev = () => setSelectedImage((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));

  const handleCarouselNav = (newIndex) => {
    const maxIndex = Math.min(allImages.length - 1, 3);
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
          <div className="relative h-64 sm:h-80 md:h-96 w-full mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-violet-dark/20">
            <AnimatePresence initial={false}>
              <motion.img
                key={carouselIndex}
                src={allImages[carouselIndex]?.src}
                alt={allImages[carouselIndex]?.alt}
                className="absolute w-full h-full object-cover cursor-pointer"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                onClick={() => openLightbox(carouselIndex, allImages.slice(0, 4))}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <button onClick={() => handleCarouselNav(carouselIndex - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-violet-300 transition-colors z-10 p-2 bg-black/30 rounded-full"><FiChevronLeft /></button>
            <button onClick={() => handleCarouselNav(carouselIndex + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-violet-300 transition-colors z-10 p-2 bg-black/30 rounded-full"><FiChevronRight /></button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.slice(0, 4).map((_, i) => (
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
          {images.map((image, idx) => (
            <motion.div
              key={image.src}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => openLightbox(idx, images)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (idx % INITIAL_LOAD) * 0.15 }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
            </motion.div>
          ))}
        </div>

        {images.length < allImages.length && !loading && (
          <div className="text-center mt-12">
            <motion.button onClick={loadMoreImages} className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-dark to-violet-deep text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-violet-dark/50 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-violet-dark/40" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Load More
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