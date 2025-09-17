import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const PartnerLogos = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  // Mock partner data - you can replace with actual logos
  const partners = [
    { name: "Ethiopian Electric Power", logo: "EEP" },
    { name: "Ministry of Agriculture", logo: "MOA" },
    { name: "World Bank", logo: "WB" },
    { name: "USAID", logo: "USAID" },
    { name: "African Development Bank", logo: "ADB" },
    { name: "Ethiopian Investment Commission", logo: "EIC" },
    { name: "GIZ Ethiopia", logo: "GIZ" },
    { name: "Solar Energy Foundation", logo: "SEF" },
    { name: "Ethiopian Farmers Union", logo: "EFU" },
  ];

  return (
    <section className="py-16 bg-muted/30">
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
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-6 bg-white rounded-lg shadow-sm border border-border/50 flex items-center justify-center min-h-[100px] hover:shadow-agriculture transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm">{partner.logo}</span>
                    </div>
                    <p className="text-xs font-medium text-muted-foreground">{partner.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnerLogos;