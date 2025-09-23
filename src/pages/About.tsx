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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  Users,
  Globe,
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import heroAgriculture from "@/assets/team/team-3.jpg";
import teamEthiopia2 from "@/assets/team-ethiopia-2.jpg";
import teamEthiopia3 from "@/assets/team-ethiopia-3.jpg";
import logo from "@/assets/logo.png";
import yimamKebede from "@/assets/about/yimam-kebede.jpg";
import ClientLogos from "@/components/ClientLogos";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: heroAgriculture,
      alt: "Ethiopian agriculture landscape",
      title: "Sustainable Agriculture",
      description: "Transforming Ethiopian farming with solar technology"
    },
    {
      src: teamEthiopia2,
      alt: "Ethiopian agricultural fields",
      title: "Innovation in Action",
      description: "Modern solar solutions for traditional farming"
    },
    {
      src: teamEthiopia3,
      alt: "Ethiopian farmers",
      title: "Empowering Communities",
      description: "Building a sustainable future for Ethiopian farmers"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);
  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description:
        "Agri-Sun Ethiopia established in January 2023 with 3 million startup capital",
    },
    {
      year: "2023",
      title: "First Projects",
      description:
        "Successfully implemented initial solar-powered water pump installations",
    },
    {
      year: "2023",
      title: "Borehole Drilling Services",
      description: "Launched borehole drilling services with rigs capable of 60m depth",
    },
    {
      year: "2023",
      title: "Irrigation Systems",
      description: "Introduced modern water-saving irrigation kits for small-scale farmers",
    },
    {
      year: "2024",
      title: "Workshop Establishment",
      description: "Established a comprehensive workshop on the assembly of control boxes, manufacturing solar panels, PV fencing structures, and solar pump maintenance",
    },
    {
      year: "2024",
      title: "Solarization Initiative",
      description: "Replacing traditional diesel or electric-powered water pumps with solar-powered systems",
    },
    {
      year: "2024",
      title: "Regional Expansion",
      description: "Extended operations across multiple Ethiopian regions with over 20 staff",
    },
    {
      year: "2025",
      title: "Grain Milling System",
      description: "Expanded services to include solar-powered grain milling systems for enhanced agricultural processing",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description:
        "We prioritize the needs and traditions of Ethiopian farming communities in everything we do.",
      impact: "Empowered over 200 farmers across 8 regions with sustainable solar solutions"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously innovate to bring the best solar technology solutions to Ethiopian agriculture.",
      impact: "Developed comprehensive workshop for solar panel manufacturing and maintenance"
    },
    {
      icon: Shield,
      title: "Reliability",
      description:
        "Our systems are built to last, with comprehensive warranties and ongoing support.",
      impact: "98% customer satisfaction rate with comprehensive after-sales service"
    },
    {
      icon: Target,
      title: "Sustainability",
      description:
        "We are committed to environmentally sustainable practices that benefit future generations.",
      impact: "Replaced traditional diesel pumps with clean solar-powered systems across Ethiopia"
    },
  ];

  const teamMembers = [
    {
      name: "Yimam Kebede",
      role: "CEO of Agrisun Ethiopia Engineering and Trading Plc and Leader of the Joint Venture",
      image: yimamKebede,
      bio: "A seasoned professional with over 25 years of experience spanning the Financial Sector, Agriculture, Automotive, and Solar Technology Industries. Holds a Bachelor of Science in Business Education and a Postgraduate degree in Computer Science. Proven expertise in driving innovative solutions and enhancing operational efficiencies across diverse sectors.",
      expertise: [
        "Financial Sector",
        "Agriculture",
        "Automotive Industry",
        "Solar Technology",
      ],
      achievements: [
        "25+ years experience",
        "BSc Business Education",
        "Postgraduate Computer Science",
        "Diploma Banking & Finance",
      ],
    },

    {
      name: "Nebiyleul Tadesse",
      role: "Operations Manager",
      image: logo,
      bio: "BSc in Agricultural Economics, Diploma in Microfinance and Community Development. 20+ years in agricultural technologies extension, project planning, and microfinance management.",
      expertise: [
        "Agricultural Economics",
        "Microfinance",
        "Project Planning",
        "Community Development",
      ],
      achievements: [
        "20+ years experience",
        "BSc Agricultural Economics",
        "Microfinance Diploma",
        "Agricultural extension expert",
      ],
    },
    {
      name: "Ayele Seleshi",
      role: "Research and Development Manager",
      image: logo,
      bio: "MA Rural Development, BA Business Management, BSc Plant Sciences. 20+ years as senior agriculture expert with comprehensive understanding of rural development strategies.",
      expertise: [
        "Rural Development",
        "Agricultural Engineering",
        "Plant Sciences",
        "Business Management",
      ],
      achievements: [
        "20+ years experience",
        "MA Rural Development",
        "BA Business Management",
        "BSc Plant Sciences",
      ],
    },
    {
      name: "Tamerat Yohannes",
      role: "Technical Department Head",
      image: logo,
      bio: "BSc Agricultural Engineering and Mechanization, MSc Soil Science. Strong foundation in engineering principles and agricultural practices with 15+ years experience.",
      expertise: [
        "Agricultural Engineering",
        "Soil Science",
        "Technical Management",
        "Engineering Principles",
      ],
      achievements: [
        "15+ years experience",
        "BSc Agricultural Engineering",
        "MSc Soil Science",
        "Technical department leadership",
      ],
    },
    {
      name: "Marta Teshome",
      role: "Project Manager",
      image: logo,
      bio: "MA Project Management, MSc Civil Engineering. Highly responsible and committed professional with 5+ years experience in successful project delivery.",
      expertise: [
        "Project Management",
        "Civil Engineering",
        "Project Delivery",
        "Quality Control",
      ],
      achievements: [
        "5+ years experience",
        "MA Project Management",
        "MSc Civil Engineering",
        "Successful project delivery",
      ],
    },
    {
      name: "Takele Getachew",
      role: "Research Team Leader",
      image: logo,
      bio: "BSc Chemical Engineering with 5+ years experience in extensive experimentation with organic liquid fertilizers production from household waste.",
      expertise: [
        "Chemical Engineering",
        "Organic Fertilizer Production",
        "Waste Management",
        "Sustainable Agriculture",
      ],
      achievements: [
        "5+ years experience",
        "BSc Chemical Engineering",
        "Organic fertilizer research",
        "Household waste utilization",
      ],
    },
    {
      name: "Yohas Kifle",
      role: "Electrical Engineer",
      image: logo,
      bio: "BSc Electrical Engineering with 4+ years experience in solar-powered pumps and irrigation systems installation and maintenance.",
      expertise: [
        "Electrical Engineering",
        "Solar System Installation",
        "Irrigation Systems",
        "Maintenance",
      ],
      achievements: [
        "4+ years experience",
        "BSc Electrical Engineering",
        "Solar pump installation",
        "Irrigation system maintenance",
      ],
    },
    {
      name: "Andualem Tesfaye",
      role: "Electrician",
      image: logo,
      bio: "Diploma in Basic Electrical Installation, General Metal Fabrication, Automotive Servicing. 10+ years in electromechanical works, solar water pumping, and borehole drilling.",
      expertise: [
        "Electrical Installation",
        "Metal Fabrication",
        "Solar Water Pumping",
        "Borehole Drilling",
      ],
      achievements: [
        "10+ years experience",
        "Electrical installation diploma",
        "Metal fabrication diploma",
        "Solar system specialist",
      ],
    },
    {
      name: "Anewar Khalid",
      role: "Mechanics",
      image: logo,
      bio: "BSc Mechanical Engineering with 3 years experience in electromechanical works, solar water pumping systems installation, metal structure works, and borehole drilling.",
      expertise: [
        "Mechanical Engineering",
        "Solar System Installation",
        "Metal Structure Works",
        "Borehole Drilling",
      ],
      achievements: [
        "3 years experience",
        "BSc Mechanical Engineering",
        "Solar pumping systems",
        "Metal structure fabrication",
      ],
    },
    {
      name: "Abey Yimam",
      role: "Architect",
      image: logo,
      bio: "BSc Architecture with 3 years experience in designing solar energy products installation, surface and submersible solar water pumping systems, and PV stand modeling.",
      expertise: [
        "Architecture",
        "Solar System Design",
        "PV Stand Modeling",
        "Water Pumping Design",
      ],
      achievements: [
        "3 years experience",
        "BSc Architecture",
        "Solar energy design",
        "PV system modeling",
      ],
    },
    {
      name: "Hirut Teferi",
      role: "Human Resource and Finance Manager",
      image: logo,
      bio: "BA Accounting, Diploma Accounting with 10 years experience in financial management, statements preparation, HR management, auditing, and pitch tree accounting.",
      expertise: [
        "Financial Management",
        "Human Resources",
        "Accounting",
        "Auditing",
      ],
      achievements: [
        "10 years experience",
        "BA Accounting",
        "Diploma Accounting",
        "HR & Finance management",
      ],
    },
    {
      name: "Yimam Mohammed",
      role: "Borehole Drilling Expert",
      image: logo,
      bio: "Diploma Mechanical Engineering with 3+ years experience responsible for S.Wollo site borehole drilling activities.",
      expertise: [
        "Mechanical Engineering",
        "Borehole Drilling",
        "Site Management",
        "Technical Operations",
      ],
      achievements: [
        "3+ years experience",
        "Diploma Mechanical Engineering",
        "S.Wollo site management",
        "Borehole drilling operations",
      ],
    },
    {
      name: "Zelalem Gethun",
      role: "Borehole Drilling Expert",
      image: logo,
      bio: "Certificate in Automotive Service and Engine Machine with 3 years experience as water well drilling expert.",
      expertise: [
        "Automotive Service",
        "Engine Machine",
        "Water Well Drilling",
        "Technical Operations",
      ],
      achievements: [
        "3 years experience",
        "Automotive service certificate",
        "Water well drilling",
        "Technical expertise",
      ],
    },
    {
      name: "Yimam Ejigu",
      role: "Borehole Drilling Expert",
      image: logo,
      bio: "Certificate in Water Drilling with 3 years experience as water well drilling expert.",
      expertise: [
        "Water Drilling",
        "Well Drilling",
        "Technical Operations",
        "Site Management",
      ],
      achievements: [
        "3 years experience",
        "Water drilling certificate",
        "Well drilling expertise",
        "Technical operations",
      ],
    },
    {
      name: "Other Support Staff",
      role: "Support Team",
      image: logo,
      bio: "Dedicated support staff with extensive practical experience in various fields, providing essential operational and technical support to AgriSun Ethiopia's initiatives.",
      expertise: [
        "Operational Support",
        "Technical Assistance",
        "Field Operations",
        "Administrative Support",
      ],
      achievements: [
        "Practical field experience",
        "Operational support",
        "Technical assistance",
        "Team collaboration",
      ],
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

      {/* Hero Section with Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="relative min-h-[70vh] text-white py-20 pt-36 overflow-hidden"
      >
        {/* Image Carousel */}
        <div className="absolute inset-0">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="relative">
                  <motion.div
                    className="relative h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-agriculture-green-dark/80 via-agriculture-green-dark/60 to-transparent"></div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
            <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          </Carousel>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-agriculture-green-dark/40"></div>
        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-solar-gold">
                {heroImages[currentSlide].title}
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-4">
                About AgriSun Ethiopia
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {heroImages[currentSlide].description}
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

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-solar-gold scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Our Story
            </h2>

            <div className="space-y-8">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed pb-8">
                  Agri-Sun Ethiopia Engineering and Trading Pvt. Ltd. Co. is dedicated to promoting
                  sustainable agricultural practices and renewable energy solutions, specifically through
                  solar-powered water pumps and solar-powered grain milling systems for small-scale
                  farmers. Our goal is to provide comprehensive turn-key solutions, from borehole
                  drilling to the implementation of modern irrigation systems.
                </p>

                <p className="text-xl leading-relaxed pb-8">
                  Since our establishment in January 2023, we have built a successful track record in
                  implementing projects that focus on small-scale farmers, including the supply and
                  installation of solar-powered water pumps, water well drilling, and modern water-
                  saving irrigation kits. Our energy-efficient systems alleviate the physical burden on
                  women, who are traditionally responsible for fetching water and hand milling.
                </p>

                <p className="text-xl leading-relaxed pb-8">
                  We have witnessed the transformative power of these technologies in improving
                  agricultural productivity, increasing incomes for farmers, and enhancing food security.
                  Our success stems from collaborating closely with local communities, understanding
                  their unique needs and challenges, and developing tailored solutions that are both
                  practical and sustainable.
                </p>
              </div>

              <div className="bg-agriculture-green-light/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide comprehensive turn-key solutions for sustainable agriculture, from borehole
                  drilling to modern irrigation systems, empowering small-scale farmers with renewable
                  energy technologies that improve productivity and enhance food security.
                </p>
              </div>

              <div className="bg-solar-gold/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Key Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Borehole Drilling </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Solar-Powered Pump Installation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Efficient Irrigation Systems</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Solar-Powered Grain Milling Systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Training and Knowledge Transfer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="py-20 bg-agriculture-green-light/10"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Our Journey
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Our Values */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at AgriSun Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300 text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {value.description}
                  </CardDescription>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <h4 className="font-semibold text-primary text-sm mb-1">Impact:</h4>
                    <p className="text-xs text-muted-foreground">{value.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Company Structure */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Company Structure & Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small startup to a growing force in sustainable agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-agriculture-green-light/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Foundation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Agri-Sun was established by two individuals interested in introducing solar energy
                  technology in rural communities. They have equal investment and started with a 3
                  million startup capital.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Founded: January 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Startup Capital: 3 Million</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Equal Partnership</span>
                  </div>
                </div>
              </div>

              <div className="bg-solar-gold/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Management Team</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">CEO</h4>
                    <p className="text-muted-foreground text-sm">25+ years experience across Financial Sector, Agriculture, and Solar Technology</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Deputy Manager</h4>
                    <p className="text-muted-foreground text-sm">Electromechanical engineering expertise</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Staff Growth</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The number of staff has grown from four (including shareholders) in the first six months
                  to more than 10 permanent staff across various professions, along with over 20
                  temporary staff stationed in different regions of Ethiopia.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Permanent Staff</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">Temporary Staff</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <p className="leading-relaxed mb-4">
                  Our energy-efficient systems alleviate the physical burden on women, who are
                  traditionally responsible for fetching water and hand milling. We've witnessed
                  the transformative power of these technologies in improving agricultural
                  productivity and enhancing food security.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Reduced physical burden on women</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Increased agricultural productivity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Enhanced food security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Our Team */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        viewport={{ once: true }}
        className="py-20 bg-agriculture-green-light/10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals leading AgriSun Ethiopia's
              mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300 overflow-hidden h-full"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Expertise:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-primary hover:bg-agriculture-green-dark">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Team Photo Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        viewport={{ once: true }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Team in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated professionals who make AgriSun Ethiopia's mission possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={teamEthiopia2}
                alt="AgriSun Ethiopia team at work"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Field Operations Team</h3>
                <p className="text-muted-foreground text-sm">Our technical experts working directly with farmers</p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={teamEthiopia3}
                alt="AgriSun Ethiopia office team"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Management Team</h3>
                <p className="text-muted-foreground text-sm">Strategic planning and project coordination</p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroAgriculture}
                alt="AgriSun Ethiopia project team"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Project Implementation</h3>
                <p className="text-muted-foreground text-sm">Installation and maintenance specialists</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-agriculture-green-light/10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Project Team Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our specialized project teams ensure successful implementation and ongoing support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Technical Implementation Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Electrical Engineers</li>
                  <li>• Mechanical Engineers</li>
                  <li>• Solar System Specialists</li>
                  <li>• Borehole Drilling Experts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Project Management Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Project Managers</li>
                  <li>• Site Supervisors</li>
                  <li>• Quality Control Specialists</li>
                  <li>• Timeline Coordinators</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Support & Training Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Training Specialists</li>
                  <li>• Customer Support</li>
                  <li>• Maintenance Technicians</li>
                  <li>• Knowledge Transfer Experts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      {/* After Sales Service Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        viewport={{ once: true }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              After Sales Service
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support and maintenance services to ensure optimal performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Maintenance & Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Regular Maintenance</h4>
                      <p className="text-muted-foreground text-sm">Scheduled maintenance visits to ensure optimal system performance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">24/7 Support</h4>
                      <p className="text-muted-foreground text-sm">Round-the-clock technical support for urgent issues</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Performance Monitoring</h4>
                      <p className="text-muted-foreground text-sm">Continuous monitoring of system performance and efficiency</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-solar-gold/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Warranty & Insurance</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Comprehensive Warranty</h4>
                      <p className="text-muted-foreground text-sm">Extended warranty coverage on all solar components</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Insurance Coverage</h4>
                      <p className="text-muted-foreground text-sm">Protection against weather damage and equipment failure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Replacement Guarantee</h4>
                      <p className="text-muted-foreground text-sm">Quick replacement of faulty components</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Training & Knowledge Transfer</h3>
                <p className="text-white/90 mb-6">
                  We provide comprehensive training to farmers and local technicians to ensure
                  sustainable operation and maintenance of solar irrigation systems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Farmer training programs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Technical skill development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Local technician certification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">Ongoing knowledge support</span>
                  </div>
                </div>
              </div>

              <div className="bg-agriculture-green-light/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Contact After Sales</h3>
                <p className="text-muted-foreground mb-4">
                  Need support or have questions about your solar irrigation system?
                </p>
                <Button className="w-full bg-primary hover:bg-agriculture-green-dark">
                  Contact Support Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Our Partners */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        viewport={{ once: true }}
      >
        <ClientLogos />
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-primary text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Be part of the agricultural revolution in Ethiopia. Whether you're a
            farmer, partner, or investor, we welcome you to join us in
            transforming Ethiopian agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark"
            >
              Partner With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-agriculture-green-dark hover:bg-agriculture-green-dark hover:text-white "
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default AboutPage;
