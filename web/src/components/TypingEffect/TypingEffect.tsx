"use client";

import { FC } from "react";
import TypeIt from "typeit-react";
import clsx from "clsx";

interface ITypingEffectProps {
  className?: string;
  containerClassName?: string;
  startDelay?: number;
  pauseDuration?: number;
}

export const TypingEffect: FC<ITypingEffectProps> = ({
  className,
  containerClassName,
  startDelay = 2000,
  pauseDuration = 2500,
}) => {
  // Array of sentences for the typing animation - Chantolgy themed
  const typeAnimationTexts = [
    "Find peace in the rhythm of ancient mantras.",
    "Connect with friends through mindful breathing games.",
    "Transform your daily routine with meditative play.",
    "Experience the power of chanting in interactive form.",
    "Discover calm in the chaos through gaming."
  ];

  return (
    <div className={clsx("min-h-[60px] w-full", containerClassName)}>
      <TypeIt
        className={className}
        options={{
          strings: typeAnimationTexts,
          speed: 45,
          waitUntilVisible: true,
          cursor: true,
          lifeLike: true,
          loop: true,
          loopDelay: 1000,
          startDelay: startDelay,
          cursorChar: "|",
          deleteSpeed: 30,
          breakLines: false,
        }}
      />
    </div>
  );
};

