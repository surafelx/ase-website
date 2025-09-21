import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, GraduationCap, Users, BookOpen, Mail, Phone, MapPin, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import teamEthiopia1 from "@/assets/team-ethiopia-1.jpg";

const TeamMesfinPage = () => {
  const achievements = [
    {
      title: "PhD in Agricultural Engineering",
      institution: "Addis Ababa University",
      year: "2015",
      description: "Specialized in sustainable irrigation systems and renewable energy applications in agriculture"
    },
    {
      title: "Ethiopian Green Technology Innovation Award",
      institution: "Ministry of Agriculture",
      year: "2022",
      description: "Recognized for outstanding contributions to sustainable agriculture technology"
    },
    {
      title: "Published Research Papers",
      institution: "International Journals",
      year: "2018-2023",
      description: "20+ publications on solar irrigation systems and agricultural technology"
    },
    {
      title: "Trained Agricultural Professionals",
      institution: "Various Programs",
      year: "2016-2023",
      description: "Trained over 500 farmers and agricultural extension officers"
    }
  ];

  const projects = [
    {
      title: "Oromia Solar Irrigation Initiative",
      role: "Project Director",
      year: "2021-2023",
      description: "Led implementation of solar irrigation systems for 45 cooperative farms",
      impact: "180% yield increase, $45,000 investment, 225 families benefited"
    },
    {
      title: "Amhara Teff Production Project",
      role: "Technical Advisor",
      year: "2020-2022",
      description: "Developed specialized irrigation solutions for traditional teff farming",
      impact: "220% yield increase, preserved cultural farming practices"
    },
    {
      title: "National Solar Agriculture Policy",
      role: "Policy Consultant",
      year: "2019-2021",
      description: "Advised Ethiopian government on renewable energy in agriculture",
      impact: "Influenced national policy on sustainable farming technologies"
    }
  ];

  const publications = [
    {
      title: "Solar-Powered Irrigation Systems for Smallholder Farmers in Ethiopia",
      journal: "Journal of Agricultural Engineering",
      year: "2023",
      citation: "Abebe, M., et al. (2023). Solar-Powered Irrigation Systems..."
    },
    {
      title: "Integration of Traditional Farming Practices with Modern Irrigation Technology",
      journal: "African Journal of Agricultural Technology",
      year: "2022",
      citation: "Abebe, M. (2022). Integration of Traditional Farming..."
    },
    {
      title: "Economic Analysis of Solar Irrigation Adoption in Ethiopian Agriculture",
      journal: "Renewable Energy for Development",
      year: "2021",
      citation: "Abebe, M., Desta, H. (2021). Economic Analysis..."
    }
  ];

  const skills = [
    { name: "Agricultural Engineering", level: 95 },
    { name: "Solar System Design", level: 90 },
    { name: "Project Management", level: 88 },
    { name: "Policy Development", level: 85 },
    { name: "Research & Publications", level: 92 },
    { name: "Farmer Training", level: 90 }
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
                    src={teamEthiopia1}
                    alt="Dr. Mesfin Abebe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Dr. Mesfin Abebe
                </h1>
                <p className="text-xl text-solar-gold mb-4">Chief Executive Officer</p>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  PhD in Agricultural Engineering with 15+ years experience in sustainable irrigation systems.
                  Former advisor to Ethiopian Ministry of Agriculture, leading AgriSun Ethiopia's mission
                  to transform agriculture through innovative solar technology.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Mesfin
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Professional Summary</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-elegant text-center">
                <CardHeader>
                  <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">15+</CardTitle>
                  <CardDescription>Years Experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Extensive experience in agricultural engineering and renewable energy systems
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant text-center">
                <CardHeader>
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">100+</CardTitle>
                  <CardDescription>Farmers Trained</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Directly trained and empowered hundreds of Ethiopian farmers
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant text-center">
                <CardHeader>
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">20+</CardTitle>
                  <CardDescription>Publications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Published research on sustainable agriculture and solar irrigation
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">About Mesfin</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dr. Mesfin Abebe brings a unique combination of academic excellence and practical experience
                    to AgriSun Ethiopia. His PhD research focused on sustainable irrigation systems, and he has
                    spent the last decade working directly with Ethiopian farmers to implement innovative solutions.
                  </p>
                  <p>
                    As former advisor to the Ethiopian Ministry of Agriculture, Mesfin has been instrumental in
                    shaping national policies on renewable energy adoption in agriculture. His work has influenced
                    government subsidies and financing programs that have made solar irrigation accessible to
                    thousands of smallholder farmers.
                  </p>
                  <p>
                    Mesfin is passionate about bridging the gap between traditional Ethiopian farming wisdom and
                    modern technology. He believes that sustainable agriculture must respect cultural practices
                    while embracing innovation for food security and economic development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      {/* Skills & Expertise */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="py-20 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Skills & Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
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

      {/* Achievements */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Key Achievements</h2>

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

      {/* Publications */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Selected Publications</h2>

            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index} className="border-0 shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-foreground mb-2">{pub.title}</h3>
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge variant="secondary">{pub.journal}</Badge>
                          <span className="text-sm text-muted-foreground">{pub.year}</span>
                        </div>
                        <p className="text-sm text-muted-foreground italic">{pub.citation}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
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
          <h2 className="text-4xl font-bold mb-6">Connect with Mesfin</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Interested in learning more about sustainable agriculture or exploring collaboration opportunities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Call
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

export default TeamMesfinPage;