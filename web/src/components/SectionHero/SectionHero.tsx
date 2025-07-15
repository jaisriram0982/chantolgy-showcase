"use client";

import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { useUtilities } from "@/hooks/useUtilities";
import { gsap } from "gsap";
import { TypingEffect } from "@/components/TypingEffect/TypingEffect";
import { Volume2, VolumeX } from "lucide-react";

interface ISectionHero {
  className?: string;
}

export const SectionHero: React.FC<ISectionHero> = ({ className }) => {
  const { isMobile, toggleMusic, isPlaying } = useUtilities();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const companyRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);

  const backgroundImage = isMobile
    ? "/sections/hero/bkg-mobile-v1.jpg"
    : "/sections/hero/bkg-v1.jpg";

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          companyRef.current,
          taglineRef.current,
          typingRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      const entranceTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 2.4,
      });

      entranceTl
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
        })
        .to(
          companyRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
          },
          "-=0.6"
        )
        .to(
          taglineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
          },
          "-=0.4"
        )
        .to(
          typingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={clsx(
        "relative w-full min-h-screen bg-cover bg-center bg-no-repeat border-black p-4 flex flex-col items-center",
        className
      )}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        margin: "0 auto",
      }}
    >
      <div
        id="text-block-1"
        className="w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 mt-32 md:mt-40"
      >
        <h1 ref={titleRef} className="text-style1-white mb-4">
          Welcome to
        </h1>
        <h2
          ref={companyRef}
          className="text-heading-main text-[48px] mb-4 text-nowrap"
        >
          Chantolgy Studios
        </h2>
        <h3 ref={taglineRef} className="text-style1-white mb-8">
          Play. Connect. Chant.
        </h3>

        {/* Typing Effect */}
        <div ref={typingRef} className="mt-6">
          <TypingEffect
            className="text-style2-white"
            startDelay={0}
            pauseDuration={2500}
          />
        </div>
      </div>

      {/* Music Toggle Button in Bottom Right of Section */}
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Turn music off" : "Turn music on"}
        className="absolute bottom-6 right-6 z-10 p-3 rounded-full bg-[#141217F2] backdrop-blur-md text-[#A6A3B2] hover:bg-[#4D425C] transition duration-200"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};
