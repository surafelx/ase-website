import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewYearBanner from "@/components/NewYearBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NewYearBanner />
      <Navigation />
      <HeroSlideshow />
      <PartnerLogos />
      <Services />
      <VideoSection />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
