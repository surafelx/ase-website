import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

const About = () => {
  const benefits = [
    "Reduce irrigation costs by up to 70%",
    "Increase crop yields with consistent water supply",
    "Zero fuel costs and minimal maintenance",
    "Environmentally sustainable farming practices",
    "Government subsidies and financing available"
  ];

  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Farmers Empowered"
    },
    {
      icon: Globe,
      number: "15",
      label: "States Covered"
    },
    {
      icon: Award,
      number: "98%",
      label: "Customer Satisfaction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transforming Agriculture with 
              <span className="text-transparent bg-gradient-primary bg-clip-text"> Solar Power</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We specialize in providing affordable, reliable solar-powered irrigation 
              solutions for small and marginal farmers. Our mission is to make sustainable 
              farming technology accessible to everyone.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-agriculture-green-dark text-white shadow-agriculture"
            >
              Learn More About Our Impact
            </Button>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
              <div className="grid grid-cols-1 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-solar-gold">{achievement.number}</div>
                      <div className="text-white/80">{achievement.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Solar Irrigation?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Solar irrigation systems provide a sustainable, cost-effective solution that reduces 
                dependency on expensive diesel pumps and unreliable electricity supply. With minimal 
                maintenance and government support, it's the smart choice for modern farming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;