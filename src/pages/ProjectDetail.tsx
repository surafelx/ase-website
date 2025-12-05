import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EthiopiaMap from "@/components/EthiopiaMap";
import axios from "axios";
import { useState, useEffect } from "react";

const projectsData = {
  "projects": [
    {
      "id": "project-1",
      "title": "Supply and Installation of 3 units 2.2Kw solar powered submersible pumps",
      "location": "Central Ethiopia",
      "status": "In Progress",
      "description": "Supply and Installation of 3 units 2.2Kw solar powered submersible pumps",
      "customer": "Central Ethiopia Silte Zone, Silti woreda",
      "projectPeriod": "April 20, 2025",
      "estimatedCost": "Birr 3,400,000.00",
      "serialNumber": 1,
      "specifications": [
        {
          "label": "Customer",
          "value": "Central Ethiopia Silte Zone, Silti woreda"
        },
        {
          "label": "Project Period",
          "value": "April 20, 2025"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 3,400,000.00"
        },
        {
          "label": "Status",
          "value": "In Progress"
        }
      ]
    },
    {
      "id": "project-2",
      "title": "Supply & Installation of solar surface pump, Fence and related works",
      "location": "Ethiopia",
      "status": "Completed",
      "description": "Supply & Installation of solar surface pump, Fence and related works",
      "customer": "Generation Integrated Rural Development Consultant",
      "projectPeriod": "Feb 2025",
      "estimatedCost": "Birr 3,500,000.00",
      "serialNumber": 2,
      "specifications": [
        {
          "label": "Customer",
          "value": "Generation Integrated Rural Development Consultant"
        },
        {
          "label": "Project Period",
          "value": "Feb 2025"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 3,500,000.00"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-3",
      "title": "Supply and Installation of 2.2Kw solar powered surface pump and submersible pump",
      "location": "Ethiopia",
      "status": "In Progress",
      "description": "Supply and Installation of 2.2Kw solar powered surface pump and submersible pump",
      "customer": "Eden Business Group",
      "projectPeriod": "December 23-27, 2024",
      "estimatedCost": "Birr 2,000,000.00",
      "serialNumber": 3,
      "specifications": [
        {
          "label": "Customer",
          "value": "Eden Business Group"
        },
        {
          "label": "Project Period",
          "value": "December 23-27, 2024"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 2,000,000.00"
        },
        {
          "label": "Status",
          "value": "In Progress"
        }
      ]
    },
    {
      "id": "project-4",
      "title": "Supply and Installation of 750w solar powered submersible pumps",
      "location": "Ethiopia",
      "status": "In Progress",
      "description": "Supply and Installation of 750w solar powered submersible pumps",
      "customer": "Farm Africa",
      "projectPeriod": "December 31, 2024 - January 5, 2025",
      "estimatedCost": "Birr 450,000.00",
      "serialNumber": 4,
      "specifications": [
        {
          "label": "Customer",
          "value": "Farm Africa"
        },
        {
          "label": "Project Period",
          "value": "December 31, 2024 - January 5, 2025"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 450,000.00"
        },
        {
          "label": "Status",
          "value": "In Progress"
        }
      ]
    },
    {
      "id": "project-5",
      "title": "Supply and Installation of solar powered pumps",
      "location": "Ethiopia",
      "status": "Completed",
      "description": "Supply and Installation of solar powered pumps",
      "customer": "Birhanu Integrated Farm",
      "projectPeriod": "Ongoing",
      "estimatedCost": "Birr 2,000,000.00",
      "serialNumber": 5,
      "specifications": [
        {
          "label": "Customer",
          "value": "Birhanu Integrated Farm"
        },
        {
          "label": "Project Period",
          "value": "Ongoing"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 2,000,000.00"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-6",
      "title": "Water well Drilling 80m for irrigation and drinking water",
      "location": "Ethiopia",
      "status": "Completed",
      "description": "Water well Drilling 80m for irrigation and drinking water",
      "customer": "Shali Mesgied, Harbu",
      "projectPeriod": "December 25-31, 2024",
      "estimatedCost": "Birr 2,500,000.00",
      "serialNumber": 6,
      "specifications": [
        {
          "label": "Customer",
          "value": "Shali Mesgied, Harbu"
        },
        {
          "label": "Project Period",
          "value": "December 25-31, 2024"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 2,500,000.00"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-7",
      "title": "Supply and Installation of 16 solar-powered submersible pumps 5.5Kw",
      "location": "Ethiopia",
      "status": "In Progress",
      "description": "Supply and Installation of 16 solar-powered submersible pumps 5.5Kw",
      "customer": "Ministry of Agriculture (Federal)",
      "projectPeriod": "July 15, 2024 – August 30, 2024",
      "estimatedCost": "Birr 25,357,873.74",
      "serialNumber": 7,
      "specifications": [
        {
          "label": "Customer",
          "value": "Ministry of Agriculture (Federal)"
        },
        {
          "label": "Project Period",
          "value": "July 15, 2024 – August 30, 2024"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 25,357,873.74"
        },
        {
          "label": "Status",
          "value": "In Progress"
        }
      ]
    },
    {
      "id": "project-8",
      "title": "Supply and Installation of 6 solar-powered surface pumps 750w, 1500w and 2.2Kw",
      "location": "Ethiopia",
      "status": "In Progress",
      "description": "Supply and Installation of 6 solar-powered surface pumps 750w, 1500w and 2.2Kw",
      "customer": "Ministry of Agriculture (Federal)",
      "projectPeriod": "July 1, 2024 – August 30, 2024",
      "estimatedCost": "Birr 4,957,287.56",
      "serialNumber": 8,
      "specifications": [
        {
          "label": "Customer",
          "value": "Ministry of Agriculture (Federal)"
        },
        {
          "label": "Project Period",
          "value": "July 1, 2024 – August 30, 2024"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 4,957,287.56"
        },
        {
          "label": "Status",
          "value": "In Progress"
        }
      ]
    },
    {
      "id": "project-9",
      "title": "Supply drilling machine Accessories",
      "location": "Amhara",
      "status": "Completed",
      "description": "Supply drilling machine Accessories",
      "customer": "Ministry of Agriculture (Amhara Region)",
      "projectPeriod": "July 1 – July 7, 2024",
      "estimatedCost": "Birr 3,440,152.12",
      "serialNumber": 9,
      "specifications": [
        {
          "label": "Customer",
          "value": "Ministry of Agriculture (Amhara Region)"
        },
        {
          "label": "Project Period",
          "value": "July 1 – July 7, 2024"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 3,440,152.12"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-10",
      "title": "MOA Supply, Installation, testing, commissioning, and training of solar-powered water pumps – Sub contract Amhara Region 16 sites pump installation",
      "location": "Amhara",
      "status": "Completed",
      "description": "MOA Supply, Installation, testing, commissioning, and training of solar-powered water pumps – Sub contract Amhara Region 16 sites pump installation",
      "customer": "Nahom Construction",
      "projectPeriod": "July 1, 2024 – July 30, 2024",
      "estimatedCost": "Birr 1,148,160.00",
      "serialNumber": 10,
      "specifications": [
        {
          "label": "Customer",
          "value": "Nahom Construction"
        },
        {
          "label": "Project Period",
          "value": "July 1, 2024 – July 30, 2024"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 1,148,160.00"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    }
  ]
};
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  MapPin,
  ExternalLink,
  Award,
  Mail,
  ArrowLeft,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = () => {
      setLoading(true);
      try {
        const foundProject = projectsData.projects.find((p) => p.id === projectId);
        setProject(foundProject);
        setError(null);
      } catch (err) {
        console.error('Error loading project:', err);
        setError('Failed to load project');
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      loadProject();
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="text-muted-foreground">Loading project...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/projects")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
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
        className="relative min-h-[60vh] text-white py-20 pt-36"
      >
        <div className="absolute inset-0 overflow-hidden">
           {project.images && project.images.length > 0 ? (
             <motion.img
               src={project.images[0].url}
               alt={project.images[0].alt}
               className="w-full h-full object-cover"
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             />
           ) : (
             <motion.img
               src=""
               alt={project.title}
               className="w-full h-full object-cover"
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             />
           )}
           <div className="absolute inset-0 bg-agriculture-green-dark/70"></div>
         </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className={`mb-4 ${getStatusColor(project.status)}`}>
              {project.status}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-20">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/90">
               {/* Location with Badge Style */}
               <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                 <MapPin className="w-5 h-5 mr-2 text-solar-gold" />
                 <span className="font-semibold text-white">{project.location}</span>
               </div>

               {/* Customer with Icon Badge */}
               <div className="flex items-center bg-agriculture-green/30 backdrop-blur-sm rounded-full px-4 py-2 border border-agriculture-green/50">
                 <User className="w-5 h-5 mr-2 text-white" />
                 <span className="font-medium">{project.customer}</span>
               </div>

               {/* Cost with Gradient Badge */}
               <div className="flex items-center bg-gradient-to-r from-solar-gold/30 to-agriculture-green/30 backdrop-blur-sm rounded-full px-4 py-2 border border-solar-gold/50">
                 <Award className="w-5 h-5 mr-2 text-solar-gold" />
                 <span className="font-semibold text-white">{project.estimatedCost}</span>
               </div>
             </div>
          </div>
        </div>
      </motion.div>


      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        viewport={{ once: true }}
        className="py-5 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>

              {/* Specifications */}
              {project.specifications && project.specifications.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Technical Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.specifications.map((spec, idx) => (
                        <div
                          key={idx}
                          className="bg-agriculture-green-light/10 rounded-lg p-4"
                        >
                          <div className="text-sm text-muted-foreground">
                            {spec.label}
                          </div>
                          <div className="font-semibold text-foreground">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}


              {/* Project Location Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Project Location & Regional Context
                  </CardTitle>
                  <CardDescription>
                    Geographic overview of this project within Ethiopia's agricultural landscape
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <EthiopiaMap />
                  <div className="mt-4 space-y-3">
                    <div className="bg-agriculture-green-light/10 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">📍 Current Project Focus</h4>
                      <p className="text-sm text-muted-foreground">
                        This project is located in <strong>{project.location}</strong> and is part of AgriSun Ethiopia's solar irrigation initiatives.
                      </p>
                    </div>
                    <div className="bg-solar-gold/10 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">🌍 Regional Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        Part of AgriSun Ethiopia's nationwide initiative to transform agriculture through sustainable solar irrigation solutions, contributing to Ethiopia's food security and rural development goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Project Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Project #</span>
                    <span className="font-bold text-primary">
                      {project.serialNumber}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Customer</span>
                    <span className="font-bold text-primary">
                      {project.customer}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Estimated Cost
                    </span>
                    <span className="font-bold text-primary">
                      {project.estimatedCost}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Status</span>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Ethiopia Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Project Coverage in Ethiopia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EthiopiaMap />
                  <p className="text-sm text-muted-foreground mt-4">
                    Interactive map showing AgriSun Ethiopia's solar irrigation project locations across the country.
                    Click on solar sites to explore other projects in different regions.
                  </p>
                </CardContent>
              </Card>


              {/* Contact CTA */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Get Involved</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Interested in similar projects or want to learn more about
                    our solar irrigation solutions?
                  </p>
                  <div className="space-y-2">
                    <Button
                      className="w-full"
                      onClick={() => navigate("/contact")}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Us
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => navigate("/services")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Our Services
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back to Projects */}
      <div className="py-12 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6 text-center">
          <Button onClick={() => navigate("/projects")} size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Projects
          </Button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
