"use client";

import { NavBar } from "@/components/Navbar/NavBar";
import { SectionHero } from "@/components/SectionHero/SectionHero";
import { SectionWhatIsChantolgy } from "@/components/SectionWhatIsChantolgy/SectionWhatIsChantolgy";
import { SectionWhyChantingGames } from "@/components/SectionWhyChantingGames/SectionWhyChantingGames";
import { SectionOurGames } from "@/components/SectionOurGames/SectionOurGames";
import { SectionComingSoon } from "@/components/SectionComingSoon/SectionComingSoon";
import { SectionFooter } from "@/components/SectionFooter/SectionFooter";
import { Loader } from "@/components/Loader/Loader";
import { useState } from "react";

export default function Home() {
  // State to manage loading
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative bg-[rgba(20,18,23,1)] overflow-hidden ">
      <div
        style={{ display: isLoading ? "block" : "none" }}
        className="absolute inset-0 h-screen"
      >
        <Loader onComplete={handleLoaderComplete} />
      </div>
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
