import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Almaz Tadesse",
      location: "Tigray Region",
      crop: "Vegetables & Grains",
      quote: "Before AgriSun Ethiopia, I struggled with expensive diesel pumps and unreliable water supply. Now with solar irrigation, my costs dropped by 75% and my harvest has doubled. My family's future is secure.",
      rating: 5,
      farmSize: "2.5 hectares"
    },
    {
      name: "Bekele Worku",
      location: "Oromia Region",
      crop: "Coffee & Maize",
      quote: "The solar irrigation system from AgriSun has transformed my coffee farm. The consistent water supply during dry seasons has improved my coffee quality significantly. I can now compete in premium markets.",
      rating: 5,
      farmSize: "4 hectares"
    },
    {
      name: "Hiwot Abebe",
      location: "Amhara Region", 
      crop: "Tomatoes & Peppers",
      quote: "As a woman farmer, AgriSun Ethiopia believed in my potential. Their training program taught me everything about solar systems. Now I'm helping other women in my cooperative adopt this technology.",
      rating: 5,
      farmSize: "1.8 hectares"
    },
    {
      name: "Tesfaye Mulugeta",
      location: "SNNPR Region",
      crop: "Fruits & Vegetables",
      quote: "The maintenance support from AgriSun Ethiopia is exceptional. They trained my son to handle basic repairs, and their technicians visit regularly. Five years later, our system works perfectly.",
      rating: 5,
      farmSize: "3.2 hectares"
    },
    {
      name: "Meron Kassaye",
      location: "Addis Ababa Surroundings",
      crop: "Market Gardening",
      quote: "Solar irrigation helped me transition from subsistence farming to commercial agriculture. I now supply vegetables to hotels and restaurants in Addis Ababa. My income increased by 400%.",
      rating: 5,
      farmSize: "1.5 hectares"
    },
    {
      name: "Girma Desta",
      location: "Dire Dawa Region",
      crop: "Cereals & Legumes",
      quote: "The financing options made solar irrigation accessible for small farmers like me. The monthly payments are less than what I used to spend on diesel fuel. Best investment I ever made.",
      rating: 5,
      farmSize: "2.8 hectares"
    }
  ];

  return (
    <section className="py-20 bg-agriculture-green-light/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stories from Ethiopian Farmers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear directly from farmers across Ethiopia who have transformed their livelihoods 
            with solar irrigation technology through AgriSun Ethiopia.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full shadow-elegant hover:shadow-agriculture transition-all duration-300 border-0">
                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-solar-gold fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6">
                      <Quote className="w-8 h-8 text-agriculture-green/30 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground leading-relaxed italic pl-6">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Farmer Info */}
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="font-semibold text-foreground text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-agriculture-green font-medium text-sm mb-2">
                        {testimonial.location}
                      </p>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Grows: {testimonial.crop}</span>
                        <span>Farm: {testimonial.farmSize}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of successful Ethiopian farmers who have transformed their operations with solar irrigation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-agriculture-green hover:bg-agriculture-green-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-agriculture">
              Schedule Farm Assessment
            </button>
            <button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;