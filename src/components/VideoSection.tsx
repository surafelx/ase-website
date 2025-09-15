import { Button } from "@/components/ui/button";
import { Play, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VideoSection = () => {
  const videoStats = [
    {
      icon: Users,
      number: "500+",
      label: "Farmers Trained",
      description: "Comprehensive training programs"
    },
    {
      icon: Award,
      number: "15",
      label: "Regions Covered",
      description: "Across Ethiopia"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      description: "Project completion rate"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video Player Area */}
          <div className="relative">
            <div className="aspect-video bg-black/20 rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer">
              {/* Video Thumbnail - placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-agriculture-green-dark to-agriculture-green flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/30">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white/90 font-medium">Watch Our Story</p>
                  <p className="text-white/70 text-sm">See how we're transforming Ethiopian agriculture</p>
                </div>
              </div>
              
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>

            {/* Video Caption */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                Transforming Lives Through Solar Irrigation
              </h3>
              <p className="text-white/80 text-sm">
                Watch how AgriSun Ethiopia is revolutionizing farming across the country
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              See Our Impact in
              <span className="block text-solar-gold">Action</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From small family farms to larger agricultural cooperatives, our solar irrigation 
              systems are transforming the way Ethiopian farmers approach water management 
              and crop production.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {videoStats.map((stat, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-solar-gold/20 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-solar-gold" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{stat.number}</div>
                        <div className="text-white/90 font-medium">{stat.label}</div>
                        <div className="text-white/70 text-sm">{stat.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark font-semibold"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Full Documentary
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 border-white/30"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;