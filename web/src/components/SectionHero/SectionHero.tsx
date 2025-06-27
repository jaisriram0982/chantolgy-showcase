"use client";

import React from "react";
import clsx from "clsx";
import { useUtilities } from "@/hooks/useUtilities";

interface ISectionHero {
  className?: string;
}

export const SectionHero: React.FC<ISectionHero> = ({ className }) => {
  const { isMobile } = useUtilities();

  const backgroundImage = isMobile
    ? "/sections/hero/bkg-mobile-v1.jpg"
    : "/sections/hero/bkg-v1.jpg";

  return (
    <div
      className={clsx(
        "w-full h-screen bg-cover bg-center bg-no-repeat border-black p-4 flex flex-col items-center justify-start",
        className
      )}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        // width 80%
        // width: "80%",
        scale: isMobile ? 1 : 1.25,
        margin: "0 auto",
      }}
    >
      <div
        id="text-block-1"
        className="lg:mt-48 mt-10 w-full flex flex-col items-center justify-center"
      >
        <h1 className="text-style1-white">Welcome to</h1>
        <h2 className="text-heading-main text-[48px] mb-2 text-nowrap">
          Chantolgy Studios
        </h2>
        <h3 className="text-style1-white">Play. Connect. Chant.</h3>
      </div>
    </div>
  );
};
