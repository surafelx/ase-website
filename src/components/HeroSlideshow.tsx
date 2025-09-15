import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import { useRef } from "react";

const HeroSlideshow = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const slides = [
    {
      image: heroSlide1,
      title: "Empowering Ethiopian Farmers",
      subtitle: "Solar Irrigation Solutions",
      description: "Transform your farming operations with sustainable solar-powered irrigation systems designed for Ethiopian small landholders.",
      alt: "Ethiopian farmers working with solar irrigation systems in agricultural field"
    },
    {
      image: heroSlide2,
      title: "Clean Energy, Better Harvests",
      subtitle: "Advanced Solar Technology",
      description: "Harness the power of Ethiopian sunshine to reduce costs by 70% and increase yields with reliable irrigation.",
      alt: "Solar panels and irrigation pumps in Ethiopian agricultural landscape"
    },
    {
      image: heroSlide3,
      title: "Building Farming Communities",
      subtitle: "Sustainable Growth",
      description: "Join hundreds of Ethiopian farmers who have transformed their livelihoods with our proven solar irrigation solutions.",
      alt: "Ethiopian farmers celebrating successful harvest in solar irrigation farm"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-screen"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-screen flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Content */}
                <div className="container relative z-10 mx-auto px-6">
                  <div className="max-w-4xl text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
                      {slide.title}
                      <span className="block text-transparent bg-gradient-to-r from-solar-gold to-agriculture-green bg-clip-text">
                        {slide.subtitle}
                      </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl animate-fade-in">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
                      <Button
                        size="lg"
                        className="bg-agriculture-green hover:bg-agriculture-green-dark text-white text-lg px-8 py-4 shadow-agriculture"
                      >
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      
                      <Button
                        variant="secondary"
                        size="lg"
                        className="bg-white/10 text-white hover:bg-white/20 border-white/30 text-lg px-8 py-4"
                      >
                        <Play className="mr-2 w-5 h-5" />
                        Watch Demo
                      </Button>
                    </div>

                    {/* Stats - Only show on first slide */}
                    {index === 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20 animate-fade-in">
                        <div>
                          <div className="text-3xl font-bold text-solar-gold mb-2">500+</div>
                          <div className="text-white/80">Farmers Served</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-solar-gold mb-2">70%</div>
                          <div className="text-white/80">Cost Reduction</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-solar-gold mb-2">2x</div>
                          <div className="text-white/80">Yield Increase</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Navigation */}
        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white" />
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white" />
      </Carousel>
    </section>
  );
};

export default HeroSlideshow;