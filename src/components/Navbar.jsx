import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/logo.png"; 

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle scroll events and window resize
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isMobile = windowWidth < 768;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white bg-opacity-90 backdrop-blur shadow-sm py-2" 
          : "bg-white py-3"
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-8">
        <div className="flex items-center justify-between h-[40px]">
          <Link to="/" className="relative no-underline">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-9 flex items-center"
            >
              <span className="text-3xl font-bold" style={{color: "#ff6b35"}}>
                <img src={logoImage} alt="Level Up" height={42} width={42}/>
              </span>
              <div className="ml-1 text-[11px] leading-tight">
                <p>LVL UP DESIGN STUDIO</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className={isMobile ? 'hidden' : 'flex items-center'}>
            <nav className="flex items-center gap-4 md:gap-5 lg:gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-1.5 py-2 text-sm font-medium transition-colors no-underline ${
                      pathname === item.href ? "text-[#ff6b35]" : "text-gray-900"
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                        style={{ backgroundColor: "#ff6b35" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button and Sidebar */}
          <div className={isMobile ? 'block' : 'hidden'}>
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-2 bg-transparent border-none rounded-md cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Backdrop overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    onClick={() => setIsOpen(false)}
                  />
                  
                  {/* Sidebar panel */}
                  <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ 
                      type: "tween", 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-lg p-6 z-[51] overflow-y-auto"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <span className="text-xl font-bold" style={{color: "#ff6b35"}}>
                          <img src={logoImage} alt="Level Up" height={32} width={32}/>
                        </span>
                        <div className="ml-2 text-[10px] leading-tight">
                          <p>LVL UP DESIGN STUDIO</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label="Close menu"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    
                    <div className="mt-6">
                      <nav className="flex flex-col">
                        {navItems.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="border-b border-gray-100 last:border-b-0"
                          >
                            <Link
                              to={item.href}
                              onClick={() => setIsOpen(false)}
                              className={`block py-3.5 text-lg font-medium no-underline transition-colors ${
                                pathname === item.href ? "text-[#ff6b35]" : "text-gray-900"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </nav>
                      
                      {/* Social links or other content can be added here */}
                      <div className="mt-8 pt-4 border-t border-gray-100">
                        <Link 
                          to="/contact" 
                          onClick={() => setIsOpen(false)}
                          className="block w-full py-3 px-4 bg-[#ff6b35] text-white text-center rounded-md font-medium no-underline"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}