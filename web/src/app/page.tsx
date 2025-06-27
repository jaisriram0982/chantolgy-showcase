"use client";

import { NavBar } from "@/components/Navbar/NavBar";
import { SectionHero } from "@/components/SectionHero/SectionHero";
import { SectionWhatIsChantolgy } from "@/components/SectionWhatIsChantolgy/SectionWhatIsChantolgy";
import { SectionWhyChantingGames } from "@/components/SectionWhyChantingGames/SectionWhyChantingGames";
import { SectionOurGames } from "@/components/SectionOurGames/SectionOurGames";
import { SectionComingSoon } from "@/components/SectionComingSoon/SectionComingSoon";
import { SectionFooter } from "@/components/SectionFooter/SectionFooter";
import { useUtilities } from "@/hooks/useUtilities";
import { useEffect } from "react";

export default function Home() {
  const { playMusic } = useUtilities();

  useEffect(() => {
    // Attempt to play music when component mounts
    const handleUserInteraction = () => {
      playMusic();
      // Remove event listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [playMusic]);

  return (
    <div className="relative bg-[rgba(20,18,23,1)]">
      <NavBar className="fixed top-0 left-0 right-0 z-50 w-full" />
      <div
        id="sections-container"
        className="mt-21 w-full lg:max-w-[80%]-disable mx-auto flex flex-col items-center justify-start"
      >
        <SectionHero />
        <SectionWhatIsChantolgy />
        <SectionWhyChantingGames />
        <SectionOurGames />
        <SectionComingSoon />
        <SectionFooter />
      </div>
    </div>
  );
}
