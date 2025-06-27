'use client';

import { useState, useEffect, useRef } from 'react';

export const useUtilities = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    
    // Initialize audio element
    if (!audioRef.current) {
      audioRef.current = new Audio('/bkg_chantolgy-v1.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3; // Set volume to 30%
      
      // Add event listeners for audio
      audioRef.current.addEventListener('play', () => setIsPlaying(true));
      audioRef.current.addEventListener('pause', () => setIsPlaying(false));
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
    
    // Cleanup function
    return () => {
      mobileMediaQuery.removeEventListener('change', handleMediaQueryChange);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Smooth scroll to element by ID with navbar offset
  const scrollToElementById = (elementId: string, offset: number = 80) => {
    try {
      // Remove # if provided
      const id = elementId.startsWith('#') ? elementId.slice(1) : elementId;
      
      // Find the element
      const element = document.getElementById(id);
      
      if (element) {
        // Get element position
        const elementPosition = element.offsetTop;
        
        // Calculate final scroll position with offset
        const offsetPosition = elementPosition - offset;
        
        // Smooth scroll to the calculated position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${id}" not found`);
      }
    } catch (error) {
      console.error('Error scrolling to element:', error);
    }
  };

  // Play background music function
  const playMusic = async () => {
    try {
      if (audioRef.current && !isPlaying) {
        // Modern browsers require user interaction before playing audio
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          console.log('Background music started playing');
        }
      }
    } catch (error) {
      console.log('Could not play background music:', error);
      // This is expected if user hasn't interacted with the page yet
    }
  };

  // Stop background music function
  const stopMusic = () => {
    try {
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        console.log('Background music stopped');
      }
    } catch (error) {
      console.log('Could not stop background music:', error);
    }
  };

  // Toggle music function
  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      playMusic();
    }
  };

  return { isMobile, scrollToElementById, playMusic, stopMusic, toggleMusic, isPlaying };
};

