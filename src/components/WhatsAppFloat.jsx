import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  const whatsappNumber = "7019792265"; 
  const whatsappMessage = "Hello! I'd like to know more about your services.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5C] w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
      aria-label="Chat on WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="white" 
        className="w-7 h-7"
      >
        <path 
          d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.94L4 21l5.23-1.36A8 8 0 0 0 12.05 20a7.95 7.95 0 0 0 5.55-13.68zM12.05 18.5a6.58 6.58 0 0 1-3.34-.92l-.24-.14-2.49.65.67-2.42-.16-.25a6.56 6.56 0 1 1 5.56 3.08zm3.79-4.92c-.21-.1-1.26-.62-1.46-.69s-.33-.11-.47.11-.55.68-.68.83-.25.17-.47.06a5.97 5.97 0 0 1-3.01-2.64c-.23-.39.23-.36.64-1.21.07-.14.03-.25-.02-.36s-.47-1.11-.64-1.52c-.17-.4-.34-.34-.47-.34h-.4c-.14 0-.37.05-.56.27-.19.21-.72.71-.72 1.73s.74 2.01.84 2.15c.1.14 1.45 2.2 3.51 3.09.49.21.87.34 1.17.43.49.16.94.13 1.29.08.39-.06 1.26-.52 1.44-1.01.18-.5.18-.92.13-1.01-.05-.09-.19-.14-.4-.24z"
        />
      </svg>
    </motion.a>
  );
}
