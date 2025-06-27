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
        width: "80%",
        margin: "0 auto",
      }}
    >
      <div
        id="text-block-1"
        className="mt-20 flex flex-col items-center justify-center"
      >
        <h1 className="text-style1-white font-baloo mb-4">Welcome to</h1>
        <h2 className="text-heading-main text-[48px] mb-4">
          Chantolgy Studios
        </h2>
        <h3 className="text-tagline">Play. Connect. Chant.</h3>
      </div>
    </div>
  );
};
