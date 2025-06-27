import React from 'react';
import clsx from 'clsx';

interface IHamburgerButton {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const HamburgerButton: React.FC<IHamburgerButton> = ({ 
  isOpen, 
  onClick, 
  className 
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex flex-col justify-center items-center gap-1.5 p-2",
        className
      )}
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
          "block w-6 h-0.5 bg-white transition-transform duration-300",
          isOpen && "-translate-y-2 -rotate-45"
        )}
      />
    </button>
  );
};

