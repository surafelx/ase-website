import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import GalleryCarousel from '../components/GalleryCarousel';

const Gallery = () => {
  // Sample images - replace with actual project images
  const images = [
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

  const categories = ['All', 'Solar Power', 'Irrigation', 'Training'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="relative h-[50vh] bg-agriculture-green-dark text-white py-20 overflow-hidden"
      >
        {/* Simple Graphics Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 left-20 w-16 h-16 bg-solar-gold rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-12 border-2 border-solar-gold rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex items-center text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">Project Gallery</h1>
            <p className="text-xl text-white/90">
              Explore our successful agricultural projects across Ethiopia
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pb-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Browse by Category</h2>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-agriculture-green text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <GalleryCarousel images={filteredImages} showHeader={false} />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Gallery;