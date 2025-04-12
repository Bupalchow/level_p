import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [count, setCount] = useState(0);
  const targetCount = 4;
  
  useEffect(() => {
    if (count < targetCount) {
      const timer = setTimeout(() => {
        setCount(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="bg-white font-sans p-4 md:p-8 max-w-7xl mx-auto">
      <motion.div 
        className="pt-8 pb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center text-4xl font-bold text-orange-500">ABOUT US</h1>
        <motion.div 
          className="w-20 h-1 bg-orange-500 mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>
      
      <div className="pb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2"
          >
            <img
              src="/Devaraj.jpg"
              alt="LEAD Architecture Building"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="space-y-6 text-sm md:text-base">
              <motion.p 
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                At Lvl Up Design Studio, we believe every space has a story—and we’re here to help you tell yours. Founded and led by Ar. M Kalaiarasan and Ar. Hitha C, we are a team of young, passionate architects committed to designing spaces that go beyond the ordinary.
              </motion.p>
              
              <motion.p 
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Our mission is to create architecture that adapts to your lifestyle, reflects your vision, and balances aesthetics with purpose. Whether it's a home, a workspace, or a dream project, we design with intention—bringing together sustainability, functionality, and a clean, thoughtful design approach.
              </motion.p>
              
              <motion.p 
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Every detail matters to us, because we know the little things are what make a space truly feel like yours. At Lvl Up, we don’t just build structures—we craft meaningful experiences. Let’s level up your space, and bring your story to life.
              </motion.p>
              
              <motion.p 
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Our team combines creative vision with technical expertise to deliver designs that are both beautiful and practical. From initial concept to final execution, we collaborate closely with our clients to ensure every project reflects their unique identity and requirements.
              </motion.p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
            <motion.div 
              className="text-7xl font-bold text-orange-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {count}+
            </motion.div>
            <motion.div 
              className="text-xl font-semibold mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              YEARS OF EXPERIENCE
            </motion.div>
            <motion.div 
              className="mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              Delivering <span className="text-orange-500 font-medium">Excellence</span> and Creating{" "}
              <span className="text-orange-500 font-medium">Impact</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

