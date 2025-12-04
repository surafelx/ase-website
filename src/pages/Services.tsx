import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Zap,
  Droplets,
  Award,
  Users,
  Wrench,
  Globe,
  BarChart,
  Shield,
  CheckCircle,
  Star,
  Clock,
  MapPin,
  Drill,
  Cog,
  Wheat,
  GraduationCap,
  Settings,
  Sun,
  Truck,
  Gauge,
  Layers,
  Target,
  TrendingUp,
  Phone,
  Mail,
  Calendar,
  DollarSign,
} from "lucide-react";
import heroAgriculture from "@/assets/services/maintenance-and-support.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: heroAgriculture,
      alt: "Ethiopian agriculture landscape",
      title: "Comprehensive Services",
      description: "From borehole drilling to solar-powered grain milling"
    },
    {
      src: "/assets/services/solar-panel.jpg",
      alt: "Solar panel installation",
      title: "Solar Technology",
      description: "Clean, renewable energy solutions for agriculture"
    },
    {
      src: "/assets/services/irrigation-system-design.jpg",
      alt: "Irrigation systems",
      title: "Efficient Irrigation",
      description: "Water-saving technologies for maximum productivity"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    {
      id: "borehole-drilling",
      title: "Borehole Drilling",
      subtitle: "Professional Water Access Solutions",
      icon: Drill,
      image: "/assets/services/borehole-drilling.jpg",
      description: "Deploy portable drilling rigs capable of reaching depths up to 60 meters and diameters of 6-12 inches for comprehensive water access solutions.",
      features: [
        "Portable drilling rigs with advanced technology",
        "Depth capacity: up to 60 meters",
        "Diameter range: 6-12 inches",
        "Geological assessment and site evaluation",
        "Water quality testing and analysis",
        "Professional casing and well development",
        "Complete documentation and handover"
      ],
      specifications: [
        { label: "Max Depth", value: "60 meters" },
        { label: "Diameter Range", value: "6-12 inches" },
        { label: "Drilling Method", value: "Rotary & Percussion" },
        { label: "Water Yield", value: "Up to 50m³/hour" }
      ],
      process: [
        "Site assessment and geological survey",
        "Rig mobilization and setup",
        "Drilling operation with real-time monitoring",
        "Well development and testing",
        "Casing installation and grouting",
        "Final inspection and handover"
      ],
      benefits: [
        "Reliable water access for irrigation",
        "Reduced dependency on surface water",
        "Year-round water availability",
        "Improved agricultural productivity"
      ]
    },
    {
      id: "solar-pumps",
      title: "Solar-Powered Pump Installation",
      subtitle: "Clean Energy Irrigation Systems",
      icon: Sun,
      image: "/assets/services/solar-pump-installation.jpg",
      description: "Supply and install complete sets of solar-powered pumps designed for small landholders with reliable, clean energy solutions.",
      features: [
        "Complete solar PV system design and installation",
        "High-efficiency solar pumps (submersible & surface)",
        "Battery storage systems for continuous operation",
        "Advanced MPPT controllers for optimal performance",
        "Weather-resistant mounting structures",
        "Automated operation with smart controls",
        "Remote monitoring and data logging"
      ],
      specifications: [
        { label: "Power Range", value: "1-10 HP" },
        { label: "Flow Rate", value: "Up to 200m³/hour" },
        { label: "Head Range", value: "Up to 100m" },
        { label: "Solar Efficiency", value: "95%+" }
      ],
      process: [
        "Site assessment and solar irradiance analysis",
        "System sizing and component selection",
        "Solar panel and pump installation",
        "Electrical wiring and connection",
        "System testing and commissioning",
        "Operator training and handover"
      ],
      benefits: [
        "Zero fuel costs and carbon emissions",
        "Reliable operation with battery backup",
        "Reduced physical labor for women",
        "Scalable for different farm sizes"
      ]
    },
    {
      id: "irrigation-systems",
      title: "Irrigation Systems",
      subtitle: "Efficient Water Distribution",
      icon: Droplets,
      image: "/assets/services/irrigation-systems.jpg",
      description: "Supply and install efficient irrigation solutions optimized for crops, soil type, and land size to maximize water efficiency.",
      features: [
        "Drip irrigation systems with precision emitters",
        "Sprinkler irrigation for field crops",
        "Automated irrigation controllers",
        "Soil moisture sensors and weather stations",
        "Pressure regulation and filtration systems",
        "Custom design for different crop types",
        "Water-saving technologies and fertigation"
      ],
      specifications: [
        { label: "Water Savings", value: "60-80%" },
        { label: "Distribution Uniformity", value: "90%+" },
        { label: "Automation Level", value: "Full Smart Control" },
        { label: "Crop Compatibility", value: "All Major Crops" }
      ],
      process: [
        "Farm assessment and crop planning",
        "Irrigation system design and layout",
        "Pipe network installation",
        "Emitter and sprinkler placement",
        "Automation system setup",
        "Testing and farmer training"
      ],
      benefits: [
        "Significant water conservation",
        "Improved crop yields and quality",
        "Reduced labor requirements",
        "Precise water and nutrient delivery"
      ]
    },
    {
      id: "grain-milling",
      title: "Solar-Powered Grain Milling",
      subtitle: "Sustainable Food Processing",
      icon: Wheat,
      image: "/assets/services/grain-milling.jpg",
      description: "Offer solar-powered grain milling systems utilizing excess power from solar irrigation setups for complete agricultural solutions.",
      features: [
        "Solar-powered electric mills (5-20 HP)",
        "Multi-grain processing capabilities",
        "Integrated with existing solar systems",
        "Energy storage for continuous operation",
        "Automated milling controls",
        "Quality assurance systems",
        "Maintenance and support packages"
      ],
      specifications: [
        { label: "Processing Capacity", value: "200-1000 kg/hour" },
        { label: "Power Source", value: "Solar + Battery" },
        { label: "Grain Types", value: "Wheat, Maize, Teff, etc." },
        { label: "Energy Efficiency", value: "85%+" }
      ],
      process: [
        "Power assessment from solar system",
        "Mill sizing and component selection",
        "Integration with existing solar setup",
        "Installation and electrical connection",
        "Testing with different grain types",
        "Operator training and maintenance"
      ],
      benefits: [
        "Reduced physical burden on women",
        "Consistent milling quality",
        "Energy-efficient food processing",
        "Integration with irrigation systems"
      ]
    },
    {
      id: "training",
      title: "Training & Knowledge Transfer",
      subtitle: "Empowering Farmers",
      icon: GraduationCap,
      image: "/assets/services/farmer-training.jpg",
      description: "Provide comprehensive training programs to ensure farmers can effectively operate and maintain their solar irrigation systems.",
      features: [
        "Hands-on system operation training",
        "Basic maintenance and troubleshooting",
        "Safety procedures and best practices",
        "Crop-water management techniques",
        "Financial management of solar systems",
        "Group training sessions and workshops",
        "Follow-up support and refresher courses"
      ],
      specifications: [
        { label: "Training Duration", value: "2-5 Days" },
        { label: "Group Size", value: "10-25 Farmers" },
        { label: "Languages", value: "Amharic, Oromiffa, Tigrinya" },
        { label: "Certification", value: "Completion Certificate" }
      ],
      process: [
        "Needs assessment and curriculum design",
        "Training facility setup and materials",
        "Hands-on practical sessions",
        "Theory and best practices education",
        "Assessment and certification",
        "Follow-up support and monitoring"
      ],
      benefits: [
        "Empowered farmers with technical skills",
        "Sustainable system operation",
        "Reduced dependency on external support",
        "Knowledge transfer within communities"
      ]
    },
    {
      id: "maintenance",
      title: "Maintenance & Technical Support",
      subtitle: "Reliable System Performance",
      icon: Settings,
      image: "/assets/services/maintenance-support.jpg",
      description: "Ongoing technical support and maintenance services to keep solar irrigation systems running at peak performance.",
      features: [
        "Scheduled preventive maintenance",
        "24/7 emergency repair services",
        "Performance monitoring and optimization",
        "Parts replacement and upgrades",
        "Remote diagnostics and support",
        "Extended warranty options",
        "Annual maintenance contracts"
      ],
      specifications: [
        { label: "Response Time", value: "< 24 hours" },
        { label: "Coverage", value: "All Ethiopia" },
        { label: "Service Types", value: "Preventive & Corrective" },
        { label: "Warranty", value: "2-5 Years" }
      ],
      process: [
        "System health assessment",
        "Scheduled maintenance planning",
        "On-site service and repairs",
        "Performance testing and optimization",
        "Parts inventory and replacement",
        "Documentation and reporting"
      ],
      benefits: [
        "Maximized system lifespan",
        "Consistent performance and yields",
        "Minimized downtime and losses",
        "Cost-effective long-term operation"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Abebe Tadesse",
      location: "Oromia Region",
      rating: 5,
      text: "The borehole drilling service provided reliable water access for our farm. The solar pump system has transformed our irrigation capabilities and increased our yields significantly.",
      service: "Borehole Drilling & Solar Pumps",
      image: "/assets/testimonials/farmer-1.jpg"
    },
    {
      name: "Fatima Ahmed",
      location: "Amhara Region",
      rating: 5,
      text: "The grain milling system has reduced the physical burden on our women significantly. Now they can focus on other productive activities while ensuring food security for our family.",
      service: "Solar-Powered Grain Milling",
      image: "/assets/testimonials/farmer-2.jpg"
    },
    {
      name: "Kemal Mohammed",
      location: "Tigray Region",
      rating: 5,
      text: "The training program was excellent. We now understand how to maintain our systems and troubleshoot basic issues. The irrigation system has improved our crop quality tremendously.",
      service: "Training & Irrigation Systems",
      image: "/assets/testimonials/farmer-3.jpg"
    },
  ];

  const impactStats = [
    { label: "Farmers Empowered", value: 200, suffix: "+", icon: Users },
    { label: "Regions Covered", value: 8, suffix: "", icon: Globe },
    { label: "Solar Systems Installed", value: 150, suffix: "+", icon: Award },
    { label: "Staff Members", value: 30, suffix: "+", icon: Users },
  ];

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Navigation />
      </motion.div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="relative h-[60vh] bg-agriculture-green-dark text-white py-20 overflow-hidden"
      >
        {/* Simple Graphics Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 left-20 w-16 h-16 bg-solar-gold rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-12 border-2 border-solar-gold rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-solar-gold">
                Comprehensive Services
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-4">
                Sustainable Agriculture Solutions
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From borehole drilling to solar-powered grain milling
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-solar-gold" />
                  <div className="text-3xl font-bold text-solar-gold">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    

      {/* Services Overview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From borehole drilling to grain milling, we provide turn-key solutions
              for sustainable agriculture across Ethiopia
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card
                  className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-500 group h-full cursor-pointer"
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  {/* Service Image Placeholder */}
                  <div className="relative h-48 bg-gradient-primary overflow-hidden">
                    <div className="absolute inset-0 bg-agriculture-green-dark/60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        Professional Service
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {service.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Features Preview */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-primary font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-agriculture-green-dark group-hover:bg-agriculture-green-dark transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service.id);
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Detailed Service Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const service = services.find(s => s.id === selectedService);
              if (!service) return null;

              return (
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                        <p className="text-primary font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedService(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ✕
                    </Button>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Description & Features */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">Service Overview</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications & Process */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Technical Specifications</h4>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {service.specifications.map((spec, idx) => (
                          <div key={idx} className="bg-agriculture-green-light/10 rounded-lg p-3">
                            <div className="text-sm text-muted-foreground">{spec.label}</div>
                            <div className="font-semibold text-foreground">{spec.value}</div>
                          </div>
                        ))}
                      </div>

                      <h4 className="text-lg font-semibold text-foreground mb-3">Service Process</h4>
                      <div className="space-y-2">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {idx + 1}
                            </div>
                            <span className="text-muted-foreground">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-primary rounded-xl p-6 text-white mb-8">
                    <h4 className="text-xl font-bold mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <TrendingUp className="w-5 h-5 text-solar-gold" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-primary hover:bg-agriculture-green-dark">
                      <Phone className="w-4 h-4 mr-2" />
                      Request Consultation
                    </Button>
                    <Button size="lg" variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </motion.div>
      )}

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="py-20 bg-agriculture-green-light/10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Quality Guarantee
              </h3>
              <p className="text-muted-foreground">
                All installations come with comprehensive warranties and quality
                assurance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Local Expertise
              </h3>
              <p className="text-muted-foreground">
                Ethiopian engineers and technicians with deep knowledge of local
                conditions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Performance Monitoring
              </h3>
              <p className="text-muted-foreground">
                Continuous monitoring and optimization for maximum system
                efficiency
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Customer Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-agriculture-green-light/10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Success Stories from Our Farmers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from Ethiopian farmers who have transformed their agricultural practices
              with our comprehensive solar solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    {/* Farmer Photo Placeholder */}
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex items-center justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-solar-gold fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-lg text-foreground mb-6 italic text-center leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="text-center">
                      <p className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {testimonial.location}
                      </p>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {testimonial.service}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-primary text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact our team today for a free consultation and custom quote for
            your solar irrigation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark"
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-agriculture-green-dark"
            >
              Call Now: +251 911 123 456
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default ServicesPage;
