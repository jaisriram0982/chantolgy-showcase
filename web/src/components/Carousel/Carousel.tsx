"use client";
import { useUtilities } from "@/hooks/useUtilities";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

export interface CarouselItemConfig {
  desktop?: string;
  mobile?: string;
  image?: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItemConfig[];
  className?: string;
  imageSize?: number;
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
        "w-full overflow-x-auto",
        className || ""
      )}
    >
      <div className="flex flex-row items-start justify-start lg:justify-center space-x-4 px-4 pb-4 mt-8">
        {items.map((item, index) => {
          const imageSrc = item.image || (isMobile ? item.mobile : item.desktop);

          return (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0"
              style={{ width: `${imageSize}px` }}
            >
              <Image
                src={imageSrc || ""}
                alt={item.title}
                className="rounded-2xl border"
                width={imageSize}
                height={imageSize}
                style={{
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                }}
              />
              <p
                className="mt-4 text-carousel-title text-left"
                style={{
                  width: `${imageSize}px`,
                }}
              >
                {item.title}
              </p>
              <p
                className="mt-2 text-carousel-desc text-left"
                style={{
                  width: `${imageSize}px`,
                  wordWrap: "break-word",
                }}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};