import { useState } from 'react';

/**
 * Custom hook for managing loading states
 * @param {number} duration - Duration in milliseconds to show loading (default: 1000ms)
 * @returns {Object} Loading state and functions to control it
 */
export function useLoading(duration = 1000) {
  const [isLoading, setIsLoading] = useState(false);
  
  // Start loading with automatic finish after duration
  const startLoading = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);
    return () => clearTimeout(timer);
  };
  
  // For manual control of loading state
  const stopLoading = () => setIsLoading(false);
  
  // Utility for wrapping async operations with loading state
  const withLoading = async (promise, minDuration = duration) => {
    const startTime = Date.now();
    setIsLoading(true);
    
    try {
      const result = await promise;
      
      // Ensure loading shows for at least minDuration
      const elapsed = Date.now() - startTime;
      if (elapsed < minDuration) {
        await new Promise(resolve => setTimeout(resolve, minDuration - elapsed));
      }
      
      return result;
    } finally {
      setIsLoading(false);
    }
  };
  
  return { isLoading, startLoading, stopLoading, withLoading };
}
