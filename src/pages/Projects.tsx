import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EthiopiaMap from "@/components/EthiopiaMap";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Droplets,
  Zap,
  Award,
  ExternalLink,
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "@/data/projects/projects.json";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = projectsData.projects;

  // Collect all project images for the carousel - use default image since images not in raw data
  const allProjectImages = projects.map((project) => ({
    src: "/assets/projects/amhara/amhara-1.jpg", // Default image
    projectTitle: project.title,
    projectId: project.id,
    location: "",
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allProjectImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [allProjectImages.length]);

  const projectStats = [
    { label: "Total Projects", value: projects.length, icon: Award },
    {
      label: "Projects Completed",
      value: projects.filter(p => p.status === "Completed").length,
      icon: Users,
    },
    {
      label: "Projects In Progress",
      value: projects.filter(p => p.status === "In Progress").length,
      suffix: "",
      icon: MapPin,
    },
    {
      label: "Total Investment",
      value: "Birr 100M+",
      suffix: "",
      icon: TrendingUp,
    },
  ];

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

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.customer.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || project.status === statusFilter;
      const matchesRegion =
        regionFilter === "all" || project.location.includes(regionFilter);

      return matchesSearch && matchesStatus && matchesRegion;
    });
  }, [searchTerm, statusFilter, regionFilter]);

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
        className="bg-gradient-hero text-white py-20"
      >
        <div className="container mx-auto px-6 mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover how AgriSun Ethiopia is transforming agriculture across
              Ethiopia through innovative solar irrigation projects that deliver
              real results for farmers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {projectStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-solar-gold" />
                  <div className="text-3xl font-bold text-solar-gold">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

     
      {/* Advanced Search and Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-br from-background to-agriculture-green-light/5"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Search Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Find Your Perfect Project
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use our advanced filters to discover projects that match your
                specific needs and interests
              </p>
            </div>

            {/* Main Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search by project name, location, or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-agriculture-green-light/20 focus:border-primary shadow-lg"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {/* Status Filter */}
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/20">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full border-0 bg-transparent">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Completed">✅ Completed</SelectItem>
                      <SelectItem value="In Progress">
                        🔄 In Progress
                      </SelectItem>
                      <SelectItem value="Planning">📋 Planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>

              {/* Region Filter */}
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/20">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <Select value={regionFilter} onValueChange={setRegionFilter}>
                    <SelectTrigger className="w-full border-0 bg-transparent">
                      <SelectValue placeholder="Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">🌍 All Regions</SelectItem>
                      <SelectItem value="Oromia">🏔️ Oromia</SelectItem>
                      <SelectItem value="Amhara">🏛️ Amhara</SelectItem>
                      <SelectItem value="Tigray">🏞️ Tigray</SelectItem>
                      <SelectItem value="Sidama">🌄 Sidama</SelectItem>
                      <SelectItem value="SNNP">🌳 SNNP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>

              {/* Project Size Filter */}
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/20">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    Farmers
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Any Size
                  </div>
                </div>
              </Card>

              {/* Investment Filter */}
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/20">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    Investment
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Any Range
                  </div>
                </div>
              </Card>

              {/* Technology Filter */}
              <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/20">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    Technology
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Any Type
                  </div>
                </div>
              </Card>
            </div>

            {/* Active Filters & Results */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                {(searchTerm ||
                  statusFilter !== "all" ||
                  regionFilter !== "all") && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Active filters:
                    </span>
                    <div className="flex gap-2">
                      {searchTerm && (
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          Search: {searchTerm}
                          <X
                            className="w-3 h-3 cursor-pointer"
                            onClick={() => setSearchTerm("")}
                          />
                        </Badge>
                      )}
                      {statusFilter !== "all" && (
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          Status: {statusFilter}
                          <X
                            className="w-3 h-3 cursor-pointer"
                            onClick={() => setStatusFilter("all")}
                          />
                        </Badge>
                      )}
                      {regionFilter !== "all" && (
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          Region: {regionFilter}
                          <X
                            className="w-3 h-3 cursor-pointer"
                            onClick={() => setRegionFilter("all")}
                          />
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">
                    {filteredProjects.length}
                  </span>{" "}
                  of <span className="font-semibold">{projects.length}</span>{" "}
                  projects found
                </div>
                {(searchTerm ||
                  statusFilter !== "all" ||
                  regionFilter !== "all") && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setStatusFilter("all");
                      setRegionFilter("all");
                    }}
                    className="flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear All
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects List */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our successful solar irrigation implementations across
              different Ethiopian regions
            </p>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                  setRegionFilter("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
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
                    {/* Full Card Background Image */}

                    <div className="absolute inset-0 bg-gradient-primary">
                      {/* <motion.img
                      className="h-full w-full object-cover"
                      src="" /> */}
                      <div className="absolute inset-0 bg-agriculture-green-dark/60"></div>
                    </div>

                    {/* Status Badge */}
                    <div className="relative z-10 p-6">
                      <Badge
                        className={`absolute top-4 right-4 ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 p-6 flex flex-col h-full">
                      {/* Location */}
                      <div className="flex items-center text-white/90 text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/80 mb-6 flex-grow line-clamp-3">
                        {project.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                          <Award className="w-6 h-6 mx-auto mb-2 text-white" />
                          <div className="text-lg font-bold text-white">
                            {project.id}
                          </div>
                          <div className="text-sm text-white/80">Project #</div>
                        </div>
                        <div className="text-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                          <Calendar className="w-6 h-6 mx-auto mb-2 text-white" />
                          <div className="text-lg font-bold text-white">
                            {project.projectPeriod || "Ongoing"}
                          </div>
                          <div className="text-sm text-white/80">Period</div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Project Categories */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-agriculture-green-light/10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Project Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in different types of agricultural projects tailored
              to various Ethiopian farming contexts
            </p>
          </div>

          <Tabs defaultValue="cooperatives" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="cooperatives">Cooperatives</TabsTrigger>
              <TabsTrigger value="individual">Individual Farms</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>

            <TabsContent value="cooperatives">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Cooperative Projects
                    </CardTitle>
                    <CardDescription>
                      Large-scale projects serving farmer cooperatives and
                      associations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 45-200 farmer cooperatives</li>
                      <li>• 50-500 hectare projects</li>
                      <li>• Community-based management</li>
                      <li>• Shared investment models</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Success Metrics
                    </CardTitle>
                    <CardDescription>
                      Average results from cooperative projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Yield Increase</span>
                          <span>185%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Water Savings</span>
                          <span>68%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "68%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="individual">
              <div className="text-center py-12">
                <Users className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Individual Farm Projects
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Tailored solutions for individual farmers with 1-20 hectare
                  farms, focusing on family farming needs and personalized
                  support systems.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Commercial Agriculture
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Large-scale commercial farming operations with advanced
                  automation, monitoring, and optimization systems for maximum
                  productivity and efficiency.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="research">
              <div className="text-center py-12">
                <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Research Partnerships
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Collaborative projects with universities and research
                  institutions to develop innovative solar irrigation
                  technologies and farming practices.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
      {/* Ethiopia Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="py-12 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Project Locations Across Ethiopia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click on the solar sites to explore our projects in different
              regions of Ethiopia
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <EthiopiaMap />
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-primary text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join the hundreds of Ethiopian farmers who have transformed their
            agriculture with our solar irrigation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark"
              onClick={() => navigate("/get-started")}
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-agriculture-green-dark"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
