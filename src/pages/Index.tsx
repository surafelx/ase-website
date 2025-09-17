import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ClientLogos from "@/components/ClientLogos";
import VideoSection from "@/components/VideoSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewYearBanner from "@/components/NewYearBanner";
import EthiopiaMap from "@/components/EthiopiaMap";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute mb-8"
      >
        <Navigation />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <HeroSlideshow />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <ClientLogos />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Services />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Projects />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <EthiopiaMap />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <VideoSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Testimonials />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.7, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Contact />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.0, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
