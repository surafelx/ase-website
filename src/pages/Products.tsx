import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Droplets, BarChart, Shield, Sun, Battery, Settings, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const ProductsPage = () => {
  const products = [
    {
      icon: Sun,
      title: "Solar Panels",
      description: "High-efficiency monocrystalline solar panels designed for agricultural applications with robust weather resistance.",
      features: ["High efficiency (22%)", "25-year warranty", "Weather-resistant", "Easy installation"],
      price: "Starting from $500"
    },
    {
      icon: Battery,
      title: "Solar Batteries",
      description: "Deep-cycle lithium-ion batteries providing reliable energy storage for continuous irrigation operations.",
      features: ["Long cycle life", "Fast charging", "Maintenance-free", "Temperature tolerant"],
      price: "Starting from $800"
    },
    {
      icon: Settings,
      title: "Solar Pumps",
      description: "Submersible and surface solar pumps engineered for Ethiopian farming conditions with variable speed control.",
      features: ["Variable speed", "Corrosion resistant", "Low maintenance", "Remote monitoring"],
      price: "Starting from $1,200"
    },
    {
      icon: Droplets,
      title: "Irrigation Controllers",
      description: "Smart irrigation controllers with soil moisture sensors and weather-based programming for optimal water use.",
      features: ["Soil moisture sensing", "Weather integration", "Mobile app control", "Energy efficient"],
      price: "Starting from $300"
    },
    {
      icon: BarChart,
      title: "Monitoring Systems",
      description: "Real-time monitoring and analytics platform for tracking system performance and optimizing operations.",
      features: ["Real-time data", "Performance analytics", "Alert system", "Cloud storage"],
      price: "Starting from $200"
    },
    {
      icon: Shield,
      title: "Complete Systems",
      description: "Turnkey solar irrigation systems designed for different farm sizes with comprehensive installation and support.",
      features: ["Custom design", "Complete installation", "Training included", "Full warranty"],
      price: "Starting from $3,000"
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      description: "Perfect for small farms up to 2 hectares",
      price: "$3,500",
      features: ["2kW Solar System", "1HP Solar Pump", "Basic Controller", "Installation", "1 Year Support"],
      recommended: false
    },
    {
      name: "Professional Package",
      description: "Ideal for medium farms up to 5 hectares",
      price: "$7,500",
      features: ["5kW Solar System", "3HP Solar Pump", "Advanced Controller", "Monitoring System", "Installation", "2 Year Support"],
      recommended: true
    },
    {
      name: "Enterprise Package",
      description: "For large farms over 5 hectares",
      price: "$15,000",
      features: ["10kW Solar System", "5HP Solar Pump", "Smart Controller", "Full Monitoring", "Installation", "3 Year Support"],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
        <Navigation />
      </motion.div>

      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="relative text-white py-20 pt-36">
        <div className="absolute inset-0">
          <img src={heroSlide3} alt="Solar irrigation products in Ethiopian field" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover our comprehensive range of solar irrigation products designed specifically
              for Ethiopian farmers. Quality, reliability, and sustainability in every component.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
                Get Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Product Components</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each component is carefully selected and tested for Ethiopian agricultural conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-primary mb-4">{product.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-agriculture-green-dark">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Packages */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="py-20 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Complete Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready-to-install packages for different farm sizes with everything you need
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300 ${pkg.recommended ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center">
                  {pkg.recommended && (
                    <Badge className="bg-primary text-white mb-4 w-fit mx-auto">Most Popular</Badge>
                  )}
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {pkg.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.recommended ? 'bg-primary hover:bg-agriculture-green-dark' : 'bg-secondary hover:bg-secondary/80'}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Choose Your System?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our experts will help you select the perfect solar irrigation solution for your farm.
            Get a free consultation and custom quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
              Call Sales Team
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default ProductsPage;