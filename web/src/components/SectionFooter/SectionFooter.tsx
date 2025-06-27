import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface ISectionFooter {
  className?: string;
}

export const SectionFooter: React.FC<ISectionFooter> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={clsx('w-full p-4', className)}>
      <div className="flex flex-col items-center justify-center space-y-8 py-8">
        {/* First Row - Navigation Links */}
        <div className="flex flex-row space-x-8">
          <Link 
            href="/about" 
            className="text-zinc-400 text-base font-normal font-baloo leading-tight hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-zinc-400 text-base font-normal font-baloo leading-tight hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
          <Link 
            href="/careers" 
            className="text-zinc-400 text-base font-normal font-baloo leading-tight hover:text-white transition-colors duration-300"
          >
            Careers
          </Link>
        </div>

        {/* Second Row - LinkedIn Logo */}
        <div className="flex justify-center">
          <Link href="#" className="hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/navbar/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </Link>
        </div>

        {/* Third Row - Copyright */}
        <div className="flex justify-center">
          <p className="text-zinc-400 text-sm font-normal font-baloo leading-tight text-center">
            Chantolgy Studios © {currentYear}
          </p>
        </div>
      </div>
    </div>
  );
};

