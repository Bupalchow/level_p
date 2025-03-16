import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    alt: "Modern interior design with stylish furniture",
  },
  {
    url: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2070&auto=format&fit=crop",
    alt: "Contemporary architectural design",
  },
  {
    url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop",
    alt: "Elegant living space with minimalist design",
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = heroImages.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.url;
          img.onload = resolve;
        });
      });
      
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    
    preloadImages();
  }, []);
  
  // Auto-advance slides
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying && imagesLoaded) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, imagesLoaded]);
  
  const nextSlide = () => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const prevSlide = () => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setCurrent((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-black mx-auto my-auto max-w-[95%] h-[95%] rounded-lg mt-6">
      {/* Render all images with different opacity based on current index */}
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeInOut" 
          }}
          style={{ zIndex: index === current ? 1 : 0 }}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>
      ))}
      
      {/* Replace solid overlay with gradient overlay for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent z-10 rounded-lg" />
      
      {/* Navigation buttons - moved to top right with animations */}
      <motion.div 
        className="absolute top-4 right-4 flex gap-2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.button
          onClick={prevSlide}
          className="flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white border border-white/30 w-10 h-10 p-0"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          className="flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white border border-white/30 w-10 h-10 p-0"
          aria-label="Next slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      </motion.div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
