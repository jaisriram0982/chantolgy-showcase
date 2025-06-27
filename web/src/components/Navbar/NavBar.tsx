"use client";
import Image from "next/image";
import clsx from "clsx";
import { useUtilities } from "@/hooks/useUtilities";
import Link from "next/link";
import { useState } from "react";
import { HamburgerButton } from "@/components/HamburgerButton/HamburgerButton";
import { ContactModal } from "@/components/ContactModal/ContactModal";

const NAVBAR_ITEMS = [
  {
    name: "About Chantolgy",
    scrollToId: "about",
  },
  {
    name: "Our Games",
    scrollToId: "games",
  },
  {
    name: "Contact Us",
    scrollToId: "contact-us-section",
  },
];

interface INavBarProps {
  className?: string;
}

export const NavBar: React.FC<INavBarProps> = ({ className }) => {
  const { isMobile, scrollToElementById } = useUtilities();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleNavClick = (item: typeof NAVBAR_ITEMS[0]) => {
    if (item.name === "Contact Us") {
      setIsContactModalOpen(true);
    } else {
      scrollToElementById(item.scrollToId);
    }
  };

  const NavLinksDesktop = (
    <div className="flex gap-4 items-center justify-center">
      {NAVBAR_ITEMS.map((item) => (
        <button
          key={item.name}
          onClick={() => handleNavClick(item)}
          className="text-white hover:text-[#FF6B00] transition-colors duration-300 cursor-pointer"
        >
          {item.name}
        </button>
      ))}
      <div id="linkedin-icon" className="ml-4 w-6 h-6">
        <Image
          src="/navbar/linkedin.png"
          alt="linkedin-icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );

  return (
    <div
      className={clsx(
        "w-full flex justify-between items-center bg-[rgba(12,10,15,1)]-d bg-[rgba(20,18,23,0.95)] text-white font-baloo",
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
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { scrollToElementById } = useUtilities();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileNavClick = (item: typeof NAVBAR_ITEMS[0]) => {
    if (item.name === "Contact Us") {
      setIsContactModalOpen(true);
      toggleMenu();
    } else {
      scrollToElementById(item.scrollToId);
      toggleMenu();
    }
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />

      {/* Full Page Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(12,10,15,1)]-d bg-[rgba(20,18,23,1)] z-50 flex flex-col px-6">
          <div className="relative w-full h-screen">
            {/* Background Image */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ top: "20%" }}
            >
              <Image
                src="/common/mandela.png"
                alt="mandela background"
                width={300}
                height={300}
                className="w-full h-auto opacity-20 object-contain border"
              />
            </div>
            {/* Header with Logo and Close Button */}
            <div className="flex justify-between items-center pt-4 pb-8">
              {/* Logo */}
              <div id="modal-logo">
                <Image
                  src="/common/logo-v1.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-8 items-start flex-1">
              {NAVBAR_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileNavClick(item)}
                  className="text-xl font-medium text-white hover:text-[#FF6B00] transition-colors duration-300 font-baloo cursor-pointer text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* LinkedIn Logo at Bottom */}
            <div className="absolute bottom-4 flex justify-center">
              <div id="linkedin-icon-mobile" className="w-8 h-8">
                <Image
                  src="/navbar/linkedin.png"
                  alt="linkedin-icon"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
          
          {/* Contact Modal for Mobile */}
          <ContactModal 
            isOpen={isContactModalOpen} 
            onClose={() => setIsContactModalOpen(false)} 
          />
        </div>
      )}
    </div>
  );
};
