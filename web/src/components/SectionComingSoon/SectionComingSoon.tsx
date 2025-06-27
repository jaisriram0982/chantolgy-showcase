"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { useUtilities } from "@/hooks/useUtilities";

interface ISectionComingSoon {
  className?: string;
}

export const SectionComingSoon: React.FC<ISectionComingSoon> = ({
  className,
}) => {
  const { isMobile } = useUtilities();
  return (
    <div
      className={clsx(
        "w-full  p-4 flex flex-col items-center justify-center",
        className
      )}
    >
      {/* SectionComingSoon content goes here */}
      <div
        id="text-block"
        className="w-full  flex flex-col items-center justify-center"
      >
        <p className="font-baloo text-white text-xl font-medium leading-7">
          Coming Soon
        </p>
        {/* Underline orange */}
        <div className="lg:mt-4 mt-2 relative w-[175px] mx-auto bg-[rgba(238,105,58,1)] h-[2px] rounded-full">
          <div className="absolute top-0 inset-x-0 w-full h-[8px] rounded-full flex justify-start items-center">
            <div className="bg-[rgba(238,105,58,1)] w-1/4 -mt-[6px] h-[6px] mx-auto rounded-full" />
          </div>
        </div>
        <p
          id="orange-desc"
          className="font-elmessiri text-[rgba(238,105,58,1)] mt-4 text-3xl lg:text-4xl leading-[125%] font-[400] w-full text-center"
        >
          Our First Titles Launch This Year
        </p>
        {/* Image and content */}
        <div
          id=""
          className="pt-4 lg:w-[90%] w-full flex flex-col lg:flex-row items-center justify-center"
        >
          <div
            id="image-holder"
            className="relative lg:w-1/2 flex items-center justify-center"
          >
            {/* Image half */}
            <Image
              src="/sections/contactus/coming-soon-mobile.png"
              alt="comingsoon-img1"
              width={isMobile ? 350 : 467}
              height={276}
              className="relative z-10 blur-[2px]"
            />
            <p className="absolute z-20 inset-0 flex items-center justify-center font-baloo text-white text-xl font-medium leading-7">
              Coming Soon
            </p>
          </div>
          {/* content half */}
          {/* content half */}
          <div
            id="content-holder"
            className="relative lg:w-1/2 flex flex-col items-center lg:items-start justify-center"
          >
            <div
              id="content-box"
              className="w-full flex flex-col items-center lg:items-start justify-center"
            >
              <p className="pt-4 text-white text-lg font-semibold font-baloo leading-normal w-full text-center lg:text-left">
                Sign up for updates
              </p>
              <p className="pt-4 text-zinc-400 text-base font-normal font-baloo leading-tight w-full lg:w-[70%] text-center lg:text-left">
                We&apos;re preparing a lineup of games designed to introduce a
                new rhythm to your day. Sign up to stay in the loop.
              </p>
              <button
                id="btn"
                className="mt-4 w-full lg:w-auto outline-none text-neutral-900 text-[18px] font-bold font-baloo leading-normal bg-[rgba(238,105,58,1)] py-4 rounded-full px-4"
                onClick={() => {}}
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
