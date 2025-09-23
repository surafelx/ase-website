import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Droplets, Users, Wrench, BarChart, Shield } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";
import services1 from "@/assets/services/solar-panel.jpg";
import services2 from "@/assets/services/irrigation-system-design.jpg";
import services3 from "@/assets/services/farmer-training-2.jpg";
import services4 from "@/assets/services/maintenance-and-support.jpg";
import services5 from "@/assets/services/performanec-monitoring.jpg";
import services6 from "@/assets/services/insurance-and-warranty.jpg";

import { motion, useInView } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Zap,
      image: services1,
      title: "Borehole Drilling",
      description:
        "Deploy portable drilling rigs capable of reaching depths up to 60 meters and diameters of 6-12 inches for comprehensive water access solutions.",
      alt: "Borehole drilling services"
    },
    {
      icon: Droplets,
      image: services2,
      title: "Solar-Powered Pump Installation",
      description:
        "Supply and install complete sets of solar-powered pumps designed for small landholders with reliable, clean energy solutions.",
      alt: "Solar-powered pump installation"
    },
    {
      icon: Users,
      image: services3,
      title: "Irrigation Systems",
      description:
        "Supply and install efficient irrigation solutions optimized for crops, soil type, and land size to maximize water efficiency.",
      alt: "Modern irrigation systems"
    },
    {
      icon: Wrench,
      image: services4,
      title: "Solar-Powered Grain Milling",
      description:
        "Offer solar-powered grain milling systems utilizing excess power from solar irrigation setups for complete agricultural solutions.",
      alt: "Solar-powered grain milling"
    },
    {
      icon: BarChart,
      image: services5,
      title: "Training & Knowledge Transfer",
      description:
        "Provide comprehensive training programs to ensure farmers can effectively operate and maintain their solar irrigation systems.",
      alt: "Farmer training programs"
    },
    {
      icon: Shield,
      image: services6,
      title: "Maintenance & Technical Support",
      description:
        "Ongoing technical support and maintenance services to keep solar irrigation systems running at peak performance.",
      alt: "Technical support and maintenance"
    },
  ];

  return (
    <section id="services" className="py-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={servicesBg}
          alt="Ethiopian agricultural landscape with solar irrigation systems"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Turn-Key Solutions for
            <span className="block text-transparent bg-gradient-primary pb-6 bg-clip-text">
              Sustainable Agriculture
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From borehole drilling to modern irrigation systems, we provide comprehensive
            solutions for small-scale farmers through solar-powered water pumps and grain milling systems.
          </p>
        </div>

        {/* Services Grid - Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-500 group bg-white/80 backdrop-blur-sm h-full">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                {service.image ? (
                  <>
                    <motion.img
                      src={service.image}
                      alt={service.alt || service.title}
                      className="w-full h-full object-cover"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-agriculture-green-dark/40"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Ready to Transform Your Farm?
          </h3>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Join hundreds of Ethiopian farmers who have already revolutionized
            their agriculture with our solar irrigation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark px-6 py-3 rounded-lg font-semibold transition-colors shadow-solar">
              Get Free Consultation
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
