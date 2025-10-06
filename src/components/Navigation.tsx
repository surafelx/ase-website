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
          <Link to="/" className="flex items-center space-x-4">
            <img src="/logo.png" alt="Agri-Sun Ethiopia Logo" className=" rounded-full p-2 w-12 h-12 object-contain" />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-agriculture-green-dark' : 'text-agriculture-green-dark'}`}>AgriSun Ethiopia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${isScrolled ? 'text-agriculture-green-dark' : 'text-agriculture-green-dark'} hover:text-solar-gold transition-colors font-bold uppercase text-sm tracking-wide`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/get-started">
              <Button variant="default" className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark font-bold uppercase text-sm tracking-wide shadow-lg">
                GET STARTED
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-agriculture-green-dark' : 'text-white'} hover:text-solar-gold transition-colors`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-40 md:hidden bg-gradient-to-br from-agriculture-green-dark via-primary to-agriculture-green-light"
            >
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex justify-end p-6">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-solar-gold transition-colors"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 flex flex-col justify-center items-center px-8">
                  <div className="space-y-8 text-center">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          to={item.to}
                          className="text-white hover:text-solar-gold transition-colors font-bold uppercase text-2xl tracking-wider block py-4"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                      className="pt-8"
                    >
                      <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                        <Button
                          variant="default"
                          size="lg"
                          className="bg-solar-gold hover:bg-solar-gold-dark text-agriculture-green-dark font-bold uppercase text-lg tracking-wide shadow-xl px-8 py-4"
                        >
                          GET STARTED
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 text-center">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    className="text-white/80 text-sm"
                  >
                    Agri-Sun Ethiopia Engineering and Trading Pvt. Ltd. Co.
                  </motion.p>
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