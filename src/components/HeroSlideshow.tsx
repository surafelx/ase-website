import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import hero1 from "@/assets/heroes/hero-6.jpg";

const HeroSlideshow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectDetails = {
    title: "Solar Irrigation System",
    location: "Oromia Region, Ethiopia",
    description: "Complete solar-powered water pumping solution serving 50+ farmers with sustainable irrigation for maize and vegetable crops.",
    impact: "Increased crop yield by 200% and reduced water costs by 70%"
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
            src={hero1}
            alt="Solar irrigation project in Ethiopia"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-agriculture-green-dark to-white z-10"></div>
        </div>

        {/* Content Overlay - Left Aligned */}
        <motion.div
          className="container relative z-20 mx-auto px-12 py-8 pt-40"
          initial={{ opacity: 0, x: -50 }}
          animate={
            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-2xl text-white">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
            >
               <h2 className="text-3xl md:text-3xl font-bold mb-2"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                Recent Projects and Events 
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-2"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {projectDetails.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium"
                 style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {projectDetails.location}
              </p>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-4"
                 style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                {projectDetails.description}
              </p>
              <p className="text-base md:text-lg text-solar-gold font-semibold"
                 style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                {projectDetails.impact}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                View Project
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-agriculture-green-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                      style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                Get Started
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="w-10 h-10 text-white animate-bounce drop-shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSlideshow;
