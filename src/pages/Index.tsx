import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import GalleryCarousel from "@/components/GalleryCarousel";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlideshow />
      <ClientLogos />
      <Services />
      <Projects />
      <GalleryCarousel />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
