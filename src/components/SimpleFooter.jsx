import React from "react";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import PinterestIcon from "./PinterestIcon";

export default function SimpleFooter() {
  return (
    <motion.footer 
      className="py-1 border-t border-gray-100 bg-white/80 backdrop-blur-sm mt-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex justify-center items-center gap-6">
        <motion.a 
          href="https://www.facebook.com/profile.php?id=61574831676725" 
          target="_blank"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center p-1.5 text-gray-700 hover:text-[#ff6b35] transition-colors duration-200"
          aria-label="Facebook"
        >
          <Facebook size={16} />
        </motion.a>
        <motion.a 
          href="https://pin.it/7hWID0uUJ" 
          target="_blank"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center p-1.5 text-gray-700 hover:text-[#ff6b35] transition-colors duration-200"
          aria-label="Pinterest"
        >
          <PinterestIcon size={16} />
        </motion.a>
        <motion.a 
          href="#" 
          target="_blank"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center p-1.5 text-gray-700 hover:text-[#ff6b35] transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/lvlup_designstudio?igsh=cjdxOHlmczR2c29t&utm_source=qr" 
          target="_blank"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center p-1.5 text-gray-700 hover:text-[#ff6b35] transition-colors duration-200"
          aria-label="Instagram"
        >
          <Instagram size={16} />
        </motion.a>
      </div>
    </motion.footer>
  );
}
