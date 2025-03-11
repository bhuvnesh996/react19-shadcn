import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Heart, Calendar, Info, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${
      !isDarkMode ? 'bg-gradient-to-b from-white to-purple-50' : 'bg-gradient-to-b from-gray-950 to-gray-900'
    } text-gray-900 dark:text-gray-100 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-2 shadow-lg bg-purple-900/95 backdrop-blur-md" 
          : "py-4 bg-purple-800 backdrop-blur-sm border-b border-purple-700"
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-700 font-bold transition-transform group-hover:scale-110 shadow-md">
              C
            </div>
            <span className="text-xl font-bold text-white">CommunionHub</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
            <div className="flex items-center gap-2 pl-2 border-l border-purple-700">
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-purple-700 text-white"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-300" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-300" />
                )}
              </Button> */}
              <Button className="rounded-full bg-white hover:bg-gray-100 text-purple-700 hover:text-purple-800 transition-all duration-300 shadow-md hover:shadow-lg">
                Sign In
              </Button>
            </div>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-white hover:bg-purple-700"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-blue-300" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full text-white hover:bg-purple-700"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-purple-800 border-b border-purple-700 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <NavLinks mobile />
              <div className="pt-4 mt-2 border-t border-purple-700">
                <Button className="w-full rounded-full bg-white hover:bg-gray-100 text-purple-700 hover:text-purple-800 transition-all duration-300">
                  Sign In
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </header>
      
      <main>{children}</main>
      
      <footer className={`${
        !isDarkMode ? 'bg-purple-50 border-t border-purple-100' : 'bg-gray-900 border-t border-gray-800'
      } mt-20`}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold transition-transform group-hover:scale-110 shadow-md">
                  C
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">CommunionHub</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
                Connecting people of all faiths through events and community support. Join us in building bridges across communities.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30">
                  <ExternalLink className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30">
                  <ExternalLink className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-purple-300 dark:border-purple-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30">
                  <ExternalLink className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Quick Links</h3>
              <FooterLink to="/" icon={<Heart className="h-4 w-4" />} label="Home" />
              <FooterLink to="/events" icon={<Calendar className="h-4 w-4" />} label="Events" />
              <FooterLink to="/about" icon={<Info className="h-4 w-4" />} label="About" />
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Contact</h3>
              <div className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                <p>info@communionhub.com</p>
                <p className="mt-2">123 Faith Street</p>
                <p>Unity City, UC 12345</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-100 dark:border-gray-800 mt-8 pt-6 flex flex-col md:flex-row md:justify-between gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <div>
              &copy; {new Date().getFullYear()} CommunionHub. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLinks = ({ mobile = false }) => {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home", icon: <Heart className="h-4 w-4" /> },
    { to: "/events", label: "Events", icon: <Calendar className="h-4 w-4" /> },
    { to: "/about", label: "About", icon: <Info className="h-4 w-4" /> }
  ];
  
  return links.map(link => (
    <Link
      key={link.to}
      to={link.to}
      className={`${
        mobile ? "py-2 flex items-center gap-2" : "relative font-medium transition-colors"
      } text-white hover:text-yellow-200 ${
        location.pathname === link.to
          ? "text-yellow-300"
          : "text-white/90"
      }`}
    >
      {mobile && link.icon}
      {link.label}
      {location.pathname === link.to && !mobile && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      )}
    </Link>
  ));
};

const FooterLink = ({ to, icon, label }) => (
  <Link 
    to={to} 
    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors group"
  >
    <div className="flex items-center justify-center w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
      {icon}
    </div>
    {label}
  </Link>
);

export default Layout;