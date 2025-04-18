import React from "react";
import { motion } from "framer-motion";
import logoImage from "../assets/logo.png"; 

export default function InlineLoading() {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[300px]">
      <motion.div 
        initial={{ opacity: 0.95, scale: 0.98 }}
        animate={{ 
          opacity: 1, 
          scale: [0.98, 1.01, 1]
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="flex items-center"
      >
        <span className="text-3xl font-bold" style={{color: "#ff6b35"}}>
          <img src={logoImage} alt="Level Up" height={50} width={50}/>
        </span>
        <div className="ml-2 text-[12px] leading-tight">
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            LVL UP DESIGN STUDIO
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
