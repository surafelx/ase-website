import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EthiopiaMap from "@/components/EthiopiaMap";
import projectsData from "@/data/projects.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
  Wrench,
  Phone,
  Mail,
  ArrowLeft,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import tigray1 from "@/assets/projects/tigray/tigray-1.jpg";
import tigray2 from "@/assets/projects/tigray/tigray-2.jpg";
import tigray3 from "@/assets/projects/tigray/tigray-3.jpg";
import tigray4 from "@/assets/projects/tigray/tigray-4.jpg";
import tigray5 from "@/assets/projects/tigray/tigray-5.jpg";
import tigray6 from "@/assets/projects/tigray/tigray-6.jpg";

import amhara1 from "@/assets/projects/amhara/amhara-1.jpg";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  const projects = projectsData.projects;

  const project = projects.find((p) => p.id === projectId);

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
          <motion.img
            src="/assets/projects/amhara/amhara-1.jpg"
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
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
