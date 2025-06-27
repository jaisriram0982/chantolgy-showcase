"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { TextBlock } from "../TextBlock/TextBlock";
import { useUtilities } from "@/hooks/useUtilities";

interface ISectionWhyChantingGames {
  className?: string;
}

export const SectionWhyChantingGames: React.FC<ISectionWhyChantingGames> = ({
  className,
}) => {
  const { isMobile } = useUtilities();

  return (
    <div
      className={clsx(
        "mt-10 w-full flex flex-col items-center justify-center",
        className
      )}
      id="why-chanting-in-games"
    >
      <div
        id="layer-foreground"
        className="w-full lg:w-[80%] flex flex-col items-center justify-between p-4"
        style={{
          backgroundImage: `url('/sections/why-chanting-in-games/whychantingingames-desktop-bkg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          id="main-texts"
          className="lg:my-40 mb-52 max-w-[410px] flex flex-col items-start justify-center"
        >
          <p className="font-baloo text-[28px] font-[500] leading-[28px]">
            Why Chanting in Games?
          </p>
          {/* Underline orange */}
          <div className="lg:mt-4 mt-2 relative w-[175px] bg-[rgba(238,105,58,1)] h-[2px] rounded-full">
            <div className="absolute top-0 inset-x-0 w-full h-[8px] rounded-full flex justify-start items-center">
              <div className="bg-[rgba(238,105,58,1)] w-1/4 -mt-[6px] h-[6px] rounded-full" />
            </div>
          </div>
          <p className="font-elmessiri text-[rgba(238,105,58,1)] mt-4 text-[36px] leading-[125%] font-[400]">
            Timeless Ritual Meets Modern Play
          </p>
          <p className=" text-style1-white mt-2 lg:mt-4 text-[22px] font-[400]">
            Chanting has always brought rhythm, reflection, and calm. We&apos;re
            turning that ancient power into interactive games that help you slow
            down, breathe, and connect.
          </p>
        </div>
        <div
          id="bottom-icons"
          className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 px-4 md:px-16"
        >
          {/* Quick sessions, lasting impact */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/sections/whychantingingames/clock.png"
              alt="Quick sessions icon"
              width={30}
              height={30}
              className="mb-4"
            />
            <p className="text-feature-description">
              Quick sessions, {isMobile && <br />} lasting impact
            </p>
          </div>

          {/* Simple mechanics, deep meaning */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/sections/whychantingingames/arrow.png"
              alt="Simple mechanics icon"
              width={30}
              height={30}
              className="mb-4"
            />
            <p className="text-feature-description">
              Simple mechanics, {isMobile && <br />} deep meaning
            </p>
          </div>

          {/* Safe for all ages - This will be in second row on mobile */}
          <div className="flex flex-col items-center text-center md:col-span-1 col-span-1 md:justify-self-center">
            <Image
              src="/sections/whychantingingames/age-group.png"
              alt="Safe for all ages icon"
              width={30}
              height={30}
              className="mb-4"
            />
            <p className="text-feature-description">Safe for all ages</p>
          </div>
        </div>
      </div>
    </div>
  );
};
