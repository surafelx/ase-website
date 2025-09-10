import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Droplets, Users, Wrench, BarChart, Shield } from "lucide-react";

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
    <section id="services" className="py-20 bg-sky-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end solutions for small-scale farmers looking to modernize 
            their irrigation systems with sustainable solar technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;