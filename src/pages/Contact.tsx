import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import heroSlide2 from "@/assets/hero-slide-2.jpg";

const ContactPage = () => {
  const offices = [
    {
      city: "Addis Ababa",
      address: "Bole Medhanealem, Africa Avenue, Addis Ababa, Ethiopia",
      phone: "+251 911 123 456",
      email: "info@agrisunethiopia.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM"
    },
    {
      city: "Bahir Dar",
      address: "Polytechnic College Road, Bahir Dar, Ethiopia",
      phone: "+251 922 654 321",
      email: "bahirdar@agrisunethiopia.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM"
    },
    {
      city: "Hawassa",
      address: "Hawassa University Technology Park, Hawassa, Ethiopia",
      phone: "+251 933 789 012",
      email: "hawassa@agrisunethiopia.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      contact: "+251 911 123 456",
      availability: "Mon-Fri: 8:00 AM - 6:00 PM EAT"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed inquiries and we'll respond within 24 hours",
      contact: "support@agrisunethiopia.com",
      availability: "24/7 email support"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help through our online chat system",
      contact: "Available on website",
      availability: "Mon-Fri: 9:00 AM - 5:00 PM EAT"
    },
    {
      icon: Users,
      title: "Field Visits",
      description: "Schedule an in-person consultation at your location",
      contact: "Request appointment",
      availability: "By appointment only"
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
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="relative text-white py-20 pt-36">
        <div className="absolute inset-0">
          <img src={heroSlide2} alt="Solar irrigation in Ethiopian landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get in touch with our team of experts. We're here to help you transform your farming
              with solar irrigation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

      {/* FAQ Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our solar irrigation services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't wait to transform your farming operations. Contact us today for a free consultation
            and discover how solar irrigation can benefit your farm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark">
              <Headphones className="w-5 h-5 mr-2" />
              Speak to Expert
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agriculture-green-dark">
              Schedule Visit
            </Button>
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