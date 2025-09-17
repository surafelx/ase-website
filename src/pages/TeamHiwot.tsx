import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, GraduationCap, Users, Zap, Settings, Mail, Phone, MapPin, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import teamEthiopia2 from "@/assets/team-ethiopia-2.jpg";

const TeamHiwotPage = () => {
  const achievements = [
    {
      title: "MSc in Renewable Energy Engineering",
      institution: "Addis Ababa University",
      year: "2014",
      description: "Specialized in solar photovoltaic systems and their applications in agriculture"
    },
    {
      title: "Certified Solar Installation Professional",
      institution: "International Solar Energy Society",
      year: "2016",
      description: "Internationally recognized certification for solar system installation and maintenance"
    },
    {
      title: "200+ Solar Systems Installed",
      institution: "Various Projects",
      year: "2015-2023",
      description: "Successfully designed and installed over 200 solar irrigation systems across Ethiopia"
    },
    {
      title: "Cost Reduction Innovation",
      institution: "AgriSun Ethiopia",
      year: "2020",
      description: "Reduced installation costs by 25% through optimized system design and local sourcing"
    }
  ];

  const projects = [
    {
      title: "Amhara Teff Irrigation Project",
      role: "Lead Engineer",
      year: "2020-2022",
      description: "Designed specialized solar irrigation systems for traditional teff cultivation",
      impact: "220% yield increase, 70% water savings, 28 farmers benefited"
    },
    {
      title: "Tigray Vegetable Farming Initiative",
      role: "Technical Director",
      year: "2022-2023",
      description: "Integrated solar greenhouse technology with irrigation systems",
      impact: "250% yield increase expected, 67 farmers to benefit"
    },
    {
      title: "Solar Training Academy",
      role: "Program Director",
      year: "2019-2023",
      description: "Established training program for solar technicians and farmers",
      impact: "200+ technicians trained, improved system reliability"
    }
  ];

  const technicalSkills = [
    { name: "Solar PV System Design", level: 95 },
    { name: "Pump System Engineering", level: 92 },
    { name: "Electrical System Integration", level: 90 },
    { name: "System Optimization", level: 88 },
    { name: "Technical Training", level: 93 },
    { name: "Project Management", level: 85 }
  ];

  const systemTypes = [
    {
      title: "Surface Pump Systems",
      description: "Solar-powered surface pumps for irrigation from rivers, lakes, and reservoirs",
      applications: ["River irrigation", "Lake water extraction", "Reservoir management"],
      capacity: "1-50 HP systems"
    },
    {
      title: "Submersible Pump Systems",
      description: "Deep well solar pumping solutions for groundwater extraction",
      applications: ["Borewell irrigation", "Deep aquifer access", "Groundwater management"],
      capacity: "3-30 HP systems"
    },
    {
      title: "Drip Irrigation Integration",
      description: "Precision irrigation systems combined with solar power",
      applications: ["Vegetable farming", "Fruit orchards", "High-value crops"],
      capacity: "0.5-20 HP systems"
    }
  ];

  return (
    <div className="min-h-screen">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
        <Navigation />
      </motion.div>

      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-solar-gold">
                  <img
                    src={teamEthiopia2}
                    alt="Eng. Hiwot Desta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Eng. Hiwot Desta
                </h1>
                <p className="text-xl text-solar-gold mb-4">Chief Technology Officer</p>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Solar energy specialist with expertise in renewable energy systems. Led installation of 200+
                  solar irrigation projects across Ethiopia, pioneering innovative solutions for sustainable agriculture.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Hiwot
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Professional Summary */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Technical Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-elegant text-center">
                <CardHeader>
                  <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">200+</CardTitle>
                  <CardDescription>Systems Installed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Successfully designed and installed over 200 solar irrigation systems
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant text-center">
                <CardHeader>
                  <Settings className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">25%</CardTitle>
                  <CardDescription>Cost Reduction</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Optimized system design to reduce installation costs significantly
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant text-center">
                <CardHeader>
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">200+</CardTitle>
                  <CardDescription>Technicians Trained</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Established comprehensive training programs for solar technicians
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">About Hiwot</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Eng. Hiwot Desta is a pioneering solar energy engineer who has dedicated her career to
                    bringing renewable energy solutions to Ethiopian agriculture. Her expertise spans from
                    system design and installation to training and optimization.
                  </p>
                  <p>
                    Hiwot's innovative approach has revolutionized solar irrigation in Ethiopia by adapting
                    international best practices to local conditions. She has developed cost-effective solutions
                    that make solar technology accessible to smallholder farmers while maintaining high performance
                    and reliability standards.
                  </p>
                  <p>
                    As Chief Technology Officer, Hiwot leads AgriSun Ethiopia's technical innovation initiatives,
                    ensuring that every system we install represents the cutting edge of solar irrigation technology
                    tailored for Ethiopian agriculture.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      {/* Technical Skills */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="py-20 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* System Types */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Solar System Expertise</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {systemTypes.map((system, index) => (
                <Card key={index} className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {system.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {system.capacity}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {system.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">Applications:</h4>
                      {system.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{app}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Projects */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="py-20 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Key Projects</h2>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="border-0 shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">{project.role}</Badge>
                          <span className="text-sm text-muted-foreground">{project.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm font-semibold text-foreground mb-1">Impact:</p>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Professional Achievements</h2>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge variant="secondary">{achievement.institution}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} viewport={{ once: true }} className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Connect with Hiwot</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Need technical expertise for your solar irrigation project? Let's discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default TeamHiwotPage;