import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Globe } from "lucide-react";
import EthiopiaMap from "./EthiopiaMap";
import teamEthiopia1 from "@/assets/team-ethiopia-1.jpg";
import teamEthiopia2 from "@/assets/team-ethiopia-2.jpg";
import teamEthiopia3 from "@/assets/team-ethiopia-3.jpg";
import communityBg from "@/assets/community-bg.jpg";

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
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Transforming Agriculture in
              <span className="block text-transparent bg-gradient-primary bg-clip-text"> Ethiopia</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AgriSun Ethiopia specializes in providing affordable, reliable solar-powered irrigation 
              solutions for small and marginal farmers across Ethiopia. Our mission is to make sustainable 
              farming technology accessible to every Ethiopian farmer.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
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
            
            <div className="bg-gradient-hero rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Our Impact in Ethiopia</h3>
              <div className="grid grid-cols-1 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
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

        {/* Community Story Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-20">
          <img 
            src={communityBg} 
            alt="Ethiopian farmers in traditional clothing working with modern solar irrigation equipment"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
            <div className="container mx-auto px-8 text-white">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-bold mb-4">Bridging Tradition and Innovation</h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  We honor Ethiopia's rich agricultural heritage while introducing cutting-edge solar 
                  technology that respects traditional farming wisdom and community values.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - New Layout */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-4">
            Meet Our Ethiopian Team
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our dedicated team of Ethiopian agricultural specialists and engineers work directly with local farmers 
            to implement sustainable solar irrigation solutions across the country.
          </p>
          
          {/* Featured Team Member */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-elegant bg-card h-full">
                <img 
                  src={teamEthiopia1} 
                  alt="AgriSun Ethiopia leadership team at solar installation site"
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-foreground mb-3">Leadership & Vision</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our executive and technical leadership team brings decades of combined experience in 
                    agricultural development and renewable energy solutions across Ethiopia. We understand 
                    the unique challenges faced by small landholders and are committed to making solar 
                    irrigation accessible and affordable.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-elegant bg-card">
                <img 
                  src={teamEthiopia2} 
                  alt="Ethiopian farmers working with AgriSun team in agricultural field"
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Field Engineers</h4>
                  <p className="text-muted-foreground text-sm">
                    Expert installation and maintenance teams working directly with farming communities.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-elegant bg-card">
                <img 
                  src={teamEthiopia3} 
                  alt="AgriSun Ethiopia office team planning agricultural solar projects"
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Project Specialists</h4>
                  <p className="text-muted-foreground text-sm">
                    Dedicated project management ensuring every installation exceeds expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Solar Irrigation */}
        <div className="bg-agriculture-green-light/10 rounded-2xl p-8 shadow-elegant">
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