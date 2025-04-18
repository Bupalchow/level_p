import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, CheckCircle, MapPin } from "lucide-react";
import DynamicPhotoGrid from "../components/DynamicPhotoGrid";

// Project data with additional stock images for each project
const projectsData = [
  {
    id: 1,
    title: "Devraj Farm House",
    description: "Contemporary family home with sustainable features. This elegant farm house combines modern architecture with rustic charm, creating a perfect retreat from city life. The design emphasizes sustainability with solar panels, rainwater harvesting, and natural ventilation systems.",
    type: "Residential",
    date: "2023",
    status: "Completed",
    location: "Bangalore, India",
    images: [
      {
        url: "/Devaraj.jpg", 
        alt: "Devraj Farm House Main View",
      },
    ]
  },
  {
    id: 2,
    title: "Dr. Ravi Farm House",
    description: "Luxurious countryside retreat with modern amenities. This stunning property features an expansive living space that merges indoor and outdoor living. The design incorporates local materials while providing all the luxuries of modern living, creating a perfect balance of comfort and natural beauty.",
    type: "Residential",
    date: "2022",
    status: "Completed",
    location: "Bangalore, India",
    images: [
      {
        url: "/RaviFarmHouse.jpg", 
        alt: "Dr. Ravi Farm House Main View"
      },
    ]
  },
  {
    id: 3,
    title: "Kamal Residence",
    description: "High-end interior design for urban living. This sophisticated urban residence showcases meticulous attention to detail and premium finishes. The interior spaces feature custom-designed furniture and carefully curated art pieces, creating a personalized space that reflects the owner's taste and lifestyle.",
    type: "Interior Design",
    date: "2023",
    status: "Completed",
    location: "Bangalore, India",
    images: [
      {
        url: "/kamalResidence/KamalResidence.jpg", 
        alt: "Kamal Residence Main View"
      },
      {
        url: "/kamalResidence/kamal1.jpg",
        alt: "Modern Living Room Interior"
      },
      {
        url: "/kamalResidence/kamal2.jpg",
        alt: "Luxury Bedroom Design"
      },
      {
        url: "/kamalResidence/kamal3.jpg",
        alt: "Modern Dining Area"
      },
      {
        url: "/kamalResidence/kamal4.jpg",
        alt: "Elegant Kitchen Design"
      }
    ]
  },
  {
    id: 4,
    title: "Whitefield Residence",
    description: "Elegant residential space blending tradition with modernity. This thoughtfully designed residence seamlessly integrates traditional architectural elements with contemporary design. The spacious interiors feature high ceilings and large windows that flood the space with natural light while maintaining privacy.",
    type: "Residential",
    date: "2022",
    status: "Completed",
    location: "Bangalore, India",
    images: [
      {
        url: "/WhitefieldResidence/WhiteField.jpg", 
        alt: "Whitefield Residence Main View"
      },
      {
        url: "/WhitefieldResidence/whitefield1.jpg",
        alt: "Modern Home Interior"
      },
      {
        url: "/WhitefieldResidence/whitefield2.jpg",
        alt: "Residential Exterior"
      },
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    
    // Find the project with matching id
    const projectId = parseInt(id);
    const foundProject = projectsData.find(p => p.id === projectId);
    
    // Simulate API loading
    setTimeout(() => {
      setProject(foundProject);
      setLoading(false);
    }, 500);
    
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  }, [id]);
  
  // Handle project not found
  if (!loading && !project) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/projects"
          className="inline-flex items-center px-6 py-3 bg-[#ff6b35] text-white rounded-md"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-[#ff6b35] rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Back to Projects Link */}
            <Link 
              to="/projects"
              className="inline-flex items-center text-gray-600 hover:text-[#ff6b35] mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
            
            {/* Simplified Header - Just Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-10"
            >
              {project.title}
            </motion.h1>
            
            {/* Dynamic Photo Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16"
            >
              <DynamicPhotoGrid images={project.images} />
            </motion.div>
            
            {/* Project Details Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gray-50 p-8 rounded-xl mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">About This Project</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-[#ff6b35]/10 p-2 rounded-full mr-3">
                        <Tag className="h-4 w-4 text-[#ff6b35]" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Project Type:</span>
                        <span className="ml-2 font-medium">{project.type}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-[#ff6b35]/10 p-2 rounded-full mr-3">
                        <Calendar className="h-4 w-4 text-[#ff6b35]" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Date:</span>
                        <span className="ml-2 font-medium">{project.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-[#ff6b35]/10 p-2 rounded-full mr-3">
                        <CheckCircle className="h-4 w-4 text-[#ff6b35]" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Status:</span>
                        <span className="ml-2 font-medium">{project.status}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-[#ff6b35]/10 p-2 rounded-full mr-3">
                        <MapPin className="h-4 w-4 text-[#ff6b35]" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Location:</span>
                        <span className="ml-2 font-medium">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-16 bg-gray-50 p-8 rounded-xl text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Interested in a similar project?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Contact us today to discuss your vision. We'll bring our expertise to help create the space you've always wanted.
              </p>
              <Link 
                to="/contact"
                className="inline-block px-8 py-3 bg-[#ff6b35] text-white font-medium rounded-md hover:bg-[#e05a24] transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
