import { Sprout, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-8 py-16">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <img src="/logo.png" alt="Agri-Sun Ethiopia Logo" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-bold">Agri-Sun Ethiopia</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Dedicated to promoting sustainable agricultural practices through solar-powered
              water pumps and grain milling systems for small-scale farmers.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/agrisunethiopia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/agrisunethiopia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/agrisunethiopia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/agrisunethiopia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/services" className="hover:text-primary transition-colors">Borehole Drilling</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Solar-Powered Pump Installation</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Irrigation Systems</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Solar-Powered Grain Milling</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Training & Knowledge Transfer</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>0972262728</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>agrisunethiopia@gmail.com</span>
              </div>
              <div>
                <p className="leading-relaxed">
                  Nigat Business Center, 11th Floor, 11-04<br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60">
            <p>&copy; 2023-2024 Agri-Sun Ethiopia Engineering and Trading Pvt. Ltd. Co. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;