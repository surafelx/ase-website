import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-20 pb-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Gallery</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our successful agricultural projects across Ethiopia
            </p>
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

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
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
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-agriculture-green font-medium">{image.category}</span>
                    <button className="text-agriculture-green hover:text-agriculture-green-dark transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Gallery;