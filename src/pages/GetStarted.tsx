import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, Calculator, FileText, Users, Zap, Droplets, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const GetStartedPage = () => {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We assess your farm's needs, water requirements, and solar potential",
      duration: "1-2 days",
      deliverables: ["Site evaluation", "Water needs assessment", "Solar feasibility study"]
    },
    {
      step: 2,
      title: "Custom System Design",
      description: "Our engineers create a tailored solar irrigation solution for your farm",
      duration: "3-5 days",
      deliverables: ["System specifications", "Cost breakdown", "Installation timeline"]
    },
    {
      step: 3,
      title: "Proposal & Financing",
      description: "Receive detailed proposal with financing options and payment plans",
      duration: "1-2 days",
      deliverables: ["Detailed proposal", "Financing options", "Payment schedule"]
    },
    {
      step: 4,
      title: "Installation & Training",
      description: "Professional installation followed by comprehensive farmer training",
      duration: "5-7 days",
      deliverables: ["Complete installation", "System training", "Maintenance guide"]
    },
    {
      step: 5,
      title: "Ongoing Support",
      description: "Continuous monitoring and support for optimal system performance",
      duration: "Ongoing",
      deliverables: ["Performance monitoring", "Technical support", "Maintenance services"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Yields",
      description: "Up to 300% increase in crop yields with consistent irrigation",
      value: "300%"
    },
    {
      icon: Calculator,
      title: "Cost Savings",
      description: "Reduce irrigation costs by up to 70% compared to diesel pumps",
      value: "70%"
    },
    {
      icon: Zap,
      title: "Energy Independence",
      description: "Zero fuel costs and complete energy independence",
      value: "100%"
    },
    {
      icon: Droplets,
      title: "Water Efficiency",
      description: "Up to 90% water savings with precision irrigation technology",
      value: "90%"
    }
  ];

  const testimonials = [
    {
      name: "Abebe Tadesse",
      location: "Oromia Region",
      text: "The process was smooth and professional. Within weeks of getting started, my farm productivity doubled.",
      result: "200% yield increase"
    },
    {
      name: "Fatima Ahmed",
      location: "Amhara Region",
      text: "The financing options made it possible for me to afford the system. The ROI has been incredible.",
      result: "300% ROI in first year"
    }
  ];

  return (
    <div className="min-h-screen">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
        <Navigation />
      </motion.div>

      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Start Your Solar Irrigation Journey
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your farming operations with affordable solar irrigation technology.
              Join hundreds of Ethiopian farmers who have already revolutionized their agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
                Calculate Savings
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Benefits Overview */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Solar Irrigation?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the measurable benefits that solar irrigation brings to Ethiopian farmers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    {benefit.value}
                  </CardTitle>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Process Steps */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="py-20 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Your Journey to Solar Irrigation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've streamlined the process to make getting started as simple as possible
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-primary text-white">
                          Step {step.step}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{step.duration}</span>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </CardDescription>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm">Deliverables:</h4>
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Quote Form */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">Get Your Free Quote</h2>
              <p className="text-xl text-muted-foreground">
                Tell us about your farm and we'll provide a customized solar irrigation solution
              </p>
            </div>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Farm Size (hectares) *
                      </label>
                      <Input type="number" placeholder="e.g., 5" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Location/Region *
                      </label>
                      <Input placeholder="e.g., Oromia, Amhara" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Crops Grown
                      </label>
                      <Input placeholder="e.g., Maize, Teff, Vegetables" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current Irrigation Method
                      </label>
                      <Input placeholder="e.g., Manual, Diesel pump" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Information
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Full Name" />
                      <Input type="tel" placeholder="Phone Number" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Requirements
                    </label>
                    <Input placeholder="Any specific needs or questions?" />
                  </div>

                  <Button className="w-full bg-primary hover:bg-agriculture-green-dark text-lg py-6">
                    <FileText className="w-5 h-5 mr-2" />
                    Get Free Quote & Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      {/* Success Stories */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="py-20 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from Ethiopian farmers who made the switch to solar irrigation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-elegant">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Badge variant="secondary" className="bg-solar-gold text-agriculture-green-dark mb-4">
                      {testimonial.result}
                    </Badge>
                    <p className="text-lg text-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't let unreliable irrigation hold back your farming potential. Join the solar revolution today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
              Start Your Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
              Call +251 911 123 456
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default GetStartedPage;