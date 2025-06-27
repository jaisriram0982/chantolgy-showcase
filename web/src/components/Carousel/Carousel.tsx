"use client";
import { useUtilities } from "@/hooks/useUtilities";
import Image from "next/image";
import React from "react";

export interface CarouselItemConfig {
  desktop?: string;
  mobile?: string;
  image?: string; // For cases where same image is used for both desktop and mobile
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItemConfig[];
  className?: string;
  imageSize?: number; // Size for both width and height of images
}

export const Carousel: React.FC<CarouselProps> = ({ items, className, imageSize = 250 }) => {
  const { isMobile } = useUtilities();

  return (
    <div className={`flex flex-row items-start space-x-8 mt-8 overflow-x-scroll max-w-[100%] overflow-y-hidden px-4 pb-4 ${className || ''}`}>
      {items.map((item, index) => {
        // Determine the image source - use image if provided, otherwise fallback to desktop/mobile
        const imageSrc = item.image || (isMobile ? item.mobile : item.desktop);
        
        return (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 w-60 md:w-90"
          >
            <Image
              src={imageSrc || ''}
              alt={item.title}
              className="object-contain w-full h-auto"
              width={imageSize}
              height={imageSize}
            />
            <p className="mt-4 text-carousel-title text-left w-full">{item.title}</p>
            <p className="mt-2 text-carousel-desc text-left">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
