import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import logo from "@/assets/logo.png";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import hero1 from "@/assets/heroes/hero-6.jpg";
import hero2 from "@/assets/heroes/hero-7.jpg";
import hero3 from "@/assets/heroes/hero-8.jpg";


const HeroSlideshow = () => {
  const plugin = useRef(Autoplay({ delay: 8000, stopOnInteraction: true }));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [api, setApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const navigate = useNavigate();

  const [count1, setCount1] = useState("0+");
  const [count2, setCount2] = useState("0%");
  const [count3, setCount3] = useState("0x");

  useEffect(() => {
    if (isInView) {
      // For 100+
      let current1 = 0;
      const target1 = 500;
      const suffix1 = "+";
      const steps = 40;
      const increment1 = target1 / steps;
      const timer1 = setInterval(() => {
        current1 += increment1;
        if (current1 >= target1) {
          setCount1(Math.round(target1) + suffix1);
          clearInterval(timer1);
        } else {
          setCount1(Math.round(current1) + suffix1);
        }
      }, 50);

      // For 70%
      let current2 = 0;
      const target2 = 70;
      const suffix2 = "%";
      const increment2 = target2 / steps;
      const timer2 = setInterval(() => {
        current2 += increment2;
        if (current2 >= target2) {
          setCount2(Math.round(target2) + suffix2);
          clearInterval(timer2);
        } else {
          setCount2(Math.round(current2) + suffix2);
        }
      }, 50);

      // For 2x
      let current3 = 0;
      const target3 = 2;
      const suffix3 = "x";
      const increment3 = target3 / steps;
      const timer3 = setInterval(() => {
        current3 += increment3;
        if (current3 >= target3) {
          setCount3(Math.round(target3) + suffix3);
          clearInterval(timer3);
        } else {
          setCount3(Math.round(current3) + suffix3);
        }
      }, 50);
    }
  }, [isInView]);

  useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", () => setSelectedIndex(api.selectedScrollSnap()));
  }, [api]);

  const slides = [
    {
      image: hero1,
      title: "Turn-Key Solutions for",
      subtitle: "Sustainable Agriculture",
      subtitle2: "From Borehole to Harvest",
            description:
        "Comprehensive solar-powered solutions for small-scale farmers, from borehole drilling to grain milling systems.",
      alt: "Agri-Sun Ethiopia Logo",
    },
    {
      image: hero2,
      title: "Solar-Powered Water Pumps",
      subtitle: "Clean Energy Solutions",
      description:
        "Reliable solar-powered pump systems that reduce physical burden and increase agricultural productivity.",
      alt: "Agri-Sun Ethiopia Logo",
    },
    {
      image: hero3,
      title: "Empowering Communities",
      subtitle: "Since January 2023",
      description:
        "Transforming rural communities through sustainable solar technology and comprehensive agricultural solutions.",
      alt: "Agri-Sun Ethiopia Logo",
    },
  ];

  return (
    <section
      id="home"
      className="relative h-[100vh] z-[-1] flex items-center mt-[-10]"
      ref={ref}
    >
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-screen"
        setApi={setApi}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen flex items-center mt-[-20]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <motion.img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute inset-0 bg-agriculture-green-dark/50"></div>
                </div>

                {/* Content */}
                <motion.div
                  className="container relative z-10 mx-auto px-12 py-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="max-w-full text-white">
                    <motion.h1
                      className="text-3xl md:text-6xl  font-bold mb-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <span className="block pb-2">{slide.title}</span>
                      <span className="block pb-2 text-white">
                        {slide.subtitle}
                      </span>
                      {slide.subtitle2 && (
                        <span className="block pb-2 text-white">
                          {slide.subtitle2}
                        </span>
                      )}
                    </motion.h1>

                    <motion.p
                      className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-col sm:flex-row gap-4 mb-12 z-20 relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <Button
                        size="lg"
                        className="bg-solar-gold hover:bg-agriculture-green-dark text-white text-lg px-8 py-4 shadow-agriculture z-[50]"
                        onClick={() => navigate("/get-started")}
                      >
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>

                      <Button
                        variant="secondary"
                        size="lg"
                        className="bg-white/10 text-white hover:bg-white/20 border-white/30 text-lg px-8 py-4"
                        onClick={() => navigate("/projects")}
                      >
                        <Play className="mr-2 w-5 h-5" />
                        View Our Work
                      </Button>
                    </motion.div>

                    {/* Stats - Only show on first slide */}
                    {index === 0 && (
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.8, delay: 1.0 }}
                      >
                        <div>
                          <div className="text-3xl font-bold text-solar-gold mb-2">
                            {count1}
                          </div>
                          <div className="text-white/80">Farmers Served</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-solar-gold mb-2">
                            {count2}
                          </div>
                          <div className="text-white/80">Cost Reduction</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-solar-gold mb-2">
                            {count3}
                          </div>
                          <div className="text-white/80">Yield Increase</div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation */}
        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white z-30" />
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white z-30" />
      </Carousel>

      {/* Carousel Dots */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="w-10 h-10 text-white animate-bounce" />
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSlideshow;
