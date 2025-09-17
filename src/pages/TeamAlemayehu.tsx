import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Users, Target, BookOpen, Mail, Phone, MapPin, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import teamEthiopia3 from "@/assets/team-ethiopia-3.jpg";

const TeamAlemayehuPage = () => {
  const achievements = [
    {
      title: "Certified Project Management Professional",
      institution: "Project Management Institute",
      year: "2017",
      description: "International certification in project management methodologies and best practices"
    },
    {
      title: "Community Development Excellence Award",
      institution: "Ethiopian Ministry of Agriculture",
      year: "2021",
      description: "Recognized for outstanding contributions to rural community development"
    },
    {
      title: "100+ Projects Successfully Managed",
      institution: "Various Organizations",
      year: "2015-2023",
      description: "Managed over 100 agricultural and community development projects"
    },
    {
      title: "98% Project Success Rate",
      institution: "AgriSun Ethiopia",
      year: "2018-2023",
      description: "Achieved 98% success rate in solar irrigation project implementations"
    }
  ];

  const projects = [
    {
      title: "Oromia Farmers Cooperative Initiative",
      role: "Project Manager",
      year: "2021-2023",
      description: "Managed large-scale cooperative project serving 45 farmers",
      impact: "180% yield increase, $45,000 investment, 225 families benefited"
    },
    {
      title: "Tigray Post-Conflict Recovery Program",
      role: "Program Coordinator",
      year: "2022-2023",
      description: "Led agricultural recovery initiatives in Tigray region",
      impact: "67 farmers supported, economic recovery accelerated"
    },
    {
      title: "Farmer Training & Capacity Building",
      role: "Training Program Director",
      year: "2019-2023",
      description: "Developed comprehensive training programs for farmers and technicians",
      impact: "500+ farmers trained, improved project sustainability"
    }
  ];

  const skills = [
    { name: "Project Management", level: 95 },
    { name: "Community Development", level: 92 },
    { name: "Farmer Training", level: 90 },
    { name: "Stakeholder Engagement", level: 88 },
    { name: "Monitoring & Evaluation", level: 93 },
    { name: "Risk Management", level: 87 }
  ];

  const trainingPrograms = [
    {
      title: "Solar Irrigation Operation Training",
      duration: "3 days",
      participants: "Farmers & Operators",
      topics: ["System operation", "Basic maintenance", "Safety procedures", "Performance monitoring"]
    },
    {
      title: "Advanced Technical Training",
      duration: "5 days",
      participants: "Technicians & Engineers",
      topics: ["System diagnostics", "Advanced maintenance", "Troubleshooting", "System optimization"]
    },
    {
      title: "Community Leadership Program",
      duration: "2 days",
      participants: "Community Leaders",
      topics: ["Project management", "Community engagement", "Sustainability planning", "Resource mobilization"]
    }
  ];

  const successMetrics = [
    { label: "Projects Completed", value: 100, suffix: "+", icon: Target },
    { label: "Farmers Trained", value: 500, suffix: "+", icon: Users },
    { label: "Success Rate", value: 98, suffix: "%", icon: CheckCircle },
    { label: "Regions Served", value: 8, suffix: "", icon: MapPin }
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
                    src={teamEthiopia3}
                    alt="Alemayehu Tadesse"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Alemayehu Tadesse
                </h1>
                <p className="text-xl text-solar-gold mb-4">Operations Director</p>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Experienced project manager specializing in rural development. Oversees field operations
                  and farmer training programs, ensuring successful implementation of solar irrigation projects
                  across Ethiopia.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Alemayehu
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Project Management Excellence</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <metric.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold text-primary">{metric.value}{metric.suffix}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">About Alemayehu</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Alemayehu Tadesse brings extensive experience in project management and community development
                    to AgriSun Ethiopia. With a background in rural development and agricultural extension,
                    he specializes in ensuring that solar irrigation projects not only deliver technical excellence
                    but also create lasting positive impacts in Ethiopian communities.
                  </p>
                  <p>
                    His approach combines rigorous project management methodologies with deep understanding of
                    Ethiopian rural communities. Alemayehu has successfully managed over 100 projects, achieving
                    a 98% success rate through careful planning, stakeholder engagement, and adaptive management.
                  </p>
                  <p>
                    As Operations Director, Alemayehu oversees all field operations and training programs,
                    ensuring that every project we undertake meets the highest standards of quality and
                    delivers sustainable benefits to farmers and communities.
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

      {/* Training Programs */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Training & Capacity Building</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {program.duration} • {program.participants}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm mb-3">Topics Covered:</h4>
                      {program.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
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
          <h2 className="text-4xl font-bold mb-6">Connect with Alemayehu</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to discuss your project requirements or training needs? Let's work together to make your agricultural vision a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Meeting
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

export default TeamAlemayehuPage;