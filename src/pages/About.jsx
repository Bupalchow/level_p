import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Counter animation for years of experience
  const [count, setCount] = useState(0);
  const targetCount = 18;
  
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-full"
          >
            <img
              src="https://lead.co.in/assets/images/about/aboutus.jpg"
              alt="LEAD Architecture Building"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="space-y-4 text-sm md:text-base flex-grow">
              <motion.p 
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                LEAD was founded in 2010 by Architects M.Shone Saju and Mr.Dinesh Shanmugam. We are a multi-disciplinary,
                award-winning architectural firm, specializing in architecture and interior design services. Since our
                inception, we have worked on a diverse range of projects in residential, commercial, hospitality and
                institutional works, with a particular focus on specializing in luxury homes.
              </motion.p>
              
              <motion.p 
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Each project is led by one of our principals, either Shone or Dinesh, giving you the advantage of decades
                of architectural experience. Their leadership, combined with the talents of our design team, enables LEAD
                to produce creative architectural designs that meet client expectations.
              </motion.p>
              
              <motion.p 
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                When we combine your good ideas and our expertise – great things happen. Give us your goals, timeline, and
                budget and we'll work with you every step of the way to create a tailored design solution.
              </motion.p>
              
              <motion.p 
                className="text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                LEAD believes that quality is in the details. That's why our building designs include sharp, aesthetically
                pleasing plans that are also practical to build. This attention to detail is reflected in the drawings
                themselves, which are meticulously created with a high level of precision and accuracy. Contractors
                appreciate our detailed drawings because they allow jobs to flow smoothly – with fewer on-site challenges
                and changes. Clients, too, appreciate our expertise – knowing that quality drawings result in projects
                that are completed on time and on budget.
              </motion.p>
            </div>
            
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="https://lead.co.in/assets/images/about/Profilephoto1.jpg"
                alt="LEAD Architecture Team"
                className="w-full rounded-lg shadow-md"
              />
            </motion.div>
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

