"use client";
import { useUtilities } from "@/hooks/useUtilities";
import Image from "next/image";
import React from "react";

interface CarouselItemConfig {
  desktop: string;
  mobile: string;
  title: string;
  description: string;
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

export const Carousel: React.FC = () => {
  const { isMobile } = useUtilities();

  return (
    <div className="flex flex-row items-start space-x-8 mt-8 overflow-x-scroll max-w-[100%] overflow-y-hidden px-4 pb-4">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center flex-shrink-0 w-60 md:w-90"
        >
          <Image
            src={isMobile ? item.mobile : item.desktop}
            alt={item.title}
            className="object-contain w-full h-auto"
            width={250}
            height={250}
          />
          <p className="mt-4 text-carousel-title text-left w-full">{item.title}</p>
          <p className="mt-2 text-carousel-desc text-left">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
