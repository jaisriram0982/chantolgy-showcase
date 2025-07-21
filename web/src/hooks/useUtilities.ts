import { useEffect, useState } from "react";
import { useAudio } from "@/hooks/useAudio";

export const useUtilities = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isPlaying, toggleMusic, userInteraction } = useAudio();

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

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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

  return {
    isMobile,
    isPlaying,
    toggleMusic,
    userInteraction,
    scrollToElementById,
  };
};
