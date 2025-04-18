import React, { useState } from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";
import InlineLoading from "./InlineLoading";

const DynamicPhotoGrid = ({ images }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading state for grid layout calculation
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Return early if no images
  if (!images || images.length === 0) {
    return null;
  }

  if (isLoading) {
    return <InlineLoading />;
  }

  // Different layout based on number of images
  const renderGrid = () => {
    const count = images.length;

    // One image - full width
    if (count === 1) {
      return (
        <motion.div 
          className="w-full overflow-hidden rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <LazyImage 
            src={images[0].url}
            alt={images[0].alt}
            aspectRatio="16/9"
            className="w-full h-full"
          />
        </motion.div>
      );
    }

    // Two images - stack on mobile, side by side on desktop
    if (count === 2) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <LazyImage 
                src={image.url}
                alt={image.alt}
                aspectRatio="4/3"
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      );
    }

    // Three images - Stack on mobile, special layout on desktop
    if (count === 3) {
      return (
        <div className="flex flex-col gap-4">
          {/* First image takes full width */}
          <motion.div
            className="w-full overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LazyImage 
              src={images[0].url}
              alt={images[0].alt}
              aspectRatio="16/9"
              className="w-full h-full"
            />
          </motion.div>
          
          {/* Two images - stack on mobile, side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.slice(1, 3).map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              >
                <LazyImage 
                  src={image.url}
                  alt={image.alt}
                  aspectRatio="4/3"
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    // Four images - 1 column on mobile, 2x2 grid on desktop
    if (count === 4) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <LazyImage 
                src={image.url}
                alt={image.alt}
                aspectRatio="4/3"
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      );
    }

    // Five or more images - Simple responsive grid
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden rounded-lg shadow-md ${
              // First image spans 2 columns on larger screens if there are 5+ images
              index === 0 && count >= 5 ? 'md:col-span-2' : ''
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <LazyImage 
              src={image.url}
              alt={image.alt}
              aspectRatio={index === 0 && count >= 5 ? '16/9' : '4/3'}
              className="w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      {renderGrid()}
    </div>
  );
};

export default DynamicPhotoGrid;
