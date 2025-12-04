import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const ContactPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: heroSlide1,
      alt: "Ethiopian agricultural landscape",
      title: "Get in Touch",
      description: "Connect with our solar irrigation experts"
    },
    {
      src: heroSlide2,
      alt: "Solar irrigation in Ethiopian landscape",
      title: "Contact Our Team",
      description: "We're here to help transform your farming"
    },
    {
      src: heroSlide3,
      alt: "Modern farming technology",
      title: "Expert Support",
      description: "Professional guidance for your solar solutions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const offices = [
    {
      city: "Addis Ababa",
      address: "IPDC Building, 2nd Floor, Office No.3, Addis Ababa, Ethiopia",
      phone: "0972262728",
      email: "agrisunethiopia@gmail.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      contact: "0972262728",
      availability: "Mon-Fri: 8:00 AM - 6:00 PM EAT"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed inquiries and we'll respond within 24 hours",
      contact: "agrisunethiopia@gmail.com",
      availability: "24/7 email support"
    }
  ];

  const faqs = [
    {
      question: "How long does installation take?",
      answer: "Typical installation takes 3-5 days depending on system size and location. We'll provide a detailed timeline during consultation."
    },
    {
      question: "Do you provide warranties?",
      answer: "Yes, all our systems come with comprehensive 5-year warranties covering equipment and workmanship."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve farmers across all major agricultural regions in Ethiopia including Oromia, Amhara, Tigray, and Southern Nations."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we partner with Ethiopian banks and microfinance institutions to provide flexible financing options for farmers."
    }
  ];

  return (
    <div className="min-h-screen">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
        <Navigation />
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="relative h-[50vh] bg-agriculture-green-dark text-white py-20 overflow-hidden"
      >
        {/* Simple Graphics Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 left-20 w-16 h-16 bg-solar-gold rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 right-1/4 w-12 h-12 border-2 border-solar-gold rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex items-center text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/90">
              Get in touch with our solar irrigation experts
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Methods */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How Can We Help You?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs and location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-agriculture transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {method.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">{method.contact}</p>
                    <p className="text-sm text-muted-foreground">{method.availability}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Form & Offices */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="py-20 bg-agriculture-green-light/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
              <Card className="border-0 shadow-elegant">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="+251 XXX XXX XXX" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input placeholder="How can we help you?" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your farming needs and how we can help..."
                        rows={6}
                      />
                    </div>

                    <Button className="w-full bg-primary hover:bg-agriculture-green-dark">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="border-0 shadow-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-foreground mb-2">{office.city}</h3>
                          <p className="text-muted-foreground mb-3">{office.address}</p>

                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-primary" />
                              <span className="text-sm">{office.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-primary" />
                              <span className="text-sm">{office.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="text-sm">{office.hours}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>


      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default ContactPage;