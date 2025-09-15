import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Droplets, Users, Wrench, BarChart, Shield } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Solar Pump Installation",
      description: "Complete solar-powered irrigation pump systems designed for small landholders with reliable, clean energy solutions."
    },
    {
      icon: Droplets,
      title: "Irrigation System Design", 
      description: "Custom water distribution systems optimized for your crops, soil type, and land size to maximize water efficiency."
    },
    {
      icon: Users,
      title: "Farmer Training",
      description: "Comprehensive training programs to ensure farmers can operate and maintain their solar irrigation systems effectively."
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing technical support and maintenance services to keep your solar irrigation system running at peak performance."
    },
    {
      icon: BarChart,
      title: "Performance Monitoring",
      description: "Smart monitoring systems that track water usage, energy production, and crop performance for data-driven decisions."
    },
    {
      icon: Shield,
      title: "Insurance & Warranty",
      description: "Comprehensive warranty coverage and insurance options to protect your investment in sustainable farming technology."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={servicesBg} 
          alt="Ethiopian agricultural landscape with solar irrigation systems"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solar Irrigation
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Solutions for Ethiopia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From installation to maintenance, we provide end-to-end solutions for Ethiopian 
            farmers looking to modernize their irrigation systems with sustainable solar technology.
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Card */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Card className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-500 group bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-agriculture">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              {/* Visual Element */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="h-64 bg-gradient-primary rounded-2xl shadow-agriculture flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-white opacity-30" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-hero rounded-2xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of Ethiopian farmers who have already revolutionized their agriculture with our solar irrigation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-solar">
              Get Free Consultation
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;