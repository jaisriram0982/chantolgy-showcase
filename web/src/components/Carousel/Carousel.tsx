"use client";
import { useUtilities } from "@/hooks/useUtilities";
import clsx from "clsx";
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

export const Carousel: React.FC<CarouselProps> = ({
  items,
  className,
  imageSize = 250,
}) => {
  const { isMobile } = useUtilities();

  return (
    <div
      className={clsx(
        "flex flex-row items-start justify-center space-x-2 mt-8 overflow-x-scroll max-w-[100%] overflow-y-hidden px-4 pb-4",
        className || ""
      )}
    >
      {items.map((item, index) => {
        // Determine the image source - use image if provided, otherwise fallback to desktop/mobile
        const imageSrc = item.image || (isMobile ? item.mobile : item.desktop);

        return (
          <div
            key={index}
            className="flex flex-col items-center flex-shrinkk w-60 md:w-90"
          >
            <Image
              src={imageSrc || ""}
              alt={item.title}
              className={clsx(
                `w-[${imageSize}px] h-[${imageSize}px] rounded-2xl border`
              )}
              width={imageSize}
              height={imageSize}
            />
            <p
              className={clsx(
                `mt-4 text-carousel-title text-left w-[${imageSize}px]`
              )}
            >
              {item.title}
            </p>
            <p
              className={clsx(
                `mt-2 text-carousel-desc text-left w-[${imageSize}px]`
              )}
              style={{
                width: `${imageSize}px`,
              }}
            >
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
