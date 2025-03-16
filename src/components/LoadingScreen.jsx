import React from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
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
        <span className="text-5xl font-bold" style={{color: "#ff6b35"}}>
          <img src="../../public/logo.png" alt="Level Up" height={80} width={80}/>
        </span>
        <div className="ml-2 text-[16px] leading-tight">
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
