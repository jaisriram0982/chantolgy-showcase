/* eslint-disable @typescript-eslint/no-explicit-any */
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["var(--font-baloo-2)"],
        elmessiri: ["var(--font-elmessiri)"],
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
        orange: {
          500: "#EE693A",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      const components = {
        // Style 1 white text - composed of Tailwind classes
        ".text-style1-white": {
          "@apply text-white text-center font-baloo text-base font-normal leading-6 md:text-base md:font-normal":
            {},
        },
        // Main heading style - composed of Tailwind classes
        ".text-heading-main": {
          "@apply text-white text-center font-baloo text-4xl font-bold leading-tight md:text-6xl md:font-bold":
            {},
        },
        // Tagline style - composed of Tailwind classes
        ".text-tagline": {
          "@apply text-white text-center font-baloo text-2xl font-semibold leading-relaxed md:text-3xl md:font-semibold":
            {},
        },
        // Body text style - composed of Tailwind classes
        ".text-body": {
          "@apply text-base font-normal leading-normal": {},
        },
        // Small text style - composed of Tailwind classes
        ".text-small": {
          "@apply text-sm font-normal leading-tight": {},
        },
        // Style 2 white text - for section subheadings like "What is Chantolgy?"
        ".text-style2-white": {
          "@apply text-white text-center font-baloo text-xl font-medium leading-7":
            {},
        },
        // Style 3 orange text - for main headings like "Chantolgy Studios is Reimagining Casual Games"
        ".text-style3-orange": {
          "@apply text-orange-500 text-center font-elmessiri text-4xl font-normal leading-7":
            {},
        },
      };
      addComponents(components);
    },
  ],
};

export default config;
