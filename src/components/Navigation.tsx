import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT US" },
    { to: "/services", label: "SERVICES" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/gallery", label: "GALLERY" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg border-b border-primary/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-8 py-2">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-4">
            <div className="p-1 rounded-full bg-solar-gold">
              <img src="/logo.png" alt="Agri-Sun Ethiopia Logo" className="rounded-full p-1 w-12 h-12 object-contain" />
            </div>
            <span className={`text-lg lg:text-xl font-semibold ${isScrolled ? 'text-agriculture-green-dark' : 'text-white'}`}>AgriSun Ethiopia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${isScrolled ? 'text-agriculture-green-dark' : 'text-white'} hover:text-solar-gold transition-colors font-medium text-sm`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/get-started">
              <Button variant="default" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark font-semibold text-sm shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isScrolled ? 'text-agriculture-green-dark' : 'text-white'} hover:text-solar-gold transition-colors`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Modern Slide Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-40 lg:hidden bg-white"
            >
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-1 rounded-full bg-solar-gold">
                      <img src="/logo.png" alt="Agri-Sun Ethiopia Logo" className="rounded-full p-1 w-8 h-8 object-contain" />
                    </div>
                    <span className="text-agriculture-green-dark text-lg font-bold">AgriSun Ethiopia</span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-agriculture-green-dark hover:text-solar-gold transition-colors p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 flex flex-col px-6 py-8">
                  <nav className="space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-3 text-agriculture-green-dark hover:bg-solar-gold/10 hover:text-solar-gold transition-colors font-medium text-base rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-8">
                    <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        variant="default"
                        className="w-full bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark font-semibold text-base py-3"
                      >
                        GET STARTED
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200">
                  <p className="text-agriculture-green-dark/60 text-sm text-center">
                    Agri-Sun Ethiopia Engineering and Trading Pvt. Ltd. Co.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;