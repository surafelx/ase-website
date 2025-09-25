import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, TrendingUp, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectsData from "@/data/projects.json";

const Projects = () => {
  const navigate = useNavigate();

  // Use local projects data
  const projects = projectsData.projects.slice(0, 3); // Show only first 3 projects as featured

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
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover successful solar irrigation implementations transforming
            agriculture across Ethiopia
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card
                className="border-0 shadow-elegant hover:shadow-xl transition-all duration-500 group h-full flex flex-col relative overflow-hidden cursor-pointer"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                {/* Large Image Background */}
                <div className="relative h-[24rem] bg-gradient-primary overflow-hidden">
                  <div className="absolute inset-0 bg-agriculture-green-dark/70 group-hover:bg-agriculture-green-dark/80 transition-all duration-500"></div>
                  {/* <motion.img
                    className="h-full w-full object-cover"
                    src=""
                  /> */}
                  {/* Status Badge */}
                  <Badge
                    className={`absolute top-4 right-4 ${getStatusColor(
                      project.status
                    )} z-20`}
                  >
                    {project.status}
                  </Badge>

                  {/* Minimal Overlay Content - Always Visible */}
                  <div className="absolute top-[35%] left-8 right-8 z-20">
                    <div className="flex items-center text-white/90 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    <h3 className="text-xl font-bold text-white line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-4">
                  {/* Description */}
                  <p className="text-white/90 mb-3 line-clamp-2 text-xs leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="text-center bg-white/10 rounded-lg p-1 backdrop-blur-sm">
                      <Users className="w-3 h-3 mx-auto mb-1 text-white" />
                      <div className="text-xs font-bold text-white">
                        {project.serialNumber}
                      </div>
                      <div className="text-xs text-white/80">Project #</div>
                    </div>
                    <div className="text-center bg-white/10 rounded-lg p-1 backdrop-blur-sm">
                      <TrendingUp className="w-3 h-3 mx-auto mb-1 text-white" />
                      <div className="text-xs font-bold text-white">
                        {project.estimatedCost}
                      </div>
                      <div className="text-xs text-white/80">Cost</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-white/20 hover:bg-white text-white hover:text-agriculture-green-dark border border-white/30 backdrop-blur-sm transition-all duration-300 text-sm py-2">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Project Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark"
            onClick={() => navigate("/projects")}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
