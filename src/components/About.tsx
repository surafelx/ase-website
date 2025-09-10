import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Globe } from "lucide-react";
import EthiopiaMap from "./EthiopiaMap";
import teamEthiopia1 from "@/assets/team-ethiopia-1.jpg";
import teamEthiopia2 from "@/assets/team-ethiopia-2.jpg";
import teamEthiopia3 from "@/assets/team-ethiopia-3.jpg";

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
      label: "Regions Covered"
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
              Transforming Agriculture in
              <span className="text-transparent bg-gradient-primary bg-clip-text"> Ethiopia</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AgriSun Ethiopia specializes in providing affordable, reliable solar-powered irrigation 
              solutions for small and marginal farmers across Ethiopia. Our mission is to make sustainable 
              farming technology accessible to every Ethiopian farmer.
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
              Learn More About Our Impact in Ethiopia
            </Button>
          </div>

          {/* Ethiopia Map and Achievements */}
          <div className="space-y-8">
            <EthiopiaMap />
            
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Impact in Ethiopia</h3>
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
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-4">
            Meet Our Ethiopian Team
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our dedicated team of Ethiopian agricultural specialists and engineers work directly with local farmers 
            to implement sustainable solar irrigation solutions across the country.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={teamEthiopia1} 
                alt="AgriSun Ethiopia professional team at solar installation site"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-card">
                <h4 className="text-lg font-semibold text-foreground mb-2">Leadership Team</h4>
                <p className="text-muted-foreground">
                  Our executive and technical leadership team brings decades of agricultural and renewable energy experience.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={teamEthiopia2} 
                alt="Ethiopian farmers working with AgriSun team in agricultural field"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-card">
                <h4 className="text-lg font-semibold text-foreground mb-2">Field Engineers</h4>
                <p className="text-muted-foreground">
                  Our field engineering team works hand-in-hand with farmers to install and maintain solar irrigation systems.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={teamEthiopia3} 
                alt="AgriSun Ethiopia office team planning agricultural solar projects"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-card">
                <h4 className="text-lg font-semibold text-foreground mb-2">Project Specialists</h4>
                <p className="text-muted-foreground">
                  Our project management team ensures every installation meets the highest standards and delivers results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Solar Irrigation */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-elegant">
          <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Solar Irrigation in Ethiopia?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Solar irrigation systems provide a sustainable, cost-effective solution that reduces 
            dependency on expensive diesel pumps and unreliable electricity supply. With Ethiopia's abundant sunshine 
            and growing focus on renewable energy, solar irrigation is the smart choice for modern Ethiopian farming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;