'use client';

import { useState, useEffect } from 'react';

export const useUtilities = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define the mobile breakpoint (768px is a common breakpoint for mobile/tablet)
    const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
    
    // Set initial value
    setIsMobile(mobileMediaQuery.matches);
    
    // Create event listener function
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    
    // Add event listener
    mobileMediaQuery.addEventListener('change', handleMediaQueryChange);
    
    // Cleanup function
    return () => {
      mobileMediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return { isMobile };
};

