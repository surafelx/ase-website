import { motion } from "framer-motion";
import heroAgriculture from "@/assets/team/team-3.jpg";
import gizLogo from "@/assets/clients/Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH.webp";
import atiLogo from "@/assets/clients/Ethiopian Agricultural Transformation Agency Logo (2).png";
import moaLogo from "@//assets/clients/Ministry of Agriculture Ethiopia.png";
import srwmebLogo from "@/assets/clients/Sidama Region Water, Mining and Energy Bureau.png";
import preciseLogo from "@/assets/clients/Precise Ethiopia Growth Accelerator.svg";
import crownLogo from "@/assets/clients/Crown Micro Global.png";
import hoberLogo from "@/assets/clients/Hober Pumps.png";
import diffulLogo from "@/assets/clients/Difful.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// Client logos data
const clients = [
  {
    name: "Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH",
    logo: gizLogo,
    alt: "GIZ - Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH",
  },
  {
    name: "Ethiopian Agricultural Transformation Institute",
    logo: atiLogo,
    alt: "Ethiopian Agricultural Transformation Institute Logo",
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
    name: "Difful Pump",
    logo: diffulLogo,
    alt: "Difful Pump",
  },
];

const ClientLogos = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Local and International Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We proudly collaborate with leading organizations and government
            agencies to deliver sustainable solar irrigation solutions across
            Ethiopia.
          </p>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Trusted by government agencies, international organizations, and
              regional authorities
            </p>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="container mx-auto px-6">
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
                  className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-6  flex items-center justify-center min-h-[100px]  transition-all duration-300">
                    <div className="text-center">
                      <div className="w-24 h-24 flex items-center justify-center mx-auto mb-3">
                        <motion.img
                          src={client.logo}
                          alt={client.alt}
                          className="max-w-full max-h-full object-contain filter  group-hover:grayscale-0 transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs text-center p-2 font-medium text-muted-foreground">
                        {client.name}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Additional Text */}
      </div>
    </section>
  );
};

export default ClientLogos;
