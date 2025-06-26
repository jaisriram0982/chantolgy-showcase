"use client";
import Image from "next/image";
import clsx from "clsx";
import { useUtilities } from "@/hooks/useUtilities";
import Link from "next/link";
import { useState } from "react";

const NAVBAR_ITEMS = [
  {
    name: "about-chantolgy",
    navigateToPage: "/about-chantolgy",
    scrollToId: "#about-chantolgy",
  },
  {
    name: "Our Games",
    navigateToPage: "our-games",
    scrollToId: "#our-games",
  },
  {
    name: "about",
    navigateToPage: "about",
    scrollToId: "#about",
  },
  {
    name: "contact-us",
    navigateToPage: "contact-us",
    scrollToId: "#contact-us",
  },
];

interface INavBarProps {
  className?: string;
}

export const NavBar: React.FC<INavBarProps> = ({ className }) => {
  const { isMobile } = useUtilities();

  const NavLinksDesktop = (
    <div className="flex gap-4 items-center justify-center">
      {NAVBAR_ITEMS.map((item) => (
        <Link
          key={item.name}
          href={item.navigateToPage}
          className="text-white hover:text-[#FF6B00] transition-colors duration-300"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <div
      className={clsx(
        "w-full flex justify-between items-center bg-black text-white font-baloo",
        className,
        isMobile ? "px-4 pt-4 pb-2" : "px-16 py-4"
      )}
    >
      <div id="logo">
        <Image
          src={
            isMobile ? "/common/logo-v1.png" : "/common/logo-with-text-v1.png"
          }
          alt="logo"
          width={isMobile ? 50 : 170}
          height={isMobile ? 50 : 70}
        />
      </div>
      {isMobile ? <MobileMenu /> : NavLinksDesktop}
    </div>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center gap-1.5 p-2"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span
          className={clsx(
            "block w-6 h-0.5 bg-white transition-transform duration-300",
            isOpen && "translate-y-2 rotate-45"
          )}
        />
        <span
          className={clsx(
            "block w-6 h-0.5 bg-white transition-opacity duration-300",
            isOpen && "opacity-0"
          )}
        />
        <span
          className={clsx(
            "block w-6 h-0.5 bg-[#171717] transition-transform duration-300",
            isOpen && "-translate-y-2 -rotate-45"
          )}
        />
      </button>

      {/* Full Page Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col pt-20 px-6">
          <div className="flex flex-col gap-8 items-start">
            {NAVBAR_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.navigateToPage}
                className="text-xl font-medium text-white hover:text-[#FF6B00] transition-colors duration-300 font-baloo"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
