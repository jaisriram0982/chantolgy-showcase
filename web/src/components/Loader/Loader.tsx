"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import clsx from 'clsx';

interface ILoader {
  onComplete: () => void;
  className?: string;
}

export const Loader: React.FC<ILoader> = ({ onComplete, className }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current || !logoRef.current || !progressBarRef.current) return;

    // Create GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the entire loader
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: onComplete
        });
      }
    });

    // Initial setup - logo starts transparent, progress bar starts at 0 width
    gsap.set(logoRef.current, {
      opacity: 0
    });
    gsap.set(progressBarRef.current, {
      scaleX: 0,
      transformOrigin: "left center"
    });

    // Animation sequence
    tl
      // Wait 0.3 seconds, then fade in logo
      .to(logoRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, 0.3)
      // Start progress bar animation after logo is visible
      .to(progressBarRef.current, {
        scaleX: 1,
        duration: 1.8,
        ease: "power3.out" // Non-linear, exciting easing
      }, "-=0.2"); // Start slightly before logo fade is complete

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className={clsx(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
        "bg-[rgba(20,18,23,1)]", // Your website's main background color
        className
      )}
    >
      {/* Logo */}
      <div
        ref={logoRef}
        className="flex flex-col items-center justify-center mb-8"
      >
        <Image
          src="/common/logo-with-text-v1.png"
          alt="Chantolgy Studios"
          width={300}
          height={120}
          className="drop-shadow-2xl"
          priority
        />
      </div>
      
      {/* Progress Bar Container */}
      <div className="w-full max-w-[150px] md:max-w-[150px] h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
        />
      </div>
    </div>
  );
};

