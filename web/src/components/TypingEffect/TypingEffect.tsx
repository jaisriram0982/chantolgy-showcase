"use client";

import { FC, useEffect, useRef } from "react";
import Typed from "typed.js";
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
  startDelay = 0,
  pauseDuration = 2500,
}) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);

  // Array of sentences for the typing animation - Chantolgy themed
  const typeAnimationTexts = [
    "Find peace in the rhythm of ancient mantras.",
    "Connect through mindful breathing games.",
    "Transform your daily routine with meditative play.",
    "Experience the power of chanting in interactive form.",
    "Discover calm in the chaos through gaming.",
  ];

  useEffect(() => {
    if (!elementRef.current) return;

    // Initialize Typed.js
    typedRef.current = new Typed(elementRef.current, {
      strings: typeAnimationTexts,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: pauseDuration,
      startDelay: startDelay,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true, // Only backspace what doesn't match the previous string
    });

    // Cleanup function
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [typeAnimationTexts, pauseDuration, startDelay]);

  return (
    <div className={clsx("min-h-[60px] w-full", containerClassName)}>
      <span ref={elementRef} className={className}></span>
    </div>
  );
};
