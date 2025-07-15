"use client";

import { useState, useEffect, useRef } from "react";
import { useAudio } from "@/hooks/useAudio"; 

let audioRef: HTMLAudioElement | null = null;

export const useUtilities = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isPlaying, setIsPlaying } = useAudio();

  useEffect(() => {
    // Define the mobile breakpoint (768px is a common breakpoint for mobile/tablet)
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

    // Set initial value
    setIsMobile(mobileMediaQuery.matches);

    // Create event listener function
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add event listener
    mobileMediaQuery.addEventListener("change", handleMediaQueryChange);

    // Initialize audio element
    if (!audioRef) {
      audioRef = new Audio("/bkg_chantolgy-v1.mp3");
      audioRef.loop = true;
      audioRef.volume = 0.3; // Set volume to 30%

      // Add event listeners for audio
      audioRef.addEventListener("play", () => setIsPlaying(true));
      audioRef.addEventListener("pause", () => setIsPlaying(false));
      audioRef.addEventListener("ended", () => setIsPlaying(false));
    }

    // Cleanup function
    return () => {
      mobileMediaQuery.removeEventListener("change", handleMediaQueryChange);
      if (audioRef) {
        audioRef.pause();
        audioRef = null;
      }
    };
  }, [setIsPlaying]);

  // Smooth scroll to element by ID with navbar offset
  const scrollToElementById = (elementId: string, offset: number = 80) => {
    try {
      // Remove # if provided
      const id = elementId.startsWith("#") ? elementId.slice(1) : elementId;

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
          behavior: "smooth",
        });
      } else {
        console.warn(`Element with id "${id}" not found`);
      }
    } catch (error) {
      console.error("Error scrolling to element:", error);
    }
  };

  // Play background music function
  const playMusic = async () => {
    if (audioRef && audioRef.paused) {
      try {
        // Modern browsers require user interaction before playing audio
        await audioRef.play();
      } catch (error) {
        console.log("Could not play background music:", error);
      }
    }
  };

  // Stop background music function
  const stopMusic = () => {
    if (audioRef && !audioRef.paused) {
      try {
        audioRef.pause();
        console.log("Background music stopped");
      } catch (error) {
        console.log("not playing", error);
      }
    }
  };

  // Toggle music function
  const toggleMusic = () => {
    if (!audioRef) return;
    if (audioRef.paused) {
      playMusic();
    } else {
      stopMusic();
    }
  };

  return {
    isMobile,
    scrollToElementById,
    playMusic,
    stopMusic,
    toggleMusic,
    isPlaying,
  };
};
