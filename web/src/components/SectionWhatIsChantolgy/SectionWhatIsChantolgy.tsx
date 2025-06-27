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
        "w-[90%] min-h-screen flex flex-col items-center justify-start",
        className
      )}
    >
      <div
        id="text-block-2"
        className="mt-16 flex flex-col items-center justify-center"
      >
        <div
          id="what-is-n-its-underline"
          className="flex lg:flex-col gap-x-2 items-center justify-center"
        >
          <p className="text-style2-white text-left lg:text-center text-nowrap">
            What is Chantolgy?
          </p>
          <div
            id="orange-bar"
            className="lg:mt-4 relative w-[175px] bg-[rgba(238,105,58,1)] h-[2px] rounded-full"
          >
            <div className="absolute top-0 inset-x-0 w-full h-[8px]  rounded-full flex justify-start lg:justify-center items-center">
              <div className="bg-[rgba(238,105,58,1)] w-1/4 -mt-[6px] h-[6px] rounded-full" />
            </div>
          </div>
        </div>
        <p className="mt-4 text-style3-orange text-left lg:text-center ">
          Chantolgy Studios is Reimagining Casual Games
        </p>
        <p className="mt-4 text-style1-white text-left lg:text-center">
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
