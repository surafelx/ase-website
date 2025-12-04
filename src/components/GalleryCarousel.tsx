import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryCarousel = ({ images = null, showHeader = true }) => {
  const defaultImages = [
    { src: '/assets/projects/amhara/amhara-1.jpg', title: 'Amhara Solar Irrigation', location: 'Amhara Region', category: 'Solar Power' },
    { src: '/assets/projects/amhara/amhara-2.jpg', title: 'Amhara Water Management', location: 'Amhara Region', category: 'Irrigation' },
    { src: '/assets/projects/amhara/amhara-3.jpg', title: 'Amhara Agricultural Training', location: 'Amhara Region', category: 'Training' },
    { src: '/assets/projects/diredawa/diredawa-1.png', title: 'Dire Dawa Solar Farm', location: 'Dire Dawa', category: 'Solar Power' },
    { src: '/assets/projects/diredawa/diredawa-2.png', title: 'Dire Dawa Water Systems', location: 'Dire Dawa', category: 'Irrigation' },
    { src: '/assets/projects/oromia/oromia-1.jpg', title: 'Oromia Irrigation Project', location: 'Oromia Region', category: 'Irrigation' },
    { src: '/assets/projects/oromia/oromia-2.jpg', title: 'Oromia Solar Installation', location: 'Oromia Region', category: 'Solar Power' },
    { src: '/assets/projects/shewa/shewa-1.png', title: 'Shewa Agricultural Development', location: 'Shewa Zone', category: 'Training' },
    { src: '/assets/projects/tigray/tigray-1.jpg', title: 'Tigray Water Solutions', location: 'Tigray Region', category: 'Irrigation' },
    { src: '/assets/projects/tigray/tigray-2.jpg', title: 'Tigray Solar Project', location: 'Tigray Region', category: 'Solar Power' },
  ];

  const displayImages = images || defaultImages;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(images.length / itemsPerView));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(images.length / itemsPerView)) % Math.ceil(images.length / itemsPerView));
  };

  const visibleImages = displayImages.slice(currentIndex * itemsPerView, (currentIndex + 1) * itemsPerView);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Project Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our successful agricultural projects across Ethiopia
            </p>
          </motion.div>
        )}

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {visibleImages.map((image, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-1 min-w-0"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-agriculture-green text-white px-3 py-1 rounded-full text-xs font-medium">
                          {image.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{image.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl text-agriculture-green p-3 rounded-full transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl text-agriculture-green p-3 rounded-full transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(displayImages.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-agriculture-green' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;