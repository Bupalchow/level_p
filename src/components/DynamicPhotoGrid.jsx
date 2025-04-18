import React from "react";
import { motion } from "framer-motion";

const DynamicPhotoGrid = ({ images }) => {
  // Return early if no images
  if (!images || images.length === 0) {
    return null;
  }

  // Different layout based on number of images
  const renderGrid = () => {
    const count = images.length;

    // One image - full width
    if (count === 1) {
      return (
        <motion.div 
          className="w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={images[0].url}
            alt={images[0].alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/1200x800?text=Image+Not+Found";
            }}
          />
        </motion.div>
      );
    }

    // Two images - side by side
    if (count === 2) {
      return (
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-[4/3] overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
                }}
              />
            </motion.div>
          ))}
        </div>
      );
    }

    // Three images - Improved layout with one large image on top and two equal ones below
    if (count === 3) {
      return (
        <div className="flex flex-col gap-4">
          {/* First image takes full width */}
          <motion.div
            className="w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/1200x600?text=Image+Not+Found";
              }}
            />
          </motion.div>
          
          {/* Two images side by side below */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1, 3).map((image, index) => (
              <motion.div
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    // Four images - 2x2 grid
    if (count === 4) {
      return (
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500x500?text=Image+Not+Found";
                }}
              />
            </motion.div>
          ))}
        </div>
      );
    }

    // Five images - 2x2 grid with one special treatment
    if (count === 5) {
      return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {/* Top row - 2 images taking 3 columns */}
          <motion.div
            className="col-span-2 aspect-[2/1] overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Found";
              }}
            />
          </motion.div>

          <motion.div
            className="col-span-1 aspect-[1/1] overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={images[1].url}
              alt={images[1].alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
              }}
            />
          </motion.div>

          {/* Bottom row - 3 images */}
          {images.slice(2, 5).map((image, index) => (
            <motion.div
              key={index}
              className="aspect-[1/1] overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
                }}
              />
            </motion.div>
          ))}
        </div>
      );
    }

    // Six or more images - special layout for first 5, then regular grid
    return (
      <div className="space-y-4">
        {/* Special layout for first 5 images */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <motion.div
            className="col-span-2 aspect-[2/1] overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Found";
              }}
            />
          </motion.div>

          <motion.div
            className="col-span-1 aspect-[1/1] overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={images[1].url}
              alt={images[1].alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
              }}
            />
          </motion.div>

          {images.slice(2, 5).map((image, index) => (
            <motion.div
              key={index}
              className="aspect-[1/1] overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Regular grid for remaining images */}
        {images.length > 5 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.slice(5).map((image, index) => (
              <motion.div
                key={index + 5}
                className="aspect-square overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: (index + 5) * 0.05 }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}
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
