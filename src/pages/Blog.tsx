import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  User,
  MapPin,
  TrendingUp,
  CheckCircle,
  X,
  ExternalLink,
  Clock,
  Target,
  Award,
  Users,
  Wrench
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: "solar-pumps-moa",
      title: "Supply, Delivery, and Installation of 60 Sets Solar Powered Surface Pumps",
      excerpt: "Major project with Ministry of Agriculture benefiting 60 small landholder farmers across three regions and five woredas.",
      author: "Agri-Sun Ethiopia Team",
      date: "December 2023",
      readTime: "8 min read",
      image: "/assets/blog/solar-pumps-moa-hero.jpg",
      category: "Government Projects",
      tags: ["Solar Pumps", "Ministry of Agriculture", "Rural Development"],
      content: {
        introduction: "We are pleased to announce our contract with the Ministry of Agriculture (MOA) for the Supply, Delivery, and Installation of 60 sets of Solar Powered Surface Pumps, aiming to benefit sixty small landholder farmers across three regions and five woredas. Our commitment to delivering reliable solar water pumping solutions aligns with the MOA's rural development initiatives.",
        sections: [
          {
            title: "Pump Set Checklist Preparations",
            content: "A comprehensive checklist ensures smooth installation. Thorough pre-identification, verification, and approval of unit packages, along with preparedness of necessary installation tools, are essential steps to prevent delays or shortages.",
            image: "/assets/blog/solar-pumps-checklist.jpg"
          },
          {
            title: "Baseline Data Collection",
            content: "Accurate information about project locations and farmer needs is crucial. Our teams have gathered baseline data, enabling informed decisions and improved pump capacity, despite challenges like the absence of pre-selected sites.",
            image: "/assets/blog/baseline-data-collection.jpg"
          },
          {
            title: "Project Schedule",
            content: "The project was scheduled for 8 days, including travel. Timely installation was planned for efficient resource utilization.",
            stats: [
              { label: "Project Duration", value: "8 Days" },
              { label: "Regions Covered", value: "3" },
              { label: "Woredas", value: "5" },
              { label: "Farmers Benefited", value: "60" }
            ]
          },
          {
            title: "Field Trip and Installation",
            content: "In Diredewa and Harari regions, our teams successfully installed and tested pumps, providing training to end users.",
            image: "/assets/blog/field-installation.jpg"
          },
          {
            title: "Challenges and Recommendations",
            content: "Challenges included the absence of pre-site selection, improper water sources, bureaucratic delays, and adjustment needs in installation techniques. Recommendations emphasize thorough assessments, effective communication, flexibility, and continuous improvement.",
            challenges: [
              "Absence of pre-selected sites",
              "Improper water sources at some locations",
              "Bureaucratic delays in approvals",
              "Need for adjustment in installation techniques"
            ],
            recommendations: [
              "Conduct thorough site assessments",
              "Establish effective communication channels",
              "Maintain flexibility in implementation",
              "Focus on continuous improvement"
            ]
          }
        ],
        conclusion: "We express gratitude to MOA, regional representatives, farmers, and families for their support and cooperation, essential for project success. This report highlights our commitment to delivering effective solar water pumping solutions and our dedication to overcoming challenges for the benefit of smallholder farmers.",
        testimonial: {
          name: "Project Coordinator",
          role: "Ministry of Agriculture",
          text: "The successful completion of this project demonstrates Agri-Sun Ethiopia's capability in delivering large-scale solar irrigation solutions that create lasting impact for smallholder farmers."
        }
      }
    },
    {
      id: "nahom-construction-partnership",
      title: "Solar Water Lifting Project - Shoa Robit Partnership",
      excerpt: "Collaborative project with Nahom Construction for comprehensive solar-powered water systems and irrigation infrastructure development.",
      author: "Partnership Team",
      date: "June 2024",
      readTime: "6 min read",
      image: "/assets/blog/nahom-partnership-hero.jpg",
      category: "Partnership Projects",
      tags: ["Partnership", "Infrastructure", "Shoa Robit"],
      content: {
        introduction: "Nahom Construction Pvt. Ltd. Co. and Agri-sun Ethiopia Engineering and Trading Pvt. Ltd. Co. have joined forces to implement a project focused on the supply, installation, and commissioning of solar-powered water lifting devices. This project also encompasses the construction of pipelines and canals to facilitate irrigation and household water supply.",
        sections: [
          {
            title: "Expected Project Deliverables",
            content: "The project encompasses comprehensive deliverables including solar pump sets, irrigation equipment, pipeline construction, and canal development for both irrigation and household water supply.",
            deliverables: [
              "Supply and mobilization of solar pump sets",
              "Irrigation equipment and technical team deployment",
              "Pipeline and canal construction",
              "Solar water pumping system installation and testing",
              "Baseline data collection and analysis"
            ]
          },
          {
            title: "Project Status Overview",
            content: "The project has made significant progress across various components despite facing some challenges.",
            status: [
              {
                phase: "Supply and Mobilization",
                items: [
                  { task: "Mobilization of water tanker and irrigation pipes", status: "Completed", icon: CheckCircle },
                  { task: "Mobilization of surveying and technical teams", status: "Underway", icon: Clock }
                ]
              },
              {
                phase: "PV Modules and Structures",
                items: [
                  { task: "Manufacturing of PV modules", status: "Completed", icon: CheckCircle },
                  { task: "Transport and installation", status: "Delayed", icon: Clock }
                ]
              },
              {
                phase: "Infrastructure Development",
                items: [
                  { task: "Canal excavation", status: "In Progress", icon: Clock },
                  { task: "Labor mobilization", status: "Completed", icon: CheckCircle }
                ]
              },
              {
                phase: "Solar Systems",
                items: [
                  { task: "Workshop testing", status: "Completed", icon: CheckCircle },
                  { task: "Field installation", status: "Delayed", icon: Clock }
                ]
              }
            ]
          },
          {
            title: "Challenges and Solutions",
            content: "The project has faced various challenges but implemented effective solutions to ensure progress.",
            challenges: [
              "Transportation delays due to logistical issues",
              "Security concerns affecting team mobilization",
              "Complex coordination between construction and solar teams",
              "Weather-related delays in outdoor work"
            ],
            solutions: [
              "Established alternative transportation routes",
              "Implemented enhanced security protocols",
              "Created integrated project management systems",
              "Developed flexible scheduling approaches"
            ]
          }
        ],
        conclusion: "Despite challenges such as transportation delays and security issues, progress has been made across various aspects of the project. The collaboration between Nahom Construction Pvt. Ltd. Co. and Agri-sun Ethiopia Engineering and Trading Pvt. Ltd. Co. remains strong, and efforts are focused on overcoming obstacles to ensure timely completion and successful implementation.",
        testimonial: {
          name: "Project Manager",
          role: "Nahom Construction Partnership",
          text: "The collaboration between Nahom Construction and Agri-Sun Ethiopia has been exceptional. Despite challenges, we're making significant progress in bringing sustainable water solutions to Shoa Robit."
        }
      }
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed": return CheckCircle;
      case "In Progress": return Clock;
      case "Delayed": return X;
      default: return Clock;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "text-green-600";
      case "In Progress": return "text-blue-600";
      case "Delayed": return "text-red-600";
      default: return "text-gray-600";
    }
  };

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
        className="relative min-h-[50vh] text-white py-20 pt-36"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="/assets/blog/blog-hero.jpg"
            alt="Agri-Sun Ethiopia Projects"
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-agriculture-green-dark/70"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-20">
              Project Reports & Updates
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Detailed insights into our ongoing projects and successful implementations
              across Ethiopia's agricultural landscape.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-500 group h-full overflow-hidden">
                  {/* Post Image */}
                  <div className="relative h-64 bg-gradient-primary overflow-hidden">
                    <div className="absolute inset-0 bg-agriculture-green-dark/60"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>

                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-agriculture-green-dark group-hover:bg-agriculture-green-dark transition-colors"
                      onClick={() => navigate(`/projects/${post.id}`)}
                    >
                      View Project Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Detailed Post Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {selectedPost.date}
                    </div>
                    <Badge className="bg-primary/10 text-primary">
                      {selectedPost.category}
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {selectedPost.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedPost.excerpt}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedPost(null)}
                  className="text-muted-foreground hover:text-foreground ml-4"
                >
                  ✕
                </Button>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Introduction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedPost.content.introduction}
                  </p>
                </div>

                {/* Sections */}
                {selectedPost.content.sections.map((section, idx) => (
                  <div key={idx} className="mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {section.title}
                    </h3>

                    {section.image && (
                      <div className="mb-6">
                        <div className="h-64 bg-gradient-primary rounded-xl overflow-hidden">
                          <div className="w-full h-full bg-agriculture-green-dark/60"></div>
                        </div>
                      </div>
                    )}

                    <div className="text-muted-foreground leading-relaxed mb-4">
                      {section.content}
                    </div>

                    {/* Stats */}
                    {section.stats && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {section.stats.map((stat, statIdx) => (
                          <div key={statIdx} className="bg-agriculture-green-light/10 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Challenges & Recommendations */}
                    {section.challenges && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Challenges Faced</h4>
                          <ul className="space-y-2">
                            {section.challenges.map((challenge, cIdx) => (
                              <li key={cIdx} className="flex items-start space-x-2">
                                <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Recommendations</h4>
                          <ul className="space-y-2">
                            {section.recommendations.map((rec, rIdx) => (
                              <li key={rIdx} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Project Status */}
                    {section.status && (
                      <div className="space-y-4">
                        {section.status.map((phase, phaseIdx) => (
                          <div key={phaseIdx} className="border rounded-lg p-4">
                            <h4 className="font-semibold text-foreground mb-3">{phase.phase}</h4>
                            <div className="space-y-2">
                              {phase.items.map((item, itemIdx) => {
                                const StatusIcon = getStatusIcon(item.status);
                                return (
                                  <div key={itemIdx} className="flex items-center space-x-3">
                                    <StatusIcon className={`w-4 h-4 ${getStatusColor(item.status)}`} />
                                    <span className="text-muted-foreground">{item.task}</span>
                                    <Badge variant="outline" className="ml-auto">
                                      {item.status}
                                    </Badge>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Deliverables */}
                    {section.deliverables && (
                      <div className="bg-primary/5 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-3">Project Deliverables</h4>
                        <ul className="space-y-2">
                          {section.deliverables.map((deliverable, dIdx) => (
                            <li key={dIdx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}

                {/* Conclusion */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Conclusion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedPost.content.conclusion}
                  </p>
                </div>

                {/* Testimonial */}
                {selectedPost.content.testimonial && (
                  <div className="bg-gradient-primary rounded-xl p-6 text-white mb-8">
                    <h3 className="text-xl font-bold mb-4">Project Impact</h3>
                    <blockquote className="text-lg italic mb-4">
                      "{selectedPost.content.testimonial.text}"
                    </blockquote>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-solar-gold" />
                      <span className="font-semibold">{selectedPost.content.testimonial.name}</span>
                      <span className="text-white/80">• {selectedPost.content.testimonial.role}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t">
                <Button size="lg" onClick={() => navigate(`/projects/${selectedPost.id}`)}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Project Details
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                  <Users className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Blog;