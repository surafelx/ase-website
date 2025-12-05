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
import axios from "axios";

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
    },
    {
      "id": "project-11",
      "title": "MOA Supply, Installation, testing, commissioning, and training of solar-powered water pumps – Sub contract South, Central Ethiopia and Sidama region 16 sites pump installation",
      "location": "Sidama",
      "status": "Completed",
      "description": "MOA Supply, Installation, testing, commissioning, and training of solar-powered water pumps – Sub contract South, Central Ethiopia and Sidama region 16 sites pump installation",
      "customer": "Nahom Construction",
      "projectPeriod": "March 24, 2024 – April 19, 2024",
      "estimatedCost": "Birr 1,163,340.00",
      "serialNumber": 11,
      "specifications": [
        {
          "label": "Customer",
          "value": "Nahom Construction"
        },
        {
          "label": "Project Period",
          "value": "March 24, 2024 – April 19, 2024"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 1,163,340.00"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-12",
      "title": "MOA Supply, Installation, testing, commissioning, and training of solar-powered water pumps – Sub contract Dire Dewa and Hareri region 5 sites installation",
      "location": "Hareri",
      "status": "Completed",
      "description": "MOA Supply, Installation, testing, commissioning, and training of solar-powered water pumps – Sub contract Dire Dewa and Hareri region 5 sites installation",
      "customer": "Nahom Construction",
      "projectPeriod": "March 4, 2024 – March 11, 2024",
      "estimatedCost": "Birr 241,500.00",
      "serialNumber": 12,
      "specifications": [
        {
          "label": "Customer",
          "value": "Nahom Construction"
        },
        {
          "label": "Project Period",
          "value": "March 4, 2024 – March 11, 2024"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 241,500.00"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-13",
      "title": "Supply and Installation of solar-powered water lifting Technology",
      "location": "Amhara",
      "status": "Completed",
      "description": "Supply and Installation of solar-powered water lifting Technology",
      "customer": "ATI (Amhara Region)",
      "projectPeriod": "May 15, 2023 – June 30, 2023",
      "estimatedCost": "Birr 2,259,337.14",
      "serialNumber": 13,
      "specifications": [
        {
          "label": "Customer",
          "value": "ATI (Amhara Region)"
        },
        {
          "label": "Project Period",
          "value": "May 15, 2023 – June 30, 2023"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 2,259,337.14"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-14",
      "title": "Solar-powered water lifting supply, Installation and commission including pipeline",
      "location": "Amhara",
      "status": "Completed",
      "description": "Solar-powered water lifting supply, Installation and commission including pipeline",
      "customer": "ATI (Amhara Region)",
      "projectPeriod": "May 15, 2023 – June 30, 2023",
      "estimatedCost": "Birr 10,560,206.23",
      "serialNumber": 14,
      "specifications": [
        {
          "label": "Customer",
          "value": "ATI (Amhara Region)"
        },
        {
          "label": "Project Period",
          "value": "May 15, 2023 – June 30, 2023"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 10,560,206.23"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-15",
      "title": "Borehole well drilling Service",
      "location": "Ethiopia",
      "status": "Completed",
      "description": "Borehole well drilling Service",
      "customer": "ARGS Finance & Economy Cooperation Bureau",
      "projectPeriod": "March 16, 2023",
      "estimatedCost": "Birr 962,550.00",
      "serialNumber": 15,
      "specifications": [
        {
          "label": "Customer",
          "value": "ARGS Finance & Economy Cooperation Bureau"
        },
        {
          "label": "Project Period",
          "value": "March 16, 2023"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 962,550.00"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-16",
      "title": "Supply and install solar-powered water pumps with PV Fencing structures for 10 Water pumping systems",
      "location": "Sidama",
      "status": "Completed",
      "description": "Supply and install solar-powered water pumps with PV Fencing structures for 10 Water pumping systems",
      "customer": "Sidama Region Water, Mining and Energy Bureau",
      "projectPeriod": "Feb 20, 2023 – March 11, 2023",
      "estimatedCost": "Birr 4,183,127.44",
      "serialNumber": 16,
      "specifications": [
        {
          "label": "Customer",
          "value": "Sidama Region Water, Mining and Energy Bureau"
        },
        {
          "label": "Project Period",
          "value": "Feb 20, 2023 – March 11, 2023"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 4,183,127.44"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-17",
      "title": "Supply three types of plug and play solar kits 60 units",
      "location": "Ethiopia",
      "status": "Completed",
      "description": "Supply three types of plug and play solar kits 60 units",
      "customer": "GIZ",
      "projectPeriod": "Feb 7, 2023",
      "estimatedCost": "Birr 601,200.00",
      "serialNumber": 17,
      "specifications": [
        {
          "label": "Customer",
          "value": "GIZ"
        },
        {
          "label": "Project Period",
          "value": "Feb 7, 2023"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 601,200.00"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-18",
      "title": "Supply, Installation, testing, commissioning, and training of solar-powered water pumps and Sprinkler irrigation systems at four regions, seven Woredas, seventy-seven solar water pumps for small scale irrigation purposes",
      "location": "Ethiopia",
      "status": "On Progress (90% completed)",
      "description": "Supply, Installation, testing, commissioning, and training of solar-powered water pumps and Sprinkler irrigation systems at four regions, seven Woredas, seventy-seven solar water pumps for small scale irrigation purposes",
      "customer": "FDRE ATI",
      "projectPeriod": "June 31, 2023",
      "estimatedCost": "USD 243,76.28 & Birr 5,998,164.32",
      "serialNumber": 18,
      "specifications": [
        {
          "label": "Customer",
          "value": "FDRE ATI"
        },
        {
          "label": "Project Period",
          "value": "June 31, 2023"
        },
        {
          "label": "Estimated Cost",
          "value": "USD 243,76.28 & Birr 5,998,164.32"
        },
        {
          "label": "Status",
          "value": "On Progress (90% completed)"
        }
      ]
    },
    {
      "id": "project-19",
      "title": "Supply and installation of solar powered pumps",
      "location": "Ethiopia",
      "status": "Completed",
      "description": "Supply and installation of solar powered pumps",
      "customer": "HRNS-Ethiopia",
      "projectPeriod": "2 months",
      "estimatedCost": "Birr 12,111,444.67",
      "serialNumber": 19,
      "specifications": [
        {
          "label": "Customer",
          "value": "HRNS-Ethiopia"
        },
        {
          "label": "Project Period",
          "value": "2 months"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 12,111,444.67"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    },
    {
      "id": "project-20",
      "title": "Solarization, Solar system supply and installation for Hamacho, Gemcho and Duba water supply, Bensa Woreda, Sidama regional state",
      "location": "Sidama",
      "status": "Completed",
      "description": "Solarization, Solar system supply and installation for Hamacho, Gemcho and Duba water supply, Bensa Woreda, Sidama regional state",
      "customer": "EECMY-DASSC",
      "projectPeriod": "30 days",
      "estimatedCost": "Birr 10,232,519.20",
      "serialNumber": 20,
      "specifications": [
        {
          "label": "Customer",
          "value": "EECMY-DASSC"
        },
        {
          "label": "Project Period",
          "value": "30 days"
        },
        {
          "label": "Estimated Cost",
          "value": "Birr 10,232,519.20"
        },
        {
          "label": "Status",
          "value": "Completed"
        }
      ]
    }
  ]
};

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projects, setProjects] = useState(projectsData.projects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const heroImages = [
    {
      src: "/assets/projects/amhara/amhara-1.jpg",
      alt: "Amhara region agricultural project",
      title: "Transforming Agriculture",
      description: "Innovative solar solutions across Ethiopian regions"
    },
    {
      src: "/assets/projects/oromia/oromia-1.jpg",
      alt: "Oromia region farming community",
      title: "Empowering Farmers",
      description: "Sustainable irrigation systems for better yields"
    },
    {
      src: "/assets/projects/tigray/tigray-1.jpg",
      alt: "Tigray region solar installation",
      title: "Solar Innovation",
      description: "Clean energy powering agricultural transformation"
    }
  ];

  // Collect all project images for the carousel
  const allProjectImages = projects.map((project) => ({
    src: project.images && project.images.length > 0 ? project.images[0].url : "/assets/projects/amhara/amhara-1.jpg",
    projectTitle: project.title,
    projectId: project._id || project.id,
    location: project.location,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Load projects from static data
  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

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

  // Update hero images to use project images if available
  const dynamicHeroImages = projects.length > 0 ? projects.slice(0, 3).map((project, index) => ({
    src: project.images && project.images.length > 0 ? project.images[0].url : heroImages[index % heroImages.length].src,
    alt: project.images && project.images.length > 0 ? project.images[0].alt : heroImages[index % heroImages.length].alt,
    title: project.title,
    description: project.description || heroImages[index % heroImages.length].description
  })) : heroImages;

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
        className="relative h-[60vh] bg-agriculture-green-dark text-white py-20 overflow-hidden"
      >
        {/* Simple Graphics Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-solar-gold rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-solar-gold rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-solar-gold">
                Transforming Agriculture
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-4">
                Our Projects
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Innovative solar solutions across Ethiopian regions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {projectStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-solar-gold" />
                  <div className="text-3xl font-bold text-solar-gold">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
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
                      {project.images && project.images.length > 0 && (
                        <motion.img
                          className="h-full w-full object-cover"
                          src={project.images[0].url}
                          alt={project.images[0].alt}
                        />
                      )}
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
