import React from "react";
import clsx from "clsx";
import { Carousel } from "@/components/Carousel/Carousel";

interface ISectionWhatIsChantolgy {
  className?: string;
}

export const SectionWhatIsChantolgy: React.FC<ISectionWhatIsChantolgy> = ({
  className,
}) => {
  return (
    <div
      className={clsx(
        "w-full h-screen border border-black p-4 flex flex-col items-center justify-start",
        className
      )}
    >
      <div
        id="text-block-2"
        className="mt-16 flex flex-col items-center justify-center space-y-8"
      >
        <p className="text-style2-white">What is Chantolgy?</p>
        <p className="text-style3-orange">
          Chantolgy Studios is Reimagining Casual Games
        </p>
        <p className="text-style1-white max-w-[90%]">
          At Chantolgy, we&apos;re crafting joyful, platform-native games for
          messaging apps like Telegram and LINE. Designed to be quick, positive,
          and meaningful, our games are built with one mission: to make moments
          of mindfulness playful and accessible.
        </p>
      </div>
      
      {/* Carousel Component */}
      <Carousel />
    </div>
  );
};
