import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial" },
  { id: "institutional", name: "Institutional" },
  { id: "interior", name: "Interior Design" }
];

const projectsData = [
  {
    id: 1,
    title: "Devraj Farm House",
    category: "residential",
    description: "Contemporary family home with sustainable features",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.2&auto=format&fit=crop&w=1350&q=80",
    location: "Bangalore, India"
  },
  {
    id: 2,
    title: "Farm House",
    category: "commercial",
    description: "Corporate headquarters with open-plan design",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.2&auto=format&fit=crop&w=1350&q=80",
    location: "Mumbai, India"
  },
  {
    id: 3,
    title: "University Campus",
    category: "institutional",
    description: "Educational facility with innovative learning spaces",
    image: "https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-4.0.2&auto=format&fit=crop&w=1350&q=80",
    location: "Delhi, India"
  },
  {
    id: 4,
    title: "Luxury Apartment",
    category: "interior",
    description: "High-end interior design for urban living",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.2&auto=format&fit=crop&w=1350&q=80",
    location: "Chennai, India"
  },
  {
    id: 5,
    title: "Beach Villa",
    category: "residential",
    description: "Oceanfront property with panoramic views",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.2&auto=format&fit=crop&w=1350&q=80",
    location: "Goa, India"
  },
  {
    id: 6,
    title: "Shopping Mall",
    category: "commercial",
    description: "Retail space designed for optimal customer flow",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.2&auto=format&fit=crop&w=1350&q=80",
    location: "Hyderabad, India"
  },
  {
    id: 7,
    title: "School Building",
    category: "institutional",
    description: "Modern educational facility with outdoor learning areas",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.2&auto=format&fit=crop&w=1350&q=80",
    location: "Pune, India"
  },
  {
    id: 8,
    title: "Restaurant Design",
    category: "interior",
    description: "Contemporary dining experience with themed zones",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.2&auto=format&fit=crop&w=1350&q=80",
    location: "Kolkata, India"
  },
  {
    id: 9,
    title: "Hillside Retreat",
    category: "residential",
    description: "Mountain home with sustainable architecture",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.2&auto=format&fit=crop&w=1350&q=80",
    location: "Shimla, India"
  }
];

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [loading, setLoading] = useState(false);
  
  // Filter projects based on category
  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      if (activeFilter === "all") {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
      }
      setLoading(false);
    }, 500);
    
  }, [activeFilter]);
  
  // Handle filter change
  const handleFilterChange = (categoryId) => {
    setActiveFilter(categoryId);
    setVisibleProjects(6); // Reset visible projects when changing category
  };
  
  // Load more projects
  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">OUR PROJECTS</h1>
            <div className="w-20 h-1 bg-[#ff6b35] mx-auto"></div>
            <p className="mt-8 max-w-2xl mx-auto text-gray-600">
              Explore our diverse portfolio of architectural and design projects. 
              Each project showcases our commitment to excellence, innovation, and client satisfaction.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-5 py-2.5 rounded-md font-medium text-sm transition-all duration-300 ${
                  activeFilter === category.id 
                    ? "bg-[#ff6b35] text-white shadow-md" 
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="relative min-h-[400px]">
            {loading ? (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-gray-200 border-t-[#ff6b35] rounded-full animate-spin"></div>
                  <p className="mt-4 text-gray-600">Loading projects...</p>
                </div>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/600x450?text=Project+Image";
                              }}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Orange overlay on hover instead of dark gradient */}
                            <div className="absolute inset-0 bg-[#ff6b35] opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                              <div className="text-white text-center p-6 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-white">{project.location}</p>
                                <div className="mt-4 w-8 h-1 bg-white mx-auto"></div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="inline-block px-3 py-1 text-xs font-medium bg-[#ff6b35]/10 text-[#ff6b35] rounded-full">
                                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          
          {/* Load More Button */}
          {!loading && filteredProjects.length > visibleProjects && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                onClick={loadMoreProjects}
                className="px-8 py-3 bg-white border border-[#ff6b35] text-[#ff6b35] rounded-md font-medium hover:bg-[#ff967e] hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Load More Projects
              </motion.button>
            </motion.div>
          )}
          
          {/* No Projects Message */}
          {!loading && filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-lg text-gray-600">No projects found in this category.</p>
              <button 
                onClick={() => handleFilterChange("all")}
                className="mt-4 px-6 py-2 bg-[#ff6b35] text-white rounded-md font-medium hover:bg-[#ff6b35] transition-colors duration-300"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Have a project in mind?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 mb-10"
            >
              We'd love to help bring your vision to life. Contact us today to discuss your project requirements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#ff6b35] text-white rounded-md font-medium hover:bg-[#e05a24] transition-colors duration-300"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white border border-[#ff6b35] text-[#ff6b35] rounded-md font-medium hover:bg-gray-50 transition-colors duration-300"
              >
                Learn About Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioGrid;

