import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar irrigation systems powering sustainable farming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Small Farmers with
            <span className="block text-transparent bg-gradient-to-r from-solar-gold to-agriculture-green bg-clip-text">
              Solar Irrigation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
            Transform your farming operations with sustainable solar-powered irrigation systems. 
            Reduce costs, increase yields, and build a more resilient agricultural future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-agriculture-green-dark text-white text-lg px-8 py-4 shadow-agriculture"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;