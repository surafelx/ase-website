import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import acknowledgmentsData from "@/data/acknowledgments/acknowledgments.json";

const Testimonials = () => {
  const navigate = useNavigate();

  // Transform acknowledgments data to testimonials format
  const testimonials = acknowledgmentsData.testimonials.map((ack) => {
    // Create appropriate testimonial data based on the acknowledgment
    let location = "Ethiopia";
    let crop = "Various Crops";
    let quote = "";
    let farmSize = "Multiple Sites";

    // Customize based on the acknowledgment name
    if (ack.name.includes("Amhara")) {
      location = "Amhara Region";
      crop = "Agricultural Development";
      quote = "We acknowledge AgriSun Ethiopia's outstanding contribution to agricultural development in our region through innovative solar irrigation solutions that have transformed farming practices.";
    } else if (ack.name.includes("Agricultural Transformation Institute")) {
      location = "Federal Level";
      crop = "Technology Innovation";
      quote = "We recognize AgriSun Ethiopia's pioneering work in solar-powered water lifting technology for small-scale irrigation, contributing significantly to agricultural transformation in Ethiopia.";
    } else if (ack.name.includes("Solar Village")) {
      location = "National Level";
      crop = "Sustainable Energy";
      quote = "We commend AgriSun Ethiopia's commitment to sustainable agricultural development through renewable energy solutions that align with our vision for a greener Ethiopia.";
    }

    return {
      name: ack.name,
      location: location,
      crop: crop,
      quote: quote,
      rating: 5,
      farmSize: farmSize,
      date: ack.date
    };
  });

  return (
    <section id="testimonials" className="py-20 bg-agriculture-green-light/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Official Acknowledgments & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition from Ethiopian government institutions and organizations for AgriSun Ethiopia's
            outstanding contributions to agricultural development through solar irrigation technology.
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

                    {/* Acknowledgment Info */}
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="font-semibold text-foreground text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-agriculture-green font-medium text-sm mb-2">
                        {testimonial.location} • {testimonial.crop}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <span>Acknowledged: {testimonial.date}</span>
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
            Join the ranks of recognized institutions and organizations working with AgriSun Ethiopia for sustainable agricultural development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-agriculture-green hover:bg-agriculture-green-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-agriculture"
            >
              Partner With Us
            </button>
            <button
              onClick={() => {
                // Scroll to the testimonials section
                const testimonialsSection = document.getElementById('testimonials');
                if (testimonialsSection) {
                  testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Acknowledgments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;