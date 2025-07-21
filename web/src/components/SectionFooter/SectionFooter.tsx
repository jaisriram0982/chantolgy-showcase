"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useUtilities } from "@/hooks/useUtilities";
import { ContactModal } from "@/components/ContactModal/ContactModal";

interface ISectionFooter {
  className?: string;
}

export const SectionFooter: React.FC<ISectionFooter> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  const { scrollToElementById } = useUtilities();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleNavigation = (type: string) => {
    switch (type) {
      case "about":
        scrollToElementById("why-chanting-in-games");
        break;
      case "contact":
        setIsContactModalOpen(true);
        break;
      // case "careers":
      //   // You can add careers section navigation here when available
      //   console.log("Careers section - to be implemented");
      //   break;
      default:
        break;
    }
  };

  return (
    <div className={clsx("w-full p-4", className)}>
      <div className="flex flex-col items-center justify-center space-y-8 py-8">
        {/* First Row - Navigation Links */}
        <div className="flex flex-row space-x-8">
          <button
            onClick={() => handleNavigation("about")}
            className="text-zinc-400 text-base font-normal font-baloo leading-tight hover:text-white transition-colors duration-300 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="text-zinc-400 text-base font-normal font-baloo leading-tight hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Contact
          </button>
          {/* <button 
            onClick={() => handleNavigation('careers')}
            className="text-zinc-400 text-base font-normal font-baloo leading-tight hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Careers
          </button> */}
        </div>

        {/* Second Row - LinkedIn Logo */}
        <div className=" left-0 right-0 flex justify-center items-center gap-8">
          <a
            href="https://www.linkedin.com/company/chantolgy-studios"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/common/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </a>

          {/* Telegram Logo at Bottom Right */}
          {/* <a
            href="https://t.me/jaisriram_io_community"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity duration-300"
          >
            <div id="linkedin-icon-mobile" className="w-9 h-9">
              <Image
                src="/common/telegram.png"
                alt="linkedin-icon"
                width={36}
                height={36}
              />
            </div>
          </a> */}

          {/* X Logo at Bottom Right */}
          {/* <a
            href="https://x.com/JSR_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity duration-300"
          >
            <div id="linkedin-icon-mobile" className="w-9 h-9">
              <Image
                src="/common/x.png"
                alt="linkedin-icon"
                width={36}
                height={36}
              />
            </div>
          </a> */}
        </div>

        {/* Third Row - Copyright */}
        <div className="flex justify-center">
          <p className="text-zinc-400 text-sm font-normal font-baloo leading-tight text-center">
            Chantolgy Studios © {currentYear}
          </p>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};
