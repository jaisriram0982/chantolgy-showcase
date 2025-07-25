import React from "react";
import clsx from "clsx";
import { Carousel, CarouselItemConfig } from "@/components/Carousel/Carousel";
import { TextBlock } from "@/components/TextBlock/TextBlock";
import Image from "next/image";
import { useUtilities } from "@/hooks/useUtilities";

interface ISectionWhatIsChantolgy {
  className?: string;
}

const carouselItems: CarouselItemConfig[] = [
  {
    desktop: "/sections/whatischantolgy/whatis-img1-desktop-v1.png",
    mobile: "/sections/whatischantolgy/whatis-img1-mobile-v1.png",
    title: "Rhythm Tap Game",
    description:
      "Tap to the rhythm of ancient mantras, with chakra points lighting up in sync with the beats.",
  },
  {
    desktop: "/sections/whatischantolgy/whatis-img2-desktop-v1.png",
    mobile: "/sections/whatischantolgy/whatis-img2-mobile-v1.png",
    title: "Breath Sync Game",
    description:
      "Synchronize your breath with a calming visual circle, accompanied by soothing tones.",
  },
  {
    desktop: "/sections/whatischantolgy/whatis-img3-desktop-v1.png",
    mobile: "/sections/whatischantolgy/whatis-img3-mobile-v1.png",
    title: "Multiplayer Chant Loop",
    description:
      "Join friends in a shared chant loop, with avatars in a circle and a glowing mandala at the center.",
  },
];

export const SectionWhatIsChantolgy: React.FC<ISectionWhatIsChantolgy> = ({
  className,
}) => {
  const { isMobile } = useUtilities();
  return (
    <div
      className={clsx(
        "w-full flex flex-col items-center justify-start",
        className
      )}
      id="what-is-chantology"
    >
      {!isMobile && (
        <Image
          src="/common/mandela.png"
          alt="Chakra"
          width={300}
          height={300}
          className="absolute z-0 mr-[100vw] mt-[50vh] "
        />
      )}

      {!isMobile && (
        <Image
          src="/common/mandela.png"
          alt="Chakra"
          width={200}
          height={200}
          className="absolute z-0 ml-[100vw] mt-[10vh] "
        />
      )}

      <div className="w-[90%] flex flex-col items-center justify-start z-10">
        <TextBlock
          line1Text="What is Chantolgy?"
          line2Text="Chantolgy Studios is Reimagining Casual Games"
          line3Text="At Chantolgy, we're crafting joyful, platform-native games for messaging apps like Telegram and LINE. Designed to be quick, positive, and meaningful, our games are built with one mission: to make moments of mindfulness playful and accessible."
          classNameLine1="text-left lg:text-center text-nowrap"
          classNameLine2="text-left lg:text-center"
          classNameLine3="text-left lg:text-center lg:w-[80%]"
          showUnderline={true}
        />
      </div>
      <Carousel items={carouselItems} imageSize={300} className="z-10" />
    </div>
  );
};
