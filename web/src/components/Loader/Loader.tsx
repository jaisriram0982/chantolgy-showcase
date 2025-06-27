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

  useEffect(() => {
    if (!loaderRef.current || !logoRef.current) return;

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

    // Initial setup - logo starts at full size, slightly transparent
    gsap.set(logoRef.current, {
      scale: 1,
      opacity: 0.3
    });

    // Animation sequence
    tl
      // Quick fade in to full opacity
      .to(logoRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      // Elegant opacity pulsing animation (shorter duration)
      .to(logoRef.current, {
        opacity: 0.7,
        duration: 0.6,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 3, // Fewer pulses for shorter duration
      })
      // Brief pause at full opacity before loader fades
      .to(logoRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out"
      });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className={clsx(
        "fixed inset-0 z-[9999] flex items-center justify-center",
        "bg-[rgba(20,18,23,1)]", // Your website's main background color
        className
      )}
    >
      {/* Loader content */}
      <div
        ref={logoRef}
        className="flex flex-col items-center justify-center"
      >
        {/* Chantolgy Logo */}
        <Image
          src="/common/logo-with-text-v1.png"
          alt="Chantolgy Studios"
          width={300}
          height={120}
          className="drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
};

