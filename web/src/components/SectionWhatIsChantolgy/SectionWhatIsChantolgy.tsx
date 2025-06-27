import React from "react";
import clsx from "clsx";
import { Carousel } from "@/components/Carousel/Carousel";
import { TextBlock } from "@/components/TextBlock/TextBlock";

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
      <TextBlock
        line1Text="What is Chantolgy?"
        line2Text="Chantolgy Studios is Reimagining Casual Games"
        line3Text="At Chantolgy, we're crafting joyful, platform-native games for messaging apps like Telegram and LINE. Designed to be quick, positive, and meaningful, our games are built with one mission: to make moments of mindfulness playful and accessible."
        classNameLine1="text-left lg:text-center text-nowrap"
        classNameLine2="text-left lg:text-center"
        classNameLine3="text-left lg:text-center lg:w-[80%]"
        showUnderline={true}
      />
      <Carousel />
    </div>
  );
};
