import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Users, TrendingUp, Droplets, Zap, Award, Share2, ThumbsUp, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const BlogOromiaPage = () => {
  const projectStats = [
    { label: "Farmers Benefited", value: 45, icon: Users },
    { label: "Land Irrigated", value: 120, suffix: " hectares", icon: MapPin },
    { label: "Yield Increase", value: 180, suffix: "%", icon: TrendingUp },
    { label: "Water Savings", value: 65, suffix: "%", icon: Droplets }
  ];

  const challenges = [
    {
      title: "Limited Access to Reliable Electricity",
      description: "The cooperative was located in a rural area with inconsistent grid electricity, making traditional irrigation methods unreliable and expensive.",
      solution: "Installed solar-powered irrigation systems with battery backup to ensure 24/7 operation regardless of grid availability."
    },
    {
      title: "High Diesel Fuel Costs",
      description: "Farmers were spending significant portions of their income on diesel fuel for irrigation pumps, reducing profitability.",
      solution: "Solar systems eliminated fuel costs entirely, with each farmer saving approximately $800 annually on fuel expenses."
    },
    {
      title: "Water Scarcity During Dry Season",
      description: "During the dry season, water availability decreased significantly, limiting irrigation and crop yields.",
      solution: "Efficient solar pumps with smart irrigation controllers optimized water usage and maintained consistent irrigation throughout the year."
    }
  ];

  const timeline = [
    {
      phase: "Planning & Assessment",
      duration: "January - February 2021",
      activities: ["Site visits and farmer consultations", "Water resource assessment", "Solar potential analysis", "Budget planning"]
    },
    {
      phase: "System Design & Procurement",
      duration: "March - April 2021",
      activities: ["Custom system design", "Equipment procurement", "Local manufacturing partnerships", "Installation planning"]
    },
    {
      phase: "Installation & Training",
      duration: "May - June 2021",
      activities: ["Equipment installation", "System testing", "Farmer training programs", "Maintenance instruction"]
    },
    {
      phase: "Monitoring & Optimization",
      duration: "July 2021 - Present",
      activities: ["Performance monitoring", "System optimization", "Ongoing support", "Impact assessment"]
    }
  ];

  const farmerStories = [
    {
      name: "Abebe Tadesse",
      age: 42,
      crops: "Maize, Teff, Vegetables",
      quote: "Before solar irrigation, I could only irrigate my farm twice a week. Now I can irrigate every day, and my maize yield has tripled. The system pays for itself within one year.",
      impact: "300% increase in maize yield, $2,500 additional annual income"
    },
    {
      name: "Fatima Ahmed",
      age: 38,
      crops: "Vegetables, Fruits",
      quote: "The solar system has changed everything. I can now grow vegetables year-round and sell them at better prices. My children can go to school regularly now.",
      impact: "Year-round vegetable production, $1,800 additional annual income"
    }
  ];

  const technologies = [
    {
      name: "Solar PV Panels",
      specs: "250W monocrystalline panels, 15-year warranty",
      purpose: "Convert sunlight to electricity for pump operation"
    },
    {
      name: "Variable Frequency Drive Pump",
      specs: "5HP solar pump with VFD controller",
      purpose: "Efficient water pumping with variable speed control"
    },
    {
      name: "Drip Irrigation System",
      specs: "Pressure-compensating drippers, 500m tubing network",
      purpose: "Precise water delivery to plant roots"
    },
    {
      name: "Smart Monitoring System",
      specs: "IoT sensors with mobile app connectivity",
      purpose: "Real-time monitoring of system performance and water usage"
    }
  ];

  const lessonsLearned = [
    "Community involvement in planning leads to better project outcomes",
    "Local manufacturing partnerships reduce costs and create jobs",
    "Comprehensive training is essential for long-term success",
    "Regular monitoring and maintenance ensure optimal performance",
    "Integration with traditional farming practices increases adoption rates"
  ];

  return (
    <div className="min-h-screen">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
        <Navigation />
      </motion.div>

      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-solar-gold text-agriculture-green-dark">Success Story</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Oromia Farmers Cooperative Solar Irrigation Project
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              How 45 Ethiopian farmers transformed their agricultural productivity with solar-powered irrigation,
              achieving 180% yield increases and creating sustainable livelihoods.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Published: January 15, 2024
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Oromia Region, Ethiopia
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Overview */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {projectStats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-elegant text-center">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}{stat.suffix}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Project Background</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Oromia Farmers Cooperative Solar Irrigation Project represents a landmark achievement
                    in Ethiopia's agricultural transformation. Located in the fertile but water-scarce regions
                    of Oromia, this cooperative of 45 smallholder farmers faced significant challenges in
                    maintaining consistent irrigation for their crops.
                  </p>
                  <p>
                    Before the project, farmers relied on diesel-powered pumps that were expensive to operate
                    and often unreliable due to fuel shortages and mechanical failures. The introduction of
                    solar-powered irrigation systems not only solved these immediate problems but also created
                    a sustainable model for agricultural development.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Achievements</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">180% increase in crop yields</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Droplets className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">65% reduction in water usage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">$45,000 total project investment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">225 family members benefited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Challenges & Solutions */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="py-20 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Challenges & Solutions</h2>

            <div className="space-y-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="border-0 shadow-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{challenge.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{challenge.description}</p>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                      <p className="text-sm text-muted-foreground">{challenge.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Timeline */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Project Timeline</h2>

            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">{phase.phase}</h3>
                    <p className="text-primary font-semibold mb-3">{phase.duration}</p>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Technologies Used */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="py-20 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Technologies Implemented</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <Card key={index} className="border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">{tech.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{tech.specs}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tech.purpose}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Farmer Stories */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Farmer Stories</h2>

            <div className="space-y-8">
              {farmerStories.map((story, index) => (
                <Card key={index} className="border-0 shadow-elegant">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{story.name}</h3>
                        <p className="text-sm text-muted-foreground">Age {story.age} • {story.crops}</p>
                      </div>
                    </div>
                    <blockquote className="text-lg text-foreground italic mb-4 leading-relaxed">
                      "{story.quote}"
                    </blockquote>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm font-semibold text-foreground">Impact: {story.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lessons Learned */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} viewport={{ once: true }} className="py-20 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Lessons Learned</h2>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {lessonsLearned.map((lesson, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{lesson}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Inspired by This Success Story?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of Ethiopian farmers who have transformed their agriculture with solar irrigation.
            Start your journey towards sustainable farming today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark" onClick={() => window.location.href = '/get-started'}>
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
              <Share2 className="w-5 h-5 mr-2" />
              Share This Story
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default BlogOromiaPage;