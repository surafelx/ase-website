import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Users,
  Globe,
  Award,
  TrendingUp,
  Droplets,
  Zap
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroAgriculture from "@/assets/team/team-3.jpg";
import snvLogo from "@/assets/clients/SNV.png";
import samkingLogo from "@/assets/clients/SAMKING.png";
import atiLogo from "@/assets/clients/Ethiopian Agricultural Transformation Agency Logo (2).png";
import moaLogo from "@//assets/clients/Ministry of Agriculture Ethiopia.png";
import srwmebLogo from "@/assets/clients/Sidama Region Water, Mining and Energy Bureau.png";
import preciseLogo from "@/assets/clients/Precise Ethiopia Growth Accelerator.svg";
import crownLogo from "@/assets/clients/Crown Micro Global.png";
import hoberLogo from "@/assets/clients/Hober Pumps.png";
import diffulLogo from "@/assets/clients/Difful.png"

// Stats data
const stats = [
  { label: "Farmers Empowered", value: 200, suffix: "+", icon: Users },
  { label: "Regions Covered", value: 8, suffix: "", icon: Globe },
  { label: "Solar Systems Installed", value: 150, suffix: "+", icon: Award },
  { label: "Staff Members", value: 30, suffix: "+", icon: Users },
];

// Client logos data
const clients = [
  {
    name: "SNV Netherlands Development Organization",
    logo: snvLogo,
    alt: "SNV Netherlands Development Organization",
  },
  
  {
    name: "Ethiopian Agricultural Transformation Institute",
    logo: atiLogo,
    alt: "Ethiopian Agricultural Transformation Institute Logo",
  },
    {
    name: "Hober Pumps",
    logo: hoberLogo,
    alt: "Hober Pumps",
  },
  {
    name: "Ministry of Agriculture Ethiopia",
    logo: moaLogo,
    alt: "Ministry of Agriculture Ethiopia",
  },
  {
    name: "Sidama Region Water, Mining and Energy Bureau",
    logo: srwmebLogo,
    alt: "Sidama Region Water, Mining and Energy Bureau",
  },
  {
    name: "Precise Ethiopia Growth Accelerator",
    logo: preciseLogo,
    alt: "Precise Ethiopia Growth Accelerator",
  },
  {
    name: "Crown Micro Global",
    logo: crownLogo,
    alt: "Crown Micro Global",
  },
   {
    name: "SAMKING Solar Water Pumps",
    logo: samkingLogo,
    alt: "SAMKING Solar Water Pumps",
  },
  {
    name: "Difful Pump",
    logo: diffulLogo,
    alt: "Difful Pump",
  },
];

const ClientLogos = () => {
  const [count1, setCount1] = useState("0+");
  const [count2, setCount2] = useState("0");
  const [count3, setCount3] = useState("0+");
  const [count4, setCount4] = useState("0+");

  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

  useEffect(() => {
    // For 200+
    let current1 = 0;
    const target1 = 200;
    const suffix1 = "+";
    const steps = 40;
    const increment1 = target1 / steps;
    const timer1 = setInterval(() => {
      current1 += increment1;
      if (current1 >= target1) {
        setCount1(Math.round(target1) + suffix1);
        clearInterval(timer1);
      } else {
        setCount1(Math.round(current1) + suffix1);
      }
    }, 50);

    // For 8
    let current2 = 0;
    const target2 = 8;
    const timer2 = setInterval(() => {
      current2 += 1;
      if (current2 >= target2) {
        setCount2(Math.round(target2).toString());
        clearInterval(timer2);
      } else {
        setCount2(Math.round(current2).toString());
      }
    }, 200);

    // For 150+
    let current3 = 0;
    const target3 = 150;
    const suffix3 = "+";
    const increment3 = target3 / steps;
    const timer3 = setInterval(() => {
      current3 += increment3;
      if (current3 >= target3) {
        setCount3(Math.round(target3) + suffix3);
        clearInterval(timer3);
      } else {
        setCount3(Math.round(current3) + suffix3);
      }
    }, 50);

    // For 30+
    let current4 = 0;
    const target4 = 30;
    const suffix4 = "+";
    const increment4 = target4 / steps;
    const timer4 = setInterval(() => {
      current4 += increment4;
      if (current4 >= target4) {
        setCount4(Math.round(target4) + suffix4);
        clearInterval(timer4);
      } else {
        setCount4(Math.round(current4) + suffix4);
      }
    }, 50);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, []);

  return (
    <section id="clients" className="py-16 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About AgriSun Ethiopia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We are dedicated to promoting sustainable agricultural practices through solar-powered water pumps and grain milling systems for small-scale farmers across Ethiopia.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full flex flex-col items-center justify-center text-center"
            >
              <stat.icon className="w-8 h-8 text-solar-gold mb-3" />
              <div className="text-3xl font-bold text-solar-gold mb-1">
                {index === 0 ? count1 : index === 1 ? count2 : index === 2 ? count3 : count4}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Our Partners & Clients
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly collaborate with leading organizations and government agencies to deliver sustainable solar irrigation solutions.
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-1">
              {clients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full flex flex-col items-center justify-center text-center p-4"
                  >
                    <div className="w-20 h-20 flex items-center justify-center mb-3">
                      <img
                        src={client.logo}
                        alt={client.alt}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs font-medium text-muted-foreground leading-tight">
                      {client.name}
                    </p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
