import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoImage from "../assets/logo.png"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center">
              <span className="text-4xl font-bold" style={{color: "#ff6b35"}}>
                <img src={logoImage} alt="Level Up" height={48} width={48}/>
              </span>
              <div className="ml-1 text-[12px] leading-tight">
                <p>LVL UP DESIGN STUDIO</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.Link 
              to="#" 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center p-1.5 text-gray-700 hover:text-[#ff6b35] transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </motion.Link>
            <motion.Link 
              to="#" 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center p-1.5 text-gray-700 hover:text-[#ff6b35] transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </motion.Link>
            <motion.Link 
              to="#" 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center p-1.5 text-gray-700 hover:text-[#ff6b35] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </motion.Link>
            <motion.Link 
              to="#" 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center p-1.5 text-gray-700 hover:text-[#ff6b35] transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </motion.Link>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-[#6b7280] mb-4 md:mb-0"
          >
            © Lvl Up Design Studio {currentYear}. All Rights Reserved
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <Link to="/privacy-policy" className="text-[#6b7280] transition-colors duration-200 no-underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#6b7280] transition-colors duration-200 no-underline">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-[#6b7280] transition-colors duration-200 no-underline">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}