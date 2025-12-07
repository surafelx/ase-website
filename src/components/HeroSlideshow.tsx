import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSlideshow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/heroes/hero-6.jpg"
    },
    {
      image: "/assets/heroes/hero-7.jpg"
    },
    {
      image: "/assets/heroes/hero-8.jpg"
    }
  ];

  const heroContent = {
    title: "Empowering Agriculture Through Innovation",
    location: "Ethiopia",
    description: "Leading provider of solar irrigation and agricultural solutions, transforming farming practices across Ethiopia with cutting-edge technology.",
    impact: "Delivering sustainable, efficient, and cost-effective solutions for Ethiopian farmers"
  };

  const projectDetails = heroContent;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative h-screen z-0 flex items-center mt-[-10]"
      ref={ref}
    >
      <div className="relative w-full h-screen flex items-center mt-[-20]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={`${projectDetails.title} in Ethiopia`}
            className="w-full h-full object-cover"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", opacity: { duration: 0.5 } }}
          />
          <div className="absolute inset-0 bg-agriculture-green-dark opacity-60 z-10"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-solar-gold' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div
          className="container relative z-20 mx-auto px-8 md:px-12 py-8 pt-20 md:pt-40"
        >
          <div className="max-w-2xl text-white">
            <div
              className="mb-6"
            >
               <h2 className="text-2xl md:text-3xl font-medium mb-2 text-white">
                 Welcome to AgriSun Ethiopia
               </h2>
               <h1 className="text-3xl md:text-5xl font-semibold mb-2 text-white">
                 {projectDetails.title}
               </h1>
               <p className="text-lg md:text-xl text-white/90 font-normal">
                 {projectDetails.location}
               </p>
            </div>

            <div
              className="mb-8"
            >
              <p className="text-base md:text-lg text-white/95 leading-normal mb-4">
                {projectDetails.description}
              </p>
              <p className="text-sm md:text-base text-solar-gold font-medium">
                {projectDetails.impact}
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/projects">
                <button className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Project
                </button>
              </Link>
              <Link to="/get-started">
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-agriculture-green-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="w-10 h-10 text-white animate-bounce drop-shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSlideshow;
