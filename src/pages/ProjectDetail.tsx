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
            src={project.image}
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

               {/* Farmers with Icon Badge */}
               <div className="flex items-center bg-agriculture-green/30 backdrop-blur-sm rounded-full px-4 py-2 border border-agriculture-green/50">
                 <Users className="w-5 h-5 mr-2 text-white" />
                 <span className="font-medium">{project.beneficiaries} Farmers</span>
               </div>

               {/* Yield Increase with Gradient Badge */}
               <div className="flex items-center bg-gradient-to-r from-solar-gold/30 to-agriculture-green/30 backdrop-blur-sm rounded-full px-4 py-2 border border-solar-gold/50">
                 <TrendingUp className="w-5 h-5 mr-2 text-solar-gold" />
                 <span className="font-semibold text-white">{project.yieldIncrease} Increase</span>
               </div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Project Images Pinterest-Style Masonry Grid */}
      {project.images && project.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="py-16 bg-gradient-to-br from-background to-agriculture-green-light/5"
        >
          <div className="container mx-auto px-6">
            

            <div className="max-w-6xl mx-auto">
              {/* Carousel for Project Images */}
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: true,
                  }),
                ]}
              >
                <CarouselContent className="-ml-4">
                  {project.images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="relative group cursor-pointer">
                        <div
                          className="relative w-full h-72 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
                          onClick={() => {
                            // Create zoom modal
                            const modal = document.createElement("div");
                            modal.className =
                              "fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6";
                            modal.innerHTML = `
                              <div class="relative max-w-5xl max-h-full">
                                <img src="${image}" alt="${
                              project.title
                            } - Image ${
                              index + 1
                            }" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
                                <button class="absolute top-4 right-4 bg-white/20 text-white rounded-full p-3 hover:bg-white/30 transition-colors shadow-lg" onclick="this.parentElement.parentElement.remove()">
                                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                  </svg>
                                </button>
                                <div class="absolute bottom-6 left-6 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                                  ${index + 1} / ${project.images.length}
                                </div>
                                <div class="absolute top-6 left-6 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium">
                                  Landscape • Slide ${index + 1}
                                </div>
                              </div>
                            `;
                            document.body.appendChild(modal);

                            // Close on background click
                            modal.addEventListener("click", (e) => {
                              if (e.target === modal) {
                                modal.remove();
                              }
                            });

                            // Close on escape key
                            const handleEscape = (e) => {
                              if (e.key === "Escape") {
                                modal.remove();
                                document.removeEventListener(
                                  "keydown",
                                  handleEscape
                                );
                              }
                            };
                            document.addEventListener("keydown", handleEscape);
                          }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          {/* Image counter */}
                          <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {index + 1}/{project.images.length}
                          </div>

                          {/* Zoom overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                            <div className="bg-white/30 backdrop-blur-md rounded-full p-5 shadow-2xl border border-white/20">
                              <svg
                                className="w-10 h-10 text-white animate-pulse"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Info overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg mx-2">
                              <p className="text-sm font-medium text-gray-800 truncate">
                                {project.title}
                              </p>
                              <p className="text-xs text-gray-600">
                                Landscape • Click to zoom
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/90 border-white/60 text-agriculture-green hover:bg-white shadow-xl backdrop-blur-sm" />
                <CarouselNext className="right-4 bg-white/90 border-white/60 text-agriculture-green hover:bg-white shadow-xl backdrop-blur-sm" />
              </Carousel>
            </div>
          </div>
        </motion.div>
      )}

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
                    {project.fullDescription}
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

              {/* Farmer Data Table */}
              {project.farmerData && project.farmerData.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Beneficiary Farmers
                    </CardTitle>
                    <CardDescription>
                      Detailed information about farmers participating in this
                      project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Code</th>
                            <th className="text-left p-2">Name</th>
                            <th className="text-left p-2">Sex</th>
                            <th className="text-left p-2">Farm Area (ha)</th>
                            <th className="text-left p-2">Phone</th>
                            <th className="text-left p-2">Water Source</th>
                            <th className="text-left p-2">GPS Coordinates</th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.farmerData.map((farmer, idx) => (
                            <tr
                              key={idx}
                              className="border-b hover:bg-muted/50"
                            >
                              <td className="p-2">{farmer.code}</td>
                              <td className="p-2 font-medium">{farmer.name}</td>
                              <td className="p-2">{farmer.sex}</td>
                              <td className="p-2">{farmer.farmArea}</td>
                              <td className="p-2">{farmer.phone}</td>
                              <td className="p-2">{farmer.waterSource}</td>
                              <td className="p-2">
                                {farmer.coordinates
                                  ? `${farmer.coordinates[0]}, ${farmer.coordinates[1]}`
                                  : "N/A"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
                        This project is located in <strong>{project.location}</strong>, serving <strong>{project.beneficiaries} farmers</strong> across <strong>{project.area}</strong> of agricultural land.
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

              {/* Challenges & Solutions */}
              {project.challenges &&
                project.challenges.length > 0 &&
                project.solutions &&
                project.solutions.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">
                          Challenges Faced
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">
                                {challenge}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">
                          Solutions Implemented
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {project.solutions.map((solution, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">
                                {solution}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                )}

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Project Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Technologies Used
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
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
                    <span className="text-muted-foreground">Beneficiaries</span>
                    <span className="font-bold text-primary">
                      {project.beneficiaries}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Area Covered</span>
                    <span className="font-bold text-primary">
                      {project.area}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Expected Yield Increase
                    </span>
                    <span className="font-bold text-primary">
                      {project.yieldIncrease}
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

              {/* Testimonial */}
              {project.testimonial && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Farmer Testimonial
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-lg italic text-muted-foreground mb-4">
                      "{project.testimonial.text}"
                    </blockquote>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-semibold">
                        {project.testimonial.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        • {project.testimonial.role}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )}

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
