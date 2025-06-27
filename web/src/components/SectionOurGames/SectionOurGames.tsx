import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { Carousel, CarouselItemConfig } from "@/components/Carousel/Carousel";

interface ISectionOurGames {
  className?: string;
}

const ICONS_CAROUSEL_ITEMS = [
  {
    logo: "/common/linkedin.png",
    title: "Platform-native\n(Telegram, LINE, etc.)",
  },
  {
    logo: "/common/globe.svg",
    title: "Globally\nInspired",
  },
  {
    logo: "/common/grains.svg",
    title: "Culturally\nRespectful",
  },
];
const GAMES_CAROUSEL_ITEMS: CarouselItemConfig[] = [
  {
    image: "/sections/our-games/chant-to-relax.jpg",
    title: "Chant-to-Relax",
    description:
      "Find your inner peace with calming chants and soothing visuals.",
  },
  {
    image: "/sections/our-games/rhythm-with-friends.jpg",
    title: "Rhythm with Friends",
    description:
      "Challenge your friends in rhythm-based games with a spiritual twist.",
  },
  {
    image: "/sections/our-games/tap-to-breathe.jpg",
    title: "Tap-to-Breathe",
    description:
      "Synchronize your taps with your breath for a meditative experience.",
  },
  {
    image: "/sections/our-games/daily-mantra.jpg",
    title: "Daily Mantra Loop",
    description:
      "Start your day with a positive mantra, repeated in a calming loop.",
  },
];
export const SectionOurGames: React.FC<ISectionOurGames> = ({ className }) => {
  return (
    <div className={clsx("w-full min-h-screen p-4", className)}>
      {/* SectionOurGames content goes here */}
      <div
        id="fg-ervwojn"
        className="w-full h-full flex flex-col items-center justify-start"
      >
        {/* Main texts */}
        <div
          id="main-texts"
          className="mb-4 flex flex-col items-start justify-center"
        >
          <p className="font-baloo text-[28px] font-[500] leading-[28px] w-full text-center">
            Our Games
          </p>
          {/* Underline orange */}
          <div className="lg:mt-4 mt-2 relative w-[175px] mx-auto bg-[rgba(238,105,58,1)] h-[2px] rounded-full">
            <div className="absolute top-0 inset-x-0 w-full h-[8px] rounded-full flex justify-start items-center">
              <div className="bg-[rgba(238,105,58,1)] w-1/4 -mt-[6px] h-[6px] rounded-full" />
            </div>
          </div>
          <p className="font-elmessiri text-[rgba(238,105,58,1)] mt-4 text-3xl lg:text-4xl leading-[125%] font-[400] w-full text-center">
            Built for Everyone, Everywhere
          </p>
          <p className="font-baloo mt-2 text-[22px] font-[400] w-full text-center">
            Whether you&apos;re at home, commuting, or taking a break, our
            family-friendly games are:
          </p>
        </div>
        {/* icons carousel */}
        <div
          id="icons-carousel"
          className="mt-20 w-[80%] grid grid-cols-2 lg:grid-cols-3 items-center gap-4"
        >
          {ICONS_CAROUSEL_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className={`flex px-8 lg:px-4 py-1 flex-col items-center justify-start h-full ${
                // Center the third item (index 2) on mobile by spanning both columns
                index === 2 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Image
                src={item.logo}
                alt={item.title}
                width={30}
                height={30}
                className="mb-4"
              />
              <p className="text-feature-description text-center whitespace-pre">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Games Carousel */}
        <div className="mt-16 w-full lg:w-[80%] ">
          <Carousel items={GAMES_CAROUSEL_ITEMS} imageSize={223} />
        </div>
      </div>
    </div>
  );
};
