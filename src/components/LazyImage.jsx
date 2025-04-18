import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const LazyImage = ({ src, alt, className, aspectRatio = "4/3" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Function to create a tiny placeholder version of the URL
  const getPlaceholderUrl = (url) => {
    if (url.includes('unsplash.com')) {
      // For Unsplash images, we can append size parameters for tiny versions
      return `${url.split('?')[0]}?q=10&w=50&blur=10`;
    }
    // For your own images, you could return a tiny color placeholder
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E";
  };
  
  useEffect(() => {
    // Reset states when src changes
    setImageLoaded(false);
    setError(false);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Check if image is already cached
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth === 0) {
        // Image failed to load
        setError(true);
      } else {
        // Image loaded from cache
        setImageLoaded(true);
      }
    } else {
      // Set a timeout to handle loading failures
      timeoutRef.current = setTimeout(() => {
        if (!imageLoaded && !error) {
          console.warn(`Image loading timed out: ${src}`);
          setError(true);
        }
      }, 10000); // 10 second timeout
    }

    return () => {
      // Clean up timeout on unmount or src change
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [src, imageLoaded, error]);

  // Handle image load
  const handleLoad = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setImageLoaded(true);
    setError(false);
  };

  // Handle image error
  const handleError = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    console.error(`Error loading image: ${src}`);
    setError(true);
    setImageLoaded(true); // Consider the loading complete even if there's an error
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ 
        aspectRatio,
        minHeight: '200px' // Ensure minimum height on all devices
      }}
    >
      {/* Skeleton loader shown while loading */}
      {!imageLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Blurred tiny placeholder version (shown until main image loads) */}
      {!error && (
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url(${getPlaceholderUrl(src)})`,
            filter: 'blur(20px)',
            transform: 'scale(1.1)' // Slightly larger to prevent blur from showing edges
          }}
        />
      )}
      
      {/* The main image */}
      <motion.img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded && !error ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded && !error ? 1 : 0 }}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {/* Show fallback if there's an error */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <div className="text-center p-4">
            <svg 
              className="w-12 h-12 mx-auto text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p className="mt-2 text-sm md:text-base">{alt || "Image not available"}</p>
            <button 
              onClick={() => {
                setError(false);
                setImageLoaded(false);
                // Force reloading the image with a cache-busting query param
                imgRef.current.src = `${src}${src.includes('?') ? '&' : '?'}cache=${Date.now()}`;
              }}
              className="mt-2 text-xs text-[#ff6b35] hover:underline"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
